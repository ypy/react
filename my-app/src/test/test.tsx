import * as React from 'react';
import './test.scss';


class Test extends React.Component {
    public render() {
      return (
        <div className="Header">
            <span className="App-title">test to React</span>
            <span className="header-tools">
            <i className="material-icons">redo</i>
            </span>
        </div>
      );
    }
  }
  
  export default Test;
  