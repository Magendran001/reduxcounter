import {useDispatch,useSelector} from "react-redux" 
import store from "../redux/store";
import { Counterdecrement,Counterincrement } from "../redux/counterdispatch";
const { useState } = require("react");



function Counter()
{
       let Dispatch = useDispatch();
    let Selector = useSelector(()=>{return store.getState().counter});
    console.log(Selector,"selector")

    
    return (<div>
                <div>{Selector}</div>
                <div>
                     <button onClick={()=>{Dispatch(Counterincrement(Selector))}}>Add</button>
                     <button  onClick={()=>{Dispatch(Counterdecrement(Selector))}}>Subtract</button>
                </div>
    </div>)
}

export default Counter