import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom'
import '../css/userinfo.css';
import axios from 'axios'

class Userinfo extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      show: {
        display: "none"
      },
      show2: {
        display: "none"
      },
      showChange: {
        display: "none"
      },
      id: '',
      username: '',
      money: '',
      indexx:0
    };
  }
  createUser() {
    this.setState({
      show: {
        display: "block"
      }
    })
  }
  getId(e) {
    this.setState({
      id: e.target.value
    });
  }
  getName(e) {
    this.setState({
      username: e.target.value
    });
  }
  getMoney(e) {
    this.setState({
      money: e.target.value
    });
  }
  change(index) {
    this.setState({
      indexx:index
    },()=>{
      // console.log(this.state.indexx)
    })
    this.setState({
      showChange: {
        display: "block"
      },
      show2: {
        display: "block"
      },
    });
  }
  delete(index) {
    this.props.deleteId(index);
  }
  clickSure(id, username, money) {
    let obj = {
      id: id,
      username: username,
      money: money
    }
    this.props.addUser(obj);
    this.setState({
      show: {
        display: "none"
      }
    });
  }
  clickCancel() {
    this.setState({
      show: {
        display: "none"
      }
    })
  }
  changeSure(username){
    console.log(username)
    this.props.changeInfo(this.state.indexx,username);    
    this.setState({
      show2: {
        display: "none"
      }
    });
  }
  changeCancel(){
    this.setState({
      show2: {
        display: "none"
      }
    })
  }
  apiClick(){
    axios.get('/getalluser').then(res=>{
      console.log(res.data);
    })
  }
  render() {
    let { id, username, money } = this.state;
    return (
      <div className='wrap'>
        <div className='mark_all' id='mark_all' style={this.state.show}>
          <ul className='mark' id='mark'>
            <li>
              <span>用户id</span>
              <input type="text" placeholder='请输入用户id' defaultValue={this.state.id} onChange={e => this.getId(e)} />
            </li>
            <li>
              <span>姓名</span>
              <input type="text" placeholder='请输入用户姓名' defaultValue={this.state.username} onChange={e => this.getName(e)} />
            </li>
            <li>
              <span>金钱基数</span>
              <input type="text" placeholder='请输入用户金钱基数' defaultValue={this.state.money} onChange={e => this.getMoney(e)} />
            </li>
            <li className='user_btns'>
              <button id='sure' onClick={this.clickSure.bind(this, id, username, money)}>确定</button>
              <button id='cancel' onClick={this.clickCancel.bind(this)}>取消</button>
            </li>
          </ul>
        </div>
        <div className='mark_all2' id='mark_all2' style={this.state.show2}>
            <ul className='changeInfo' style={this.state.showChange}>
              <li>
                <span>姓名</span>
                <input type="text" defaultValue={this.state.username} onChange={e => this.getName(e)} />
              </li>
              <li className='user_btns'>
                <button id='sure' onClick={this.changeSure.bind(this,username)}>确定</button>
                <button id='cancel' onClick={this.changeCancel.bind(this)}>取消</button>
              </li>
            </ul>
          </div>
        <header className='header'>
          <Link to='/'><i className='iconfont'>&#xe653;</i></Link>
          <p>用户管理</p>
          <i className='iconfont' onClick={this.createUser.bind(this)}>&#xe71e;</i>
        </header>
        <section className='main'>
          <ul>
            <li className='lis'>
              <span>修改</span>
              <p className='name'>姓名</p>
              <p className='id'>id</p>
              <span>删除</span>
            </li>
            {this.props.arr.map((item, index) => {
              return <li className='lis' key={index}>
                <span><i className='iconfont' onClick={this.change.bind(this, index)}>&#xe71f;</i></span>
                <p className='name'>{item.username}</p>
                <p className='id'>{item.id}</p>
                <span><i className='iconfont' onClick={this.delete.bind(this, index)}>&#xe721;</i></span>
              </li>
            })}
          </ul>
          <div onClick={this.apiClick.bind(this)}>
              clickme
          </div>
        </section>
      </div>
    );
  }
}

let mapState = (state) => {
  return state;
}
let mapDispatch = (dispatch) => {
  return {
    addUser(obj) {
      dispatch({ type: 'ADDUSER', obj });
    },
    deleteId(index) {
      dispatch({ type: 'DELETEID', index });
    },
    changeInfo(index,username) {
      dispatch({ type: 'CHANGEINFO', index , username});
    }
  }
}

Userinfo = connect(mapState, mapDispatch)(Userinfo);

export default connect((state) => state)(Userinfo);
