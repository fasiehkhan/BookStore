import React, { Component } from 'react'
import logo from '../logo.png'


export class Footer extends Component {

    render() {
        return (
            
            <div className="footer">
                <div style={{position:'relative', marginLeft:'auto',
                marginRight:'auto', width:'10%'}}>
                <img src={logo}></img>
                </div>
                <div style={{position:'relative', marginLeft:'auto',
                marginRight:'auto', left: '530px'}}>
                Copyright  © Books4You

                </div>
            </div>
        )
    }
}


export default Footer
