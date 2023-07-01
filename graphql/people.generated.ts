import type * as Types from "./schema.generated";

import { gql } from "@apollo/client";
import { PersonDetailsFragmentDoc } from "./fragments/person.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PeopleQueryVariables = Types.Exact<{
  searchOptions: Types.PeopleSearchInput;
}>;

export type PeopleQuery = {
  __typename?: "Query";
  people: Array<{
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
  }>;
};

export const PeopleDocument = gql`
  query people($searchOptions: PeopleSearchInput!) {
    people(searchOptions: $searchOptions) {
      ...PersonDetails
    }
  }
  ${PersonDetailsFragmentDoc}
`;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *      searchOptions: // value for 'searchOptions'
 *   },
 * });
 */
export function usePeopleQuery(
  baseOptions: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(
    PeopleDocument,
    options
  );
}
export function usePeopleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(
    PeopleDocument,
    options
  );
}
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<
  PeopleQuery,
  PeopleQueryVariables
>;
