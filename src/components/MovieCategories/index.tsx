import {TitlesCategories} from '../Titles';
import {useContext,useEffect, useState} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {StyledContainerFilmsCategories} from './style';
import AliceCarousel from 'react-alice-carousel';

export const MovieCategories = ()=>{
    const {
            movieCategoriesDrama,
            movieCategoriesAdventure,
            movieCategoriesAction,
            movieCategoriesAnimation,
            movieCategoriesComedy,
            movieCategoriesCrime,
            movieCategoriesHorror,
            movieCategoriesScienceFiction,
            movieCategoriesFamily,
            movieCategoriesMystery,
            movieCategoriesRomance,
            movieCategoriesWar,
            setMovieCategoriesFamily,
            setMovieCategoriesMystery,
            setMovieCategoriesRomance,
            setMovieCategoriesWar,
            setMovieCategoriesAnimation,
            setMovieCategoriesComedy,
            setMovieCategoriesCrime,
            setMovieCategoriesHorror,
            setMovieCategoriesScienceFiction,
            setMovieCategoriesDrama,
            setMovieCategoriesAction,
            setMovieCategoriesAdventure,
            getMovieByCategories} = useContext(MovieContext);

    const [numberPagination,setNumberPagination] = useState<number>(1);

    useEffect(()=>{
        getMovieByCategories(18,setMovieCategoriesDrama,()=>{setNumberPagination(numberPagination + 1);
           return numberPagination})
        getMovieByCategories(28,setMovieCategoriesAction,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(12,setMovieCategoriesAdventure,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(16,setMovieCategoriesAnimation,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(35,setMovieCategoriesComedy,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(80,setMovieCategoriesCrime,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(27,setMovieCategoriesHorror,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(878,setMovieCategoriesScienceFiction,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(10751,setMovieCategoriesFamily,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(9648,setMovieCategoriesMystery,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(10749,setMovieCategoriesRomance,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
        getMovieByCategories(10752,setMovieCategoriesWar,()=>{setNumberPagination(numberPagination + 1); return numberPagination})
    },[])

    const array = [
        {
            idCategories:18,
            nameCategorie:'Drama',
            state:movieCategoriesDrama,
            setState:setMovieCategoriesDrama
        },
        {
            idCategories:28,
            nameCategorie:'Ação',
            state:movieCategoriesAction,
            setState:setMovieCategoriesAction
        },
        {
            idCategories:12,
            nameCategorie:'Aventura',
            state:movieCategoriesAdventure,
            setState:setMovieCategoriesAdventure
        },
        {
          idCategories:16,
          nameCategorie:'Animação',
          state:movieCategoriesAnimation,
          setState:setMovieCategoriesAnimation
        },
        {
        idCategories:35,
        nameCategorie:'Comedia',
        state:movieCategoriesComedy,
        setState:setMovieCategoriesComedy
       },
       {
        idCategories:80,
        nameCategorie:'Crime',
        state:movieCategoriesCrime,
        setState:setMovieCategoriesCrime
       },
       { 
        idCategories:27,
        nameCategorie:'Terror',
        state:movieCategoriesHorror,
        setState:setMovieCategoriesHorror
       },
       {
        idCategories:878,
        nameCategorie:'Ficção Cientifica',
        state:movieCategoriesScienceFiction,
        setState:setMovieCategoriesScienceFiction
      },
      {
        idCategories:10751,
        nameCategorie:'Familia',
        state:movieCategoriesFamily,
        setState:setMovieCategoriesFamily
      },
      {
        idCategories:9648,
        nameCategorie:'Misterio',
        state:movieCategoriesMystery,
        setState:setMovieCategoriesMystery
      },
      {
        idCategories:10749,
        nameCategorie:'Romance',
        state:movieCategoriesRomance,
        setState:setMovieCategoriesRomance
      },
      {
        idCategories:10752,
        nameCategorie:'Guerras',
        state:movieCategoriesWar,
        setState:setMovieCategoriesWar
      },
        
    ]

    return (
        <>
          {array.map((element) => (
            <StyledContainerFilmsCategories>
              <>
                <TitlesCategories
                  title={element.nameCategorie}
                  idGenre={element.idCategories}
                  setMovieCategories={element.setState}
                />
                <AliceCarousel
                  mouseTracking
                  items={element.state}
                  infinite={false}
                  autoPlay={false}
                  disableButtonsControls={false}
                  disableDotsControls={true}
                />
              </>
            </StyledContainerFilmsCategories>
          ))}
        </>
      );
      
}
