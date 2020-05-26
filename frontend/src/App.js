import React from 'react';
import logo from './logo.svg';
import './App.css';
import Producto from './components/Producto';
import Editar from './components/Editar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/productos">Productos</Link>
          <section >
            <Switch>
                <Route path="/productos">
                  <Producto/>
                </Route>
                <Route exact path="/editar/:id" component={Editar}>
                </Route>
              </Switch>                        
          </section>
        </header>
      </div>
    </Router>    
        
  );
}

export default App;
