import './assets/css/reset.css';
import './assets/css/style.css';

import Content from './components/Content';
import Nav from './components/Nav';
import Taskbar from './components/Taskbar';
import Utilities from './components/Nav/Utilities';

import { AuthProvider } from './context/AuthContext';
import { WindowProvider } from './context/WindowContext';

function App() {

	return (
		<main className="flex">

			<WindowProvider>

			<AuthProvider>
					
					<Nav />
					<section className="flex col">
					<Content />
					<Utilities />
					<Taskbar />
					</section>	

			</AuthProvider>

			</WindowProvider>

		</main>
	);
  
}

export default App;
