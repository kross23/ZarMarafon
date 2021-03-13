import bg2 from './img/bg2.jpg';
import {ReactComponent as logo } from './img/logo.svg';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import './App.css';
//urlBg


function App() {
  const color = {
    color:`#e2e2e2`,
  };
  return (
    <div className="App">
      <Header />
      <Layout  bg2={bg2} />
      <Layout color={color} />
      <Layout  logo={logo} />
       
  
      <Footer/>
    </div>
  );
}

export default App;
