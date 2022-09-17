import { useState } from "react";
import { Link } from "react-router-dom";
export const HeaderSection = () => {
  return (
    <section>
      <nav>
        <Link to="/about">About</Link> <br />
        <Link to="/user">Encuentra tú user</Link>
      </nav>
    </section>
  );
};
