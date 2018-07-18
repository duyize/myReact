import React, { Component } from 'react';
import '../../css/home.css';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pwd: props.pwd,
      showi: {
        display: "block"
      },
      showb: {
        display: "none"
      }
    }
  }
  compare(e) {
    let content = e.target.value;
    if (content == this.state.pwd) {
      console.log('success');
      this.setState({
        showi: {
          display: "none"
        },
        showb: {
          display: "block"
        }
      });
    }
  }
  getDetail(index,history){
    this.props.pushDeatil(index);
    history.push('/index/detail');
  }
  render() {
    let { data,history } = this.props;
    return (
      <div className='home'>
        <div className='money'>
          <p className='showmoney'>123</p>
        </div>
        <div className='manage'>
          <input type="text" style={this.state.showi} defaultValue={this.props.value} onChange={e => this.compare(e)} placeholder='请输入管理员密码' />
          <Link to='/userinfo'><button style={this.state.showb} className='manage_btn'>管理用户</button></Link>
        </div>
        <div className='flutmoney'>
          {
            data[data.length-1]?<marquee direction='right'>{data[data.length-1].username}提交了{data[data.length-1].money}元</marquee>:''
          }
        </div>
        <ul className='list'>
          {data.map((item, index) => {
            return <li key={index} onClick={this.getDetail.bind(this, index , history)}>
              <span className='user'>{item.username}</span>
              <span className='user_money'>{item.money}</span>
            </li>
          })}
        </ul>
      </div>
    );
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
    },
    pushDeatil(index) {
      dispatch({ type: 'PUSHDETAIL', index });
    }
  }
}

Home = connect(mapState, mapDispatch)(Home);

export default connect((state) => state)(Home);
