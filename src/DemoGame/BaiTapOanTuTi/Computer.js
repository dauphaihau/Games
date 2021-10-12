import React, {Component} from 'react';
import {connect} from "react-redux";

class Computer extends Component {
    render() {
        return (
            <div className='player text-center'>
                <div className='think'>
                    <img style={{transform: 'rotate(120deg)'}} width={100} height={100}
                         src={this.props.computer.hinhAnh}
                         alt="./img/gameOanTuTi/bua.png"/>
                </div>

                <div className='speech-bubble'>

                </div>
                <img style={{height: 250, width: 250}} src='./img/gameOanTuTi/playerComputer.png' alt=""/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        computer: state.GameOanTuTiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)