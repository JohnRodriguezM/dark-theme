import { setDefaultResultOrder } from "dns";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const FindUser = () => {
  const [dataUser, setDataInfo] = useState<any[]>([]);
  useEffect(() => {
    const getTotalUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const json = await response.json();
        setDataInfo(json);
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    };
    getTotalUsers();
  }, []);

  return (
    <>
      <h1>Find your user</h1>
      <section>
        <ul>
          {dataUser.length === 0 ? (
            <h3>cargando</h3>
          ) : (
            dataUser.map((el: any) => {
              return (
                <>
                  <Link key={el.id} to={`/user/${el.id}`}>
                    Visitar al user {el.name}
                  </Link>
                  <br />
                </>
              );
            })
          )}
        </ul>
        <Link to="/">Volver al home</Link>
      </section>
    </>
  );
};
