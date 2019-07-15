import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}

export default class SubmitAnswer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // if ((props.enthusiasmLevel || 0) <= 0) {
    //   throw new Error('You could be a little more enthusiastic. :D');
    // }

    // this.state = {
    //   enthusiasmLevel: props.enthusiasmLevel || 1,
    // };
  }

  // onIncrement = () =>
  //   this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1});
  // onDecrement = () =>
  //   this.setState({enthusiasmLevel: this.state.enthusiasmLevel - 1});
  // getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

  render() {
    return (
      <div id="answer">' + 
            <p>Can you contribute a video which answers this question?</p>
            <form method="POST" action="https://api.skillsera.org/answers" target="_blank">
              <input placeholder="youtube url" name="url"/>
              <input type="number" placeholder="start time" name="start"/>
              <input type="number" placeholder="stop time" name="stop"/>
              <input type="hidden" value="' + id + '"/>
              <input type="submit"/>
            </form>
          </div>
    );
  }
}



// var SubmitAnswerComponent = {
//     render: function(id) {
//       $('#app').append(
//           '<div id="answer">' + 
//             '<p>Can you contribute a video which answers this question?</p>' +
//             '<form method="POST" action="https://api.skillsera.org/answers" target="_blank">' +
//               '<input placeholder="youtube url" name="url"/>' +
//               '<input type="number" placeholder="start time" name="start"/>' +
//               '<input type="number" placeholder="stop time" name="stop"/>' +
//               '<input type="hidden" value="' + id + '"/>' +
//               '<input type="submit"/>' + 
//             '</form>' +
//           '</div>'
//       );
//     }
//   }