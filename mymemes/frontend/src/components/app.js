import React from 'react'
import { render, Render } from 'react-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h1>Testing React Code</h1>
    }
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)