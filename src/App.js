import bg2 from './img/bg2.jpg';

import bg3 from './img/bg3.jpg';
import {ReactComponent as logo } from './img/logo.svg';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import './App.css';
//urlBg
const color = `#e2e2e2`;

function App() {
 

  const title = "заголовок";
  const descr = "описание";
  return (

  <div className="App">
    <Header title={title} descr={descr} />
    <Layout   bg={bg2}/>
  <Layout title={title} descr={descr} color={color}/>
  <Layout   bg={bg3} />
  <Footer/>
  </div>

  );
}

export default App;
