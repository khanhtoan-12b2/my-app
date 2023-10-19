import styled from "styled-components";
import PeopleList from "../../components/PeopleList";
import { Button, Dialog } from "../../components";
import { AccountForm } from "./components";
import { useState } from "react";
// import { Fragment } from "react";

const Admin = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showCreateDialog, setshowCreateDialog] = useState(false);

  const onClickCreate = () =>{
    setshowCreateDialog(true);
  }
  const onClickEdit = () => {
    setShowEditDialog(true);
    // showDialog = true
  };

  const onClickDelete = () => {
    setShowDeleteDialog(true);
    // showDialog = true
  };

  const onCloseDialog = () => {
    setShowEditDialog(false);
    setshowCreateDialog(false)
  };

  const onCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  return (
    <Main className="test">
      <Button onClick={onClickCreate}  bgColor="blue" text="Create new account" />
      <PeopleList {...{ onClickEdit, onClickDelete }} />
      {showCreateDialog && (
        <Dialog
          onClose={onCloseDialog}
          title="Create account"
          showFooter
        >
          <AccountForm />
        </Dialog>
      )}
      {showEditDialog && (
        <Dialog
          onClose={onCloseDialog}
          title="Edit account"
          showFooter
        >
          <AccountForm />
        </Dialog>
      )}
      {showDeleteDialog && (
        <Dialog
          onClose={onCloseDeleteDialog}
          title="Delete account"
          // footer={<h1>Footer</h1>}
        >
        </Dialog>
      )}
    </Main>
  );
};



const Main = styled.div``;

export default Admin;