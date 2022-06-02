
 const Counterreducer = (state,{type,payload})=>{

    switch(type)
    {
        case "increment":
            return {...state,counter:+payload+1}

            case "decrement":
            return {...state,counter:+payload-1}

            default :
            return {...state}
    }

 }

 export default Counterreducer