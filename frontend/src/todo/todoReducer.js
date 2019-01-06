const INITIAL_STATE = {
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura cartão',
            done: true
        },{
            _id: 2,
            description: 'Reunião com a equipe as 10:00',
            done: false
        }, {
            _id: 3,
            description: 'COnsulta médica depois na terça depois do almoço',
            done: false
        }]
}

// O reducer recebe o estado atual e a ação e depois decide se irá evoluir o estado
// é uma função pura
export default (state = INITIAL_STATE, action) => {
    //Verifica o tipo da ação
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            //Retorna um novo estado, onde a description sera o payload que vem
            //da minha ação
            return { ...state, description: action.payload }
        default:
            //Retorna o estado do jeito que eu recebi
            return state
    }
}