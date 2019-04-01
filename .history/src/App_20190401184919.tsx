import React from 'react';
import './App.scss';

export default class App extends React.Component {
  public render = (): JSX.Element => {
    return (
      <div className="container">
        <div className="left-container" />
        <div className="right-container">
          <PlayerInfo />
          <History />
        </div>
      </div>
    );
  };
}
