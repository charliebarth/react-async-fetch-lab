import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(data => data.json())
    .then(data => console.log("test"))
  }

  render() {
    return "Test"
  }
}
