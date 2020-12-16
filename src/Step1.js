import React from 'react';

function Step1(props) {
    const { updateStateBuilding } = props;

    const buildings = [
        {
            "value": 1,
            "name": "Жилой дом"
        },
        {
            "value": 2,
            "name": "Гараж"
        },
    ];

    return (
        <div className="calc__wrapper">
            <div className="calc__header">
                <span>Что будем строить?</span>
            </div>
            <div className="calc__body">
                <ul>
                    {
                        buildings.map(build => {
                            return (
                                <li key={build.value} value={build.value} onClick={updateStateBuilding}>{build.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Step1;
