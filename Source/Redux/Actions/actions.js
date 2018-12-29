import { createAction } from 'redux-actions';

export const Add      =  createAction("ADD");
export const Subtract =  createAction("Subtract");
export const Reset    =  createAction("Reset")



// function addTodo() {
//     return {
//       type: "ADD"
//     }
//   }
// export default addTodo;
// export const Minus = () => {
//     type:'Minus'
// }

// export const Reset = () => {
//     type:'Reset'
// }