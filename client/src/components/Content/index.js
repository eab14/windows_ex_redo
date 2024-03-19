import { useWindowsEX } from '../../context/WindowContext';

const Content = () => {

    const { windows, status } = useWindowsEX();
	const array = windows.filter(w => status.find(([name, status]) => name === w.props.selected && status === "max")).map(w => w);

    return (
        <div id="content_spacer" className="flex row wrap">

            { array }

        </div>
    );
};

export default Content;