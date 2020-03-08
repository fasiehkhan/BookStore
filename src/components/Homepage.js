import React, { Component } from 'react'
import Price from '../components/Price'
import { connect } from 'react-redux'
import book2 from '../book2.jpg';import book4 from '../book4.jpg';
import book11 from '../book11.jpg';import book6 from '../book6.jpg';
import book1 from '../book1.png';import book7 from '../book7.jpg';
import BestSellers from '../components/BestSellers'
import NewRelease1 from './NewRelease1';



export class Homepage extends Component {


  addItem = () => {
    this.props.addBook()
  }

  addItem2 = () => {
    this.props.addBook2()
  }

  addItem7= () => {
    this.props.addBook7()
  }

  addItem4 = () => {
    this.props.addBook4()
  }

  addItem5 = () => {
    this.props.addBook5()
  }

  addItem6 = () => {
    this.props.addBook6()
  }

    render() {
        const { items } = this.props; 
    
    return (
      <React.Fragment>                
  
                <table className="table">
                     <tr>
                      <div className="td"> 
                      <td><Price  id={items.books[1].id} price={items.books[1].price} book={items.books[1].title} img={items.books[0].img} func={this.addItem} /></td>
                      <td><Price  id={items.books[0].id} price={items.books[0].price} book={items.books[0].title} img={items.books[1].img} func={this.addItem2}/></td>
                      <td><Price  id={items.books[5].id} price={items.books[5].price} book={items.books[5].title} img={items.books[5].img} func={this.addItem6}/></td>

                      </div>
                      </tr>
                      <tr>
                      <div className="td"> 
                      <td><Price  id={items.books[3].id} price={items.books[3].price} book={items.books[3].title} img={items.books[3].img} func={this.addItem4}/></td>
                      <td><Price  id={items.books[4].id} price={items.books[4].price} book={items.books[4].title} img={items.books[4].img} func={this.addItem5}/></td>
                      <td><Price  id={items.books[2].id} price={items.books[2].price} book={items.books[2].title} img={items.books[2].img} func={this.addItem7}/></td>

                      </div>
          </tr>
          
          </table>    
</React.Fragment>                

 )
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
      addBook2: () => {
        dispatch({type: 'ADD_BOOK', 

        payload:
        {id: '1', img: book4,
         price: '$15.00', title: 'The Art of NGAF TEST' }
      })
    },
    addBook: () => {
      dispatch({type: 'ADD_BOOK2', 

      payload:
      {id: '2', img: book2,
       price: '$20.00', title: 'A long walk to water' }
    })
  }, 

    
  addBook4: () => {
    dispatch({type: 'ADD_BOOK4', 

    payload:
    {id: '4', img: book6, 
    price: '$18.00',
     title: 'A Gentleman in Moscow'
  }

  })
  }, 

  addBook5: () => {
    dispatch({type: 'ADD_BOOK5', 

    payload:
    {id: '5', img: book1, 
    price: '$10.00',
     title: 'The  Handmaids Tale' }
  })
  }, 

  addBook6: () => {
    dispatch({type: 'ADD_BOOK6', 

    payload:
    {id: '6', img: book7,
     price: '$15.00', 
     title: 'The  Second Mountain' }

  })
  }, 

  addBook7: () => {
    dispatch({type: 'ADD_BOOK7', 

    payload:
    {id: '7', img: book11,
     price: '$15.00', 
     title: 'American Dirt' }

  })
  }

}
}
 

const mapStateToProps = (state) => {
    return {
      items: state
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
