import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Section1 from './components/section1';
import Creation from './components/creation';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section1/>
      <Creation/>
      <Footer/>
    </div>
  );
}

export default App;
