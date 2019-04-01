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
    return (
      <section className="history-list-container">
        <span>历史记录</span>
        {props.historyList.length > 0 ? (
          <ul>
            {props.historyList.map(item => (
              <li key={item.setpCount}>123</li>
            ))}
          </ul>
        ) : null}
      </section>
    );
  };
}
