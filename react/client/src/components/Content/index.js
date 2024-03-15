import Taskbar from '../Taskbar';
import Window from '../Window';

const Content = () => {

  return (
    <section className="flex col">

        <div id="content_spacer" className="flex row wrap">

          <Window />

        </div>

        <Taskbar />

    </section>
  );

}

export default Content;