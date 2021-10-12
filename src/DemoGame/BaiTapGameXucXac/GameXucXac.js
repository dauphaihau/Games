import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import './BaiTapGameXucXac.css';
import bg from './assets/gameXucXac/bgGame.png'

// import hinh from '../../assets/gameXucXac/1.png'

export default class GameXucXac extends Component {
    render() {
        return (
            <div style={{background: `url(${bg})`}} className="bg-game">
                <h3 className="text-center mt-5 display-4">Game xúc xắc</h3>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
