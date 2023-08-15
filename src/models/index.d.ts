import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerStudentClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentClass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentsID: string;
  readonly classID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudentClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentClass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentsID: string;
  readonly classID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StudentClass = LazyLoading extends LazyLoadingDisabled ? EagerStudentClass : LazyStudentClass

export declare const StudentClass: (new (init: ModelInit<StudentClass>) => StudentClass) & {
  copyOf(source: StudentClass, mutator: (draft: MutableModel<StudentClass>) => MutableModel<StudentClass> | void): StudentClass;
}

type EagerStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly StudentClasses?: (StudentClass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly StudentClasses: AsyncCollection<StudentClass>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Students = LazyLoading extends LazyLoadingDisabled ? EagerStudents : LazyStudents

export declare const Students: (new (init: ModelInit<Students>) => Students) & {
  copyOf(source: Students, mutator: (draft: MutableModel<Students>) => MutableModel<Students> | void): Students;
}

type EagerClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassName?: string | null;
  readonly StudentClasses?: (StudentClass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassName?: string | null;
  readonly StudentClasses: AsyncCollection<StudentClass>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}