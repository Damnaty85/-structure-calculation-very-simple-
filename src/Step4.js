import React from 'react';

function Step4(props) {
    const { updateSizeX, updateSizeY, sizex, sizey } = props;
    return (
        <div className="calc__wrapper">
            <div className="calc__header">
                <span>Длинна стен(в метрах):</span>
            </div>
            <div className="calc__body">
                <input type="number" value={sizex} onChange={updateSizeX}/>x
                <input type="number" value={sizey} onChange={updateSizeY}/>
            </div>
        </div>
    );
}

export default Step4;
