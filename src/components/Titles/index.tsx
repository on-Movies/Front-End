import { useState } from 'react';
import {StyledTitlesContainer} from './style';

interface ITitlesProps{
    title:string
    functionMovie:(number:number)=>Promise<void>;
}

export const TitlesCategories = ({title,functionMovie}:ITitlesProps)=>{

    const [numberPagination,setNumberPagination] = useState<number>(1);
    

    return(
        <StyledTitlesContainer>
            <h3>{title}</h3>


            <ul className="pagination">
                <li onClick={()=>{setNumberPagination(numberPagination - 1); functionMovie(numberPagination)}}>❮</li>

                <li onClick={()=>{setNumberPagination(numberPagination + 1); functionMovie(numberPagination)}}>❯</li>
            </ul>
        </StyledTitlesContainer>
    )
}