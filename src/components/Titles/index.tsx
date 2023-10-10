import { useState,useContext} from 'react';
import {StyledTitlesContainer} from './style';
import { MovieContext } from '../../providers/movie.context';

interface ITitlesProps{
    title:string,
    setMovieCategories: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    idGenre:number,
}

export const TitlesCategories = ({title,idGenre,setMovieCategories}:ITitlesProps)=>{

    const [numberPagination,setNumberPagination] = useState<number>(1);
    const {getMovieByCategories} = useContext(MovieContext);    


    const handleLessClick = () => {
        const newNumberPagination = numberPagination - 1;

        setNumberPagination(newNumberPagination > 0 ? newNumberPagination : 1);
        
        getMovieByCategories(idGenre, setMovieCategories, () => newNumberPagination);
      };
    
      const handleMoreClick = () => {
        const newNumberPagination = numberPagination + 1;

        setNumberPagination(newNumberPagination);
       
        getMovieByCategories(idGenre, setMovieCategories, () => newNumberPagination);
      };

    return(
        <StyledTitlesContainer>
            <h3>{title}</h3>


            <ul className="pagination">
                <li id='menos' onClick={handleLessClick}>❮</li>

                <li id='mais' onClick={handleMoreClick}>❯</li>
            </ul>
        </StyledTitlesContainer>
    )
}