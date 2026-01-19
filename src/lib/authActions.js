// src/lib/authActions.js
import { signOut } from "aws-amplify/auth";

export const login = async () => {
  // for custom UI, login happens inside Auth.jsx with signIn()
  // keep this so buttons can navigate to /auth
  window.location.href = "/auth";
};

export const logout = async () => {
  await signOut();
};