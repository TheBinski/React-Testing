import { ToastContainer, toast } from "react-toastify";
import type { Route } from "./+types/home";
import { useState } from 'react';
import { removeSessionData, updateSessionData } from "~/utilities/session-manager";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Tab Title" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [name, setName] = useState("");
  const toastInfo = (msg: string) => toast.info(msg);
  const toastSuccess = (msg: string) => toast.success(msg);

  function updateName(event: any) {
    setName(event.target.value);
  }

  function handleSubmit() {
      if (name.length > 20) {
        toastInfo("Name must be no longer than 20 characters!");
      } else if ( name.length === 0) {
        toastInfo("Resetting the Header back to Default!");
        removeSessionData("HeaderName");
      } else {
        let headerName = {name: name};
        updateSessionData('HeaderName', JSON.stringify(headerName));
        toastSuccess("New Header Set to " + name + "!");
        setName("");
      }
  }

  return (
  <div className="Home-Content">
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
    />
    <h1 className="home-content-text">Enter Name below and Submit to place name as the Header Title!</h1>
    <div className="headerChangerWrapper">
      <input className="nameInput" type="text" placeholder="Name..." value={name} onChange={updateName}/>
      <button className="nameInputButton" onClick={handleSubmit}>Submit Name</button>
    </div>
  </div>
  );
}
