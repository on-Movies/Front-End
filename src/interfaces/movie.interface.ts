import {schemaMovie,schemaMovieIndividual,schemaWatchMovie} from '../schemas/movie.schema';
import {z} from 'zod';

export type ISchemaMovie = z.infer<typeof schemaMovie>

export type ISchemaMovieIndividual = z.infer<typeof schemaMovieIndividual>;

export type ISchemaWatchMovie = z.infer<typeof schemaWatchMovie>;