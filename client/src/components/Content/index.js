import { useWindowsEX } from '../../context/WindowContext';

const Content = () => {

    const { windows } = useWindowsEX();
    
    const array = windows.filter(w => w.status === "max");

    return (
        <div id="content_spacer" className="flex row wrap">

            { array.map(w => w.window) }

        </div>
    );
};

export default Content;