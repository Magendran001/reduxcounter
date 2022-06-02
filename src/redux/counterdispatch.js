function Counterincrement(payload) {
    return ({ type: "increment", payload })
}
function Counterdecrement(payload) {
    return ({ type: "decrement", payload })
}

export { Counterdecrement, Counterincrement }