import React, { Component } from 'react';
import '../../css/account.css';

class Count extends Component {
  render() {
    return (
      <div className='wrap'>
        <div className='ac_money'>
          <p>sss</p>
        </div>
        {/* <ul className='tables'>
          <li>777</li>
          <li>45445</li>
          <li></li>
          <li></li>
              <li></li>
        </ul> */}
        <table className='tables'>
          <thead>
            <tr>
              <th>姓名</th>
              <th>个人总计</th>
              <th>平均金额</th>
              <th>应付</th>
              <th>应收</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
            </tr>
             <tr>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
            </tr>
             <tr>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
              <td>23232</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Count;
