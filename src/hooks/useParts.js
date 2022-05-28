import React, { useEffect, useState } from 'react';

const useParts = (id) => {
    const [parts, setParts] = useState({})
    useEffect(() => {
        const url = `https://car-daddy.web.app/parts/${id}`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            // setAllParts(data);
        })
    }, [id])
    return [parts]
};

export default useParts;