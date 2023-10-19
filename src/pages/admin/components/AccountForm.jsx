import { useState } from "react";
import { Button, Input } from "../../../components";
import { DEPARTMENTS, POSITIONS } from "../../../constants/accounts";

const AccountForm = () => {
    const [myInfos, setMyInfos] = useState({
        id:0,
        email:"",
        username:"",
        fullname:"",
        department:0,
        position:0,
        createDate:"",
    })
    const onClickGetInfos = () => {
       
        console.log(myInfos);
      };
    return (
      <form>
        <Input value = {myInfos.email}
         required={true}
         onChange={(e) => setMyInfos({ ...myInfos, email: e.target.value })}
         label="Email" placeholder="Input email" />
        <Input
        value = {myInfos.username}
        onChange={(e) => setMyInfos({ ...myInfos, username: e.target.value })}
         label="UserName" placeholder="Input UserName" />
        <Input
        value = {myInfos.fullname}
        onChange={(e) => setMyInfos({ ...myInfos, fullname: e.target.value })}
         label="FullName" placeholder="Input FullName" />
        <Input
        value={myInfos.department}
        onChange={(e) =>
          setMyInfos({ ...myInfos, department: Number(e.target.value) })
        }
          label="Department"
          placeholder="Input department"
          type="select"
          options={DEPARTMENTS}
        />
        <Input
        value={myInfos.position}
        onChange={(e) =>
          setMyInfos({ ...myInfos, position: Number(e.target.value) })
        }
          label="Position"
          placeholder="Input Position"
          type="select"
          options={POSITIONS}
        />
        <Button bgColor="red" text="Save" onClick={onClickGetInfos}/>
        
      </form>
    );
  };
  
  export default AccountForm;