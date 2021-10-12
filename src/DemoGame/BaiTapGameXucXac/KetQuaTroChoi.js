import React, {Component} from 'react'
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        let {soBanChoi, soBanThang, banChon} = this.props.GameXucXacReducer;
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn: <span className="text-warning"> {banChon ? 'Tài' : 'Xỉu'} </span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-success"> {soBanThang} </span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-primary"> {soBanChoi} </span>
                </div>
                <button className="btn bg-success">
                    <div className="display-4" onClick={() => {
                        const action = {
                            type: 'PLAY_GAME',
                        }
                        this.props.dispatch(action);
                    }}>Play game
                    </div>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        GameXucXacReducer: rootReducer.GameXucXacReducer,
        // banChon: rootReducer.GameXucXacReducer.banChon,
        // soBanThang: rootReducer.GameXucXacReducer.soBanThang,
        // soBanChoi: rootReducer.GameXucXacReducer.soBanThang
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);