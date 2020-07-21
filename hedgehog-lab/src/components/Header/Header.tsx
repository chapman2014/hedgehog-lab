import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, useMediaQuery, FormControlLabel, Switch } from '@material-ui/core';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import SideBar from './SideBar';

interface HeaderProps {
  handleLoadTutorial: (event: React.MouseEvent, i: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
);

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    handleLoadTutorial,
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const lgBreakpointMatches = useMediaQuery(theme.breakpoints.up('lg'));

  // SideBar open prop
  const [siderBarOpen, setOpen] = useState(false);

  const handleSideBarOpen = () => {
    setOpen(!siderBarOpen);
  };

  return (
    <div>
      <AppBar position="fixed" elevation={0} color="default" className={classes.appBar}>
        <Toolbar>
          <FormControlLabel
            control={
              <Switch
                checked={siderBarOpen}
                onChange={handleSideBarOpen}
                name="handleSideBarOpen"
                color="primary"
              />
            }
            label="Tutorials"
          />

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ display: lgBreakpointMatches ? "inline" : "none" }}
          >
            <img src={process.env.PUBLIC_URL + "/cat.png"} style={{ height: '1.25rem' }} alt="Hedgehog Lab Logo" />
          </IconButton>

          <Typography
            variant={lgBreakpointMatches ? "h6" : "body1"}
            style={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center'
            }}>
            Hedgehog Lab
        </Typography>

          <Button
            color="inherit"
            style={{ textTransform: 'none', height: 36 }}
            onClick={() => { window.open('https://github.com/lidangzzz/hedgehog-lab') }}
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/lidangzzz/hedgehog-lab?style=social"
            />
          </Button>
        </Toolbar>
      </AppBar>

      <SideBar
        handleLoadTutorial={handleLoadTutorial}
        siderBarOpen={siderBarOpen}
      />
    </div>
  );
};

export default Header;
