import {StyledSectionCastMovie} from './style';
import {useEffect,useContext} from 'react';
import {MovieContext} from '../../providers/movie.context';
import AliceCarousel from 'react-alice-carousel';

export const CastMovie = ()=>{

    const {cast} = useContext(MovieContext);
    const itemsCastMovie:React.ReactNode[] = [];

    cast?.cast.map((cast)=>{
        itemsCastMovie.push(<>
            <div>
                <img src={cast.profile_path}/>
                <span>{cast.original_name}</span>

               
                <p>{cast.character}</p>
            </div>
        </>);
    })

    useEffect(()=>{

        cast?.cast.map((cast)=>{
            itemsCastMovie.push(<>
                <div>
                    <img src={cast.profile_path}/>
                    <span>{cast.original_name}</span>

                   
                    <p>{cast.character}</p>
                </div>
            </>);
        })

    },[cast])

    return(

        <StyledSectionCastMovie>
            <h3>Elenco</h3>
            <AliceCarousel 
            mouseTracking items={itemsCastMovie} 
            infinite={true} 
            autoPlay={true}
            disableButtonsControls={false}
            disableDotsControls={true}
        />

        </StyledSectionCastMovie>
    )
}