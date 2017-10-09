import Immutable from 'immutable';
import _ from 'lodash';

export default function(appState, action) {
    switch(action.type) {
        case 'ADD_SQUARE':
            const square = { text: action.payload.text, color: action.payload.color, key: action.payload.key };
            var squares = appState.get('squares');
            const statex = appState.set('squares', squares.push(square));
            return statex.set('sequence', statex.get('sequence') + 1);
        case 'REMOVE_SQUARE':
            const statey = appState.set('squares',
                Immutable.fromJS(_.filter(appState.get('squares').toJS(), function(t) { return t.key !== action.payload.id; })));
            return statey.set('sequence', statey.get('sequence') - 1);
        default:
            return(appState);
    }
}

