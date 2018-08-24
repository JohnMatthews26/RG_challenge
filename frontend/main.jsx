import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

class Root extends React.Component {
  render() {
    return(
      <div>
        John
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
