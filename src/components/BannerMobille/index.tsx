import AliceCarousel from "react-alice-carousel"
import { StyledContainerBannersIsMobille } from "./style"
import { useContext, useEffect } from "react";
import { MovieContext } from "../../providers/movie.context";


export const BannerMobille = ()=>{
    const {getMovieTrends,movieTrends} = useContext(MovieContext);

    const itemsBanners:React.ReactNode[] = [];

    
    useEffect(()=>{
        getMovieTrends()

    },[])


    movieTrends.map((movie)=>{
        itemsBanners.push(<img src={movie.poster_path}/>);
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