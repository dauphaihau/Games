import {connect} from "react-redux";
import './BaiTapOanTuTi.css'
import Player from "./Player";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import {Component} from "react";

class GameOanTuTi extends Component {
    render() {
        return (
            <div className='gameOTX'>
                <div className='row text-center'>
                    <div className="col-4 mt-5">
                        <Player/>
                    </div>
                    <div className="col-4 mt-5">
                        <KetQuaTroChoi/>
                        <button className='btn btn-success mt-5 display-4' onClick={() => {
                            this.props.playGame()
                        }}>Play game
                        </button>
                    </div>
                    <div className="col-4 mt-5">
                        <Computer/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomPC = setInterval(() => { // setInterval: set time repeat
                // let randomMethod = Math.floor(Math.random() * 3)
                dispatch({
                    type: 'RANDOM',
                })
                count++;

                if (count > 10) {
                    clearInterval(randomPC) // stop setInterval
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100)
        }
    }
}

export default connect(null, mapDispatchToProps)(GameOanTuTi);