import Taskbar from '../Taskbar';
import Window from '../Window';
import { useWindowsEX } from '../../context/WindowContext';

const Content = () => {

  const { windows } = useWindowsEX();

  return (

    <section className="flex col">

        <div id="content_spacer" className="flex row wrap">

          { windows.map(window => <Window key={window} selected={window} />) }

        </div>

        <Taskbar />

    </section>

  );

}

export default Content;