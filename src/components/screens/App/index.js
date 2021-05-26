// == Import npm
import React, { useEffect } from 'react';
import Farm from 'src/containers/Farm';
import ListFarms from 'src/containers/ListFarms';
import {
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';

// == Import
import './styles.scss';

function App() {

 // objet location lorsqu'on change d'URL
 const location = useLocation();

 // à chaque fois que location change, je veux exécuter le callback
 useEffect(() => {
    // on scroll en haut de la page
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Switch>
        <Route path="/farms">
          <ListFarms />
        </Route>
        <Route path="/farm/:id">
          <Farm />
        </Route>
      </Switch>
    </div>
  );
}
// == Export
export default App;
