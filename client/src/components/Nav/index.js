import './index.css';

import NavButton from '../NavButton';
import Logo from '../Logo';

const Nav = () => {

  // To be changed to the logged in users settings
  const array = [ "Account", "Files", "Messages", "Database", "Settings", "Calendar", "Weather", "Calculator" ];

  return (

    <nav className="flex col">

        <Logo />

        <div className="flex divider"></div>

        <div className="flex col nav_spacer">

            { array.map((button, index) => <NavButton key={button} text={button} type="nav"/>) }

        </div>

        <div className=" flex col nav_footer_spacer">

			<NavButton key="Utilities" text="Utilities" type="footer" />

			<div className="flex divider"></div>

            <a href="https://github.com/eab14" target="_blank" rel="noopener noreferrer">

                <NavButton key="Github" text="Github" type="footer" />

            </a>
            
            <span className="accent"></span>

            <div hidden>Copyright &copy; Evan Boileau - 2024</div>

        </div>

    </nav>
  );

}

export default Nav;