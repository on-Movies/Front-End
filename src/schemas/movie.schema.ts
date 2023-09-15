import z from 'zod'

export const schemaMovie = z.object({

        adult: z.boolean(),
        backdrop_path: z.string(),
        id: z.number(),
        title: z.string(),
        original_language: z.string(),
        original_title: z.string(),
        overview: z.string(),
        poster_path: z.string(),
        media_type: z.string(),
        genre_ids: z.array(z.number()),
        popularity: z.number(),
        release_date: z.string(),
        video: z.boolean(),
        vote_average: z.number(),
        vote_count: z.number()

    })
