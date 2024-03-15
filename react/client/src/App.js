import './assets/css/reset.css';
import './assets/css/style.css';
import Content from './components/Content';

import Nav from './components/Nav';

function App() {
  return (
    <main className="flex">

      <Nav />
      <Content />

    </main>
  );
}

export default App;
