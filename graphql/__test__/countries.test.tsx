import { renderHook, act } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
import { CountriesDocument, useCountriesQuery } from '../countries.generated';

describe('useCountriesQuery', () => {
  it('should return the countries, cities, and places', async () => {
    const mockResponse = {
      data: {
        countries: [
          {
            country: 'Country 1',
            cities: [
              {
                city: 'City 1',
                locationId: '1',
              },
            ],
            places: [
              {
                place: 'Place 1',
                locationId: '2',
              },
            ],
          },
          {
            country: 'Country 2',
            cities: [
              {
                city: 'City 2',
                locationId: '3',
              },
            ],
            places: [],
          },
          {
            country: 'Country 3',
            cities: [],
            places: [
              {
                place: 'Place 2',
                locationId: '4',
              },
            ],
          },
        ],
      },
    };

    const mocks = [
      {
        request: {
          query: CountriesDocument,
        },
        result: mockResponse,
      },
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(
      () => useCountriesQuery(),
      {
        wrapper,
      },
    );

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.loading).toBe(false);

    expect(result.current.data).toEqual(mockResponse.data);
  });
});
