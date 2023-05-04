import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-cooking-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className=''>
            <h4>Chef's Name</h4>
            <div className='mt-2 mb-3 gap-5 d-flex'>
                {
                    chefs.map(chef => <p
                        key={chef.id}
                    >
                        <Link to={`/chef/${chef.id}`} className='text-black text-decoration-none'>{chef.foodName}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Chefs;




