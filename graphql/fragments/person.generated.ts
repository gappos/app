import type * as Types from "../schema.generated";

import { gql } from "@apollo/client";
export type PersonDetailsFragment = {
  __typename?: "Person";
  dob: string;
  dod?: string | null;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  middleName?: string | null;
  name: string;
  placeId: string;
  pobId: string;
};

export const PersonDetailsFragmentDoc = gql`
  fragment PersonDetails on Person {
    dob
    dod
    firstName
    gender
    id
    lastName
    middleName
    name
    placeId
    pobId
  }
`;
