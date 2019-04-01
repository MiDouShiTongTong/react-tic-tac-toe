import React from 'react';
import './index.scss';

interface Props {
  historyList: any[];
  handlerHistoryClick: (historyItem: any) => void;
  handlerRestartClick: () => void;
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
            <li onClick={() => props.handlerRestartClick()}>重新开始</li>
            {props.historyList.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => props.handlerHistoryClick(item)}
                >
                  #{item.stepCount + 1}, 棋手{item.player}, 下到位置
                  {item.pos + 1}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    );
  };
}
