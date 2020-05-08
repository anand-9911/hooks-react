import React, { useState } from 'react';
import Resource from './Resource';
const App = () => {

    const [resource, setResource] = useState('posts');
    return (
        <div>
            <div>
                <button
                    onClick={() => setResource('posts')}
                >
                    POSTS
                </button>
                <button
                    onClick={() => setResource('todos')}
                >
                    TODO
                </button>
                <button
                    onClick={() => setResource('users')}
                >
                    NAME
                </button>
            </div>
            <Resource resource={resource} />
        </div>
    )
}

export default App;