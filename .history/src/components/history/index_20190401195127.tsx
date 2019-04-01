import React from 'react';
import './index.scss';

interface Props {}
interface State {}

export default class History extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    return <section className="history-container">历史记录</section>;
  };
}
