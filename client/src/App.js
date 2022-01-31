import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import Update from './views/Update';
import PetForm from './components/PetForm';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/api/pet/new">
          <PetForm />
        </Route>

        <Route exact path="/api/pets/:id">
          <Detail />
        </Route>

        <Route exact path="/api/pets/:id/edit">
          <Update />
        </Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
