import React, {Component} from 'react';
import {connect} from "react-redux";

class Player extends Component {
    render() {
        console.log(this.props.arrDatCuoc)

        return (
            <div className='text-center player'>
                <div className='think'>
                    <img style={{transform: 'rotate(104deg)'}} width={100} height={100}
                         src={this.props.arrDatCuoc.find(item => item.datCuoc === true).hinhAnh}
                         alt={this.props.arrDatCuoc.find(item => item.datCuoc === true)?.hinhAnh}
                    />
                </div>
                <div className='speech-bubble'/>

                <img style={{height: 150, width: 150}} src='./img/gameOanTuTi/player.png' alt=""/>
                <div className="row">
                    {this.props.arrDatCuoc.map((item, index) => {
                        // check value bet and add border for item selected
                        let border = {}
                        if (border.datCuoc) {
                            border = {border : '3px solid red'};
                        }

                        return <div className="col-4" key={index}>
                            <button style={border} className='btnItem'
                                    onClick={() => {this.props.datCuoc(item.ma)}}>
                                <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh}/>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        arrDatCuoc: state.GameOanTuTiReducer.arrDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Player);