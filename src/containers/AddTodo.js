import React from 'react';
import ReactDOM from 'react-dom';
import {addtodo} from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class AddTodo extends React.Component{
    render(){
        return (
            <div className="row">
                <form className="form-inline" onSubmit={function(e){
                    e.preventDefault();
                    let input=ReactDOM.findDOMNode(this.refs.text);
                    if(input.value==undefined||input.value==""){
                        return;
                    }
                    this.props.onSubmit(input.value);
                }.bind(this)}>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                        <input className="form-control" id="exampleInputEmail3" placeholder="请输入一个todo" ref="text" type="text"/>
                        <button type="submit" className="btn btn-default">Add todo</button>
                    </div>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes={
    onSubmit:PropTypes.func.isRequired
}

export default AddTodo;