import React from 'react';
import './index.scss';

interface Props {
  currentPlayer: string;
}
interface State {}

export default class History extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    console.log(this.props);
    return <section className="player-info-container">玩家信息</section>;
  };
}
