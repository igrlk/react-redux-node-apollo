/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_user_notes {
  __typename: "Note";
  id: number;
  title: string;
}

export interface LoginUser_loginUser_user {
  __typename: "User";
  id: number;
  name: string;
  notes: LoginUser_loginUser_user_notes[];
}

export interface LoginUser_loginUser {
  __typename: "AuthResult";
  user: LoginUser_loginUser_user;
  token: string;
}

export interface LoginUser {
  loginUser: LoginUser_loginUser;
}

export interface LoginUserVariables {
  name: string;
  password: string;
}
