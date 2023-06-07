
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TaskApp from './Components/TaskManager/TastManager';

function App() {
  return (
    <div className='app'>
      <Header />
      <TaskApp />
      <Footer/>
    </div>
  );
}

export default App;
