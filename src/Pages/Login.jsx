import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  //   const [login, setLogin] = React.useState();
  const naveg = useNavigate();

  const handelSubmet = () => {
    naveg("/");
    localStorage.setItem("true", false);
  };
  return (
    <div className="text-2xl ">
      <h1>Hi in Log in Page</h1>{" "}
      <button className="border" onClick={handelSubmet}>
        Submet
      </button>
    </div>
  );
}
