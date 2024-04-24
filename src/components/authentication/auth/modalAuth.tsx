import { IModalState } from "../../../interfaces/modal.interface";
import { environment } from "../../../environments/environment";
import { useModalStore } from "../../../states/modal.store";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import { Modal } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import * as React from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./modalAuth.css";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number): { "aria-controls": string; id: string } {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function AuthModal() {
  const modalStore: IModalState = useModalStore();
  const modalId: number = environment.modals.auth;

  const theme = useTheme();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Escape") {
      modalStore.close(modalId);
    }
  };

  return (
    <Modal
      open={modalStore.modals[modalId].state}
      onClose={(): void => {
        modalStore.close(modalId);
      }}
      className="modalMain"
      onKeyDown={handleKeyDown}
    >
      <Box className={"modalWindow"}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Log In" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Signup />
        </TabPanel>
      </Box>
    </Modal>
  );
}

export default AuthModal;
