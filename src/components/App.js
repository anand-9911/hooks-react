import React, { useState } from 'react';
import Resource from './Resource';
const App = () => {

    const [resource, setResource] = useState('POSTS');
    return (
        <div>
            <div>
                <button
                    onClick={() => setResource('POSTS')}
                >
                    POSTS
                </button>
                <button
                    onClick={() => setResource('TODOS')}
                >
                    TODO
                </button>
            </div>
            <Resource resource={resource} />
        </div>
    )
}

export default App;