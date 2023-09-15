import {StyledHeader, StyledMenuButtons} from './style';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState, useEffect} from 'react';

export const Header = ()=>{
    const [isMobile, setIsMobile] = useState(false);
    const [menuList, setMenuList] = useState(false);

    useEffect(() => {
        const verifySizeScreen = window.matchMedia("(max-width: 376px)");
        setIsMobile(verifySizeScreen.matches);

        window.addEventListener("resize", ()=>{
            setIsMobile(verifySizeScreen.matches);
        });
    
      }, []);

    return(
        <>
            <StyledHeader>
            <span>On Movie</span>

            {isMobile ? 

            <span onClick={()=>setMenuList(menuList ? false : true)}>
                <AiOutlineMenu/>

                {menuList && 
                <StyledMenuButtons>
                    <span>Filmes</span>
                    <span>Series</span>
                </StyledMenuButtons>
                }

            </span>

             : 

            <div>
                <span>Filmes</span>
                <span>Series</span> 
            </div>

            }
        </StyledHeader>
        </>
    )
}