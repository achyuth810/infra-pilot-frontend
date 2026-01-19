import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_tHLYrZ90P",
      userPoolClientId: "7m6q2ttta3t8d8rk42ujfmlled",
      
    },
  },
});