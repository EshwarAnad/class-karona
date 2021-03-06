import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ClassIcon from '@material-ui/icons/Class';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Link style={{ textDecoration:'none', color: 'white' }} to="/educator">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="DashBoard" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>
        <ListItemText primary="My Lectures" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Time Table" />
        {!open ? <ExpandMore /> : <ExpandLess /> }
      </ListItem>
      <Collapse in={open} unmountOnExit>
        <List component="div" disablePadding>
        <Link style={{ textDecoration:'none', color: 'white' }} to="/educator/freshmanyeartimetable">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Freshman Year" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration:'none', color: 'white' }} to="/educator/sophomoreyeartimetable">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Sophomore Year" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration:'none', color: 'white' }} to="/educator/prefinalyeartimetable">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Pre-final Year" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration:'none', color: 'white' }} to="/educator/finalyeartimetable">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Final Year" />
          </ListItem>
        </Link>
        </List>
      </Collapse>
      </>
  );
}
