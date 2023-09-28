import {useEffect, useState,useContext} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BannerDesktop } from "../../components/BannerDesktop";
import { BannerMobille } from "../../components/BannerMobille";
import { MoviePopular } from '../../components/MoviePopular';
import { HighlightWeek } from '../../components/HighlightWeek';
import {MovieCategories} from '../../components/MovieCategories';
import {MovieContext} from '../../providers/movie.context';
import { MovieFilter } from '../../components/MovieFilter';
import {StyledButtonFilterMain} from './style';
import { MovieSearch } from '../../components/MovieSearched';

export const Home = ()=>{
    const [isDesktop, setDesktop] = useState(false);
    const {moviesFilters,filter,setFilter,moviesSearched} = useContext(MovieContext); 

    useEffect(()=>{
        const verifySizeScreen = window.matchMedia("(min-width: 700px)");
        setDesktop(verifySizeScreen.matches);

        window.addEventListener("resize", ()=>{
            setDesktop(verifySizeScreen.matches);
        });

    },[])

    return(

     <>
        <section about="Session Banners">
            {isDesktop ? 
            
            <BannerDesktop/>
            :
            <BannerMobille/>
            }
        </section>

            <MoviePopular/>
            <HighlightWeek/>
        <main>
            {moviesFilters.length !== 0 ? <MovieFilter/> : moviesSearched.length !== 0 ? <MovieSearch/> : 
            
            <>
            <MovieCategories/>

            <StyledButtonFilterMain>
                <p>Não Achou o que queria?</p>
                <button className='buttonFiltrar' onClick={()=>{setFilter(filter ? false : true)}}>Filtrar</button>

            </StyledButtonFilterMain>
            </>
            
            }
        </main>
     </>
    )
}