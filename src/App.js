import React from 'react';
import { Provider } from "react-redux";
import stores  from './redux/Store'
import Home from './routes/home/views/home'

function App() {
  return (
    <Provider store={stores}>
      <Home />
    </Provider>
  )   
}

export default App;
