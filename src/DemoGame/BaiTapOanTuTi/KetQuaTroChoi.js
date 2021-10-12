import React, {Component} from 'react';
import {connect} from "react-redux";

class KetQuaTroChoi extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div className='display-4 text-warning'>{this.props.result}</div>
                <div className='display-4 text-success'>Số bàn thắng: <span className='text-warning'>{this.props.soBanWin}</span></div>
                <div className='display-4 text-success'>Tổng số bàn chơi: <span className='text-warning'>{this.props.soBanChoi}</span></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        result: state.GameOanTuTiReducer.result,
        soBanChoi: state.GameOanTuTiReducer.soBanChoi,
        soBanWin: state.GameOanTuTiReducer.soBanWin
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);