import { StyledContainerBannersIsMobille,StyledContainerBannersIsDesktop} from "./style"
import {useContext,useEffect, useState} from 'react';
import {MovieContext} from '../../providers/movie.context';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Home = ()=>{
    const [isDesktop, setDesktop] = useState(false);
    const {getMovieTrends,movieTrends} = useContext(MovieContext)

    const itemsBanners:React.ReactNode[] = [];

    useEffect(()=>{
        getMovieTrends()

        const verifySizeScreen = window.matchMedia("(min-width: 700px)");
        setDesktop(verifySizeScreen.matches);

        window.addEventListener("resize", ()=>{
            setDesktop(verifySizeScreen.matches);
        });

    },[])
    
    movieTrends.map((movie)=>{
        itemsBanners.push(<img src={movie.poster_path}/>);
    })

    return(

     <>
        <section>
            {isDesktop ? 
            
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
            :
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
            }
        </section>
     </>
    )
}