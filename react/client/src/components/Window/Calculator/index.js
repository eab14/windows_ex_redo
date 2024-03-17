import './index.css';

import { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {

    const [result, setResult] = useState('');

    const handleClick = (value) => {

        if (value === '=') {

            try {
                const calculatedResult = calculateResult(result);
                setResult(calculatedResult);

            } 
            
            catch (error) { setResult('Error'); }

        } 
        
        else if (value === 'C') setResult('');
        else if (value === 'sin') setResult(Math.sin(parseFloat(result)));
        else if (value === 'cos') setResult(Math.cos(parseFloat(result)));
        else if (value === 'sqrt') setResult(Math.sqrt(parseFloat(result)));
        else if (value === 'π') setResult(Math.PI);
        else if (value === 'Bin') setResult(convertToBinary(result));
        else if (value === 'Oct') setResult(convertToOctal(result));
        else if (value === 'Hex') setResult(convertToHexadecimal(result));
        else if (value === '+/-') setResult(toggleSign(result));
        else if (value === '%') setResult(result + '%');
        else setResult((prevResult) => prevResult + value);
        

    };

    const calculateResult = (expression) => math.evaluate(expression);
    const convertToBinary = (number) => parseInt(number, 10).toString(2);
    const convertToOctal = (number) => parseInt(number, 10).toString(8);
    const convertToHexadecimal = (number) => parseInt(number, 10).toString(16).toUpperCase();
    const toggleSign = (number) => number.startsWith('-') ? number.slice(1) : '-' + number;

    return (
        <div id="calculator" className="flex col">

            <div className="display flex center" readOnly>{result}</div>
            <div className="buttons flex row">

                <div className="calc_numbers flex col">

                    <div className="flex row">

                        <button className="black small" onClick={() => handleClick('C')}>C</button>
                        <button onClick={() => handleClick('π')}>π</button>
                        <button onClick={() => handleClick('%')}>%</button>
                        <button onClick={() => handleClick('+')}>+</button>
                        <button className="large grey small" onClick={() => handleClick('Bin')}>Bin</button>
                        
                        

                    </div>

                    <div className="flex row">

                        <button onClick={() => handleClick('7')}>7</button>
                        <button onClick={() => handleClick('8')}>8</button>
                        <button onClick={() => handleClick('9')}>9</button>
                        <button onClick={() => handleClick('-')}>-</button>
                        <button className="large grey small" onClick={() => handleClick('Hex')}>Hex</button>
                        

                    </div>

                    <div className="flex row">

                        <button onClick={() => handleClick('4')}>4</button>
                        <button onClick={() => handleClick('5')}>5</button>
                        <button onClick={() => handleClick('6')}>6</button>
                        <button onClick={() => handleClick('/')}>/</button>
                        <button className="large grey small" onClick={() => handleClick('Oct')}>Oct</button>
                        

                    </div>

                    <div className="flex row">

                        <button onClick={() => handleClick('1')}>1</button>
                        <button onClick={() => handleClick('2')}>2</button>
                        <button onClick={() => handleClick('3')}>3</button>
                        <button onClick={() => handleClick('*')}>*</button>
                        <button className="large grey small" onClick={() => handleClick('sqrt')}>sqrt</button>

                    </div>

                    <div className="flex row">

                        <button className="small" onClick={() => handleClick('+/-')}>+/-</button>
                        <button onClick={() => handleClick('0')}>0</button>
                        <button onClick={() => handleClick('.')}>.</button>
                        <button className="green xl" onClick={() => handleClick('=')}>=</button>

                    </div>

                </div>

            </div>
                
        </div>
    );


};

export default Calculator;