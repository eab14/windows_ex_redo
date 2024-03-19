import './index.css';

import { useState } from 'react';

import Button from '../../Form/Button';

const PasswordGen = () => {

    // const upperRef = useRef();
    // const numberRef = useRef();
    // const symbolRef = useRef();

    const [ pw, setPw ] = useState("");

    const generatePassword = () => {

        let length = 12;

        const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

        const alpha = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
        const upper = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
        const symbols = Array.from({ length: 15 }, (_, i) => String.fromCharCode(33 + i));
        const numbers = Array.from({ length: 10 }, (_, i) => i);

        let password = '';

        password += getRandomItem(alpha);
        password += getRandomItem(upper);
        password += getRandomItem(symbols);
        password += getRandomItem(numbers);

        const remainder = length - 4;
        const selected = alpha.concat(upper, symbols, numbers);

        for (let i = 0; i < remainder; i++) password += getRandomItem(selected);

        password = password.split('').sort(() => Math.random() - 0.5).join('');

        setPw(password);

        console.log(password)

        return pw;

    }

    return(
        <div className="flex col pwg_spacer">

            <div className="flex row center pwg_line">
                Password is in console for now...
            </div>

            <div className="flex row center pwg_line">

                <Button text="Generate" onClick={generatePassword} />

            </div>

        </div>
    )

}

export default PasswordGen;