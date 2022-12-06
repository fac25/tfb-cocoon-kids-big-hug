import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlayGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayGame, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emotions?: string | null;
  readonly name?: string | null;
  readonly how_it_helps?: string | null;
  readonly src?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayGame, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emotions?: string | null;
  readonly name?: string | null;
  readonly how_it_helps?: string | null;
  readonly src?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayGame = LazyLoading extends LazyLoadingDisabled ? EagerPlayGame : LazyPlayGame

export declare const PlayGame: (new (init: ModelInit<PlayGame>) => PlayGame) & {
  copyOf(source: PlayGame, mutator: (draft: MutableModel<PlayGame>) => MutableModel<PlayGame> | void): PlayGame;
}

type EagerDoMakes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DoMakes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emotions?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly src?: string | null;
  readonly how_it_helps?: string | null;
  readonly materials?: string | null;
  readonly instructions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDoMakes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DoMakes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emotions?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly src?: string | null;
  readonly how_it_helps?: string | null;
  readonly materials?: string | null;
  readonly instructions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DoMakes = LazyLoading extends LazyLoadingDisabled ? EagerDoMakes : LazyDoMakes

export declare const DoMakes: (new (init: ModelInit<DoMakes>) => DoMakes) & {
  copyOf(source: DoMakes, mutator: (draft: MutableModel<DoMakes>) => MutableModel<DoMakes> | void): DoMakes;
}

type EagerEmotions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emotions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly under13_src?: string | null;
  readonly under13_description?: string | null;
  readonly over13_src?: string | null;
  readonly over13_description?: string | null;
  readonly restricted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmotions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emotions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly under13_src?: string | null;
  readonly under13_description?: string | null;
  readonly over13_src?: string | null;
  readonly over13_description?: string | null;
  readonly restricted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Emotions = LazyLoading extends LazyLoadingDisabled ? EagerEmotions : LazyEmotions

export declare const Emotions: (new (init: ModelInit<Emotions>) => Emotions) & {
  copyOf(source: Emotions, mutator: (draft: MutableModel<Emotions>) => MutableModel<Emotions> | void): Emotions;
}