require('./index.scss')

import anagram from './anagram'
import React from 'react'
import ReactDOM from 'react-dom'

var Checker = React.createClass({
  getInitialState: function() {
    return {
      anagram: true,
      word1: "",
      word2: ""
    }
  },
  render: function() {
    return (
      <form id="checker">
        <input type="text" id="word1" value={this.state.word1} onChange={this.onWord1Change} placeholder="Word 1" />
        <input type="text" id="word2" value={this.state.word2} onChange={this.onWord2Change} placeholder="Word 2" />
        <label id="result" className={this.state.anagram ? "correct" : "incorrect"}>{this.state.anagram ? "Anagram" : "Not anagram"}</label>
      </form>
    )
  },
  onWord1Change: function(event) {
    this.setState({word1: event.target.value, anagram: anagram(event.target.value, this.state.word2)})
  },
  onWord2Change: function(event) {

    this.setState({word2: event.target.value, anagram: anagram(this.state.word1, event.target.value)})
  }
})

window.onload = () => {
  ReactDOM.render(<Checker />, document.getElementById("main"))
}
