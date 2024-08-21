import './App.css';
import Slide from './components/Slide';
import Tabs from './components/Tabs';

function App() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center overflow-x-clip">
        <Slide/>
      </div>
      <Tabs/>
    </div>
  );
}

export default App;
