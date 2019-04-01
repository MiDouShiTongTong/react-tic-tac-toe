import React from 'react';
import './index.scss';

interface Props {
  pos: number;
  info: object;
}
interface State {}

export default class Board extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public getSquareTitle = () => {
    const { props } = this;
    let title = props.pos;
    if (props.info) {
      title = props.info;
    }
    return title;
  };

  public render = (): JSX.Element => {
    return (
      <section className="square-container">{this.getSquareTitle()}</section>
    );
  };
}
