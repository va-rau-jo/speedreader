import React, {Component} from 'react';
import { Button, withStyles } from '@material-ui/core';

const styles = {
  center: {
    textAlign: 'center'
  }
}

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
    }
  }

  advanceWord() {
    if (this.state.words == null || this.state.wordIndex === this.state.words.length - 1) {
      return false;
    }
    this.setState({
      wordIndex: this.state.wordIndex + 1
    });
    return true;
  }

  startReader(text, wpm) {
    this.setState({
      timer : setInterval(() => {
        let isWordAdvanced = this.advanceWord();
        if (!isWordAdvanced) {
          clearInterval(this.state.timer);
          this.setState({ timer: null });
        }
      }, 1000 / (wpm / 60)),
      wordIndex: 0,
      words: text.split(" ")
    });
  }

  stopReader() {
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  }

  render() {
    const { classes, text, wpm } = this.props;
    const word = (this.state.timer === null) ? "Start Reading" : this.state.words[this.state.wordIndex];
    return (
      <div className={classes.center}>
        <h1> {word} </h1>
        <Button variant="contained" color="primary"
            onClick={() => {(this.state.timer === null) ? 
              this.startReader(text, wpm) : 
              this.stopReader()}}> 
            {this.state.timer === null ? "Start Reading" : "Stop Reading"} 
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Reader);