import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        getGifs( category ).then( imgs => {
        //    setTimeout(() => {
            setState({
                data: imgs,
                loading: false
            }); 
        //    }, 5000);
        });
    }, [ category ]); // el arreglo vacio es para que solo se ejecute una vez
    

    return state; // { data:[], loading: true };

}