import AliceCarousel from "react-alice-carousel"
import { StyledContainerFilmsPopulars,StyledTitlesContainer} from "./style"
import { useContext, useEffect, useState} from "react";
import { MovieContext } from "../../providers/movie.context";
import 'react-alice-carousel/lib/alice-carousel.css';
import {useNavigate} from 'react-router-dom';

export const MoviePopular = ()=>{

    const {getMoviePopulars,moviePopulars} = useContext(MovieContext);
    const [numberPagination,setNumberPagination] = useState<number>(1);
    const navigate = useNavigate();

    const itemsMoviePorpulars:React.ReactNode[] = [];
    
    useEffect(()=>{
        getMoviePopulars(1) 

    },[])

    
    moviePopulars.map((movie)=>{
        itemsMoviePorpulars.push(<img src={movie.poster_path} onClick={()=>navigate(`movie/${movie.id}`)}/>);
    })

    const handleLessClick = () => {
        const newNumberPagination = numberPagination - 1;
        setNumberPagination(newNumberPagination > 0 ? newNumberPagination : 1);
        
        getMoviePopulars(newNumberPagination)
      };
    
      const handleMoreClick = () => {
        const newNumberPagination = numberPagination + 1;
        setNumberPagination(newNumberPagination);
       
        getMoviePopulars(newNumberPagination)
      };


    return(

        <StyledContainerFilmsPopulars>
            <StyledTitlesContainer>
                <h3>Filmes Populares</h3>

                
                <ul className="pagination">
                    <li id='menos' onClick={handleLessClick}>❮</li>

                    <li id='mais' onClick={handleMoreClick}>❯</li>
                </ul>
            </StyledTitlesContainer>
                    <AliceCarousel 
                        mouseTracking items={itemsMoviePorpulars} 
                        infinite={false} 
                        autoPlay={false}
                        disableButtonsControls={false}
                        disableDotsControls={true}
                    />
        
    </StyledContainerFilmsPopulars>
    )
}
