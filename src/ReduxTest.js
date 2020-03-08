import { createStore } from 'redux';
import { create } from 'jss';
import React, { Component} from 'react'

export default class ReduxTest extends Component{
    render(){

        const books = [
            {id: 1, title: 'book1', price: '$15.00' },
            {id: 2, title: 'book2', price: '$20.00'}
        ]

        //create reducer: state & action 
    
        const reducer = function(state, action){
            if(action.type === 'FILL1') {
                return action.payload;
            }
            return state;
        }

        //create store, takes in reducer func and global state
         const store = createStore(reducer, 'FILL1')

        //Subscribe 
        store.subscribe(() => {
            //console.log(store.getState());
        })

        //Dispatch action
        
        store.dispatch(
            {
                type: 'FILL1', 
                payload: books[0].id            
            })
        store.dispatch({
            type: 'FILL1', 
                payload: books[0].title
        })


        return(

            <div>
                test
            </div>
        )
    }
}



