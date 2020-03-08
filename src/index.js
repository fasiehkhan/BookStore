import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import book2 from './book2.jpg';import book11 from './book11.jpg';
import book4 from './book4.jpg';import book6 from './book6.jpg';
import book1 from './book1.png';import book7 from './book7.jpg';
import book20 from './book20.png';import book22 from './book22.png';
import book21 from './book21.png';import nR1 from './nR1.png';
import nR2 from './nR2.png';import nR3 from './nR3.png';





//initialize redux store with book info (title.price, etc)
const library = {
    books: [
    {id: '1', img: book2, price: '$15.00', title: 'The Art of NGAF' },
    {id: '2', img: book4, price: '$20.00', title: 'A long walk to water'},
    {id: '3', img: book11, price: '$16.00', title: 'American Dirt'},
    {id: '4', img: book6, price: '$18.00', title: 'A Gentleman in Moscow'},
    {id: '5', img: book1, price: '$10.00', title: 'The  Handmaids Tale' }, 
    {id: '6', img: book7, price: '$15.00', title: 'The  Second Mountain' },
    {id: '7', img: book20, price: '$10.00', title: 'The  Handmaids Tale' }, 
    {id: '8', img: book21, price: '$10.00', title: 'The  Handmaids Tale' }, 
    {id: '9', img: book22, price: '$10.00', title: 'The  Handmaids Tale' } , 
    {id: '10', img: nR1, price: '$30.00', title: 'Unicorns' } ,
    {id: '11', img: nR2, price: '$20.00', title: 'The Drunken Botanist' } ,
    {id: '12', img: nR3, price: '$40.00', title: 'A Nearly Normal Family' } 






], 
cart: []
}

//create reducer and change state of store based on action type
const reducer = (state=library, action) => {

    if(action.type == 'ADD_BOOK2' || action.type == 'ADD_BOOK' 
    || action.type == 'ADD_BOOK7' || action.type == 'ADD_BOOK4'
    || action.type == 'ADD_BOOK5' || action.type == 'ADD_BOOK6'
    || action.type == 'ADD_BOOK20' || action.type == 'ADD_BOOK21'
    || action.type == 'ADD_BOOK22' 
    ){

        return {
            ...state,
        cart: [...state.cart, action.payload]

        }   
    }

    return state;  
}
//create store, takes in reducer func and global state
const store = createStore(reducer);









ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
