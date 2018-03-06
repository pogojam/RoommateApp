import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
<div className={'home'} >
        <div className="home_header">
            <h1 className="header-title">Roomate App</h1>
        </div>
    <div className="home_user">
        <div className="home_user-roomate">
            <Link className={'button'} to={'/Roomate'} >Enter as Roomate</Link>
        </div>
        <div className="home_user-landlord">
            <Link className={'button'} to={'/Landlord'}>Enter as landlord</Link>
        </div>
    </div>
</div>
    )
  }
}
