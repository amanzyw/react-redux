/*import {connect} from 'react-redux';
import {toggleTodo} from '../actions';*/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Visibility extends React.Component{
    render(){
        let arrs=[];
        // this.props.todos.map((item,idx)=>{arrs.push(<li key={item.id}>{item.text}</li>)});
        return (
            <div>
                <ul>
                    {this.props.todos.map((item,idx)=>{return <li key={item.id} onClick={function(){this.props.onToggle(item.id)}.bind(this)} style={item.completed==true?{"textDecoration":"line-through"}:null}>{item.text}</li>})}
                </ul>

            </div>
        )
    }
}
Visibility.propTypes={
    todos:PropTypes.array.isRequired,
    onToggle:PropTypes.func.isRequired
}

export default Visibility;