import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
     {/* <Button colorScheme='blue'>Button</Button> */}
     <Route path="/" component={HomePage} exact/>
     <Route path="/chats" component={Chat}/>
    </div>
  );
}

export default App;
