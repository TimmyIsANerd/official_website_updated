import express from 'express';
import { body, validationResult } from 'express-validator';
const sgMail = require('@sendgrid/mail');
import User from '../models/user';
const router = express.Router();

router.post(
  '/signup',
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('full_name')
    .isLength({ min: 5 })
    .withMessage('Your name should contain a minimum of 5 characters'),
  async (req: express.Request, res: express.Response) => {
    // get error messages
    const validationErrors = validationResult(req);

    // check if validationErrors is Empty
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }
    // get form data
    const { full_name, email } = req.body;
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
    const test_code = Math.random().toString(36).substring(2, 7);
    //  create new record
    const newUser = await User.create({ email, full_name, test_code });
    // email test code to user's email address
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // email template
    const msg = {
      to: email, // Change to your recipient
      from: 'okeydeede@gmail.com', // Change to your verified sender
      subject: 'Testing Email Sending',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<strong>Test Code : ${test_code}</strong> `,
    };
    // send email
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({
          status: 'successfull',
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

export default router;
