import React from 'react';
import SquareList from './components/square-list';
import PlayerInfo from './components/player-info';
import './App.scss';

interface Props {}

interface State {
  squareList: any[];
  stepCount: number;
  historyList: any[];
}

export default class App extends React.Component<Props, State> {
  public constructor(props: any) {
    super(props);
    this.state = {
      squareList: new Array(9).fill(null),
      stepCount: 0,
      historyList: new Array(9).fill({})
    };
  }

  public getCurrentPlayer = (): string => {
    const { stepCount } = this.state;
    return stepCount % 2 === 0 ? 'X' : 'O';
  };

  public handlerSquareClick = (pos: any, info: object) => {
    const { state } = this;
    if (info === null) {
      const newHistory = state.history;
      // 保存当前历史记录
      newHistory[pos] = {
        pos,
        stepCount: state.stepCount,
        player: this.getCurrentPlayer()
      };
      this.setState(prevState => ({
        historyList: newHistory,
        stepCount: prevState.stepCount + 1
      }));
      console.log(this.state);
    }
  };

  public render = (): JSX.Element => {
    const { state } = this;
    return (
      <div className="app-container">
        <div className="left-container">
          <SquareList
            squareList={state.squareList}
            handlerSquareClick={this.handlerSquareClick}
          />
        </div>
        <div className="right-container">
          <PlayerInfo currentPlayer={this.getCurrentPlayer()} />
          <HistoryList history={state.historyList} />
        </div>
      </div>
    );
  };
}
