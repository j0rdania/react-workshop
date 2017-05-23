import React, {Component} from 'react'
import Answer from './Question'
import Answer from './Answer'

class QAndA extends Component {
  render(){
    return(<div>
      <Question text=this.props.questionText/>
      <Answer text=this.props.answerText/>
      </div>)
  }
}

export default QAndA;
