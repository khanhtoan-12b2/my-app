
import People from "./People"


const PeopleList = ({onClickEdit, onClickDelete}) =>{
    

    const peopleData = [
        {id:0, username:"ABC",fullname: "GHJJ", department:"Giam Doc", position:"asnakj",createDate:"sdjsjkdh"},
        {id:0, username:"ABC",fullname: "GHJJ", department:"Giam Doc", position:"asnakj",createDate:"sdjsjkdh"},
        {id:0, username:"ABC",fullname: "GHJJ", department:"Giam Doc", position:"asnakj",createDate:"sdjsjkdh"},
        {id:0, username:"ABC",fullname: "GHJJ", department:"Giam Doc", position:"asnakj",createDate:"sdjsjkdh"}
    ]

    return(
        <>
        <table >
        <thead style={{padding:20, margin:20}}>
          <tr >
            <th>ID</th>
            <th>UserName</th>
            <th>FullName</th>
            <th>Department</th>
            <th>Position</th>
            <th>Create Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {peopleData.map((p,i) =>(
            <People 
            people = {p}
            key={i}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            />
          ))}
        </tbody>
      </table>
        </>
    )
}
 export default PeopleList;