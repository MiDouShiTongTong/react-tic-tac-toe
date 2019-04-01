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

  public isWin = (): boolean => {
    const { state } = this;
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    if (state.squareList[0] === 'X') {
    }
    return false;
  };

  public handlerSquareClick = (pos: any, info: object) => {
    const { state } = this;
    if (info === null) {
      // 已经赢了, 不错任何操作
      if (this.isWin()) {
        return;
      }
      // 新的历史记录
      // 截取到 stepCount, 因为改变历史记录会改变 stepCount
      const newHistoryList = state.historyList.slice(0, state.stepCount);
      newHistoryList.push({
        stepCount: state.stepCount,
        player: this.getCurrentPlayer(),
        pos
      });
      // 新的方框记录
      const newSquareList = state.squareList;
      newHistoryList.forEach(
        (history: any) => (newSquareList[history.pos] = history.player)
      );
      // 保存当前历史记录, 以及步数
      this.setState(prevState => ({
        stepCount: prevState.stepCount + 1,
        squareList: newSquareList,
        historyList: newHistoryList
      }));
      // 输赢判断
      this.isWin();
    }
  };

  public handlerHistoryClick = (historyItem: any): void => {
    // 新的方框记录
    const { state } = this;
    const newSquareList: any = state.squareList;
    state.historyList.forEach((history: any) => {
      if (history.stepCount <= historyItem.stepCount) {
        newSquareList[history.pos] = history.player;
      } else {
        newSquareList[history.pos] = null;
      }
    });
    this.setState({
      stepCount: historyItem.stepCount + 1,
      squareList: newSquareList
    });
  };

  public handlerRestartClick = (): void => {
    this.setState({
      stepCount: 0,
      squareList: new Array(9).fill(null),
      historyList: []
    });
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
          <HistoryList
            historyList={state.historyList}
            handlerHistoryClick={this.handlerHistoryClick}
            handlerRestartClick={this.handlerRestartClick}
          />
        </div>
      </div>
    );
  };
}
