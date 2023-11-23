import { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        todo: '',
        description: '',
      },
      todoList: [
        {
          todo: 'makan',
          description: 'Makan nasi padang',
        },
        {
          todo: 'minum',
          description: 'air putih',
        },
      ],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const todos = [...this.state.todoList]; // ambil list yang tersimpan
    todos.push(this.state.form); // masukan state data yang sudah tersimpan
    this.setState({
      form: {
        todo: '', //reset isi 
        description: '', // reset deskripsi
      },
      todoList: todos, //menyimpan hasil todos yang di sudah di push
    });
  };

  handleDelete = (todo) => {
    // const todos = [...this.state.todoList]
    // todos.slice(0,-1)
    // this.setState({
    //   form: {
    //     todo: '',
    //     description: ''
    //   },
    //   todoList: todos
    // })

    if(confirm()){
      const filterTodo = [...this.state.todoList].filter(
        (value) => value.todo !== todo.todo
      )
  
      this.setState({
        ...this.state,
        todoList : filterTodo
      })
    }
  }

  render() {
    return (
      <>
        <div className="container mt-4">
          <form onSubmit={this.handleSubmit}>
            <div className="mt-4">
              <label htmlFor="todo" className="form-label">
                Todo
              </label>
              <input
                name="todo"
                type="text"
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                onChange={this.handleChange}
                className="form-control mt-2"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-primary mt-2" type="submit">
                Save
              </button>
            </div>
          </form>
          <hr />
          <table className="table">
            <thead className="table-warning">
              <tr>
                <th>#</th>
                <th>Todo</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divide">
              {this.state.todoList.map((todo, index) => {
                return (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.description}</td>
                    <td>
                      <button className="btn btn-danger bi bi-trash-fill" onClick={()=>this.handleDelete(todo)}></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <p className="mt-2">Todo: {this.state.form.todo}</p>
          <p>Description: {this.state.form.description}</p> */}
        </div>
      </>
    );
  }
}
