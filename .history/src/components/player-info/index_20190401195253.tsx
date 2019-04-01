import React from 'react';
import './index.scss';

interface Props {
  history: any[];
}
interface State {}

export default class History extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    return <section className="player-info-container">历史记录</section>;
  };
}
