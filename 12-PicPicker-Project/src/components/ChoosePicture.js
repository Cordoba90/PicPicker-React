import React, { Component } from 'react'
import {PICTUREPATHS} from "../App"

export default class ChoosePicture extends Component {
  render() {
    var src = PICTUREPATHS[this.props.currentPic];
    return (
      <div>
          <h1>Cute Pictures</h1>
          <img src={src} alt="cute"/>
          <button onClick={this.props.durdur}>STOP</button>
          <button onClick={this.props.baslat} >START</button>
          
      </div>
    )
  }
}
