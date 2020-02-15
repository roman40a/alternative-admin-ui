import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import SignIn from '../module/sign-in/components/sign-in.component';
import { SignUp } from '../module/sign-up/components/sign-up.component';
import { Home } from '../module/home/components/home.component';

import css from './app.module.css';

export class App extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <Router>
                    <Switch>
                        <Route path="/sign-up" exact={true}>
                            <SignUp />
                        </Route>
                        <Route path="/sign-in" exact={true}>
                            <SignIn />
                        </Route>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        <Redirect to={'/'} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
