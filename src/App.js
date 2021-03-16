import React,{useState} from 'react';
import GamePage from './components/routes/Game';
import HomePage from './components/routes/Home';
const App = () => {
  const  [page, setPage] = useState('app');

const handleChangePage = (page) => {
  console.log('page: ', page);
  setPage(page);
  
}



  switch (page) {
    case 'app':
      return <HomePage handleChangePage={handleChangePage}/>;
    case 'game':
    return <GamePage handleChangePage={handleChangePage}/>;
    default:
      return <HomePage handleChangePage={handleChangePage}/>;
  }
  
}
export default App;