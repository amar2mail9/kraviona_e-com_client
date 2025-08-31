import { Login } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function Profile() {
  return (
    <div>
      <Button>
        <Login /> LogIn
      </Button>
      <div>
        <h6>Name</h6>
        <p>EMail</p>
        <Button>MY Profile</Button>
        <Button>LogOut</Button>
      </div>
    </div>
  );
}

export default Profile;
