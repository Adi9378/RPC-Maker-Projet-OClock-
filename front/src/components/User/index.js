import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PropTypes from 'prop-types';
import Login from '../../containers/User/Login';
import './styles.scss';

const User = ({ isLogged }) => {
  return (
    <div className="container">
      {isLogged === true ? (
        <div className="user">
          <div className="user__nav">
            <span>AVATAR</span>
            <Link to="/user/pc">Mon PC</Link>
            <Link to="/user/infos">mes informations</Link>
            <Link to="/user/message">Messagerie</Link>
          </div>
          <div className="user__body">
            <Switch>
              <Route exact path="/user">
                Bienvenue dans votre espace membre
              </Route>
              <Route path="/user/pc">
                Votre pc
              </Route>
              <Route path="/user/infos">
                vos infos
              </Route>
              <Route path="/user/message">
                Vos messages
              </Route>
            </Switch>
          </div>
        </div>
      ) : (
        <Redirect to={{pathname:"/login"}}/>
      )}
    </div>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default User;
