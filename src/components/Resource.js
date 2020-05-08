import React from 'react';
import useResources from './useResources';

const Resource = ({ resource }) => {

    const resources = useResources(resource);

    const renderList = () => {

        if (resource !== 'users') {
            return resources.map(data => {
                return (
                    <li key={data.id}>
                        {data.title}
                    </li>
                )
            })
        }
        else {
            return resources.map(data => {
                return (
                    <li key={data.id}>
                        {data.name}
                    </li>
                )
            })
        }
    }
    return (
        <div>
            {renderList()}
        </div>
    )
}

export default Resource;