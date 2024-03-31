import './index.css';
import './test.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

import { /*useLayoutEffect,*/ useRef } from 'react';
import { useWindowsEX } from '../../context/WindowContext';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";

import Calendar from './Calendar';
import Music from './Music';
import Database from './Database';
import Settings from './Settings';
import Messages from './Messages';
import Calculator from './Calculator';
import Gallery from './Gallery';
import Account from './Account';
import PasswordGen from './PasswordGen';
import Weather from './Weather';
import Files from './Files';
import Terminal from './Terminal';
import EasterEgg from './EasterEgg';

gsap.registerPlugin(Draggable);

const Window = (props) => {

	const windowRef = useRef();

	const { status, setStatus, openWindow, closeWindow } = useWindowsEX();
	const ws = status.find(([ name ]) => name === props.selected);

	const minClick = () => {

		setStatus(prev => {

			const updated = prev.map(([name, current]) => name === props.selected ? [name, "min"] : [name, current]);
			return updated;

		});

	};

	const maxClick = () => openWindow(props.selected);
	const closeClick = () => closeWindow(props.selected);

	// useLayoutEffect(() => {

	// 	let ctx = gsap.context(() => {

	// 	  Draggable.create(windowRef.current, {
	// 		bounds: document.querySelector("section"),
	// 		type: "x,y",
	// 		liveSnap: {
	// 			points: [
	// 			  { x: 0, y: 0 },
	// 			  { x: 300, y: 0 },
	// 			  { x: 500, y: 0 },
	// 			],
	// 			radius: 100,
	// 		  },

	// 	});
	
	// 	}, );
		
	// 	return () => ctx.revert();

	// }, []);

	return (

		<>

			<div ref={windowRef} className="window flex col">

				<div className="flex row window_header">

					<span className="flex">
						<i className="m_diamond"></i>
						<i className="m_diamond"></i>
						<i className="m_diamond"></i>
					</span>

					<h2>{props.selected}</h2>

					<div className="flex row window_utilities">
						
						{ (ws && ws[1] === "max") && <div className="flex center icon min" onClick={minClick}><FontAwesomeIcon icon={faMinus} /></div> }
						{ (ws && ws[1] === "min") && <div className="flex center icon max" onClick={maxClick}><FontAwesomeIcon icon={faWindowMaximize} /></div> }
						<div className="flex center icon close" onClick={closeClick}><FontAwesomeIcon icon={faXmark} /></div>

					</div>

				</div>

				<div className={`flex col window_content ${ (ws[1] === "max") ? 'full' : 'none'}`}>

					{ props.selected === "Account" && <Account /> }
					{ props.selected === "Calendar" && <Calendar /> }
					{ props.selected === "Music" && <Music file={props.file} /> }
					{ props.selected === "Database" && <Database /> }
					{ props.selected === "Settings" && <Settings /> }
					{ props.selected === "Messages" && <Messages /> }
					{ props.selected === "Calculator" && <Calculator /> }
					{ props.selected === "Gallery" && <Gallery /> }
					{ props.selected === "Password Generator" && <PasswordGen /> }
					{ props.selected === "Weather" && <Weather /> }
					{ props.selected === "Files" && <Files /> }
					{ props.selected === "Terminal" && <Terminal /> }
					{ props.selected === "Easter Egg" && <EasterEgg /> }

				</div>

			</div>

		</>

  );

}

export default Window;
