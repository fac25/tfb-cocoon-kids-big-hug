/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudentClass = /* GraphQL */ `
  mutation CreateStudentClass(
    $input: CreateStudentClassInput!
    $condition: ModelStudentClassConditionInput
  ) {
    createStudentClass(input: $input, condition: $condition) {
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
export const updateStudentClass = /* GraphQL */ `
  mutation UpdateStudentClass(
    $input: UpdateStudentClassInput!
    $condition: ModelStudentClassConditionInput
  ) {
    updateStudentClass(input: $input, condition: $condition) {
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
export const deleteStudentClass = /* GraphQL */ `
  mutation DeleteStudentClass(
    $input: DeleteStudentClassInput!
    $condition: ModelStudentClassConditionInput
  ) {
    deleteStudentClass(input: $input, condition: $condition) {
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
export const createStudents = /* GraphQL */ `
  mutation CreateStudents(
    $input: CreateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    createStudents(input: $input, condition: $condition) {
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
export const updateStudents = /* GraphQL */ `
  mutation UpdateStudents(
    $input: UpdateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    updateStudents(input: $input, condition: $condition) {
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
export const deleteStudents = /* GraphQL */ `
  mutation DeleteStudents(
    $input: DeleteStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    deleteStudents(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
