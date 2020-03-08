import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NewRelease1 extends Component {
    render() {
        return (
            <Link to="../newreleases" className="newreleaseButton">
            NewReleases 
            </Link>
        )
    }
}

export default NewRelease1
