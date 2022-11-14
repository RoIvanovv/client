import React, {Component} from 'react';
import M from "materialize-css";

class Statistics extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let elem = document.querySelector('.collapsible.my');
    let instance = M.Collapsible.init(elem, {
      accordion: false
    });
  }

  render() {
    return (
      <div>
        <h3>Количество записей: <b>{this.props.State.count}</b></h3>
        <br/>
        <h4>Минимальная зарплата: <b>{this.props.State.statics[0]}</b></h4>
        <h4>Средняя зарплата: <b>{String(this.props.State.statics[1]).split('.')[0]}</b></h4>
        <h4>Максимальная зарплата: <b>{this.props.State.statics[2]}</b></h4>







        {/*<ul className="collapsible my">*/}
        {/*  <li>*/}
        {/*    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Area</div>*/}
        {/*    <div className="collapsible-body">*/}
        {/*      <table>*/}
        {/*        <thead>*/}
        {/*        <tr>*/}
        {/*          <th>area</th>*/}
        {/*          <th>count</th>*/}
        {/*        </tr>*/}
        {/*        </thead>*/}

        {/*        <tbody>*/}
        {/*        /!*{this.props.State.static1.map((item, i)=>{*!/*/}
        {/*        /!*  return (*!/*/}
        {/*        /!*    <tr>*!/*/}
        {/*        /!*      <td>{item[0]}</td>*!/*/}
        {/*        /!*      <td>{item[1]}</td>*!/*/}
        {/*        /!*    </tr>*!/*/}
        {/*        /!*  )*!/*/}
        {/*        /!*})}*!/*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <div className="collapsible-header"><i className="material-icons">place</i>Name</div>*/}
        {/*    <div className="collapsible-body">*/}
        {/*      <table>*/}
        {/*        <thead>*/}
        {/*        <tr>*/}
        {/*          <th>area</th>*/}
        {/*          <th>count</th>*/}
        {/*          <th>min</th>*/}
        {/*          <th>avg</th>*/}
        {/*          <th>max</th>*/}
        {/*        </tr>*/}
        {/*        </thead>*/}

        {/*        <tbody>*/}
        {/*        /!*{this.props.State.static2.map((item, i)=>{*!/*/}
        {/*        /!*  return (*!/*/}
        {/*        /!*    <tr>*!/*/}
        {/*        /!*      <td>{item[0]}</td>*!/*/}
        {/*        /!*      <td>{item[1]}</td>*!/*/}
        {/*        /!*      <td>{item[2]}</td>*!/*/}
        {/*        /!*      <td>{item[3]}</td>*!/*/}
        {/*        /!*      <td>{item[4]}</td>*!/*/}
        {/*        /!*    </tr>*!/*/}
        {/*        /!*  )*!/*/}
        {/*        /!*})}*!/*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </div>*/}
        {/*  </li>*/}

        {/*</ul>*/}
      </div>
    );
  }
}

export default Statistics;
