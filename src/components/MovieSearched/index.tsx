import {StyledMovieFilterContainer,StyledCleanFilter} from './style';
import {useContext} from 'react';
import {MovieContext} from '../../providers/movie.context';


export const MovieSearch = ()=>{

    const {setMoviesSearched, moviesSearched} = useContext(MovieContext);


    const itemsMovieFilters:React.ReactNode[] = [];

    
    moviesSearched.map((movie)=>{
        itemsMovieFilters.push(<img src={movie.poster_path}/>)
    })


    return(

        <>
            <StyledCleanFilter>

                <button className='buttonFiltrar' onClick={()=>setMoviesSearched([])}>Limpar Filtros</button>

                <div>
                    <button  onClick={()=>{}}>❮</button>
                    <button onClick={()=>{}}>❯</button>
                </div>

            </StyledCleanFilter>
            <StyledMovieFilterContainer>
                {itemsMovieFilters.map((movie)=>{
                    return(
                        <li>{movie}</li>
                    )
                })}    

            </StyledMovieFilterContainer>
            <StyledCleanFilter>

                <button className='buttonFiltrar'  onClick={()=>setMoviesSearched([])}>Limpar Filtros</button>

                <div>
                    <button  onClick={()=>{}}>❮</button>
                    <button onClick={()=>{}}>❯</button>
                </div>

            </StyledCleanFilter>
            
        </>
    )
}