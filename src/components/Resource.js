import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resource = ({ resource }) => {

    const [resources, setResources] = useState([])
    const fetchResources = async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(
        () => {
            fetchResources(resource);
        }, [resource]);

    const renderList = () => {
        return resources.map(data => {
            return (
                <li key={data.id}>
                    {data.title}
                </li>
            )
        })
    }
    return (
        <div>
            {renderList()}
        </div>
    )
}

export default Resource;