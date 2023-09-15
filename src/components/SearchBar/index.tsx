import { useState } from 'react';
import {StyledSearchBar,StyledContainerSearcheBar,SearchIcon} from './style';
import {AiOutlineSearch} from 'react-icons/ai';

export const SearchBar = ()=>{
    const [searchValue, setSearchValue] = useState('');


    const handleSearch = () => {
            console.log(searchValue);
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