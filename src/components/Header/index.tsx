import {StyledHeader, StyledMenuButtons} from './style';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState, useEffect, useContext} from 'react';
import {SearchBar} from '../SearchBar/index';
import {Filter} from '../Filter';
import {MovieContext} from '../../providers/movie.context';

export const Header = ()=>{
    const [isMobile, setIsMobile] = useState(false);
    const [menuList, setMenuList] = useState(false);

    const {filter,setFilter} = useContext(MovieContext);
    

    useEffect(() => {
        const verifySizeScreen = window.matchMedia("(max-width: 712px)");
        setIsMobile(verifySizeScreen.matches);

        window.addEventListener("resize", ()=>{
            setIsMobile(verifySizeScreen.matches);
        });
    
      }, []);

    return(
        <>
            <StyledHeader>
            <span>On Movie</span>
            <SearchBar/>
            {isMobile ? 
                
            <span onClick={()=>setMenuList(menuList ? false : true)}>
                
                <AiOutlineMenu/>
                
                {menuList && 
                <StyledMenuButtons>
                    <button className='buttonFiltrar' onClick={()=>{setFilter(filter ? false : true)}}>Filtrar</button>
                    <span>Filmes</span>
                    <span>Series</span>
                </StyledMenuButtons>
                }

            </span>

             : 

            <div>
                <button className='buttonFiltrar' onClick={()=>{setFilter(filter ? false : true)}}>Filtrar</button>
                <span>Filmes</span>
                <span>Series</span>
            </div>

            }
        </StyledHeader>

            {filter &&  <Filter/>   }
        </>
    )
}