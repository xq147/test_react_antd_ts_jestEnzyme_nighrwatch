import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

function Loading() {
  return <Spin />;
}

const Register = Loadable({
  loader: () => import('@views/User/Register'),
  loading: Loading
});

const Home = Loadable({
  loader: () => import('@views/Home'),
  loading: Loading
});

const TestComponents = Loadable({
  loader: () => import('@views/Test'),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Test" component={TestComponents} />
        </Switch>
      </Router>
    );
  }
}
export default App;
