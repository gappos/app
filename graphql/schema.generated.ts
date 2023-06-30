export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: string; output: string };
};

/** Child */
export type Child = {
  __typename?: "Child";
  relation: Scalars["String"]["output"];
};

export type ChildInput = {
  childId: Scalars["String"]["input"];
  parentId?: InputMaybe<Scalars["String"]["input"]>;
  relation?: InputMaybe<Scalars["String"]["input"]>;
};

export type ChildRelationsInput = {
  childId: Scalars["String"]["input"];
  parent1Id?: InputMaybe<Scalars["String"]["input"]>;
  parent1relation?: InputMaybe<Scalars["String"]["input"]>;
  parent2Id?: InputMaybe<Scalars["String"]["input"]>;
  parent2relation?: InputMaybe<Scalars["String"]["input"]>;
};

/** City object */
export type City = {
  __typename?: "City";
  city: Scalars["String"]["output"];
  locationId: Scalars["String"]["output"];
};

/** Country object */
export type Country = {
  __typename?: "Country";
  cities: Array<City>;
  country: Scalars["String"]["output"];
  places: Array<Place>;
};

/** Location entity */
export type Location = {
  __typename?: "Location";
  address: Scalars["String"]["output"];
  city?: Maybe<Scalars["String"]["output"]>;
  country: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  personsBorn?: Maybe<Array<Person>>;
  personsLiving?: Maybe<Array<Person>>;
  place?: Maybe<Scalars["String"]["output"]>;
};

export type LocationInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  place?: InputMaybe<Scalars["String"]["input"]>;
};

export type LocationSearch = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  place?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addChild: Child;
  addChildRelations: Scalars["Boolean"]["output"];
  addLocation: Location;
  addPerson: Person;
  addSpouse: Spouse;
  birth: Scalars["Boolean"]["output"];
  death: Scalars["Boolean"]["output"];
  divorce: Scalars["Boolean"]["output"];
  marriage: Scalars["Boolean"]["output"];
  raw: Scalars["String"]["output"];
  relocate: Scalars["Boolean"]["output"];
  updateLocation: Location;
  updatePerson: Person;
  updateSpouse: Spouse;
};

export type MutationAddChildArgs = {
  childAttributes: ChildInput;
};

export type MutationAddChildRelationsArgs = {
  childRelationsAttributes: ChildRelationsInput;
};

export type MutationAddLocationArgs = {
  locationAttributes: LocationInput;
};

export type MutationAddPersonArgs = {
  personAttributes: PersonInput;
};

export type MutationAddSpouseArgs = {
  spouseAttributes: SpouseInput;
};

export type MutationBirthArgs = {
  parents: PersonBirthInput;
};

export type MutationDeathArgs = {
  personId: Scalars["String"]["input"];
};

export type MutationDivorceArgs = {
  partner: Scalars["String"]["input"];
};

export type MutationMarriageArgs = {
  couple: PersonMarriageInput;
};

export type MutationRawArgs = {
  sql: Scalars["String"]["input"];
};

export type MutationRelocateArgs = {
  locationId: Scalars["String"]["input"];
  personId: Scalars["String"]["input"];
};

export type MutationUpdateLocationArgs = {
  id: Scalars["String"]["input"];
  locationAttributes: LocationInput;
};

export type MutationUpdatePersonArgs = {
  id: Scalars["String"]["input"];
  personAttributes: PersonInput;
};

export type MutationUpdateSpouseArgs = {
  spouseAttributes: SpouseInput;
};

export type PeopleSearchInput = {
  children?: InputMaybe<PersonSearch>;
  parents?: InputMaybe<PersonSearch>;
  person?: InputMaybe<PersonSearch>;
  place?: InputMaybe<LocationSearch>;
  placeOfBirth?: InputMaybe<LocationSearch>;
};

/** Person */
export type Person = {
  __typename?: "Person";
  children?: Maybe<Array<Person>>;
  dob: Scalars["DateTime"]["output"];
  dod?: Maybe<Scalars["DateTime"]["output"]>;
  firstName: Scalars["String"]["output"];
  gender: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  middleName?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  parents?: Maybe<Array<Person>>;
  place?: Maybe<Location>;
  placeId: Scalars["String"]["output"];
  placeOfBirth?: Maybe<Location>;
  pobId: Scalars["String"]["output"];
  spouses?: Maybe<Array<Person>>;
};

export type PersonBirthInput = {
  childAttributes: PersonInput;
  fatherId?: InputMaybe<Scalars["String"]["input"]>;
  motherId?: InputMaybe<Scalars["String"]["input"]>;
  parent2Id?: InputMaybe<Scalars["String"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonInput = {
  dob?: InputMaybe<Scalars["String"]["input"]>;
  dod?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  placeId?: InputMaybe<Scalars["String"]["input"]>;
  pobId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonMarriageInput = {
  partner1Id: Scalars["String"]["input"];
  partner2Id: Scalars["String"]["input"];
};

export type PersonSearch = {
  dob?: InputMaybe<Scalars["String"]["input"]>;
  dod?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  placeId?: InputMaybe<Scalars["String"]["input"]>;
  pobId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Place object */
export type Place = {
  __typename?: "Place";
  locationId: Scalars["String"]["output"];
  place: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  children: Array<Person>;
  countries: Array<Country>;
  locations: Array<Location>;
  parents: Array<Person>;
  people: Array<Person>;
  persons: Array<Person>;
  personsBorn: Array<Person>;
  personsLiving: Array<Person>;
  place: Location;
  placeOfBirth: Location;
  prDateNumber: Scalars["String"]["output"];
  spouses: Array<Person>;
};

export type QueryPeopleArgs = {
  searchOptions: PeopleSearchInput;
};

/** Spouse */
export type Spouse = {
  __typename?: "Spouse";
  divorce?: Maybe<Scalars["DateTime"]["output"]>;
  wedding?: Maybe<Scalars["DateTime"]["output"]>;
};

export type SpouseInput = {
  divorce?: InputMaybe<Scalars["String"]["input"]>;
  partner1Id: Scalars["String"]["input"];
  partner2Id: Scalars["String"]["input"];
  wedding?: InputMaybe<Scalars["String"]["input"]>;
};
