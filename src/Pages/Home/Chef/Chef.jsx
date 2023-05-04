import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../Home/ChefCard/ChefCard';

const Chef = () => {
    const { id } = useParams();
    const chefFood = useLoaderData()
    return (
        <div>
            <h4> Chef's making foods : {chefFood.length}</h4>
            {
                chefFood.map(chef => <ChefCard
                    key={chef._id}
                    chef={chef}
                >
                </ChefCard>)
            }
        </div>
    );
};

export default Chef;