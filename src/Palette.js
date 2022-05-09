import React, {Component} from "react";
import ColorBox from "./ColorBox";
import './Palette.css'
import Navbar from "./Navbar";


export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500}
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
changeLevel(level){
    this.setState({level})
}
changeFormat(e){
    alert( e.target.value)
}

    render(){
        const {colors} = this.props.palette;
        const {level } = this.state
       const colorBoxes = colors[level].map(color => (
         <ColorBox background={color.hex} name={color.id}/>
       ))
        return (
          
            <div className="Palette">
            <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
            {/*Navbar goes here */}
            <div className="Palette-colors"> {colorBoxes}</div>
             {/*Footer */}
            </div>
        )
    }
}