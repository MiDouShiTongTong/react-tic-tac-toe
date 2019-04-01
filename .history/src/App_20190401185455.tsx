import React from 'react';
import './App.scss';

interface Props {}

interface State {}
export default class App extends React.Component<Props, State> {
  public constructor(props: any) {
    super(props);
    this.state = {
      square: new Array(9).fill(null),
      stepCount: 0,
      history: []
    };
  }

  public getCurrentPlayer = () => {
    const { stepCount } = this.state;
    return stepCount % 2 === 0 ? 'X' : 'O';
  };

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
