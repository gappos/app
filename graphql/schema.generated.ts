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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

/** Child */
export type Child = {
  __typename?: "Child";
  relation: Scalars["String"];
};

export type ChildInput = {
  childId: Scalars["String"];
  parentId?: InputMaybe<Scalars["String"]>;
  relation?: InputMaybe<Scalars["String"]>;
};

export type ChildRelationsInput = {
  childId: Scalars["String"];
  parent1Id?: InputMaybe<Scalars["String"]>;
  parent1relation?: InputMaybe<Scalars["String"]>;
  parent2Id?: InputMaybe<Scalars["String"]>;
  parent2relation?: InputMaybe<Scalars["String"]>;
};

/** City object */
export type City = {
  __typename?: "City";
  city: Scalars["String"];
  locationId: Scalars["String"];
};

/** Country object */
export type Country = {
  __typename?: "Country";
  cities: Array<City>;
  country: Scalars["String"];
  places: Array<Place>;
};

/** Location entity */
export type Location = {
  __typename?: "Location";
  address: Scalars["String"];
  city?: Maybe<Scalars["String"]>;
  country: Scalars["String"];
  id: Scalars["String"];
  personsBorn?: Maybe<Array<Person>>;
  personsLiving?: Maybe<Array<Person>>;
  place?: Maybe<Scalars["String"]>;
};

export type LocationInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  place?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addChild: Child;
  addChildRelations: Scalars["Boolean"];
  addLocation: Location;
  addPerson: Person;
  addSpouse: Spouse;
  birth: Scalars["Boolean"];
  death: Scalars["Boolean"];
  divorce: Scalars["Boolean"];
  marriage: Scalars["Boolean"];
  raw: Scalars["String"];
  relocate: Scalars["Boolean"];
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
  personId: Scalars["String"];
};

export type MutationDivorceArgs = {
  partner: Scalars["String"];
};

export type MutationMarriageArgs = {
  couple: PersonMarriageInput;
};

export type MutationRawArgs = {
  sql: Scalars["String"];
};

export type MutationRelocateArgs = {
  locationId: Scalars["String"];
  personId: Scalars["String"];
};

export type MutationUpdateLocationArgs = {
  id: Scalars["String"];
  locationAttributes: LocationInput;
};

export type MutationUpdatePersonArgs = {
  id: Scalars["String"];
  personAttributes: PersonInput;
};

export type MutationUpdateSpouseArgs = {
  spouseAttributes: SpouseInput;
};

/** Person */
export type Person = {
  __typename?: "Person";
  children?: Maybe<Array<Person>>;
  dob: Scalars["DateTime"];
  dod?: Maybe<Scalars["DateTime"]>;
  firstName: Scalars["String"];
  gender: Scalars["String"];
  id: Scalars["String"];
  lastName: Scalars["String"];
  middleName?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  parents?: Maybe<Array<Person>>;
  place?: Maybe<Location>;
  placeId: Scalars["String"];
  placeOfBirth?: Maybe<Location>;
  pobId: Scalars["String"];
  spouses?: Maybe<Array<Person>>;
};

export type PersonBirthInput = {
  childAttributes: PersonInput;
  fatherId?: InputMaybe<Scalars["String"]>;
  motherId?: InputMaybe<Scalars["String"]>;
  parent2Id?: InputMaybe<Scalars["String"]>;
  parentId?: InputMaybe<Scalars["String"]>;
};

export type PersonInput = {
  dob?: InputMaybe<Scalars["String"]>;
  dod?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  placeId?: InputMaybe<Scalars["String"]>;
  pobId?: InputMaybe<Scalars["String"]>;
};

export type PersonMarriageInput = {
  partner1Id: Scalars["String"];
  partner2Id: Scalars["String"];
};

/** Place object */
export type Place = {
  __typename?: "Place";
  locationId: Scalars["String"];
  place: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  children: Array<Person>;
  countries: Array<Country>;
  locations: Array<Location>;
  parents: Array<Person>;
  persons: Array<Person>;
  personsBorn: Array<Person>;
  personsLiving: Array<Person>;
  place: Location;
  placeOfBirth: Location;
  prDateNumber: Scalars["String"];
  spouses: Array<Person>;
};

/** Spouse */
export type Spouse = {
  __typename?: "Spouse";
  divorce?: Maybe<Scalars["DateTime"]>;
  wedding?: Maybe<Scalars["DateTime"]>;
};

export type SpouseInput = {
  divorce?: InputMaybe<Scalars["String"]>;
  partner1Id: Scalars["String"];
  partner2Id: Scalars["String"];
  wedding?: InputMaybe<Scalars["String"]>;
};
