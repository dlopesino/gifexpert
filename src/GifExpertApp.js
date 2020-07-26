import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import CategoriesList from './components/CategoriesList';

const GifExpertApp = ( ) => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories }  
            />
            <hr />

            <CategoriesList categories={ categories } />
        </>
    )
}


export default GifExpertApp
