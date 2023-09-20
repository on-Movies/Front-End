import {StyledContainerMovieHighlight} from './style';
import {useContext, useEffect} from 'react';
import {MovieContext} from '../../providers/movie.context';
import { ISchemaMovie } from '../../interfaces/movie.interface';


export const HighlightWeek = ()=>{

    const {getMovieHighlightWeek,movieHighlight} = useContext(MovieContext);

    useEffect(()=>{
       getMovieHighlightWeek();
       
    },[])

    const result = movieHighlight as ISchemaMovie;
    
    return(
        <>
        <StyledContainerMovieHighlight>
        <h3>Destaque da Semana</h3>
            <div className='box1'>
               
                <p>
                    {result.overview}
                </p>
                <button className='buttonGlobal'>Ver mais</button>
            </div>

            <div className='box2'>
                <img src={result.poster_path}/>

            </div>
        </StyledContainerMovieHighlight>
        
        </>
    )
}