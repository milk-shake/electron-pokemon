import React from 'react';
import ReactDOM from 'react-dom';

export default class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div class="loading">
      <span class="ion ion-load-b"></span>
    </div>
  }
}
