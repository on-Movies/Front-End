import {StyledContainerInfoMovie} from './style';
import {AiFillStar} from 'react-icons/ai';
import {BiTimeFive} from 'react-icons/bi';
import {useContext,useEffect} from 'react';
import {MovieContext} from '../../providers/movie.context';
import { ISchemaWatchMovie } from '../../interfaces/movie.interface';

interface ContainerInfoMovieProps {
    hasVideo: string;
    img:string
    imgMobille:string
    nameMovie:string
    yearRealese:string
    descriptin:string
    genres: {
        id: number;
        name: string;
    }[] | null
    popularity:number
    runtime: number,
    vote_average: number,
    vote_count:number,

  }


  

export const ContainerInfoMovie = ({hasVideo,
                                    img,
                                    imgMobille,
                                    nameMovie,
                                    yearRealese,
                                    descriptin,
                                    genres,
                                    popularity,
                                    runtime,
                                    vote_average,
                                    vote_count,
                              
                                }:ContainerInfoMovieProps)=>{
    
    const {movieWatchMovie} = useContext(MovieContext);

    let movieProvider = movieWatchMovie as ISchemaWatchMovie

    useEffect(()=>{
        movieProvider = movieWatchMovie as ISchemaWatchMovie
    },[])

    useEffect(()=>{
        movieProvider = movieWatchMovie as ISchemaWatchMovie

    },[movieWatchMovie])

    return(
        <StyledContainerInfoMovie hasVideo={hasVideo} img={img} imgMobile={imgMobille}>
            <div className='box1'>
                <img src={img}/>

            </div>


            <div className='box2'>
                <h1>{nameMovie} ({yearRealese})</h1>
                
                <ul>
                    {genres && genres.map((element)=>{
                        return(
                            <li>
                                {element.name}
                            </li>
                        )
                    })}

                </ul>
                
                <h3>Sinopse:</h3>
                <p>{descriptin}</p>

                <div className='div1'>
                    <span>Duração: <BiTimeFive/> {runtime}min</span>
                    <span>Populariedade:  <AiFillStar/> {popularity}</span><br/>
                    <span>Votação media: {vote_average}</span>
                    <span>Votos: {vote_count}</span>

                </div>
                <div className='div2'>
                   {movieProvider && 
                    <>
                    Onde Assistir:
                    {movieProvider.buy && 
                        <>
                             <ul>
                                    <h3>Onde Comprar</h3>
                                    {movieProvider.buy?.map((component)=>{
                                        return(
                                            <li>
                                                <img src={component.logo_path} />
                                            </li>
                                        )
                                    })
                                
                                }
                            </ul><br/>
                        </>
                    
                    }
                   
                   {movieProvider.rent && 
                    <>
                         <ul>
                            <h3>Onde Alugar</h3>
                             {movieProvider.rent?.map((component)=>{
                                 return(
                                     <li>
                                         <img src={component.logo_path} />
                                     </li>
                                 )
                             })
                         
                         }
                     </ul>
                    </>
                    
                    }
                    
                    {movieProvider.flatrate && 
                        <>
                             <ul>
                            <h3>Streamer</h3>
                             {movieProvider.flatrate?.map((component)=>{
                                 return(
                                     <li>
                                         <img src={component.logo_path} />
                                     </li>
                                 )
                             })
                         
                         }
                     </ul>
                        
                        </>
                    
                    }
                    </>
                }

                </div>

                
            </div>
        </StyledContainerInfoMovie>
    )
}