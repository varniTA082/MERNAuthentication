import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Dashboard,
  HouseTwoTone,
  StarHalf,
  SupervisedUserCircle,
  VerifiedUser,
  VerticalSplit
} from "@material-ui/icons";

const navList = [
    { id: 1, linkName: "Dashboard", icon: <Dashboard /> },
    { id: 2, linkName: "Log Out", icon: <SupervisedUserCircle /> },
    
];

const DrawerList = () => {
  return (
    <List>
      {navList.map((items) => (
        <ListItem key={items.id} button>
          <ListItemIcon>{items.icon}</ListItemIcon>
          <ListItemText>{items.linkName}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerList;
