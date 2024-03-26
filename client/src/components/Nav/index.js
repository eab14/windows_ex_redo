import './index.css';

import NavButton from '../NavButton';
import Logo from '../Logo';

const Nav = () => {

  return (

    <nav className="flex col">

        <Logo />

        <div className="flex divider"></div>

        <div className="flex col nav_spacer">
          
            <NavButton text="Account" />
            <div className="flex divider"></div>
            <NavButton text="Files" />
            <div className="flex divider"></div>
            <NavButton text="Messages" />
            <div className="flex divider"></div>
            <NavButton text="Database" />
            <div className="flex divider"></div>
            <NavButton text="Settings" />
            <div className="flex divider"></div>

            {/* <NavButton text="Calendar" />
            <div className="flex divider"></div>
            <NavButton text="Weather"/>
            <div className="flex divider"></div>
            <div className="flex divider"></div>
            <NavButton text="Music" />
            <div className="flex divider"></div>
            <NavButton text="Video" />
            <div className="flex divider"></div>
            <NavButton text="Gallery" />
            <div className="flex divider"></div>
            <NavButton text="Calculator" />
            <div className="flex divider"></div> */}

        </div>

        <div className=" flex col nav_footer_spacer">

            <div className="flex divider"></div>

            <a href="https://github.com/eab14" target="_blank" rel="noopener noreferrer">

                <NavButton text="Github" />

            </a>
            
            <span className="accent"></span>

            <div hidden>Copyright &copy; Evan Boileau - 2024</div>

        </div>

    </nav>
  );

}

export default Nav;