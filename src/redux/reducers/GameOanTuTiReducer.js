const defaultState = {
    arrDatCuoc: [
        {ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: false},
        {ma: 'bua', hinhAnh: './img/gameOanTuTi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/gameOanTuTi/bao.png', datCuoc: true},
    ],

    result: 'I am 3000',
    soBanWin: 0,
    soBanChoi: 0,
    computer: {ma: 'bao', hinhAnh: './img/gameOanTuTi/bao.png'},
}

const GameOanTuTiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            // reset arrBet
            let arrBetUpdate = [...state.arrDatCuoc]
            arrBetUpdate = arrBetUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return {...item, datCuoc: true}
                }
                return {...item, datCuoc: false}
            })
            // setState of arrDatCuoc -> render
            state.arrDatCuoc = arrBetUpdate;

            // console.log(action)
            return {...state}
        }

        case 'RANDOM': {
            let randomMethod = Math.floor(Math.random() * 3)

            let randomNum = state.arrDatCuoc[randomMethod];

            state.computer = randomNum
            return {...state}
        }

        case 'END_GAME':
            let player = state.arrDatCuoc.find(item => item.datCuoc === true)
            console.log(player, 'ce')
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.result = 'Draw';
                    } else if (computer.ma = 'bua') {
                        state.result = 'Lose';
                    } else {
                        state.result = 'Win';
                        state.soBanWin += 1;
                    }
                    break;

                case 'bua':
                    if (computer.ma === 'keo') {
                        state.result = 'Win'
                        state.soBanWin += 1;
                    } else if (computer.ma === 'bua') {
                        state.result = 'Draw'
                    } else {
                        state.result = 'Lose'
                    }
                    break;

                case 'bao':
                    if (computer.ma === 'keo') {
                        state.result = 'Lose'
                    } else if (computer.ma === 'bua') {
                        state.result = 'Win'
                        state.soBanWin += 1;
                    } else {
                        state.result = 'Draw'
                    }
                    break;

                default:
                    state.result = 'I am 3000';
                    // state.soBanWin +=1;
                    return {...state};
            }
            state.soBanChoi += 1;
            return {...state}

        default:
            return {...state};
    }
}

export default GameOanTuTiReducer