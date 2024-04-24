import { Divider, Icon, List, ListItem, ListItemText } from "@mui/material";
import { IDdnsDevice, IListImg } from "../../../../interfaces/ddns.interface";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { environment } from "../../../../environments/environment";
import axiosInstance from "../../../../utils/axios.instance";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./main.css";
import AddDevice from "./addModal";
import {useTheme} from "@mui/material/styles";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function DdnsDevice() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [devices, setDevices] = useState<IDdnsDevice[]>([]);
  const [types, setTypes] = useState<IListImg[]>([]);
  const [open, setOpen] = useState(true);

  const [modal, setModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      await axiosInstance
        .get(environment.api.ddns_devices)
        .then((res) => {
          if (res.status === 200) {
            setDevices(res.data);
          }
        })
        .catch((err) => {
          throw err.message;
        });
    };
    const fetchTypes = async () => {
      await axiosInstance
        .get(environment.api.ddns_image)
        .then((res) => {
          if (res.status === 200) {
            setTypes((prevState) => res.data);
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    fetchDevices();
    fetchTypes();
  }, []);

  function handleOpen(index: number | null = null) {
    setModal(true);
    setSelectedIndex(index);
  }

  function handleClose() {
    setModal(false);
    setSelectedIndex(null);
  }

  return (
    <>
      {/*<List className="divider-list" aria-label="mailbox folders">*/}
      {/*  <ListItem>*/}
      {/*    <Button*/}
      {/*      onClick={(_) => {*/}
      {/*        navigate(environment.links.ddnsImg);*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      DDnsImg*/}
      {/*    </Button>*/}
      {/*    <Button onClick={() => handleOpen()}>+</Button>*/}
      {/*  </ListItem>*/}
      {/*  <Divider component="li" />*/}
      {/*  {devices.map((card, index) => (*/}
      {/*    <div key={index}>*/}
      {/*      <ListItem>*/}
      {/*        <ListItemText primary={card.name} />*/}
      {/*      </ListItem>*/}
      {/*      <Divider component="li" />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</List>*/}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AddDevice
        index={selectedIndex}
        modal={modal}
        devices={devices}
        types={types}
        setDevices={setDevices}
        handleClose={handleClose}
      />
    </>
  );
}
