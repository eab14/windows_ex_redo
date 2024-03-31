import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useRef } from 'react';
import { gsap } from 'gsap';

const Search = (props) => {

    const iconRef = useRef();
    const inputRef = useRef();

    const animateInput = () => {
        gsap.to(iconRef.current, { left: "-10px", top: "-10px", fontSize: "18px", duration: 0.3 });
        gsap.to(inputRef.current, { left: "-8px", width: "140px", duration: 0.3 });
    }

    const unAnimateInput = () => {
        gsap.to(iconRef.current, { left: "4px", top: "0", fontSize: "16px", duration: 0.3 });
        gsap.to(inputRef.current, { left: "6px", width: "120px", duration: 0.3 });
    }

    const focusInput = () => inputRef.current.focus();

    return (
        <div className="flex row general_search_input" onClick={focusInput}>
            <span className="flex center" ref={iconRef}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <input ref={inputRef} type="text" placeholder="Toronto, CA" onFocus={animateInput} onBlur={unAnimateInput} />
        </div>
    )

}

export default Search;