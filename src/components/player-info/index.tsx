import React from 'react';
import './index.scss';

interface Props {
  win: any;
  currentPlayer: string;
}
interface State {}

export default class History extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    const { props } = this;
    return (
      <section className="player-info-container">
        {props.win ? <p>{props.win}胜利</p> : ''}
        <p>下一步: {props.currentPlayer}</p>
      </section>
    );
  };
}
