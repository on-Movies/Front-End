import {StyledCardFilms} from './style';

interface ICardFilms{
    image?:string,
    idMovie?:number,
    title?:string,
    style:React.CSSProperties
}

export const CardFilms = ({image,style}:ICardFilms)=>{

    
    return(
        <StyledCardFilms style={style}>
            <img src={image}/>
        </StyledCardFilms>
    )
}