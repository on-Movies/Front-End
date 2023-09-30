import {StyledContainerMovieHighlight} from './style';
import {useContext, useEffect} from 'react';
import {MovieContext} from '../../providers/movie.context';
import { ISchemaMovie } from '../../interfaces/movie.interface';
import {useNavigate} from 'react-router-dom';


export const HighlightWeek = ()=>{

    const {getMovieHighlightWeek,movieHighlight} = useContext(MovieContext);

    const navigate = useNavigate();

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
                <button className='buttonGlobal' onClick={()=>navigate(`movie/${result.id}`)}>Ver mais</button>
            </div>

            <div className='box2'>
                <img src={result.poster_path} onClick={()=>navigate(`movie/${result.id}`)}/>

            </div>
        </StyledContainerMovieHighlight>
        
        </>
    )
}