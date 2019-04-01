import React from 'react';
import SquareList from './components/square-list';
import HistoryList from './components/history-list';
import PlayerInfo from './components/player-info';
import './App.scss';

interface Props {}

interface State {
  squareList: any;
  stepCount: number;
  historyList: any;
}

export default class App extends React.Component<Props, State> {
  public constructor(props: any) {
    super(props);
    this.state = {
      stepCount: 0,
      squareList: new Array(9).fill(null),
      historyList: []
    };
  }

  public getCurrentPlayer = (): string => {
    const { stepCount } = this.state;
    return stepCount % 2 === 0 ? 'X' : 'O';
  };

  public getSquareList = (squareList: any[], historyList: any[]): any => {
    return newSquareList;
  };

  public handlerSquareClick = (pos: any, info: object) => {
    const { state } = this;
    if (info === null) {
      // 新的历史记录
      const newHistoryList = state.historyList;
      newHistoryList.push({
        stepCount: state.stepCount,
        player: this.getCurrentPlayer(),
        pos
      });
      // 新的方框记录
      const newSquareList = state.squareList;
      historyList.forEach(
        history => (newSquareList[history.pos] = history.player)
      );
      // 保存当前历史记录, 以及步数
      this.setState(prevState => ({
        historyList: newHistoryList,
        stepCount: prevState.stepCount + 1,
        squareList: this.getSquareList(prevState.squareList, newHistoryList)
      }));
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
          <HistoryList historyList={state.historyList} />
        </div>
      </div>
    );
  };
}
