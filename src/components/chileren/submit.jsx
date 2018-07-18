import React, { Component } from 'react';
import '../../css/submit.css';
import { DatePicker, List, Picker } from 'antd-mobile';
import { connect } from 'react-redux';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
      utcDate: utcNow,
      value: null,
      sValue: [],
      show: {
        display: "none"
      },
      money: '',
      use: '',
      newDay:now
    }
  }
  dealDate(datechange){
    let date=new Date(datechange)
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
  }
  Sure() {
    this.setState({
      show: {
        display: "block"
      }
    })
  }
  bSure(newDay,sValue,money,use) {
    this.setState({
      show: {
        display: "none"
      }
    });
    newDay = this.dealDate(newDay);
    let submitObj = {
      newDay,
      sValue,
      money,
      use
    };
    this.props.subUser(submitObj);
  }
  bCancel() {
    this.setState({
      show: {
        display: "none"
      }
    })
  }
  getUse(e) {
    this.setState({
      use: e.target.value
    });
  }
  getMoney(e) {
    this.setState({
      money: e.target.value
    });
  }
  render() {
    let { arr } = this.props;
    let { newDay, sValue, money, use } = this.state;
    let name = [arr.map((item, index) => {
      return {
        label: item.username,
        value: item.username
      }
    })]
    return (
      <div>
        <div className='mark_sub' id='mark_sub' style={this.state.show}>
          <ul className='mark_s' id='mark_s'>
            <li>
              <span>时间</span>
              <input type="text" defaultValue={this.dealDate(newDay)} />
            </li>
            <li>
              <span>姓名</span>
              <input type="text" defaultValue={sValue} />
            </li>
            <li>
              <span>金额</span>
              <input type="text" defaultValue={money} />
            </li>
            <li>
              <span>用途</span>
              <input type="text" defaultValue={use} />
            </li>
            <li className='user_btns'>
              <button id='sure' onClick={this.bSure.bind(this,newDay,sValue,money,use)} >确定</button>
              <button id='cancel' onClick={this.bCancel.bind(this)}>取消</button>
            </li>
          </ul>
        </div>
        <ul className='slist'>
          <li>
            <DatePicker
              mode="date"
              title="Select Date"
              extra="Optional"
              value={this.state.newDay}
              onChange={(value) =>{this.setState({ newDay:value })}}
            >
              <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
          </li>
          <li>
            <Picker data={name}
              cascade={false}
              cols={1}
              className="forss"
              title="选择姓名"
              key={name}
              value={sValue}
              onChange={v => this.setState({ sValue: v })}
              onOk={v => this.setState({ sValue: v })}
            >
              <List.Item arrow="horizontal">姓名</List.Item>
            </Picker>
          </li>
          <li className='lr'>
            <span>金额</span>
            <input placeholder='请输入金额' defaultValue={this.state.money} onChange={e => this.getMoney(e)} />
          </li>
          <li className='lr'>
            <span>用途备注</span>
            <input placeholder='请输入备注' defaultValue={this.state.use} onChange={e => this.getUse(e)} />
          </li>
          <li className='btns'>
            <button className='sub' onClick={this.Sure.bind(this)}>提交</button>
            <button className='clear'>清空</button>
          </li>
        </ul>
      </div>
    );
  }
}

let mapState = (state) => {
  return state;
}
let mapDispatch = (dispatch) => {
  return {
    subUser(obj) {
      dispatch({ type: 'SUBUSER', obj });
    }
  }
}

Submit = connect(mapState, mapDispatch)(Submit);

export default connect((state) => state)(Submit);
