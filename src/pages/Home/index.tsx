import {useEffect, useState} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BannerDesktop } from "../../components/BannerDesktop";
import { BannerMobille } from "../../components/BannerMobille";
import { MoviePopular } from '../../components/MoviePopular';
import { HighlightWeek } from '../../components/HighlightWeek';

export const Home = ()=>{
    const [isDesktop, setDesktop] = useState(false);

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
     </>
    )
}