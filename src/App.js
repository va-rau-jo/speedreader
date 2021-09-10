import React, {Component} from 'react';
import './App.css';
import Reader from './components/Reader'
import { TextField, withStyles } from '@material-ui/core';

const styles = {
  leftCol: {
    float: 'left',
    marginTop: '24px',
    textAlign: 'center',
    width: '40%'    
  },
  readerDiv: {
    width: '200px'
  },
  rightCol: {
    float: 'left',
    marginTop: '24px',
    width: '60%'    
  },
  textArea: {
    margin: "0 20px"
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: //"mai mai don't yell at me", 
      "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
      wpm: 300
    }
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleWPMChange(e) {
    const wpm = (e.target.validity.valid) ? e.target.value : this.state.wpm;
    this.setState({ wpm });
  }

  startReader() {
    this.setState({text: "this is a test"});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.leftCol}>
          <h5> Words Per Minute </h5>
          <input
            label="Words per Minute"
            type="text"
            pattern="[0-9]*"
            onChange={this.handleWPMChange.bind(this)}
            value={this.state.wpm} />
          <h5> Text </h5>
          <div className={classes.textArea}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              onChange={this.handleTextChange.bind(this)}
              rows={8}
              value={this.state.text}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          
        </div>
        <div className={classes.rightCol}>
            <Reader text={this.state.text} wpm={this.state.wpm} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
