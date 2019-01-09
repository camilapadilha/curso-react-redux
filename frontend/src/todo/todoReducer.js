const INITIAL_STATE = { description: '', list: [] }

// O reducer recebe o estado atual e a ação e depois decide se irá evoluir o estado
// é uma função pura
export default (state = INITIAL_STATE, action) => {
    //Verifica o tipo da ação
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            //Retorna um novo estado, onde a description sera o payload que vem
            //da minha ação
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR': 
            return { ...state, description: '' }
        default:
            //Retorna o estado do jeito que eu recebi
            return state
    }
}