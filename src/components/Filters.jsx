import M from 'materialize-css'
import React, {Component} from 'react';
import './Components.scss'


class Filters extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let elem = document.querySelector('.collapsible.expandable');
    let instance = M.Collapsible.init(elem, {
      accordion: false
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems, {});
  }


  render() {
    return (
      <div className='Filter'>
        <ul className="collapsible expandable">
          <li>
            <div className="collapsible-header"><i className="material-icons">filter</i>Фильтры</div>
            <div className="collapsible-body">
              <div className="row">
                <div className="col s6">
                  <div className="row v-row">
                    <div className="col s2 title">name:</div>
                    <div className="col s8 data">
                      <div className="">
                        <input id="name" type="text" placeholder='Специальность' className="validate"
                               value={this.props.filters.name}
                               onChange={(e)=>this.props.setFilters({...this.props.filters, name:e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row v-row">
                    <div className="col s2 title">area:</div>
                    <div className="col s8 data">
                      <div className="">
                        <select onChange={(e)=> this.props.setFilters({
                          ...this.props.filters,
                          area: e.target.value
                        })}>
                          <option value="ALL" selected>ALL</option>
                          {
                            this.props.settings.listArea.map((item, i)=>{
                              return (<option key={i} value={item[0]}>{item[0]}</option>)
                            })
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row v-row">
                    <div className="col s2 title">zp_from:</div>
                    <div className="col s4">
                      <div className="">
                        <input id="salary_from_b" type="text" placeholder='больше' className="validate"
                               value={this.props.filters.salary.from.max}
                               onChange={(e)=>this.props.setFilters({
                                   ...this.props.filters,
                                   salary: {
                                     ...this.props.filters.salary,
                                     from:{
                                       ...this.props.filters.salary.from,
                                       max: e.target.value
                                     }
                                   }
                                 }
                               )}
                        />
                      </div>
                    </div>
                    <div className="col s4">
                      <div className="">
                        <input id="salary_from_m" type="text" placeholder='меньше' className="validate"
                               value={this.props.filters.salary.from.min}
                               onChange={(e)=>this.props.setFilters({
                                   ...this.props.filters,
                                   salary: {
                                     ...this.props.filters.salary,
                                     from:{
                                       ...this.props.filters.salary.from,
                                       min: e.target.value
                                     }
                                   }
                                 }
                               )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row v-row">
                    <div className="col s2 title">zp_to:</div>
                    <div className="col s4">
                      <div className="">
                        <input id="salary_to_b" type="text" placeholder='больше' className="validate"
                               value={this.props.filters.salary.to.max}
                               onChange={(e)=>this.props.setFilters({
                                   ...this.props.filters,
                                   salary: {
                                     ...this.props.filters.salary,
                                     to:{
                                       ...this.props.filters.salary.to,
                                       max: e.target.value
                                     }
                                   }
                                 }
                               )}
                        />
                      </div>
                    </div>
                    <div className="col s4">
                      <div className="">
                        <input id="salary_to_m" type="text" placeholder='меньше' className="validate"
                               value={this.props.filters.salary.to.min}
                               onChange={(e)=>this.props.setFilters({
                                   ...this.props.filters,
                                   salary: {
                                     ...this.props.filters.salary,
                                     to:{
                                       ...this.props.filters.salary.to,
                                       min: e.target.value
                                     }
                                   }
                                 }
                               )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row v-row">
                    <div className="col s2 title">archived:</div>
                    <div className="col s8 data">
                      <div className="">
                        <select onChange={(e)=> this.props.setFilters({
                          ...this.props.filters,
                          archived: e.target.value
                        })}>
                          <option value="ALL" selected>ALL</option>
                          <option value="true">true</option>
                          <option value="false">false</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row v-row">
                    <div className="col s2 title">shedule:</div>
                    <div className="col s8 data">
                      <div className="">
                        <select onChange={(e)=> this.props.setFilters({
                          ...this.props.filters,
                          shedule: e.target.value
                        })}>
                          <option value="ALL" selected>ALL</option>
                          {
                            this.props.settings.listShedule.map((item, i)=>{
                              return (<option key={i} value={item[0]}>{item[0]}</option>)
                            })
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row v-row">
                    <div className="col s2 title">create_at:</div>
                    <div className="col s4">
                      <div className="">
                        <input id="created_at_b" type="text" placeholder='больше' className="validate"
                               value={this.props.filters.created_at.to}
                               onChange={(e)=>this.props.setFilters({
                                   ...this.props.filters,
                                   created_at: {
                                     ...this.props.filters.created_at,
                                     to: e.target.value
                                   }
                                 }
                               )}
                        />
                      </div>
                    </div>
                    <div className="col s4">
                      <div className="">
                        <input id="created_at_m" type="text" placeholder='меньше' className="validate"
                               value={this.props.filters.created_at.from}
                               onChange={(e)=>this.props.setFilters({
                                   ...this.props.filters,
                                   created_at: {
                                     ...this.props.filters.created_at,
                                     from: e.target.value
                                   }
                                 }
                               )}

                        />
                      </div>
                    </div>
                  </div>
         {/* / */}

                  <div className="row v-row">
                    <div className="col s1 title">site:</div>
                    <div className="col s4 data">
                      <div className="">
                        <select onChange={(e)=> this.props.setFilters({
                          ...this.props.filters,
                          site: e.target.value
                        })}>
                          <option value="ALL" selected>ALL</option>
                          <option value="hh">hh.ru</option>
                          <option value="SJ">superjob</option>
                        </select>
                      </div>
                    </div>
                    <div className="col s1 title">val:</div>
                    <div className="col s4 data">
                      <div className="">
                        <select onChange={(e)=> this.props.setFilters({
                          ...this.props.filters,
                          val: e.target.value
                        })}>
                          <option value="ALL" selected>ALL</option>
                          <option value="RUB">RUB</option>
                          <option value="USD">USD</option>
                        </select>
                      </div>
                    </div>
                  </div>

{/* / */}
                </div>
              </div>

              <div className="row v-row">
                <div className="col s2 title">Сортировка:</div>
                <div className="col s3 data">
                  <div className="">
                    <select onChange={(e)=> this.props.setFilters({
                      ...this.props.filters,
                      sorted: {
                        ...this.props.filters.sorted,
                        title: e.target.value
                      }
                    })}>
                      <option value="area" selected>area</option>
                      <option value="name">name</option>
                      <option value="salary_from">zp_from</option>
                      <option value="salary_to">zp_to</option>
                      <option value="created_at">created_at</option>
                      <option value="archived">archived</option>
                      <option value="shedule">shedule</option>
                    </select>
                  </div>
                </div>
                <div className="col s3 data">
                  <div className="">
                    <select onChange={(e)=> this.props.setFilters({
                      ...this.props.filters,
                      sorted: {
                        ...this.props.filters.sorted,
                        type: e.target.value
                      }
                    })}>
                      <option value="ASC" selected>Возрастанию</option>
                      <option value="DESC">Убыванию</option>
                    </select>
                  </div>
                </div>
              </div>

              <a className="waves-effect waves-light btn" onClick={()=>{
                this.props.setUseFilters(!this.props.useFilters)
              }}>
                Применить фильтры
                <i className="material-icons right">send</i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filters;
