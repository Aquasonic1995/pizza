import React from 'react';
import {useParams} from "react-router-dom";

const Pizza = () => {
     const {id } = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default Pizza;