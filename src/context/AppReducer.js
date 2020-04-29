export default (state, action) => {
    switch(action.type) {
        case 'deletetransaction':
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        case 'addtransaction':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}