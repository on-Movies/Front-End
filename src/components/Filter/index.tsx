import { useState } from 'react';
import {StyledContainerFilter,StyledFormFilter} from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useContext} from 'react';
import {MovieContext} from '../../providers/movie.context';
import {valueFilter} from '../../providers/movie.context'


export const Filter = ()=>{

    const {movieFilter,setFilter} = useContext(MovieContext)


    const [selectedValues, setSelectedValues] = useState({
        18: false,
        35: false,
        28: false,
        12: false,
        27: false,
        10752: false,
        878:false,
       
      });

      const validationSchema = Yup.object().shape({
        18: Yup.boolean(),
        35: Yup.boolean(),
        28: Yup.boolean(),
        12: Yup.boolean(),
        27: Yup.boolean(),
        10752: Yup.boolean(),
        878:Yup.boolean(),
        populariedade: Yup.number(),
        minYear: Yup.date(),
        maxYear: Yup.date()
      });

      const formik = useFormik({
        
        initialValues:selectedValues,
        validationSchema:validationSchema,

        onSubmit: async (values) => {
          valueFilter.categories = [];
                    
            const entries = Object.entries(values);
          
            for (const [key, value] of entries) {
              if (value) {
                {key === 'populariedade' ? valueFilter.populariedade = value : ''}
                {key === 'minYear' ? valueFilter.minYear = value : ''}
                {key === 'maxYear' ? valueFilter.maxYear = value : ''}
                {key !== 'populariedade' && key !== 'minYear' && key !== 'maxYear' ? valueFilter.categories.push(key): ''}
                  
              }
            }
          
            await movieFilter(valueFilter.categories,valueFilter.populariedade, valueFilter.minYear, valueFilter.maxYear,1);
            setFilter(false);
          },
          
      });
    

    return(
        <StyledContainerFilter><br/>
                <h3>Filtragens</h3>

                <StyledFormFilter onSubmit={formik.handleSubmit}>
                {Object.entries(selectedValues).map(([id, checked]) => (
                <span key={id}>
                    {id === '18' && 'Drama'}
                    {id === '35' && 'Comedia'}
                    {id === '28' && 'Ação'}
                    {id === '12' && 'Aventura'}
                    {id === '27' && 'Terror'}
                    {id === '10752' && 'Guerras'}
                    {id === '878' && 'Ficção Cientifica'}
                    <input
                    type="checkbox"
                    id={id}
                    name={id}
                    onChange={formik.handleChange}
                    />
             </span>
        ))}
               <span className='box1'>
                    Populariedade: <input type='number' id='populariedade' name='populariedade' onChange={formik.handleChange}/>
               </span>

               <span className='box2'>
                    Ano Lançamento:
                    
                    <div>
                        Min<input type='date' id='minYear' name='minYear' onChange={formik.handleChange}/>
                        
                        Max <input type='date' id='maxYear' name='maxYear' onChange={formik.handleChange}/>
                    </div>
               </span>

                    <button type='submit' className='buttonFiltrar'>Filtrar</button>
                    
                </StyledFormFilter>
        </StyledContainerFilter>
    )
}