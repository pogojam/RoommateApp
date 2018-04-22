import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import {Header,Icon,Divider} from 'semantic-ui-react'
import {Transition} from 'react-transition-group'

export default class Home extends Component {
    constructor(props) {
      super(props)

      this.state = {
        show:false    
    }

    }
    
    leaveAnimation(){
        
    }
    handleMouseover(){

        if(!this.state.show){

            this.setState({
                show:!this.state.show
            })
            
        }
    }

  render() { 
      const show = this.state.show
      
      return ( <div  className={'home'} >
            <div className="home-panel">
                <div className="Wrapper">
                <svg className='animated fadeInDown' width="63px" height="57px" viewBox="0 0 63 57"  >
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="AppLogo" stroke-width="5">
                    <g id="Combined-Shape">
                        <path d="M2.5,23.5403828 L2.5,24.727954 C4.84150174,25.3592477 6.56464216,27.4977816 6.56464216,30.0387764 L6.56464216,45.4178709 C6.56464216,45.5660602 6.56851747,45.7142243 6.57626412,45.862211 C6.82166638,50.5502121 10.8209801,54.1516504 15.5089813,53.9062489 C25.1959875,53.3991643 30.4413694,53.1502773 31.5,53.1502773 C32.5550801,53.1502773 37.7162532,53.3971201 47.2365525,53.9000808 C47.3859,53.9079709 47.5354296,53.911918 47.6849853,53.911918 C52.3794069,53.911918 56.1849875,50.1063374 56.1849875,45.4119161 L56.1849853,30.0387764 C56.1849853,27.4080331 58.0319987,25.2086829 60.5,24.6667513 L60.5,23.7124175 C55.8615596,21.3673657 51.1631933,18.5387262 46.4039869,15.2275893 C41.6452134,11.9167536 36.6388717,7.99357014 31.3828001,3.45785381 L15.747662,15.1759133 L15.581949,15.2899939 L2.5,23.5403828 Z"></path>
                    </g>
                </g>
            </g>
        </svg>
                <Header size='small' className='animated fadeInUp header-home' >
                        Home
                        <Link onMouseOver={this.handleMouseover.bind(this)} className={'ui button '} to={'/HouseDash'} >enter</Link>
        
                   <Header.Subheader   className={show?'show home-subheader':'hidden home-subheader'} >
                        manage your home   
                    </Header.Subheader> 
    
                </Header>
               
            </div>
        </div>
    </div>
    )
  }
}
