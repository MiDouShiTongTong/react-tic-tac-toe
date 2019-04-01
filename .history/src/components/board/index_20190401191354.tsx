import React from 'react';
import './index.scss';

interface Props {}
interface State {}

export default class Board extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    return <section className="board-container">123</section>;
  };
}
