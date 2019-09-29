import * as React from 'react';
import { Button, Row  } from 'antd';

interface IProps {
}

interface IState {
  userName: string,
  password: string
}

class TestComponents extends React.Component<IProps, IState> {
  render() {
    return (
      <Row>
        <div className="unique" >
        </div>
        <Button>这是一个Button</Button>
      </Row>
    );
  }
}

export default TestComponents;
