import { StyledContainerBannersIsMobille } from "./style"
import {useContext,useEffect} from 'react';
import {MovieContext} from '../../providers/movie.context';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Home = ()=>{
    const {getMovieTrends,movieTrends} = useContext(MovieContext)

    useEffect(()=>{
        getMovieTrends()
    },[])

    // console.log(movieTrends);

    const items = [
        <img src="https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"/>,
        <img src="https://image.tmdb.org/t/p/w500/5FFpXoNpHdmx4hYEQOjtgotOH4b.jpg"/>,
        <img src="https://image.tmdb.org/t/p/w500/cJyxQYBhbSAdP8UR8rKCsTUjhqb.jpg"/>,
      ];

    return(

     <>
        <section>
            <StyledContainerBannersIsMobille>
            {/* {movieTrends.map((movie) => (

                <img src={movie.poster_path} key={movie.id}/>

            ))} */}
            <AliceCarousel mouseTracking items={items} infinite={true} autoPlay={true} autoPlayInterval={2000}/>
            </StyledContainerBannersIsMobille>
        </section>
     </>
    )
}