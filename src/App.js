import Header from './components/layout/Header';
import './styles/App.css';
import Router from './router/Router'
import Footer from './components/layout/Footer';
import Home from './pages/Home';


function App() {
  return (
    <div className='wrapper'>
      <div className="top">
        <Header />
        <Router />
      </div>
      <Footer />
    </div>

  );
}

export default App;
