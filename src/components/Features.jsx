import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
padding: 70px 72px;



`
const Feat = styled.div`
margin-bottom: 20px;
color:  #121E49;

font-family: Poppins;
font-size: 31px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;

`
const Con = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Div1 = styled.div`
width: 600px;
padding: 20px;
border: 2px solid #000000;
border-radius: 20px;

`
const Tet = styled.div`
margin-top: 20px;
color:  #4500A0;

font-family: 'Kinn', poppins;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 60px;
letter-spacing: 0em;
text-align: left;

`
const Pip = styled.div`
margin-top: 30px;
  
`
const Div2 = styled.div``
const Sub1 = styled.div``
const Sub2 = styled.div``
const Sub3 = styled.div``


function Features() {
  return (
    <Container>
        <Feat>Features</Feat>
        <Con>
            <Div1>
            <Tet>
            We are a community <br/>
based project
            </Tet>
            <Pip>
            Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy 
            </Pip>
            </Div1>
            <Div2>
                <Sub1></Sub1>
                <Sub2></Sub2>
                <Sub3></Sub3>
            </Div2>
        </Con>

    </Container>
  )
}

export default Features