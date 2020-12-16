import React from 'react';

function Step2(props) {
    const { updateHeight, height } = props;
    return (
        <div className="calc__wrapper">
            <div className="calc__header">
                <span>Количество этажей(число):</span>
            </div>
            <div className="calc__body">
                <input type="number" value={height} onChange={updateHeight}/>
            </div>
        </div>
    );
}

export default Step2;
