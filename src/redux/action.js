export const setBank = (value) => {
    return {
        type: 'SET_BANK_VALUE',
        payload: value
    }
}

export const setPower = (value) => {
    return {
        type: 'SET_POWER_VALUE',
        payload: value
    }
}

export const setVolume = (value) => {
    return {
        type: 'SET_VOLUME_VALUE',
        payload: value
    }
}

export const setDisplayText = (value) => {
    return {
        type: 'SET_DISPLAY_TEXT',
        payload: value
    }
}