import React, { Suspense } from 'react';
// const Header = React.lazy(() => import("mpui/Header"));
import Header from 'mpui/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true,
    });
  }
  handleSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible,
    });
  }
  render() {
    return (
      <div>
           <Suspense fallback={"loading..."}>
        <Header />
      </Suspense>
      </div>
    );
  }
}
