import React from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SearchPage from './Pages/SearchPage';





function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
     <Route path="/search"><SearchPage/></Route>
     <Route path="/"><Home/> </Route>
     
     </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
