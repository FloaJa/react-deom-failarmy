import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home';
import Progress from './pages/progress/Progress';


class App extends Component {
    render() {
        return (
            <Router basename='/' >
                <div>
                    <Link to='/about' className='toAbout' >about页面</Link>
                    <Link to='/' >主页</Link>
                    <Link to='/about/info' >详情</Link>
                    <Link to='/about/contact' >联系我们</Link>
                    <Link to='/progress' >进度条</Link>

                    <Route path='/' component={Home} ></Route>
                    <Route path='/progress' component={Progress} ></Route>
                    <Route path='/about' component={About} ></Route>
                </div>
            </Router>



        );
    }
}

export default App;
