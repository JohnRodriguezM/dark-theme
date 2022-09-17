import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

interface USER {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

const initialValues: USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
  website: "",
  company: ""
};

export const Users = () => {
  const { id } = useParams();
  console.log(id);
  //*almacena info del user
  const [infoUser, setInfoUser] = useState<USER>(initialValues);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const json = await response.json();
        setInfoUser(json);
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      {
        <>
          <li>{infoUser.name}</li>
          <li>{infoUser.username}</li>
          <li>{infoUser.email}</li>
        </>
      }
      <Link to="/user">Ir a buscar user</Link>
    </>
  );
};
