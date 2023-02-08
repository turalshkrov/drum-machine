const INITAL_STATE = {
    bank: true,
    power: true,
    volume: 40,
    displayText: ''
}

export const toggleReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_BANK_VALUE':
            return {
                ...state,
                bank: action.payload
            }
        case 'SET_POWER_VALUE':
            return {
                ...state,
                power: action.payload
            }
        case 'SET_VOLUME_VALUE':
            return {
                ...state,
                volume: action.payload
            }
        case 'SET_DISPLAY_TEXT':
            return {
                ...state,
                displayText: action.payload
            }
        default:
            return state;
    }
}