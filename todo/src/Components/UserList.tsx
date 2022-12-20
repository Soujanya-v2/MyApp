/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserListProps } from "../Todo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    length: "30px",
    width: "600px",
    alignItems: "center",
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
    position: "relative",
    height: "130px",
  },
  image: {
    borderRadius: "90px",
    width: "70px",
    alignContent: "center",
  },
  name: {
    alignContent: "center",
    position: "absolute",
    top: "0px",
    left: "90px",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  },
  scrollbar: {
    height: "10px",
    overflow: " auto",
  },
  email: {
    fontStyle: "none",
    position: "absolute",
    top: "53px",
    fontSize: "17px",
  },
  hr: {
    width: "450px",
    position: "absolute",
    top: "45px",
    color: "grey",
  },
});
const UserList = () => {
  const classes = useStyles();
  const PER_PAGE = 2;
  const apiPath = "https://reqres.in/api/users?";
  const [Lists, setLists] = useState<UserListProps[]>([]);
  const [length, setLength] = React.useState<number>(0);
  const getList = () => {
    const pageNo = Math.ceil(Lists.length / PER_PAGE) + 1;
    const queryParam = "page=" + pageNo + "&per_page=" + PER_PAGE;
    const finalUrl = apiPath + queryParam;
    axios
      .get(finalUrl)
      .then((res) => {
        const apiRes = res.data.data;
        setLength(res.data.total);
        const mergeData = [...Lists, ...apiRes];
        setLists(mergeData);
      })
      .catch((err) => {
        console.error("Error while Loading", err);
      });
  };
  useEffect(() => {
    setTimeout(() => getList(), 1000);
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => getList(), 1000);
  };

  return (
    <>
      <div className={classes.container}>
        <h2>User List</h2>
        <div className="row">
          <InfiniteScroll
            height={"200px"}
            dataLength={Lists.length}
            next={fetchMoreData}
            hasMore={Lists.length < length}
            loader={<h4>Loading......</h4>}
          >
            {Lists &&
              Lists.length > 0 &&
              Lists.map((key) => {
                return (
                  <>
                    <div className={classes.cards}>
                      <div className="image-block">
                        <img
                          className={classes.image}
                          src={key?.avatar}
                          alt="test image"
                        />
                      </div>
                      <div className={classes.name}>
                        <div>
                          <h3>
                            {key?.first_name}
                            {key?.last_name}
                          </h3>
                        </div>
                        <div className={classes.email}>
                          {key?.email}
                          <hr className={classes.hr} />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default UserList;
