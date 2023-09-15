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
}

export const MovieContext = createContext({} as TMovieContext)

export const MovieProvider = ({children}:TMovieProviderProps)=>{
    const [movieTrends, setMovieTrends] = useState<Array<ISchemaMovie>>([])


    const getMovieTrends = async()=>{

        const result = await api.get("/trending/movie/day?language=pt-br");
        const movies:ISchemaMovie[] = (result.data.results).slice(0,3);
                
        movies.map((movie)=>{
            movie.poster_path = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        })
        setMovieTrends(movies);
    }

    

    return(
        <MovieContext.Provider
        value={{
            getMovieTrends,
            movieTrends,
            setMovieTrends
        }}>

            {children}
        </MovieContext.Provider>
    )
}
