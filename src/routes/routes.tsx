import {Route, Routes} from 'react-router-dom';
import {Home} from '../pages/Home';
import {MovieIndividual} from '../pages/MovieIndividual';

export const Router = ()=>{

    return(
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/movie/:id" element={<MovieIndividual/>} />
        </Routes>
    )

    
}