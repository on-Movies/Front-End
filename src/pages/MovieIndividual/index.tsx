import { useParams } from "react-router-dom";
import {useEffect} from 'react';
import {useContext} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {StyledContainerIframe} from './style';
import { ISchemaMovieIndividual } from "../../interfaces/movie.interface";
import Yutube from 'react-youtube';
import {ContainerInfoMovie} from '../../components/InfoMovieIndividual';

export const MovieIndividual = ()=>{

    const {getMovieIndividual,movieIndividual} = useContext(MovieContext);
    let movie = movieIndividual as ISchemaMovieIndividual;
    
    const {id} = useParams();

    useEffect(()=>{
        
        getMovieIndividual(Number(id))
    },[])

    
    useEffect(()=>{
        movie = movieIndividual as ISchemaMovieIndividual
        
    },[movieIndividual])

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
            </main>

        </>
    )
}