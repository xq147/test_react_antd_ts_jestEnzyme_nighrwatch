/**
 * @author xq
 * @createTime 2019/9/9
 * @fileName jestFuction
 * @Description: jest单元测试案例 测试函数方法
 */
import * as React from 'react';
import { Button } from 'antd';

interface IProps {
}

interface IState {
}

class JestFuction extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
  };

  public componentDidMount(): void {
  }

  static sum(a: number, b: number) {
    return a+b;
  }

  static  getAuthor(name: string, age: number) {
    return {
      name: name,
      age: age,
    }
  }

  static getIntArray(num: any) {
    if (!Number.isInteger(num)) {
      throw Error('"getIntArray"只接受整数类型的参数');
    };
    let result = [];
    for (let i = 0, len = num; i < len; i++) {
      result.push(i);
    };
    return result;
  }

  render() {
    return (
      <Button>这是一个Button</Button>
    );
  }


}

export default JestFuction;
