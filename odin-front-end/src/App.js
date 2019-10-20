import React from 'react';
import './App.css';
import './components/Editor.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            codeExecutionResult: ""
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        let code = this.refs.editor.innerHTML
        let result = fetch('http://localhost:8080/compiler', {
            method: 'PUT',
            body: JSON.stringify({code: code, type: "JAVA"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
        console.log(result)
        this.setState(oldState => {
            return oldState
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Editor</h1>
                <div className="Editor" contentEditable="true" ref="editor">
                    type code...
                </div>
                <h2>Code Execution Result</h2>
                <p>{this.state.codeExecutionResult}</p>
                <button onClick={this.handleOnClick}>Run</button>
            </div>
        )
    }
}

export default App;
