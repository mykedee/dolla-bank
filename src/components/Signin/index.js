import React from "react";

import {
  Container,
  FormButton,
  FormContent,
  FormLabel,
  Form,
  FormH1,
  FormInput,
  FormWrap,
  Icon,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dollaBank</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
