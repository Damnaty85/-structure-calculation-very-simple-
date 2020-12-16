import React from 'react';

function Step3(props) {
    const { building, updateMaterial } = props;

    let materials = [
        {
            'value': 1,
            'name': 'кирпич'
        },
        {
            'value': 2,
            'name': 'шлакоблок'
        },
        {
            'value': 3,
            'name': 'деревянный брус'
        },
        {
            'value': 4,
            'name': 'металл'
        },
        {
            'value': 5,
            'name': 'сендвич-панели'
        }
    ];

    building === 1 ? materials.splice(3, 2) : materials.splice(0, 1);

    building !== 1 && materials.splice(1, 1);

    return (
        <div className="calc__wrapper">
            <div className="calc__header">
                <span>Материал стен:</span>
            </div>
            <div className="calc__body">
                <ul>
                    {
                        materials.map(material => {
                            return(
                                <li key={material.value} value={material.value} onClick={updateMaterial}>{material.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Step3;
