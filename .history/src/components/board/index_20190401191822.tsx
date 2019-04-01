import React from 'react';
import './index.scss';

interface Props {
  squareList: any[];
}
interface State {}

export default class Board extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public generateSquare(pos) {
    const { props } = this;
    return <Square pos={pos} info={props.squareList[pos]} />;
  }

  public render = (): JSX.Element => {
    return (
      <section className="board-container">
        <div className="row" />
      </section>
    );
  };
}
