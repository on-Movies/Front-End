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

export const schemaMovieIndividual = z.object({
    adult: z.boolean(),
  backdrop_path: z.string(),
  belongs_to_collection: z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string(),
    backdrop_path: z.string()
  }),
  budget: z.number(),
  genres: z.array(z.object({ id: z.number(), name: z.string() })),
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(
    z.object({
      english_name: z.string(),
      iso_639_1: z.string(),
      name: z.string()
    })
  ),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  videos: z.object({
    results: z.array(
      z.object({
        iso_639_1: z.string(),
        iso_3166_1: z.string(),
        name: z.string(),
        key: z.string(),
        site: z.string(),
        size: z.number(),
        type: z.string(),
        official: z.boolean(),
        published_at: z.string(),
        id: z.string()
      })
    )
  }),
  images: z.object({
    backdrops: z.array(z.unknown()),
    logos: z.array(z.unknown()),
    posters: z.array(z.unknown())
  }),
  similar: z.object({
    page: z.number(),
    results: z.array(
      z.union([
        z.object({
          adult: z.boolean(),
          backdrop_path: z.string(),
          genre_ids: z.array(z.number()),
          id: z.number(),
          original_language: z.string(),
          original_title: z.string(),
          overview: z.string(),
          popularity: z.number(),
          poster_path: z.string(),
          release_date: z.string(),
          title: z.string(),
          video: z.boolean(),
          vote_average: z.number(),
          vote_count: z.number()
        }),
        z.object({
          adult: z.boolean(),
          backdrop_path: z.null(),
          genre_ids: z.array(z.number()),
          id: z.number(),
          original_language: z.string(),
          original_title: z.string(),
          overview: z.string(),
          popularity: z.number(),
          poster_path: z.string(),
          release_date: z.string(),
          title: z.string(),
          video: z.boolean(),
          vote_average: z.number(),
          vote_count: z.number()
        })
      ])
    ),
    total_pages: z.number(),
    total_results: z.number()
  })
})

export const schemaWatchMovie = z.object({
  link: z.string(),
  buy: z.array(
    z.object({
      logo_path: z.string(),
      provider_id: z.number(),
      provider_name: z.string(),
      display_priority: z.number()
    })
  ),
  flatrate: z.array(
    z.object({
      logo_path: z.string(),
      provider_id: z.number(),
      provider_name: z.string(),
      display_priority: z.number()
    })
  ),
  rent: z.array(
    z.object({
      logo_path: z.string(),
      provider_id: z.number(),
      provider_name: z.string(),
      display_priority: z.number()
    })
  )
})


export const schemaAuthorsMovie = z.object({
  id: z.number(),
  cast: z.array(
      z.object({
        adult: z.boolean(),
        gender: z.number(),
        id: z.number(),
        known_for_department: z.string(),
        name: z.string(),
        original_name: z.string(),
        popularity: z.number(),
        profile_path: z.string(),
        cast_id: z.number(),
        character: z.string(),
        credit_id: z.string(),
        order: z.number()
      })
  ),
})

export const schemaInfoMovie = z.object({
      hasVideo: z.string(),
      img:z.string(),
      imgMobille:z.string(),
      nameMovie:z.string(),
      yearRealese:z.string(),
      descriptin:z.string(),
      genres:z.array(z.object({
        id:z.number(),
        name:z.string()
      })),
      popularity:z.number(),
      runtime: z.number(),
      vote_average: z.number(),
      vote_count:z.number(),
})


