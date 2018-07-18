import React, { Component } from 'react';
import '../../css/detail.css'
import { connect } from 'react-redux';

class Detail extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let {detailArr} = this.props;
    console.log(detailArr)
    return (
      <div>
        <p className='choose'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择一名用户</p>
      </div>
    );
  }
}

let mapState = (state) => {
  return {
    data: state.arr,
    detailArr : state.detailArr
  };
}
let mapDispatch = (dispatch) => {
  return {
    pushDeatil(index) {
      dispatch({ type: 'PUSHDETAIL', index });
    }
  }
}

Detail = connect(mapState, mapDispatch)(Detail);

export default connect((state) => state)(Detail);
