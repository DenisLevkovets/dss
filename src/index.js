import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {store} from "./redux/store";
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import history from './history'
import Game from "./Game/Game";

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter history={history}>
          <Switch>
              <Route exact path={'/'} component={App}/>
              <Route path={'/game'} component={Game}/>
          </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
