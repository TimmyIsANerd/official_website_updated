import express from 'express';
import JWT from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
const sgMail = require('@sendgrid/mail');
import User from '../models/user';
import Count from '../models/counts';
import asyncHandler from 'express-async-handler';
const router = express.Router();

type Jwt = {
  email?: string;
  code?: string;
};

router.post(
  '/signup',
  body('email').isEmail().withMessage('Please enter a valid email address'),
  async (req: express.Request, res: express.Response) => {
    // get error messages
    const validationErrors = validationResult(req);

    // check if validationErrors is Empty
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.status(400).json({ errors, data: null });
    }
    // get form data
    const { full_name, email } = req.body;
    if (full_name.length < 5) {
      return res.json({
        errors: [{ msg: 'Name should contain a minimum of 5 characters.' }],
        data: null,
      });
    }
    //get record
    const user = await User.findOne({ email }); // returns null if there is no email in DB
    //  check if email adready exist
    if (user) {
      return res.json({
        errors: [{ msg: 'Email address already exist.' }],
        data: null,
      });
    }
    // generate random test code
    const test_code = Math.random().toString(36).substring(2, 7).toUpperCase();
    //  create new record
    const newUser = await User.create({ email, full_name, test_code });
    // email test code to user's email address
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // email template
    const templateId = 'd-3e95849f027c4dce8bf19c3f7f1f1cea';
    let dynamic_template_data = {
      name: full_name,
      testCode: test_code,
    };
    const msg = {
      to: email, // Change to your recipient
      from: 'okeydeede@gmail.com', // Change to your verified sender
      subject: 'Testing Email Sending',
      templateId,
      dynamic_template_data,
    };
    // send email
    sgMail
      .send(msg)
      .then(() => {
        res.status(201).json({
          errors: [],
          data: {
            msg: 'Please check your inbox/spam box for the test code.',
            user: {
              id: newUser._id,
              fullName: newUser.full_name,
              email: newUser.email,
              testCode: newUser.test_code,
            },
          },
        });
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
);

router.post(
  '/verify',
  asyncHandler(
    async (req: express.Request, res: express.Response): Promise<any> => {
      try {
        const { test_code } = req.body;

        // check if test code is provided
        if (!test_code) {
          return res.json({
            errors: [{ msg: 'Please enter a test code.' }],
            data: null,
          });
        }

        // check if code exist in DB
        const user = await User.findOne({ test_code });
        if (!user) {
          return res.json({
            errors: [{ msg: 'Invalid test code.' }],
            data: null,
          });
        }
        // return token
        const token = await JWT.sign(
          { email: user.email, code: user.test_code },
          process.env.JWT_SECRET as string,
          {
            expiresIn: '3d',
          }
        );
        res.status(200).json({
          errors: [],
          data: {
            token,
            user: {
              id: user._id,
              full_name: user.full_name,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  )
);

router.post(
  '/count',
  asyncHandler(
    async (req: express.Request, res: express.Response): Promise<any> => {
      const { token } = req.body;
      let count = 1;
      try {
        const decoded: Jwt = JWT.verify(
          token,
          process.env.JWT_SECRET as string
        ) as Jwt;
        const response = await User.findOne({ test_code: decoded.code });

        if (response) {
          //  get user test count.
          const checkCount = await Count.findOne({ user: response.id });
          if (checkCount) {
            const update = await Count.findOneAndUpdate(response.id, {
              count: count + 1,
            });
            if (update) {
              res.status(201).json({ msg: 'updated successfully' });
            } else {
              res.status(200).json({ error: 'error occured' });
            }
          } else {
            //  user is testing app for first time, record his/her test count
            const newUserTest = await Count.create({
              user: response.id,
              email: response.email,
              count: count,
            });
            if (newUserTest) {
              res.status(201).json({ msg: 'created successfully' });
            } else {
              res.status(401).json({ error: 'error occured' });
            }
          }
        } else {
          res.status(401).json({ error: 'Unauthorized access' });
        }
      } catch (error) {
        res.status(401);
        throw new Error(error as string);
      }
    }
  )
);
export default router;
