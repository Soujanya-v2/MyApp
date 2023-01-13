/* eslint-disable no-template-curly-in-string */
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { UserListProps } from "../Todo";
import { Grid } from "@mui/material";
import UserModal from "./UserModal";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  tableBox: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "50px",
  },
});
const PER_PAGE = 12;

function TodoTask() {
  const classes = useStyles();
  const [users, setUsers] = useState<UserListProps[]>([]);
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [page, setPage] = React.useState<number>(1);
  const [keyVal, setKeyVal] = useState("");
  const [updatedUser, setUpdatedUser] = React.useState<UserListProps>();
  const client = axios.create({
    baseURL: "https://reqres.in/api/users",
  });

  const getUser = () => {
    client
      .get("", {
        params: {
          page: page,
          per_page: PER_PAGE,
        },
      })
      .then((res) => {
        setUsers(res.data.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUser = (data: UserListProps) => {
    setUpdatedUser(data);
    if (updatedUser) {
      client
        .put(`${updatedUser.id}`, {
          first_name: data.first_name,
          email: data.email,
        })
        .then((response) => {
          setUsers(
            users.map((data) => {
              if (data.id === updatedUser.id) {
                data.first_name = response.data.first_name;
                data.email = response.data.email;
              }
              return data;
            })
          );
          setOpen(false);
        });
    }
  };

  const addUser = (data: UserListProps) => {
    setLogin(true);
    client
      .post("", {
        data,
      })
      .then((response) => {
        const id = response.data.id;
        const apiRes = response.data.data;
        Object.defineProperty(apiRes, "id", {
          value: id,
        });
        setUsers([...users, apiRes]);
      });
  };

  const deleteUser = (id: number) => {
    client.delete(`${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleCreate = () => {
    setKeyVal("Add");
    setOpen(true);
  };

  const handleEdit = (data: UserListProps) => {
    setKeyVal("Edit");
    setUpdatedUser(data);
    setOpen(true);
  };

  return (
    <>
      <Grid item container justifyContent="center" alignItems="center">
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          flex-direction="column"
          marginTop="60px"
        >
          <Button variant="outlined" onClick={handleCreate}>
            Create
          </Button>
        </Grid>
        <Grid container justifyContent="center">
          <h1>Add User List</h1>
        </Grid>

        <div>
          <table>
            <thead className="task">
              <tr className="content">
                <th>Email</th>
                <th>First Name</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {login &&
                users.map((data) => {
                  return (
                    <div className="task">
                      <tr className="content">
                        <td>{data.email} </td>
                        <td>{data.first_name}</td>
                        <td>
                          <Button onClick={() => deleteUser(data.id)}>
                            delete
                          </Button>
                        </td>
                        <td>
                          <Button onClick={() => handleEdit(data)}>edit</Button>
                        </td>
                      </tr>
                    </div>
                  );
                })}
            </tbody>
          </table>
        </div>
        <Grid item container justifyContent="center" alignItems="center">
          {open && (
            <UserModal
              addUser={addUser}
              setOpen={setOpen}
              open={open}
              updatedUser={updatedUser ? updatedUser : null}
              keyValue={keyVal}
              updateUser={updateUser}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}
export default TodoTask;
