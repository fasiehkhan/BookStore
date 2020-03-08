import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartContent from '../components/CartContent'




export class ShoppingCart extends Component {
    
    render() {
        
        //access redux store
        const { item } = this.props; 
        
        return (
            <div>

            <h2 style={{position:'relative', top:'80px', 
            left:'510px', width: '20%', backgroundColor: 'silver', 
            textAlign: 'center', padding: '6px', 
            borderRadius: '122px'}}>
                ShoppingCart
            </h2> 

        <div className="td">
            
        <table>
        
            {item.cart.length == 0  ? 
            <h3 style={{position:'relative', top:'80px', 
            left:'210px', width: '80%', backgroundColor: 'rgb(77, 158, 255)', 
            textAlign: 'center', padding: '200px', 
            borderRadius: '12px'}}> Empty Cart ! </h3>

            : item.cart.map( i => (
                <tr>

             <td ><CartContent  id={i.id} price={i.price} book={i.title} img={i.img} func={i.func}/></td>             

             </tr> 

             ))}
          </table>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      item: state
    }
  }
  export default connect(mapStateToProps)(ShoppingCart);

  