import React from 'react';
import './index.scss';

interface Props {
  pos: any;
  info: object;
  handlerSquareClick: (pos: any, info: object) => void;
}
interface State {}

export default class Square extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public getSquareTitle = () => {
    const { props } = this;
    let title: any = '';
    if (props.info) {
      title = props.info;
    }
    return title;
  };

  public render = (): JSX.Element => {
    const { props } = this;
    return (
      <section
        className="square-container"
        onClick={() => props.handlerSquareClick(props.pos, props.info)}
      >
        {this.getSquareTitle()}
      </section>
    );
  };
}
