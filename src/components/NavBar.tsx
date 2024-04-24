import { environment } from "../environments/environment";
import { useProfileStore } from "../states/profile.store";
import { Box, Toolbar, Typography } from "@mui/material";
import { useModalStore } from "../states/modal.store";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import React, { useEffect } from "react";

export default function NavBar() {
  const modalStore = useModalStore();
  const profileStore = useProfileStore();

  useEffect((): void => {
  }, [profileStore.isLogged]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            edProject
          </Typography>
          {profileStore.isLogged ? (
            <h3>hallo User</h3>
          ) : (
            <Button
              color="inherit"
              onClick={() => modalStore.open(environment.modals.auth)}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
