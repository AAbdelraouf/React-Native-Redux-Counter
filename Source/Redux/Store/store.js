import {createStore} from 'redux';
import reducer from '../Reducers/reducer'

const initialState = 0
// { counter : 0, myInfo : { name:'Ahmed', age:28 } }
const store = createStore(reducer, initialState);

export default store;