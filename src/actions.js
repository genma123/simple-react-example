export function addSquare(text, color, key) {
    return {
        type: 'ADD_SQUARE',
        payload: {
            text: text,
            color: color,
            key: key
        }
    }
}

export function removeSquare(id) {
    return {
        type: 'REMOVE_SQUARE',
        payload: {
            id: id
        }
    }
}