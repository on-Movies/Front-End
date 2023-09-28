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

    movieCategoriesDrama:JSX.Element[];
    setMovieCategoriesDrama:React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesAction:JSX.Element[];
    setMovieCategoriesAction:React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesAdventure: JSX.Element[];
    setMovieCategoriesAdventure:React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesAnimation: JSX.Element[];
    setMovieCategoriesAnimation: React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesComedy: JSX.Element[];
    setMovieCategoriesComedy: React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesCrime: JSX.Element[];
    setMovieCategoriesCrime: React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesHorror: JSX.Element[];
    setMovieCategoriesHorror: React.Dispatch<React.SetStateAction<JSX.Element[]>>;

    movieCategoriesScienceFiction: JSX.Element[];
    setMovieCategoriesScienceFiction: React.Dispatch<React.SetStateAction<JSX.Element[]>>

    getMovieByCategories: (genre: number, setMovieCategories: React.Dispatch<React.SetStateAction<JSX.Element[]>>,numberPagination:()=>number) => Promise<void>

    movieFilter: (categories: string[], populariedade: number | boolean, minYear: string | boolean, maxYear: string | boolean,pagination:number) => Promise<void>

    filter: boolean;
    setFilter: React.Dispatch<React.SetStateAction<boolean>>

    moviesFilters: ISchemaMovie[]
    setMoviesFilters: React.Dispatch<React.SetStateAction<ISchemaMovie[]>>

    getMovieSearched: (valueSearched: string) => Promise<void>;

    moviesSearched: ISchemaMovie[];
    setMoviesSearched: React.Dispatch<React.SetStateAction<ISchemaMovie[]>>
}

export const valueFilter = {

    categories:[''],
    populariedade:0 || false,
    minYear: '2018' && false,
    maxYear: '' || false,    
}


export const MovieContext = createContext({} as TMovieContext)

export const MovieProvider = ({children}:TMovieProviderProps)=>{
    const [movieTrends, setMovieTrends] = useState<Array<ISchemaMovie>>([])
    const [moviePopulars, setMoviePopulars] = useState<Array<ISchemaMovie>>([])
    const [movieHighlight, setMovieHighlight] = useState<ISchemaMovie | {}>({})
    const [movieCategoriesDrama, setMovieCategoriesDrama] = useState<JSX.Element[]>([])
    const [movieCategoriesAction, setMovieCategoriesAction] = useState<JSX.Element[]>([])
    const [movieCategoriesAdventure, setMovieCategoriesAdventure] = useState<JSX.Element[]>([])

    const [movieCategoriesAnimation, setMovieCategoriesAnimation] = useState<JSX.Element[]>([])
    const [movieCategoriesComedy, setMovieCategoriesComedy] = useState<JSX.Element[]>([])
    const [movieCategoriesCrime, setMovieCategoriesCrime] = useState<JSX.Element[]>([])

    const [movieCategoriesHorror, setMovieCategoriesHorror] = useState<JSX.Element[]>([])
    const [movieCategoriesScienceFiction, setMovieCategoriesScienceFiction] = useState<JSX.Element[]>([])

    const [filter, setFilter] = useState(false);
    const [moviesFilters, setMoviesFilters] = useState<Array<ISchemaMovie>>([])

    const [moviesSearched, setMoviesSearched] = useState<Array<ISchemaMovie>>([])

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
        result[10].poster_path = 'https://image.tmdb.org/t/p/w500' + result[10].poster_path
        
        setMovieHighlight(result[10]);
    }


    const getMovieByCategories = async (genre:number, setMovieCategories:React.Dispatch<React.SetStateAction<JSX.Element[]>>,numberPagination:()=>number)=>{

        const result:ISchemaMovie[] = (await api.get(`discover/movie?with_genres=${genre}&language=pt-br&page=${numberPagination()}`)).data.results;

        const arrayImgs = result.map((movie)=>{
            return(
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}/>
            )
        
        })
        setMovieCategories(arrayImgs)
    }

    const movieFilter = 
    async (categories:string[],
         populariedade:number | boolean, 
         minYear: string | boolean, 
         maxYear:string | boolean,
         pagination:number)=>{

            let dateMin:string;
            let dateMax:string;

            {minYear ? dateMin = minYear as string : dateMin = ''}
            {maxYear ? dateMax = maxYear as string : dateMax = ''}
             
            const minYaer = dateMin.split('-')[0]
            const maxYaer = dateMax.split('-')[0]
            
            const resultFilter:ISchemaMovie[] = (await api.get(`discover/movie?with_genres=${categories}${populariedade ? `&sort_by=${populariedade}desc`: ''}${minYear ? `&primary_release_date.gte=${minYaer}` : ''}${maxYear ? `&primary_release_date.lte=${maxYaer}` : ''}&language=pt-br&page=${pagination}`)).data.results

            resultFilter.map((movie)=>{
                movie.poster_path  = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
            })
            
            setMoviesFilters(resultFilter);
            setMoviesSearched([]);
    }

    
    const getMovieSearched = async(valueSearched:string)=>{

        const resultSearched:ISchemaMovie[] = (await api.get(`https://api.themoviedb.org/3/search/movie?query=${valueSearched}&language=pt-br`)).data.results

        resultSearched.map((movie)=>{
            movie.poster_path  = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        })

        setMoviesSearched(resultSearched);
        setMoviesFilters([])

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
            movieHighlight,
           setMovieCategoriesAction,
            movieCategoriesDrama,
            setMovieCategoriesAdventure,
            movieCategoriesAdventure,
            getMovieByCategories,
            setMovieCategoriesDrama,
            movieCategoriesAction,
            setMovieCategoriesScienceFiction,
            movieCategoriesAnimation,
            movieCategoriesComedy,
            movieCategoriesCrime,
            movieCategoriesHorror,
            movieCategoriesScienceFiction,
            setMovieCategoriesAnimation,
            setMovieCategoriesComedy,
            setMovieCategoriesCrime,
            setMovieCategoriesHorror,
            movieFilter,
            filter,
            setFilter,
            moviesFilters,
            setMoviesFilters,
            getMovieSearched,
            moviesSearched,
            setMoviesSearched
        }}>

            {children}
        </MovieContext.Provider>
    )
}
