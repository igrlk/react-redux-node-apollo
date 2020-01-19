/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserName
// ====================================================

export interface GetUserName_user {
  __typename: "User";
  name: string;
}

export interface GetUserName {
  user: GetUserName_user;
}

export interface GetUserNameVariables {
  id: number;
}
