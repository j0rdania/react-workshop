import React, {Component} from 'react'
import QAndA from './QAndA'

class QAndAs extends Component {
  render(){
    return(<div>
      this.props.questionsAndAnswers.foreach
      <Question text=this.props.questionText/>
      <Answer text=this.props.answerText/>
      </div>)
  }
}

export default QAndA;
