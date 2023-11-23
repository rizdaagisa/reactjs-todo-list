import { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      description : '',
    };
  }

  handleTodoChange = (e) => {
    this.setState({
      ...this.state,
      todo: e.target.value,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      ...this.state,
      description: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="container mt-4">
          <form>
            <div className='mt-4'>
              <label htmlFor="todo" className="form-label">
                Todo
              </label>
              <input
                type="text"
                onChange={this.handleTodoChange}
                className="form-control"
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea onChange={this.handleDescriptionChange} className='form-control mt-2' name="description" id="description" cols="30" rows="10"></textarea>
            </div>
          </form>
          <hr />
          <p className="mt-2">Todo: {this.state.todo}</p>
          <p>Description: {this.state.description}</p>
        </div>  
      </>
    );
  }
}
