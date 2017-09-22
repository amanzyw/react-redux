/*import {connect} from 'react-redux';
import {toggleTodo} from '../actions';*/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Visibility extends React.Component{
    render(){
        let arrs=null;
        /*if(this.props.showType=="SHOW_ALL"){
            arrs=this.props.todos;
        }
        if(this.props.showType=="SHOW_ACTIVE"){
            arrs=this.props.todos.filter((item,idx)=>{if(item.completed==false){return item}});
        }
        if(this.props.showType=="SHOW_COMPLETED"){
            arrs=this.props.todos.filter((item,idx)=>{if(item.completed==true){return item}})
        }*/
        arrs=this.props.todos;
        // this.props.todos.map((item,idx)=>{arrs.push(<li key={item.id}>{item.text}</li>)});
        return (
            <div>
                <ul>
                    {arrs.map((item,idx)=>{return <li key={item.id} onClick={function(){this.props.onToggle(item.id)}.bind(this)} style={item.completed==true?{"textDecoration":"line-through"}:null}>{item.text}</li>})}
                </ul>

            </div>
        )
    }
}
Visibility.propTypes={
    todos:PropTypes.array.isRequired,
    showType:PropTypes.string.isRequired,
    onToggle:PropTypes.func.isRequired
}

export default Visibility;