import React from 'react';
import './App.scss';

interface Props {}

interface State {
  squareList: any[];
  stepCount: number;
  history: any[];
}

export default class App extends React.Component<Props, State> {
  public constructor(props: any) {
    super(props);
    this.state = {
      squareList: new Array(9).fill(null),
      stepCount: 0,
      history: []
    };
  }

  public getCurrentPlayer = () => {
    const { stepCount } = this.state;
    return stepCount % 2 === 0 ? 'X' : 'O';
  };

  public render = (): JSX.Element => {
    const { state } = this;
    return (
      <div className="container">
        <div className="left-container">
          <Board />
        </div>
        <div className="right-container">
          <PlayerInfo currentPlayer={this.getCurrentPlayer()} />
          <History history={state.history} />
        </div>
      </div>
    );
  };
}
