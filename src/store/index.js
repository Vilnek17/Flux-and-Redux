 import { legacy_createStore } from 'redux'

 export const  INCREMENT_COFFE = 'INCREMENT_COFFE';
 export const DECREMENT_COFFE = 'DECREMENT_COFFE';
 export const INCREASE_COFFE = 'INCREASE_COFFE';
 export const INCREASE_SUGAR = 'INCREASE_SUGAR';
 export const INCREMENT_SUGAR = 'INCREMENT_SUGAR';
 export const DECREMENT_SUGAR = 'DECREMENT_SUGAR';
 export const LOG_IN = 'LOG_IN';
 export const SAVE_LIST = "SAVE_LIST";
export const CLEAR_LIST = "CLEAR_LIST";
export const CLEAR_VALUES = "CLEAR_VALUES";


 export const initialState = {
    coffee: 0,
    sugar:0, 
    isLoggedIn: false,
    isLoggedOut:false,
    list: []
 }

 const couterReducer = (state = initialState, action) => {
    switch (action.type) {
             case INCREMENT_COFFE:
               return {
                 ...state,
                 coffee: state.coffee + 1,
               };
             case DECREMENT_COFFE:
               return {
                 ...state,
                 coffee: state.coffee - 1,
               };
             case INCREMENT_SUGAR:
               return {
                 ...state,
                 sugar: state.sugar + 1,
               };
             case DECREMENT_SUGAR:
               return {
                 ...state,
                 sugar: state.sugar - 1,
               };
             case INCREASE_COFFE:
               return {
                 ...state,
                 coffee: state.coffee + action.number,
               };
               case INCREASE_SUGAR:
               return {
                 ...state,
                 sugar: state.sugar + action.number,
               };
             case LOG_IN:
               return {
                 ...state,
                 isLoggedIn: true,
               };
               case SAVE_LIST:
                return {
                  ...state,
                  list: [
                    ...state.list,
                    { coffee: action.coffee, sugar: action.sugar }
                  ]
                }
              
              
              case CLEAR_LIST: 
                return {
                  ...state,
                  list: [],
                }
                case CLEAR_VALUES:
                return {
                  ...state,
                  coffee: 0,
                    sugar: 0,
                };
                
             default:
               return state;
           }
        

     
        } 


const store = legacy_createStore(couterReducer); 

 export default store;
