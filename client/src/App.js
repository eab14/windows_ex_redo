import './assets/css/reset.css';
import './assets/css/style.css';

import Content from './components/Content';
import Nav from './components/Nav';
import Taskbar from './components/Taskbar';
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
					<Taskbar />
					</section>	

			</AuthProvider>

			</WindowProvider>

		</main>
	);
  
}

export default App;
