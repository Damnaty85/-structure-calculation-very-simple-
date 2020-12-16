import React, { useState } from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Result from "./Result";

const Form = () => {
    const [step, setStep] = useState(1);
    const [building, setBuilding] = useState('');
    const [height, setHeight] = useState('');
    const [material, setMaterial] = useState('');
    const [sizex, setSizeX] = useState('');
    const [sizey, setSizeY] = useState('');

    const updateStateBuilding = evt => setBuilding(evt.target.value);
    const updateHeight = evt => setHeight(evt.target.value);
    const updateMaterial = evt => setMaterial(evt.target.value);
    const updateSizeX = evt => setSizeX(evt.target.value);
    const updateSizeY = evt => setSizeY(evt.target.value);

    function nextStep() {
            setStep(step + 1)
    }

    function reset() {
        setStep(1);
        setBuilding('');
        setHeight('');
        setMaterial('');
        setSizeX('');
        setSizeY('');
    }

    const switchStep = (param) => {
        switch (param) {
            case 1:
                return (
                    <Step1 updateStateBuilding={updateStateBuilding} nextStep={nextStep} reset={reset}/>
                );
            case building === 2 ? '' : 2:
                return (
                    <Step2 updateHeight={updateHeight} height={height} nextStep={nextStep} reset={reset}/>
                );
            case building === 2 ? 2 : 3:
                return (
                    <Step3 building={building} updateMaterial={updateMaterial} nextStep={nextStep} reset={reset}/>
                );
            case building === 2 ? 3 : 4:
                return (
                    <Step4 updateSizeX={updateSizeX} updateSizeY={updateSizeY} sizex={sizex} sizey={sizey} nextStep={nextStep} reset={reset}/>
                );
            case building === 2 ? 4 : 5:
                return (
                    <Result building={building} height={height} material={material} sizex={sizex} sizey={sizey} nextStep={nextStep} reset={reset}/>
                );
            default:
                return (
                    <Step1 updateStateBuilding={updateStateBuilding} nextStep={nextStep} reset={reset}/>
                )
        }
    };

    return (
        <div className="calc">
            {
                step === (building === 2 ? 4 : 5) ?
                    (<span>Результат рассчета</span>):
                    (<span>Шаг { step }</span>)
            }

            {switchStep(step)}

            <div className="calc__buttons">
                <button onClick={reset}>{step !== (building === 2 ? 4 : 5) ? `Отмена` : `Новый рассчет`}</button>
                {step !== (building === 2 ? 4 : 5) ?
                    <button onClick={nextStep}>{step !== (building === 2 ? 3 : 4) ? `Следующий шаг` : `Рассчитать`}</button>
                    : ''}
            </div>

        </div>
    );
};

export default Form;
