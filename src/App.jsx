// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors">
      <Navbar />
      <Header />
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl">Welcome to my portfolio</h1>
        <p className="text-lg">This looks like an old computer screen.</p>
        <h1 className="text-4xl">Твой сайт теперь в стиле киберпанка</h1>
      </div>
    </div>
  );
}

export default App;