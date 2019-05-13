import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      data: [],
      loading: false
    };
    this.getData = this.getData.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  getData(userId) {
    console.log(userId);
    this.setState({
      userId: userId,
      data: [],
      loading: true
    });
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ).then(json => {
      console.log(json.data);
      this.setState({
        data: json.data,
        loading: false
      });
    });
  }

  btnClick(e) {
    const userId = e.target.value;
    this.getData(userId);
  }

  componentDidMount() {
    this.getData(this.state.userId);
  }

  render() {
    const { data } = this.state;
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <div className={styles.app}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  <b>ID</b>
                </th>
                <th>
                  <b>Title</b>
                </th>
                <th>
                  <b>Body</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UserIdComponent name="1" onClick={this.btnClick} />
        <UserIdComponent name="2" onClick={this.btnClick} />
        <UserIdComponent name="3" onClick={this.btnClick} />
        <UserIdComponent name="4" onClick={this.btnClick} />
        <UserIdComponent name="5" onClick={this.btnClick} />
        <UserIdComponent name="6" onClick={this.btnClick} />
        <UserIdComponent name="7" onClick={this.btnClick} />
        <UserIdComponent name="8" onClick={this.btnClick} />
        <UserIdComponent name="9" onClick={this.btnClick} />
        <UserIdComponent name="10" onClick={this.btnClick} />
      </div>
    );
  }
}
const UserIdComponent = props => {
  return (
    <button onClick={props.onClick} value={props.name}>
      {props.name}
    </button>
  );
};

export default App;
