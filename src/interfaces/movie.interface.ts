import {schemaMovie} from '../schemas/movie.schema';
import {z} from 'zod';

export type ISchemaMovie = z.infer<typeof schemaMovie>