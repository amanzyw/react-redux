import React from 'react';
import ReactDOM from 'react-dom';
import {message} from 'antd';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import styles from '../assets/main.css';






// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <Getform/>
        <div style={{margin:200}}>
        <span className={styles.app}>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
    message.success("hello world!",2);
    return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


class Getform extends React.Component{

    render(){
        return (
            <div style={{width:1200,margin:"0 auto"}}>
              <div className="container">
                  <div className="isform">
                  <form className="form-inline">
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputName2">项目名称：</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="请填写项目名称"/>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputName2">项目名称：</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="请填写项目名称"/>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputName2">项目名称：</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="请填写项目名称"/>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputName2">项目名称：</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="请填写项目名称"/>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputName2">项目状态：</label>
                        <select className="form-control">
                        <option>生产已完结1</option>
                        <option>生产已完结2</option>
                        <option>生产已完结3</option>
                        <option>生产已完结4</option>
                        <option>生产已完结5</option>
                      </select>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputName2">项目名称：</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="请填写项目名称"/>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                      <label htmlFor="exampleInputEmail2">业主名称：</label>
                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="请填写业主名称"/>
                    </div>
                    <div className="form-group" style={{margin:"0 15px 15px 0"}}>
                        <button type="submit" className="btn btn-default btn-primary" style={{margin:"0 6px 0 0",padding:"6px 22px"}}>查询</button>
                        <button type="submit" className="btn btn-default" style={{padding:"6px 22px"}}>清空</button>
                    </div>
                  </form>
                  </div>
                  <div className="istable">
                      <table className="table table-striped table-bordered table-hover">
                          <thead>
                            <tr>
                                <th>序号</th>
                                <th>项目名称</th>
                                <th>项目编号</th>
                                <th>业务名称</th>
                                <th>经营负责人</th>
                                <th>项目负责人</th>
                                <th>项目状态</th>
                                <th>支出</th>
                                <th>收入</th>
                                <th>操作</th>
                            </tr>
                          </thead>
                          <tbody>
                              <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <div>
                                                                        <a href="#" title="***滨江路二期工程优化">***滨江路二期工程优化</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>0212141274</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>生产已完结</span>
                                                                </td>
                                                                <td>5698</td>
                                                                <td>1266</td>
                                                                <td>
                                                                    <span>
                                                                        <button className="btn btn-default btn-sm">详细</button>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <div>
                                                                        <a href="#" title="***滨江路二期工程优化">***滨江路二期工程优化</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>0212141274</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>生产已完结</span>
                                                                </td>
                                                                <td>5698</td>
                                                                <td>1266</td>
                                                                <td>
                                                                    <span>
                                                                        <button className="btn btn-default btn-sm">详细</button>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <div>
                                                                        <a href="#" title="***滨江路二期工程优化">***滨江路二期工程优化</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>0212141274</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>生产已完结</span>
                                                                </td>
                                                                <td>5698</td>
                                                                <td>1266</td>
                                                                <td>
                                                                    <span>
                                                                        <button className="btn btn-default btn-sm">详细</button>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <div>
                                                                        <a href="#" title="***滨江路二期工程优化">***滨江路二期工程优化</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>0212141274</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>生产已完结</span>
                                                                </td>
                                                                <td>5698</td>
                                                                <td>1266</td>
                                                                <td>
                                                                    <span>
                                                                        <button className="btn btn-default btn-sm">详细</button>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <div>
                                                                        <a href="#" title="***滨江路二期工程优化">***滨江路二期工程优化</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>0212141274</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>xxxxxx</span>
                                                                </td>
                                                                <td>
                                                                    <span>生产已完结</span>
                                                                </td>
                                                                <td>5698</td>
                                                                <td>1266</td>
                                                                <td>
                                                                    <span>
                                                                        <button className="btn btn-default btn-sm">详细</button>
                                                                    </span>
                                                                </td>
                                                            </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>
        )
    }
}



ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,document.getElementById("root"));