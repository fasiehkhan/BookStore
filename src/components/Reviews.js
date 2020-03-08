import React, { Component } from 'react'
import { connect } from 'react-redux'
import book20 from '../book20.png';import book21 from '../book21.png';
import book22 from '../book22.png';
import Price from '../components/Price'

export class Reviews extends Component {

    addItem20 = () => {
        this.props.addBook20()
      }
    
      addItem21 = () => {
        this.props.addBook21()
      }
    
      addItem22= () => {
        this.props.addBook22()
      }
    
      
    render() {
        const { items } = this.props; 
        const  titleBESTSELLERS = {
          position: 'relative', top: '150px', color: 'rgb(84, 179, 211)', textAlign: 'center'
      }
        return (
            <React.Fragment>                        
      <h2 style={titleBESTSELLERS}>
        Best Sellers
      </h2>
                      <table className="table">
                           <tr>
                            <div className="td"> 
                            <td><Price  id={items.books[6].id} price={items.books[6].price} book={items.books[6].title} img={items.books[6].img} func={this.addItem20} /></td>
                            <td><Price  id={items.books[7].id} price={items.books[7].price} book={items.books[7].title} img={items.books[7].img} func={this.addItem21}/></td>
                            <td><Price  id={items.books[8].id} price={items.books[8].price} book={items.books[8].title} img={items.books[8].img} func={this.addItem22}/></td>
      
                            </div>
                            </tr>
                
                </table>    
      </React.Fragment>                
      
       )
          }
      }
      
      
      const mapDispatchToProps = (dispatch) => {
        return {
            addBook20: () => {
              dispatch({type: 'ADD_BOOK20', 
      
              payload:
              {id: '1', img: book20,
               price: '$15.00', title: 'The Art of NGAF TEST' }
            })
          },
          addBook21: () => {
            dispatch({type: 'ADD_BOOK21', 
      
            payload:
            {id: '2', img: book21,
             price: '$20.00', title: 'A long walk to water' }
          })
        }, 
      
          
        addBook22: () => {
          dispatch({type: 'ADD_BOOK22', 
      
          payload:
          {id: '4', img: book22, 
          price: '$18.00',
           title: 'A Gentleman in Moscow'
        }
      
        })
        }, 
    }
}
      
      const mapStateToProps = (state) => {
          return {
            items: state
          }
        }
       
      export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
      
      
