import './assets/css/reset.css';
import './assets/css/style.css';

import Content from './components/Content';
import Nav from './components/Nav';
import Taskbar from './components/Taskbar';

import { WindowProvider } from './context/WindowContext';

function App() {

	return (
		<main className="flex">

			<WindowProvider>
				<Nav />
				<section className="flex col">
				<Content />
				<Taskbar />
				</section>
				
			</WindowProvider>

		</main>
	);
  
}

export default App;
