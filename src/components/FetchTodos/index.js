import React, { useState, useEffect } from 'react';

function useFetch(url, initial) {
    const [data, setData] = useState(initial);

    async function getData(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();

            setData({
                data: data
            });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData(url);
    }, [url]);

    return data;
}

export default function FetchTodos() {
    const response = useFetch('https://jsonplaceholder.typicode.com/todos', {
        data: []
    });

    console.log(response);
    return (
        <div>
            <ul>
                {response.data.map((todo, i) => (
                    <li key={i}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
