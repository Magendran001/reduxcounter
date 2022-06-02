
import {createStore} from "redux";
import Counterreducer from "./counterreducer";



const store = createStore(Counterreducer,{counter:0});

export default store



