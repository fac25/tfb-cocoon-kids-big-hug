// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlayGame, DoMakes, Emotions } = initSchema(schema);

export {
  PlayGame,
  DoMakes,
  Emotions
};