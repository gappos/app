import { renderHook, act } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import { PeopleDocument, usePeopleQuery } from '../people.generated';

describe('usePeopleQuery', () => {
  it('should return the people living at given location', async () => {
    const placeId = '12345';
    const mockResponse = {
      data: {
        people: [
          {
            __typename: 'Person',
            dob: '1778-12-12',
            dod: '1778-12-12',
            firstName: 'A',
            gender: 'male',
            id: 'y',
            lastName: 'W',
            middleName: 'Q',
            name: 'S',
            placeId,
            pobId: '12345',
          },
          {
            __typename: 'Person',
            dob: '1778-12-12',
            dod: '1778-12-12',
            firstName: 'B',
            gender: 'male',
            id: 'z',
            lastName: 'D',
            middleName: 'H',
            name: 'L',
            placeId,
            pobId: '12345',
          },
        ],
      },
    };

    const mocks = [
      {
        request: {
          query: PeopleDocument,
          variables: {
            searchOptions: {
              person: {
                placeId,
              },
            },
          },
        },
        result: mockResponse,
      },
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={mocks} addTypename={true}>
        {children}
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(
      () =>
        usePeopleQuery({
          variables: {
            searchOptions: { person: { placeId } },
          },
        }),
      {
        wrapper,
      },
    );

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await waitForNextUpdate({ timeout: 2000 });
    });

    expect(result.current.loading).toBe(false);

    expect(result.current.data).toEqual(mockResponse.data);
  });
});
