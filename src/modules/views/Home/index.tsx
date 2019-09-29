/**
 * @description 首页
 * @author cnn
 * **/
import React from 'react';
import { Row, Button } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps {
}

interface IState {
}

class Home extends React.Component<RouteComponentProps & IProps, IState> {
  public readonly state: Readonly<IState> = {
  };
  private toTest = () => {
    const urlObj = {
      pathname: '/Test'
    };
    this.props.history.push(urlObj);
  };

  public render(): React.ReactNode {
    return (
      <Row style={{ width: 500, margin: 20 }}>
        <Button onClick={this.toTest}>首页</Button>
      </Row>
    );
  }
}

export default withRouter(Home);