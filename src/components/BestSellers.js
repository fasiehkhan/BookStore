import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class BestSellers extends Component {
    render() {
        return (
                <Link to="../bestseller" className="bestsellerButton">
                BestSellers
                </Link>
        )
    }
}

export default BestSellers
