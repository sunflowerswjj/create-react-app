import React,{Component} from "react";
import ReactDOM from "react-dom";
const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Lesson extends Component {
    handleClick=()=>{
        console.log(this.props.index+"-"+this.props.lesson.title);
    }
    render(){
        const {lesson} = this.props;
        return(
        <div  onClick={this.handleClick}>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
        </div>

        )
    }

}

class LessonsList extends Component {

    render(){
    const {lessons} = this.props;
      return(
          <div>
              {lessons.map((item,index)=>(
                  <Lesson lesson={item} index={index} key={index}/>))}
          </div>
      )
    }

}

ReactDOM.render(<LessonsList lessons={lessons}/>,document.querySelector("#root"));
