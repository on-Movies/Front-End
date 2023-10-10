import {StyledMovieFilterContainer,StyledCleanFilter} from './style';
import {useContext, useState} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {useNavigate} from 'react-router-dom';


export const MovieSearch = ()=>{

    const {setMoviesSearched, moviesSearched,getMovieSearched,searchValue} = useContext(MovieContext);
    const [numberPagination,setNumberPagination] = useState<number>(1);
    const navigate = useNavigate();

    const itemsMovieFilters:React.ReactNode[] = [];

    
    moviesSearched.map((movie)=>{
        itemsMovieFilters.push(<img src={movie.poster_path} onClick={()=>{navigate(`/movie/${movie.id}`); location.reload()}}/>)
    })

    const handleLessClick = () => {
        const newNumberPagination = numberPagination - 1;
        setNumberPagination(newNumberPagination > 0 ? newNumberPagination : 1);
        
        
        getMovieSearched(searchValue,newNumberPagination)
        
      };
    
      const handleMoreClick = () => {
        const newNumberPagination = numberPagination + 1;

        setNumberPagination(newNumberPagination);
        getMovieSearched(searchValue,newNumberPagination)
        
      };


    return(

        <>
            <StyledCleanFilter>

                <button className='buttonFiltrar' onClick={()=>setMoviesSearched([])}>Limpar Filtros</button>

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

                <button className='buttonFiltrar'  onClick={()=>setMoviesSearched([])}>Limpar Filtros</button>

                <div>
                    <button  onClick={handleLessClick}>❮</button>
                    <button onClick={handleMoreClick}>❯</button>
                </div>

            </StyledCleanFilter>
            
        </>
    )
}