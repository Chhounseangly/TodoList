import React from 'react'

const CompletedTeam = ({showCompleteTeam}) => {
  return (
    showCompleteTeam && (
    <div>
      {listCompleted.map((alltodo) => {
        return(
          <ListTodo todo={alltodo}/>
        )
      })}
    </div>
    )
  )
}

const ListTodo = (props) => {
  const {name, assignee, dueDate} = props.todo;
  return(
    <div className="container-group-task">
      <table className="list-gr-task">
        <tr>
          <td className="group-todo-name">
            <button className="btn-groupTodo">
              {name}
            </button>
          </td>
          <td className="group-todo-other">{assignee}</td>
          <td className="group-todo-other">{dueDate}</td>
          <td className="group-todo-other">Medium</td>
          <td className="group-todo-other">
            <select className="selection-option-teamTodo">
              <option>To do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  )
}

//fake data
const listCompleted = [
  {name: 'Introduction', assignee: 'Visal', dueDate: '10/Jan/2023'},
  {name: 'Objective', assignee: 'Lymeng', dueDate: '12/Jan/2023'},
  {name: 'Technology and Tools', assignee: 'Huoyly', dueDate: '15/Jan/2023'},
  {name: 'Conclusion', assignee: 'Panha', dueDate: '16/Jan/2023'},
  {name: 'Introduction', assignee: 'Visal', dueDate: '10/Jan/2023'},
  {name: 'Objective', assignee: 'Lymeng', dueDate: '12/Jan/2023'},
  {name: 'Technology and Tools', assignee: 'Huoyly', dueDate: '15/Jan/2023'},
  {name: 'Conclusion', assignee: 'Panha', dueDate: '16/Jan/2023'},
]
export default CompletedTeam
