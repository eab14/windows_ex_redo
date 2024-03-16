import './index.css';
import './test.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Test from './Account/Test';
import Calendar from './Calendar';
import { useWindowsEX } from '../../context/WindowContext';

const Window = (props) => {

	const { status, setStatus } = useWindowsEX();
	const windowStatus = status.find(([ name ]) => name === props.selected);

	const minClick = () => setStatus(prevStatus => prevStatus.map(([name, currentStatus]) =>  name === props.selected ? [name, "min"] : [name, currentStatus]));
	const maxClick = () => setStatus(prevStatus => prevStatus.map(([name, currentStatus]) =>  name === props.selected ? [name, "max"] : [name, currentStatus]));
	const closeClick = () => setStatus(prevStatus => prevStatus.filter(([name]) => name !== props.selected));

	return (

		<>

			{ 
			
				(windowStatus && windowStatus[1] === "min") &&

					<div className="window flex col">

						<div className="flex row window_header">

							<span className="flex"></span>

							<h2>{props.selected}</h2>

							<div className="flex row window_utilities">
								
								<div className="flex center icon max" onClick={maxClick}><FontAwesomeIcon icon={faWindowMaximize} /></div> 
								<div className="flex center icon close" onClick={closeClick}><FontAwesomeIcon icon={faXmark} /></div>

							</div>

						</div>

					</div>
				
			}

			{ 
			
				(windowStatus && windowStatus[1] === "max") &&

					<div className="window flex col">

						<div className="flex row window_header">

							<span className="flex"></span>

							<h2>{props.selected}</h2>

							<div className="flex row window_utilities">

								<div className="flex center icon min" onClick={minClick}><FontAwesomeIcon icon={faMinus} /></div>
								<div className="flex center icon close" onClick={closeClick}><FontAwesomeIcon icon={faXmark} /></div>

							</div>

						</div>

						<div className="flex col window_content">

							{ props.selected === "Account" && <Test /> }
							{ props.selected === "Calendar" && <Calendar /> }

						</div>

					</div>
				
			}

		</>

  );

}

export default Window;
