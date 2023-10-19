import Button from "./Button";


const People = (props) => {
    const {people, onClickEdit, onClickDelete } =props;

    return(
        <tr>
            <td>
                {people.id}
            </td>
            <td>
                {people.username}
            </td>
            <td>
                {people.fullname}
            </td>
            <td>
                {people.department}
            </td>
            <td>
                {people.position}
            </td>
            <td>
                {people.createDate}
            </td>
            <td>
                <Button text = "Edit" bgColor = "orange" onClick= {onClickEdit}/>
            </td>
            <td>
                <Button text = "Delete" bgColor="red" onClick= {onClickDelete}/>
            </td>
        </tr>
    )
}
export default People