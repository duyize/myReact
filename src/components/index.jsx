import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import '../css/index.css';

class Index extends Component {
  render() {
    let {children,match} = this.props;
    return (
      <div className='wrap'>
        <header className='header'>还钱的软件</header>
        <section className='main'>
          {
            children.map((item,key) => {
                return <Route path={match.match.path + item.path} component={item.component} key={key}></Route>
              })
          }
        </section>
        <footer className='footer'>
          <ul>
            {
              children.map((item,key) => {
                return <li key={key}><Link to={match.match.path + item.path}>{item.title}</Link></li>
              })
            }
          </ul>
        </footer>
      </div>
    );
  }
}

export default Index;
