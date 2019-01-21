import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1>#Todo Stuff!</h1>
            <AppRouter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
