import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../components/CustomAlert";
import { LangContext } from "../../src/context/langContext";
import { LinkContainer } from "react-router-bootstrap";

const AuthorizationPage = () => {
  const [lang] = useContext(LangContext);
  const navigate = useNavigate();
  const [alertState, setAlertState] = useState("none");

  const customAlert = () => {
    if (alertState !== "none") {
      setTimeout(() => {
        setAlertState("")
      }, 10000);
      if (alertState === "gap") {
        return <CustomAlert text="Fill the gap" />;
      }
      if (alertState === "wrong") {
        return <CustomAlert text="Wrong Email or Password !" />;
      }
      if (alertState === "success") {
        return <CustomAlert text="Sucess " />;
      }
    }
  };

  const admin = [
    {
      user_mail: "sevane2004@gmail.com",
      user_name: "Sevane",
      user_pass: "1234",
      user_status: "admin",
    },
  ];

  var users=[] ;

  if (!localStorage.getItem("users")) {
    users = admin;
  } else {
    
     users.push( JSON.parse(localStorage.getItem("users")));
     console.log(users);
    users.push(...admin);
  }

  // console.log(users);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = users.find((user) => user.user_mail === email);
    console.log(currentUser, "userDefined");
    if (!email || !pass) {
      setAlertState("gap");
    } else {
      if (currentUser === undefined) {
        setAlertState("wrong");
      } else {
        if (email == currentUser.user_mail && pass === currentUser.user_pass) {
          setAlertState("success");
          localStorage.setItem("user", JSON.stringify(currentUser));
          if (currentUser.user_status === "admin") {
            navigate("/admin");
          } else {
            navigate("/cart");
          }

          window.location.reload();
        } else {
          setAlertState("wrong");
        }
      }
    }
  };

  return (
    <>
      {customAlert()}

      <div id="alert-inner-div"></div>

      <div className=" d-flex align-items-center justify-content-center py-5 authorization">
        <div className="col-lg-6 col-sm-4">
          <h2 className="mt-5 text-danger z-5 text-center">
            {lang === "en" ? "Sign In" : "Daxil Ol"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 py-5">
              <span className="input-group-text" id="basic-addon1">
                {lang === "en" ? "Email" : "Mail"}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                {lang === "en" ? "Password" : "Şifrə"}
              </span>
              <input
                type="pass"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning fw-bold text-light"
            >
              {lang === "en" ? "Send" : "Göndər"}
            </button>
          </form>

          <LinkContainer to='/signup'>
            <p className="signup-btn mt-2 ">Qeydiyyatdan keç</p>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};

export default AuthorizationPage;