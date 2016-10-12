import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';

class Modal extends Component {
  // Use lifecycle method to create real modal
  componentDidMount() {
    // Create new div
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    // Append to body
    document.body.appendChild(this.modalTarget);
    this._render();
  }
  // Update modal
  componentWillUpdate() {
    this._render();
  }
  // Remove modal
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    // Clean up DOM
    document.body.removeChild(this.modalTarget);
  }

  // Render modal child elements into modalTarget
  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }
  render() {
    // return 'nothing'
    return <noscript />;
  }
}

export default Modal;
