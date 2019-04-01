import React from 'react';
import './App.scss';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render = (): JSX.Element => {
    return (
      <div className="container">
        <div className="left-container">
          <Board />
        </div>
        <div className="right-container">
          <PlayerInfo />
          <History />
        </div>
      </div>
    );
  };
}
