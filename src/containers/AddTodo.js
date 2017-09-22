import React from 'react';
import ReactDOM from 'react-dom';
import {addtodo} from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <form onSubmit={function(e){
                    e.preventDefault();
                    let input=ReactDOM.findDOMNode(this.refs.text);
                    if(input.value==undefined||input.value==""){
                        return;
                    }
                    this.props.onSubmit(input.value);
                }.bind(this)}>
                    <input ref="text" type="text"/>
                    <button type="submit">Add todo</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes={
    onSubmit:PropTypes.func.isRequired
}

export default AddTodo;