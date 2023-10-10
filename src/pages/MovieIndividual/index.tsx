import { useNavigate, useParams } from "react-router-dom";
import {useEffect} from 'react';
import {useContext} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {StyledContainerIframe,StyledContainerMovieSimilares} from './style';
import { ISchemaMovieIndividual } from "../../interfaces/movie.interface";
import Yutube from 'react-youtube';
import {ContainerInfoMovie} from '../../components/InfoMovieIndividual';
import {CastMovie} from '../../components/CastMovie';
import AliceCarousel, {} from 'react-alice-carousel';
import { MovieFilter } from "../../components/MovieFilter";
import { MovieSearch } from "../../components/MovieSearched";

export const MovieIndividual = ()=>{

    const {getMovieIndividual,movieIndividual,movieSimilares,moviesFilters,moviesSearched} = useContext(MovieContext);
    let movie = movieIndividual as ISchemaMovieIndividual;

    const navigate = useNavigate();
    const itemsMovieSimilares:React.ReactNode[] = [];
    
    const {id} = useParams();

    useEffect(()=>{
        getMovieIndividual(Number(id))
    },[])

    
    useEffect(()=>{
        movie = movieIndividual as ISchemaMovieIndividual
        
    },[movieIndividual])


    movieSimilares.map((movie)=>{
        itemsMovieSimilares.push(<img src={movie.poster_path} onClick={()=>{navigate(`../movie/${movie.id}`); window.location.reload();}}/>)
    })

    return(

        <>
            <StyledContainerIframe>
                {movie.videos?.results?.[0]?.key && <Yutube videoId={movie.videos?.results?.[0]?.key} opts={{playerVars:{autoplay:1}}} /> }
            </StyledContainerIframe> 

            <main>
                <ContainerInfoMovie 
                hasVideo={movie.videos?.results?.[0]?.key} 
                img={movie.poster_path} 
                imgMobille={movie.backdrop_path} 
                nameMovie={movie.title}
                yearRealese={movie.release_date}
                descriptin={movie.overview}
                genres={movie.genres && movie.genres}
                runtime={movie.runtime}
                popularity={movie.popularity}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                />
                <CastMovie/>
                <StyledContainerMovieSimilares>
                    <h3>Filmes Similares</h3>
                        <AliceCarousel 
                    mouseTracking items={itemsMovieSimilares} 
                    infinite={false} 
                    autoPlay={false}
                    disableButtonsControls={false}
                    disableDotsControls={true}
                />

                </StyledContainerMovieSimilares>
                {moviesFilters.length !== 0 ? <MovieFilter/> : moviesSearched.length !== 0 ? <MovieSearch/> : 
            
                    <>
                   
                    </>
            
            }
            </main>

        </>
    )
}