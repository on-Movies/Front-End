import AliceCarousel from "react-alice-carousel"
import { StyledContainerBannersIsMobille } from "./style"
import { useContext, useEffect } from "react";
import { MovieContext } from "../../../providers/movie.context";
import {useNavigate} from 'react-router-dom';


export const BannerMobille = ()=>{
    const {getMovieTrends,movieTrends} = useContext(MovieContext);
    const navigate = useNavigate();

    const itemsBanners:React.ReactNode[] = [];

    
    useEffect(()=>{
        getMovieTrends()

    },[])


    movieTrends.map((movie)=>{
        itemsBanners.push(<img src={movie.poster_path}  onClick={()=>navigate(`movie/${movie.id}`)}/>);
    })

    return(
        <StyledContainerBannersIsMobille>
        <AliceCarousel 
            mouseTracking items={itemsBanners} 
            infinite={true} 
            autoPlay={true} 
            autoPlayInterval={2000}
            disableButtonsControls={true}
            disableDotsControls={true}
            />
            
        </StyledContainerBannersIsMobille>
    )
}