import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Info from '../info/Info'
import Contact from '../contact/Contact'

export default class About extends Component {
    render() {
        return (
            <div>
                about页面
                <Route path='/about/info' component={Info} >about-demo</Route>
                <Route path='/about/contact' component={Contact} >about-demo</Route>
            </div>
        )
    }
}
