import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "../Link";
import ListLink from "./ListLink";
import { useQuery } from "react-query";
import { getUserRoles } from "../clientApi/user/roles";
import { useSession } from 'next-auth/client';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children?: any
}

export default function Nav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { data: roles } = useQuery('userroles', getUserRoles);
  const isAdmin = roles && roles.some(role => role === 'ADMIN');

  const [session] = useSession();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {isAdmin && (
        <>
          <List>
            <ListLink href="/admin" text={"Admin Panel"}>
              <AdminPanelSettingsIcon />
            </ListLink>
          </List>
          <Divider />
        </>
      )}
      <List>
        <ListLink href="/" text={"Home"}>
          <HomeIcon />
        </ListLink>
      </List>
      <List>
        <ListLink href={"/invite-friend"} text={"Invite a friend"}>
          <SendIcon />
        </ListLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "green",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Calorie Counter
          </Typography>
          <Box sx={{ position: "absolute", right: "20px" }}>
            {session && session.user && (
              <Typography variant="h6" noWrap component="div">
                Hello, {session.user.name}
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
