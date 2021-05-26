/* eslint-disable max-len */
import api from 'src/api';

import {
  SUBMIT_LOGIN_FORM,
  loginRequest,
  loginSuccess,
  loginFail,
} from 'src/actions/users';
/* import {
  setUser,
  setLoadingState,
} from 'src/actions';*/
// import { userSetter } from 'core-js/fn/symbol';

/*
    Un middleware est une fonction qu'on va donner au store
    Le store s'en servira pour traduire des actions vers des effets (autre qu'une modification de state, pour ça il y a le reducer) par ex : du debug, des requetes ajax, des timers, ...
    L'objet action passera tour à tour dans chaque middleware puis arrivera enfin dans le reducer
    Dans un middleware on a accès à:
    - store : et à ses méthodes getState (lecture du state) et dispatch (émission d'intention)
    - next : la fonction qui dit explicitement si on laisse passer ou non une action, si on n'appelle pas next(action) dans le middleware l'action n'arrive pas au middleware/reducer suivant, si on l'appelle l'action passe au middleware/reducer suivant
    - action : l'objet action, l'intention qu'on a intercepté et qu'on va potentiellement traduire
*/
export default (store) => (next) => (action) => {
  // console.log('Passage dans le middleware', action);
  switch (action.type) {
    case SUBMIT_LOGIN_FORM: {
      store.dispatch(loginRequest());
      // store.dispatch(setLoadingState(true)); 
      const { email, password } = store.getState().users;
      api.post('https://agrilienback.herokuapp.com/user/login', {
       // header: {Authorization: `Bearer ${token}`},
        email,
        password,
      })
        // On returne les data de tout l'objet Result de axios
        // Pour l'avoir dans le then d'après
        .then(({data}) => {
          const userInfos = {
            name: data.name,
            first_name: data.first_name,
            email: data.email,
            role: data.role,
          }
          console.log(userInfos);
          store.dispatch(loginSuccess(userInfos));
          localStorage.setItem('userInfos', JSON.stringify(userInfos));
        },
        (err) => {
          console.log(err);
          store.dispatch(loginFail(err.message));
        }
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

