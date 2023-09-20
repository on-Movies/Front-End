import { ReactNode, createContext,useState} from "react";
import {api} from '../services/api';
import { ISchemaMovie} from '../interfaces/movie.interface';

interface TMovieProviderProps {
    children: ReactNode
  }

interface TMovieContext{
    getMovieTrends: () => Promise<void>
    movieTrends: ISchemaMovie[];
    setMovieTrends: React.Dispatch<React.SetStateAction<ISchemaMovie[]>>

    moviePopulars: ISchemaMovie[]
    getMoviePopulars: (numberPagination:number) => Promise<void>

    getMovieHighlightWeek: () => Promise<ISchemaMovie | void>;
    movieHighlight:ISchemaMovie | {};
}

export const MovieContext = createContext({} as TMovieContext)

export const MovieProvider = ({children}:TMovieProviderProps)=>{
    const [movieTrends, setMovieTrends] = useState<Array<ISchemaMovie>>([])
    const [moviePopulars, setMoviePopulars] = useState<Array<ISchemaMovie>>([])
    const [movieHighlight, setMovieHighlight] = useState<ISchemaMovie | {}>({})


    const getMovieTrends = async()=>{

        const result = await api.get("/trending/movie/day?language=pt-br");
        const movies:ISchemaMovie[] = (result.data.results).slice(0,7);
                
        movies.map((movie)=>{
            movie.poster_path = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        })
        setMovieTrends(movies);
    }

    const getMoviePopulars = async(numberPagination:number)=>{
        
        const result:ISchemaMovie[] = (await api.get(`movie/popular?language=pt-br&page=${numberPagination}`)).data.results;

        result.map((movie)=>{
            movie.poster_path  = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        })
        setMoviePopulars(result);
    }

    const getMovieHighlightWeek = async():Promise<void>=>{
        const result: ISchemaMovie[] = (await api.get('movie/top_rated?language=pt-br&page=1')).data.results;
        result[0].poster_path = 'https://image.tmdb.org/t/p/w500' + result[0].poster_path
        
        setMovieHighlight(result[0]);
    }
    

    return(
        <MovieContext.Provider
        value={{
            getMovieTrends,
            movieTrends,
            setMovieTrends,
            getMoviePopulars,
            moviePopulars,
            getMovieHighlightWeek,
            movieHighlight
        }}>

            {children}
        </MovieContext.Provider>
    )
}
