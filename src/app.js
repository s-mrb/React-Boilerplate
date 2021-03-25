import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.scss";
import 'normalize.css/normalize.css';


class Hi extends React.Component {
  render() {
    return <h2>Hi there!</h2>;
  }
}



ReactDOM.render(<Hi />, document.getElementById('app'));

