import React, { Component } from 'react'
import { connect } from 'react-redux'
import book20 from '../book20.png';import book21 from '../book21.png';
import nR1 from '../nR1.png';
import nR2 from '../nR2.png';import nR3 from '../nR3.png';
import Price from '../components/Price'


export class NewReleases extends Component {
    
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
          position: 'relative', top: '130px',color: 'rgb(84, 179, 211)', textAlign: 'center'
      }
        return (
            <React.Fragment>                        
            <h2 style={titleBESTSELLERS}>
              New Releases
            </h2>
                            <table className="table">
                                 <tr>
                                  <div className="td"> 
                                  <td><Price  id={items.books[6].id} price={items.books[9].price} book={items.books[9].title} img={items.books[9].img} func={this.addItem20} /></td>
                                  <td><Price  id={items.books[7].id} price={items.books[10].price} book={items.books[10].title} img={items.books[10].img} func={this.addItem21}/></td>
                                  <td><Price  id={items.books[8].id} price={items.books[11].price} book={items.books[11].title} img={items.books[11].img} func={this.addItem22}/></td>
            
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
                    {id: '9', img: nR1,
                    price: '$30.00', title: 'Unicorns' }
                  })
                },
                addBook21: () => {
                  dispatch({type: 'ADD_BOOK21', 
            
                  payload:
                  {id: '10', img: nR2,
                  price: '$20.00', title: 'The Drunken Botanist' }
                })
              }, 
            
                
              addBook22: () => {
                dispatch({type: 'ADD_BOOK22', 
            
                payload:
                {id: '11', img: nR3, 
                price: '$40.00', title: 'A Nearly Normal Family' } 

            
              })
              }, 
          }
      }
            
            const mapStateToProps = (state) => {
                return {
                  items: state
                }
              }
             
            export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);
            
            
    
