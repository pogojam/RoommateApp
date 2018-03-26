import React, { Component } from 'react'
import { Segment,Icon,Label, Input, Button,Form,Checkbox } from 'semantic-ui-react'
import {getUsers} from '../server'
import Map from './houseMap'

export default class houseDash extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    
    return (
      <div className='dashboard'> 
        <div className="leftpanel">
          <Map  ></Map>
        </div>
        <div className="rightpanel">

        </div>
      </div>
    )
  }
}


