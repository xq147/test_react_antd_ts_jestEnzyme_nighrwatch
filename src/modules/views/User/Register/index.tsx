/**
 * @description 注册界面
 * @author cnn
 * **/
import React from 'react';
import { Button, Input, Row } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Ajax from '../../../../utils/Ajax';

interface IProps {
}

interface IState {
  userName: string,
  password: string
}

export class Register extends React.Component<RouteComponentProps & IProps, IState> {
  public readonly state: Readonly<IState> = {
    userName: '',
    password: ''
  };

  public componentDidMount(): void {
  }

  private register = () => {
    const { userName, password } = this.state;
    let params = {
      username: userName,
      password
    };
    Ajax.post('/messageBox/user/register/', params, { dataType: 'json' }, (xhr: any, data: any) => {
      if (data.flag === 0) {
        const urlObj = {
          pathname: '/Home'
        };
        this.props.history.push(urlObj);
      }
    });
  };

  public render(): React.ReactNode {
    const { userName, password } = this.state;
    return (
      <Row style={{ width: 500, margin: 20 }}>
        <Input placeholder="请输入用户名" value={userName} onChange={(e) => this.setState({ userName: e.target.value })} style={{ marginBottom: 20 }} />
        <Input placeholder="请输入密码" value={password} onChange={(e) => this.setState({ password: e.target.value })} style={{ marginBottom: 20 }} />
        <Button type="primary" style={{ width: 500 }} onClick={this.register}>注册</Button>
      </Row>
    );
  }
}

export default withRouter(Register);
