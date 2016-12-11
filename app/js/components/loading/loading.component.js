import React from 'react';
import ReactDOM from 'react-dom';

export default class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="loading">
      <span className="ion ion-load-b"></span>
    </div>
  }
}
