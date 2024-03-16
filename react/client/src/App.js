import './assets/css/reset.css';
import './assets/css/style.css';

import Content from './components/Content';
import Nav from './components/Nav';
import { WindowProvider } from './context/WindowContext';

function App() {

  return (
    <main className="flex">

      <WindowProvider>
        <Nav />
        <Content />
      </WindowProvider>

    </main>
  );
  
}

export default App;
