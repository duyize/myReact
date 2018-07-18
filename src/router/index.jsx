import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { config } from './data.js';
import axios from 'axios';

class RouteWrap extends Component {
    componentDidMount() {
        axios.get('/data').then((res) => {
            this.props.initData(res.data);
        });
    }
    render() {
        return <Router>
            <Switch>
                {
                    config.map((item, key) => {
                        return <Route path={item.path} render={(match) => {
                            let Con = item.component;
                            return <Con match={match} children={item.children} />
                        }} key={key} />
                    })
                }
                <Redirect from='/' to='/index/home' />
            </Switch>
        </Router>
    }
}

let mapState = (state) => {
  return {
    data: state.arr
  };
}
let mapDispatch = (dispatch) => {
  return {
    initData(obj) {
      dispatch({ type: 'INITDATA', obj });
    }
  }
}

RouteWrap = connect(mapState, mapDispatch)(RouteWrap);

export default connect((state) => state)(RouteWrap);
