import MainTable from "./pages/MainTable";
import Statistics from "./pages/Statistics";
import Header from "./components/Header";
import React, {Component, useState} from 'react';
import M from 'materialize-css'
import './components/Components.scss'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      static1: [],
      static2: [],
      statics: [],
    }
  }

  componentDidMount() {
    let tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {});
  }

  render() {
    return (
      <div className="App">
        <Header setLoad={(event) => console.log(event)}/>
        <div className="main">
          <div className="mcontainer">
            <ul id="tabs-swipe-demo" className="tabs">
              <li className="tab col s3"><a className="active green-text text-darken-3" href="#table">Table</a></li>
              <li className="tab col s3"><a className="green-text text-darken-3" href="#stats">Statistic</a></li>
            </ul>
            <div id="table" className="col s12"><MainTable State={this.state} setState={(e)=>this.setState(e)}/></div>
            <div id="stats" className="col s12"><Statistics State={this.state}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
