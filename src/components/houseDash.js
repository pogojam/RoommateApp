import React, { Component } from "react";
import { getUsers } from "../server";
import Map from "./houseMap";
import {
  Image,
  Radio,
  Menu,
  Divider,
  Segment,
  Icon,
  Label,
  Input,
  Button,
  Form,
  Checkbox
} from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { dashMenu } from "../assets/assets";
import { XYPlot,HorizontalGridLines,XAxis,YAxis, LineSeries } from "react-vis";


const initState = {};

export default class HouseDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home",
      user: "Ryan Breaux"
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
     
  render() {

    const loggedIn = this.props.authenticated

    const { activeItem,messages } = this.state;
    
    const { menu1, menu2, menu3, menu4 } = dashMenu;

    return (
      <div className="dashboard animated fadeInUp">
        <div className="dashboard-Nav">
          <Menu className="dashboard-Nav--Menu" vertical pointing secondary>

          {/* SVG */}
            <svg
              width="157px"
              height="161px"
              viewBox="0 0 157 161"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <g
                id="Welcome"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-94.000000, -77.000000)"
                  stroke="black"
                >
                  <ellipse
                    id="Oval"
                    cx="172.5"
                    cy="157.5"
                    rx="77.5"
                    ry="79.5"
                  />
                </g>
              </g>
            </svg>
            {/* SVG END */}

            <h1 className="dashboard-header">{this.state.user}</h1>
            <div className="dashboard-userView">
              Rent Paid <Radio toggle />
              Services <Radio toggle />
              Tasks <Radio toggle />
              Note <Radio toggle />
            </div>
            
            <Divider />   

            <Menu.Item
              icon="home"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick.bind(this)}
            />
            <Menu.Item
              icon="globe"
              name="Common Space"
              active={activeItem === "Common Space"}
              onClick={this.handleItemClick.bind(this)}
            />
            <Menu.Item
              icon="s15"
              name="maintenance"
              active={activeItem === "maintenance"}
              onClick={this.handleItemClick.bind(this)}
            />
            <Menu.Item
              icon="user"
              name="Roomates"
              active={activeItem === "Roomates"}
              onClick={this.handleItemClick.bind(this)}
            />
          </Menu>
        </div>

        <div className="dashboard-Panel">
          {activeItem === "home" && <HomedashContent />}
          {activeItem === "maintenance" && <MaintenanceContent />}
          {activeItem === "Common Space" && <CommonspaceContent />}
          {activeItem === "Roomates" && <RoomateContent />}
        </div>

       { messages && <div className="live-FeedPanel" />}
      </div>
    );
  }
}

const HomedashContent = () => {
  // Chart Data
  return (
    <div className=" animated fadeIn dashboard-Panel--Wrapper">
      <div>
      <XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 1, y: 1000},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis />
  <YAxis />
</XYPlot>
  </div>
    </div>
  );
};
const CommonspaceContent = () => {
  return <div className="dashboard-Panel--Wrapper" />;
};
const RoomateContent = () => {
  return (
    <div className="dashboard-Panel--Wrapper">
      <RoomateTile roomate={{ name: "Ryan" }} />
    </div>
  );
};


const RoomateTile = ({ roomate }) => {
  return (
    <div className="RoomateTile animated fadeIn">
      <Icon name="user" size="huge" />
      <h1>{roomate.name}</h1>
      <div className="info-Romate-Tile" />
    </div>
  );
};



const MaintenanceContent = () => { 
return(<div className="dashboard-Panel--Wrapper">

</div>)}