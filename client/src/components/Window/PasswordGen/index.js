import './index.css';

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Form/Button';
import InputCheckBox from '../../Form/Input/InputCheckBox';
import InputText from '../../Form/Input/InputText';

const PasswordGen = () => {

    const [ upperChecked, setUpperChecked ] = useState(true);
    const [ numberChecked, setNumberChecked ] = useState(true);
    const [ symbolChecked, setSymbolChecked ] = useState(true);

    const [passwordLength, setPasswordLength] = useState(0);

    const displayRef = useRef();

    const [ pw, setPw ] = useState("");

    const handleUpperChange = (status) => setUpperChecked(status);
    const handleNumberChange = (status) => setNumberChecked(status);
    const handleSymbolChange = (status) => setSymbolChecked(status);

    const generatePassword = (length) => {

        if (length <= 50) {

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const alpha = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
            const upper = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
            const symbols = Array.from({ length: 15 }, (_, i) => String.fromCharCode(33 + i));
            const numbers = Array.from({ length: 10 }, (_, i) => i);

            let selectedCharacters = alpha;

            if (upperChecked) selectedCharacters = selectedCharacters.concat(upper);
            if (numberChecked) selectedCharacters = selectedCharacters.concat(numbers);
            if (symbolChecked) selectedCharacters = selectedCharacters.concat(symbols);

            let password = '';

            for (let i = 0; i < length; i++) password += getRandomItem(selectedCharacters);

            password = password.split('').sort(() => Math.random() - 0.5).join('');

            setPw(password);
            displayRef.current.textContent = password;

            return pw;

        }

    }

    const handlePasswordLengthChange = (value) => setPasswordLength(parseInt(value));
    const copyPassword = () => navigator.clipboard.writeText(displayRef.current.textContent);

    return(
        <div className="flex col pwg_spacer">

            <div className="flex center pwg_display">

                <p ref={displayRef}></p>

                <span className="flex center icon" onClick={copyPassword}><FontAwesomeIcon icon={faCopy} /></span>

            </div>

            <div className="flex center pwg_info_line">

                <p>Maximum Length: 50 characters</p>

            </div>

            <div className="flex center pwg_line">

                <div className="flex center pwg_text_input">

                    <InputText type="number" placeholder="Password Length" charLength={4} onChange={handlePasswordLengthChange} />

                </div>

            </div>

            <div className="flex center pwg_line">

                <div className="flex row pwg_input_line">

                    <p className="flex">Use Uppercase</p>

                    <InputCheckBox id="upper_input" status={upperChecked} onChange={handleUpperChange} />

                </div>

                <div className="pwg_divider"></div>

            </div>

            <div className="flex center pwg_line">

                <div className="flex row pwg_input_line">

                    <p className="flex">Use Numbers</p>

                    <InputCheckBox id="number_input" status={numberChecked} onChange={handleNumberChange} />

                </div>

                <div className="pwg_divider"></div>

            </div>

            <div className="flex center pwg_line">

                <div className="flex row pwg_input_line">

                    <p className="flex">Use Symbols</p>

                    <InputCheckBox id="symbol_input" status={symbolChecked} onChange={handleSymbolChange} />

                </div>

                <div className="pwg_divider"></div>

            </div>

            <div className="flex row center pwg_line">

                <Button text="Generate" onClick={() => generatePassword(passwordLength)} />

            </div>

        </div>
    )

}

export default PasswordGen;