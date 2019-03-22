import React, { Component } from 'react';

export default class Task extends Component {
  getStyle = () => {
    return {
      background: this.props.task.priority,
      borderRadius: '50%',
      height: ' 25px',
      width: '25px'
    };
  };

  render() {
    const { id, title } = this.props.task;

    return (
      <div>
        <li className="list-group-item d-flex justify-content-between mb-2">
          <div className="circle" style={this.getStyle()} />
          {title}
          <input
            type="checkbox"
            className="float-right"
            onChange={this.props.markComplete.bind(this, id)}
          />
        </li>
      </div>
    );
  }
}
