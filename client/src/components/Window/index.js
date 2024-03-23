import './index.css';
import './test.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

import Calendar from './Calendar';
import Music from './Music';
import Database from './Database';
import Settings from './Settings';
import Messages from './Messages';
import Calculator from './Calculator';
import Gallery from './Gallery';
import Account from './Account';
import PasswordGen from './PasswordGen';
import Weather from './Weather'

import { useWindowsEX } from '../../context/WindowContext';


const Window = (props) => {

	const { status, setStatus, setWindows } = useWindowsEX();
	const ws = status.find(([ name ]) => name === props.selected);

	const minClick = () => {

		setStatus(prev => {

			const updated = prev.map(([name, current]) => name === props.selected ? [name, "min"] : [name, current]);
			return updated;

		});

	};

	const maxClick = () => {

		setStatus(prev => {

			const updated = prev.map(([name, current]) => name === props.selected ? [name, "max"] : [name, current]);
			return updated;
  
		});

	}

	const closeClick = () => {

		setStatus(prevStatus => prevStatus.filter(([name]) => name !== props.selected));
		setWindows(prevWindows => prevWindows.filter(window => window.props.selected !== props.selected));

	};

	return (

		<>

			<div className="window flex col">

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
					{ props.selected === "Music" && <Music /> }
					{ props.selected === "Database" && <Database /> }
					{ props.selected === "Settings" && <Settings /> }
					{ props.selected === "Messages" && <Messages /> }
					{ props.selected === "Calculator" && <Calculator /> }
					{ props.selected === "Gallery" && <Gallery /> }
					{ props.selected === "Password Generator" && <PasswordGen /> }
					{ props.selected === "Weather" && <Weather /> }

				</div>

			</div>

		</>

  );

}

export default Window;
