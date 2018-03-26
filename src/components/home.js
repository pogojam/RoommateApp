import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import {Header,Icon} from 'semantic-ui-react'


export default class Home extends Component {
  render() {
    return (
<div className={'home'} >

            <div className="home-panel">
                <div className="Wrapper">

                <Icon size='huge' name='male' ></Icon>
                <Link className={'ui button '} to={'/Roomate'} >Roomate</Link>
            </div>
        </div>
                     <div className="home-panel">
                    <div className="Wrapper">
                    <Icon size='huge' name='university' ></Icon>
                    <Link className={'ui button '} to={'/houseDash'}>Home</Link> 
            </div>
      </div>
</div>
    )
  }
}
