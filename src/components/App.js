import React from 'react';
import {createStore} from 'redux';
import actions from '../actions';
import AddTodo from '../containers/AddTodo.js';
import Visibility from '../containers/VisibiTodoList.js';
import Footer from '../containers/Footer.js';
import Reducers from '../reducers';
import { Provider, connect } from 'react-redux';

let Store=createStore(Reducers);

function mapStateToProps(state){
    return {
        todos:state.todos,
        showType:state.type
    }
}
function mapDispatchToProps(dispatch){
    return {
        onSubmit:(value) => dispatch({type:actions.addTodo.type,value})
    }
}
function mapDispatchToProps1(dispatch){
    return {
        onToggle:(id)=>dispatch({type:actions.toggleTodo.type,id})
    }
}
function mapStateToProps2(state){
    return {
        type:state.type
    }
}
function mapDispatchToProps2(dispatch){
    return {
        onVisibilityChange:(type)=>dispatch({type:actions.setVisiblity.type,showType:type})
    }
}
let AddTodoConnect=connect(
    undefined,
    mapDispatchToProps
)(AddTodo);

let VisibilityConnect=connect(
    mapStateToProps,
    mapDispatchToProps1
)(Visibility);

let FooterConnect=connect(
    mapStateToProps2,
    mapDispatchToProps2
)(Footer);


class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Provider store={Store}>
                    <div>
                        <AddTodoConnect/>
                        <VisibilityConnect/>
                        <FooterConnect/>
                    </div>
                </Provider>
            </div>
        )
    }
}
export default App;