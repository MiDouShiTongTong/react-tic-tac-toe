import React from 'react';
import Board from './components/board';
import History from './components/history';
import PlayerInfo from './components/player-info';
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
      history: new Array(9).fill({})
    };
  }

  public getCurrentPlayer = (): string => {
    const { stepCount } = this.state;
    return stepCount % 2 === 0 ? 'X' : 'O';
  };

  public handlerSquareClick = (pos: any, info: object) => {
    console.log(pos, info);
    if (info === null) {
      const newHistory = this.state.history;
      newHistory[pos] = {
        pos,
        stepCount: prevState.stepCount,
        player: this.getCurrentPlayer()
      };
      this.setState(prevState => ({
        history: newHistory,
        stepCount: prevState.stepCount + 1
      }));
      console.log(this.state.history);
    }
  };

  public render = (): JSX.Element => {
    const { state } = this;
    return (
      <div className="app-container">
        <div className="left-container">
          <Board
            squareList={state.squareList}
            handlerSquareClick={this.handlerSquareClick}
          />
        </div>
        <div className="right-container">
          <PlayerInfo currentPlayer={this.getCurrentPlayer()} />
          <History history={state.history} />
        </div>
      </div>
    );
  };
}
