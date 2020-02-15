import React from 'react';

import css from './App.module.css';

export class App extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.fileTreeContainer}>
                    App
                </div>
            </div>
        );
    }
}
