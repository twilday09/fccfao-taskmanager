import React, { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'do laundry',
        completed: 'yes',
        priority: 'red'
      },
      {
        id: 2,
        title: 'buy milk',
        completed: 'no',
        priority: '#333'
      }
    ]
  };

  markComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    });
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-xs-10 col-md-8 mx-auto">
            <p>Hello World!</p>
            <TaskList
              tasks={this.state.tasks}
              markComplete={this.markComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
