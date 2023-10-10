import {StyledMovieFilterContainer,StyledCleanFilter} from './style';
import {useContext, useState} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {valueFilter} from '../../providers/movie.context'
import {useNavigate} from 'react-router-dom';


export const MovieFilter = ()=>{

    const {moviesFilters,movieFilter,setMoviesFilters} = useContext(MovieContext);
    const [numberPagination,setNumberPagination] = useState<number>(1);

    const navigate = useNavigate();


    const itemsMovieFilters:React.ReactNode[] = [];

    
    moviesFilters.map((movie) => {
        itemsMovieFilters.push(
          <img src={movie.poster_path} onClick={() => {navigate(`/movie/${movie.id}`); location.reload()}} />
        );
      });

    const handleLessClick = () => {
        const newNumberPagination = numberPagination - 1;
        console.log(newNumberPagination === 0);

        setNumberPagination(newNumberPagination > 0 ? newNumberPagination : 1);
        console.log(newNumberPagination === 0);
        
        movieFilter(valueFilter.categories,valueFilter.populariedade,valueFilter.minYear,valueFilter.maxYear,newNumberPagination)
      };
    
      const handleMoreClick = () => {
        const newNumberPagination = numberPagination + 1;

        setNumberPagination(newNumberPagination);
       
        movieFilter(valueFilter.categories,valueFilter.populariedade,valueFilter.minYear,valueFilter.maxYear,newNumberPagination)
      };


    return(

        <>
            <StyledCleanFilter>

                <button className='buttonFiltrar' onClick={()=>setMoviesFilters([])}>Limpar Filtros</button>

                <div>
                    <button  onClick={handleLessClick}>❮</button>
                    <button onClick={handleMoreClick}>❯</button>
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
                    <button  onClick={handleLessClick}>❮</button>
                    <button onClick={handleMoreClick}>❯</button>
                </div>

            </StyledCleanFilter>
            
        </>
    )
}