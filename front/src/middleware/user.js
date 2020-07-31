import axios from 'axios';
import {
  LOGIN,
  failLogin,
  setUser,
  AUTOLOG,
  unsetUser,
  LOGOUT,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state;
<<<<<<< .merge_file_a21064
      axios.post('http://localhost:3000/login', { username: email, password, login: true }, { headers: { 'Content-Type': 'application/json' } })
=======
      axios.post('http://54.173.92.69/api/login', { username: email, password, login: true }, { headers: { 'Content-Type': 'application/json' } })
>>>>>>> .merge_file_a18632
        .then((response) => {
          console.log(response);
          localStorage.setItem('slug', response.data.slug);
          localStorage.setItem('token', response.data.token);
          store.dispatch(setUser(response.data.username));
        })
        .catch((error) => {
          console.log(error.repsonse);
          const actionToDispatch = failLogin(error.response);
          store.dispatch(actionToDispatch);
        });
      break;
    }
    case AUTOLOG: {
      const token = localStorage.getItem('token');
      //const token = 'd6081bdf250ec5c06a1bc2dd28bba8b0';
      const slug = localStorage.getItem('slug');
<<<<<<< .merge_file_a21064
      axios.get(`http://localhost:3000/user/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
=======
      axios.get(`http://54.173.92.69/api/user/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
>>>>>>> .merge_file_a18632
        .then((response) => {
          console.log(response);
          store.dispatch(setUser(response.data.username));
        })
        .catch((error) => {
          console.log(error.response);
        });

      break;
    }
    case LOGOUT: {
      store.dispatch(unsetUser());
      break;
    }

    default:
      next(action);
      break;
  }
};
