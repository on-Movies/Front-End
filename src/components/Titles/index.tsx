import { useState } from 'react';
import {StyledTitlesContainer} from './style';

interface ITitlesProps{
    title:string,
    onClick?:number,
    setNumberPagination?: (value: React.SetStateAction<number>) => void
    functionMovie: (number:number)=>Promise<void> | ((genre: number, setMovieCategories: React.Dispatch<React.SetStateAction<JSX.Element[]>>,numberPagination:()=>number) => Promise<void>);
}

export const TitlesCategories = ({title,functionMovie}:ITitlesProps)=>{

    const [numberPagination,setNumberPagination] = useState<number>(1);

    return(
        <StyledTitlesContainer>
            <h3>{title}</h3>


            <ul className="pagination">
                <li id='menos' onClick={()=>{setNumberPagination(numberPagination - 1); functionMovie(numberPagination)}}>❮</li>

                <li id='mais' onClick={()=>{setNumberPagination(numberPagination + 1); functionMovie(numberPagination)}}>❯</li>
            </ul>
        </StyledTitlesContainer>
    )
}