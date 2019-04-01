import React from 'react';
import Square from '../square';
import './index.scss';

interface Props {
  squareList: any[];
  handlerSquareClick: (pos: any, info: object) => void;
}
interface State {}

export default class SquareList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public generateSquare(pos: any) {
    const { props } = this;
    return (
      <Square
        pos={pos}
        info={props.squareList[pos]}
        handlerSquareClick={props.handlerSquareClick}
      />
    );
  }

  public render = (): JSX.Element => {
    return (
      <section className="board-container">
        <div className="row">
          {this.generateSquare(0)}
          {this.generateSquare(1)}
          {this.generateSquare(2)}
        </div>
        <div className="row">
          {this.generateSquare(3)}
          {this.generateSquare(4)}
          {this.generateSquare(5)}
        </div>
        <div className="row">
          {this.generateSquare(6)}
          {this.generateSquare(7)}
          {this.generateSquare(8)}
        </div>
      </section>
    );
  };
}
