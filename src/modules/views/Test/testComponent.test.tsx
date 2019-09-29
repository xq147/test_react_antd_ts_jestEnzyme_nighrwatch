import React from 'react';
import { shallow } from 'enzyme';
import TestComponents from './';

describe('react组件测试',()=>{

  it('应该有一个 Button', () => {
    const wrapper = shallow(<TestComponents />);
    expect(wrapper.find('Button').length).toBe(1);
  });
  // 浅渲染shallow API https://airbnb.io/enzyme/docs/api/shallow.html
  // 1: .find(selector) => ShallowWrapper
  // 2: .findWhere(predicate) => ShallowWrapper
  // 3: .filter(selector) => ShallowWrapper
  // 4: .filterWhere(predicate) => ShallowWrapper
  // 5: .hostNodes() => ShallowWrapper
  // 6: .contains(nodeOrNodes) => Boolean
  // 7: .containsMatchingElement(node) => Boolean
  // .......

  // 完成的Dom渲染 API https://airbnb.io/enzyme/docs/api/shallow.html

  // it('calls componentDidMount', () => {
  //   sinon.spy(Foo.prototype, 'componentDidMount');
  //   const wrapper = mount(<Foo />);
  //   expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
  //   Foo.prototype.componentDidMount.restore();
  // });



})



