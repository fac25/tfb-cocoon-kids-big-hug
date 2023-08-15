// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StudentClass, Students, Class } = initSchema(schema);

export {
  StudentClass,
  Students,
  Class
};