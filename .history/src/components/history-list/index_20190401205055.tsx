import React from 'react';
import './index.scss';

interface Props {
  historyList: any[];
}
interface State {}

export default class History extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    const { props } = this;
    return {
      props.historyList.length > 0
      ? (<section className="history-list-container">123</section>)
      : (<section className="history-list-container">123</section>)
    };
  };
}
