import AliceCarousel from "react-alice-carousel"
import { StyledContainerFilmsPopulars } from "./style"
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/movie.context";
import 'react-alice-carousel/lib/alice-carousel.css';
import {TitlesCategories} from '../Titles/index';

export const MoviePopular = ()=>{

    const {getMoviePopulars,moviePopulars} = useContext(MovieContext);

    const itemsMoviePorpulars:React.ReactNode[] = [];
    
    useEffect(()=>{
        getMoviePopulars(1) 

    },[])

    
    moviePopulars.map((movie)=>{
        itemsMoviePorpulars.push(<img src={movie.poster_path}/>);
    })


    return(

        <StyledContainerFilmsPopulars>
        <TitlesCategories title="Filmes Populares" functionMovie={getMoviePopulars}/>
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