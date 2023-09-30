import AliceCarousel from 'react-alice-carousel';
import {StyledContainerBannersIsDesktop} from './style';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../../providers/movie.context';
import { useNavigate } from 'react-router-dom';



export const BannerDesktop = ()=>{

    const {getMovieTrends,movieTrends} = useContext(MovieContext);
    const navigate = useNavigate();


    const itemsBanners:React.ReactNode[] = [];

    useEffect(()=>{
        getMovieTrends()

    },[])
    
    movieTrends.map((movie)=>{
        itemsBanners.push(<img src={movie.poster_path} onClick={()=>navigate(`movie/${movie.id}`)}/>);
    })

    return(
        <StyledContainerBannersIsDesktop>
             <div className="boxMain">
                <AliceCarousel 
                mouseTracking items={itemsBanners.slice(0,2)} 
                infinite={true} 
                autoPlay={true} 
                autoPlayInterval={2000}
                disableButtonsControls={true}
                disableDotsControls={true}
                />
                    

                </div>
                <div className="boxsecondary">
                    <div className="box1">

                        <AliceCarousel 
                            mouseTracking items={itemsBanners.slice(2,4)} 
                            infinite={true} 
                            autoPlay={true} 
                            autoPlayInterval={3000}
                            disableButtonsControls={true}
                            disableDotsControls={true}
                        />

                    </div>

                    <div className="box2">

                        
                        <AliceCarousel 
                                mouseTracking items={itemsBanners.slice(4,7)} 
                                infinite={true} 
                                autoPlay={true} 
                                autoPlayInterval={2500}
                                disableButtonsControls={true}
                                disableDotsControls={true}
                            />
                        
                    </div>

                </div>

        </StyledContainerBannersIsDesktop>
    )
}