import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

class App extends React.Component{
    render(){
        return (<BrowserRouter>
            <span>
                <Route path="/" exact to={StreamList}/> 
                <Route path="/streams/new" exact to={StreamCreate}/> 
                <Route path="/streams/edit" exact to={StreamEdit}/> 
                <Route path="/streams/delete" exact to={StreamDelete}/> 
                <Route path="/streams/show" exact to={StreamShow}/> 
            </span>
        </BrowserRouter>)
    }
}

export default App;