import * as React from 'react';

export interface Props {
    name: string;
    questions?: Array<object>;
  }
  
  interface State {
    enthusiasmLevel: number;
  }

export default class QuestionList extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
    }

    NumberList = (props) => {
        const questions = props.questions;
        // const qList = questions.map((question) =>
        //   <li>{question}</li>
        // );
        const qList = questions.map((question) => {
        <tr>
            <td>' + q.id + '</td>
            <td><a href="/learn?id=' + q.id + '">' + q.question + '</a></td>
            <td>' + (JSON.stringify(q.answers) || '[]') + '</td>
            <td>' + (JSON.stringify(q.topics) || '[]') + '</td>
            <td>' + (linkifyDependencies(q.dependencies) || '[]') + '</td>
            <td>' + q.created + '</td>
            <td>' + q.dark + '</td>
            <td>
                <form method="POST" action="https://api.skillsera.org/questions/' + q.id + '?action=delete">
                    <input type="submit" value="X"></input>
                </form>
            </td>
        </tr>
        });
        {/* return (
          <ul>{qList}</ul>
        ); */}
    }

    questionList = () => {
        qListArr: [];
    // console.log(this.props.tasks);
    if(this.props.tasks) {
        qListArr = [...this.props.tasks].map((task)=> {
        return ( 
          <Task 
            key={(task["group"]+""+task["id"])} 
            clicked={(taskId, groupKey)=>this.selectHandler(taskId, groupKey)}
            complete={0}
            taskObj={task}
            />);
      })
      .reduce((arr, el) => { return arr.concat(el) }, []);
    }
    
    if(qListArr.length === 0) { qListArr = <p>You have no Task Groups</p>; }
    // console.log(qListArr);
    return qListArr; 
  } 

    public render () {
        return (
            <div className="questions">
                <table>
                    <thead>
                        <th>id</th>
                        <th>question</th>
                        <th>answers</th>
                        <th>topics</th>
                        <th>requires</th>
                        <th>asked</th>
                        <th>darked?</th>
                        <th></th>
                    </thead>
                    <tbody id="questions">
                        <QuestionComponent />
                    </tbody>
                </table>
            </div>
        );
    }

}

