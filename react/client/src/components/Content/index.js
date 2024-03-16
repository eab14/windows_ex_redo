import Window from '../Window';
import { useWindowsEX } from '../../context/WindowContext';

const Content = () => {

  	const { windows, status } = useWindowsEX();
	const array = windows.filter(window => status.find(([windowName, status]) => windowName === window && status === "max")).map(window => <Window key={window} selected={window} />);

	return (

		<div id="content_spacer" className="flex row wrap">
			{ array }
		</div>

	);

}

export default Content;