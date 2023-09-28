import {StyledMovieFilterContainer,StyledCleanFilter} from './style';
import {useContext, useState} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {valueFilter} from '../../providers/movie.context'


export const MovieFilter = ()=>{

    const {moviesFilters,movieFilter,setMoviesFilters} = useContext(MovieContext);
    const [pagination,setPagination] = useState(1);

    const itemsMovieFilters:React.ReactNode[] = [];

    
    moviesFilters.map((movie)=>{
        itemsMovieFilters.push(<img src={movie.poster_path}/>)
    })


    return(

        <>
            <StyledCleanFilter>

                <button className='buttonFiltrar' onClick={()=>setMoviesFilters([])}>Limpar Filtros</button>

                <div>
                    <button  onClick={()=>{setPagination(pagination - 1); movieFilter(valueFilter.categories,valueFilter.populariedade,valueFilter.minYear,valueFilter.maxYear,pagination)}}>❮</button>
                    <button onClick={()=>{setPagination(pagination + 1); movieFilter(valueFilter.categories,valueFilter.populariedade,valueFilter.minYear,valueFilter.maxYear,pagination)}}>❯</button>
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

                <button className='buttonFiltrar'  onClick={()=>setMoviesFilters([])}>Limpar Filtros</button>

                <div>
                    <button  onClick={()=>{setPagination(pagination - 1); movieFilter(valueFilter.categories,valueFilter.populariedade,valueFilter.minYear,valueFilter.maxYear,pagination)}}>❮</button>
                    <button onClick={()=>{setPagination(pagination + 1); movieFilter(valueFilter.categories,valueFilter.populariedade,valueFilter.minYear,valueFilter.maxYear,pagination)}}>❯</button>
                </div>

            </StyledCleanFilter>
            
        </>
    )
}