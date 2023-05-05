import Header from './components/Header';
import TabBar from './components/TabBar';

import './App.css';
import WorldTimePage from './pages/WorldTime';

function App() {
  return (
    <div className="app">
      <Header title="스톱워치" />
      <WorldTimePage />
      <TabBar />
    </div>
  );
}

export default App;
