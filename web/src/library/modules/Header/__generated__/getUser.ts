/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user_notes {
  __typename: "Note";
  id: number;
  title: string;
}

export interface getUser_user {
  __typename: "User";
  notes: getUser_user_notes[];
}

export interface getUser {
  user: getUser_user;
}

export interface getUserVariables {
  id: number;
}
