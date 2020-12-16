import React, { useState, useEffect } from 'react';

const BASE_URL = `https://data.techart.ru/lab/json/`;

function Result(props) {
    const [result, setResult] = useState('');
    const [message, setMessage] = useState('');
    const { building, height, material, sizex, sizey } = props;

    useEffect(() => {
        async function fetchData () {
            await fetch(`${BASE_URL}?building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`)
                .then(data => data.json())
                .then(data => {
                    setResult(data.result);
                    setMessage(data.message);
                })
                .catch((evt) => {console.log(evt)})
        }
        fetchData();
    }, []);

    return (
        <div className="calc__wrapper">
            <div className="calc__header">
                {
                    result === 'ok' ? <span>Успешно</span> : <span>Ошибка</span>
                }
            </div>
            <div className="calc__body">
                {
                    result === 'ok' ? <span>{message}</span> : <span style={{color:'red'}}>{message}</span>
                }
            </div>
        </div>
    );
}

export default Result;
