import { useState,useContext} from 'react';
import {StyledSearchBar,StyledContainerSearcheBar,SearchIcon} from './style';
import {AiOutlineSearch} from 'react-icons/ai';
import {MovieContext} from '../../providers/movie.context';

export const SearchBar = ()=>{
    const {getMovieSearched} = useContext(MovieContext);
    const [searchValue, setSearchValue] = useState('');


    const handleSearch = () => {
            getMovieSearched(searchValue);
      };


    return(
        <StyledContainerSearcheBar>
            <StyledSearchBar onChange={(e)=>setSearchValue(e.target.value)} placeholder='Faça sua pesquisa'/>
            <SearchIcon onClick={(e)=>{e.preventDefault(); handleSearch()}}>
                <AiOutlineSearch/>
            </SearchIcon>

        </StyledContainerSearcheBar>
    )

}