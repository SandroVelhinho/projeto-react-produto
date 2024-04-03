import { AppBar, Button, Stack, IconButton } from "@mui/material";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import { Login } from "./Login";
import { useEffect } from "react";

export function Header({ firebaseName, firebaseLname, setFirebaseName }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(firebaseName);
  }, [firebaseName, firebaseLname]);

  return (
    <div style={{ display: "block" }}>
      <AppBar position="static">
        <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2}>
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          {firebaseName ? (
            <Stack direction={"row"} alignItems="center">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="text"
                  style={{ color: "white" }}
                  onClick={() => navigate("/update-user-details")}
                >
                  User-Details
                </Button>
                <span
                  className="satisfy-regular"
                  style={{ fontSize: "large", marginTop: "2%" }}
                >
                  Hello {firebaseName} {firebaseLname}
                </span>
              </Stack>
              <div style={{ position: "relative" }}>
                <IconButton
                  onClick={() => {
                    setFirebaseName("");
                  }}
                >
                  <LogoutIcon style={{ color: "white" }} />
                </IconButton>
              </div>
            </Stack>
          ) : (
            <Button
              variant="text"
              style={{ color: "white" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </Stack>
      </AppBar>
    </div>
  );
}
