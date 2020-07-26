import React from 'react';
import PropTypes from 'prop-types';
import GifGrid from './GifGrid';

const CategoriesList = ({ categories }) => {
    return (
        <ol> {
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                ) )
        } </ol>
    )
}
CategoriesList.propTypes = {
    categories: PropTypes.array.isRequired
}

export default CategoriesList
