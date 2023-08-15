/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudentClass = /* GraphQL */ `
  subscription OnCreateStudentClass(
    $filter: ModelSubscriptionStudentClassFilterInput
  ) {
    onCreateStudentClass(filter: $filter) {
      id
      studentsID
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStudentClass = /* GraphQL */ `
  subscription OnUpdateStudentClass(
    $filter: ModelSubscriptionStudentClassFilterInput
  ) {
    onUpdateStudentClass(filter: $filter) {
      id
      studentsID
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStudentClass = /* GraphQL */ `
  subscription OnDeleteStudentClass(
    $filter: ModelSubscriptionStudentClassFilterInput
  ) {
    onDeleteStudentClass(filter: $filter) {
      id
      studentsID
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateStudents = /* GraphQL */ `
  subscription OnCreateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onCreateStudents(filter: $filter) {
      id
      name
      StudentClasses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStudents = /* GraphQL */ `
  subscription OnUpdateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onUpdateStudents(filter: $filter) {
      id
      name
      StudentClasses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStudents = /* GraphQL */ `
  subscription OnDeleteStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onDeleteStudents(filter: $filter) {
      id
      name
      StudentClasses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
      id
      ClassName
      StudentClasses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
      id
      ClassName
      StudentClasses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
      id
      ClassName
      StudentClasses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
