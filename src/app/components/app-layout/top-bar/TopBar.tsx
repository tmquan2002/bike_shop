import React from 'react';
import { Grid } from 'semantic-ui-react';
import './TopBar.css';
import { ReactComponent as SidebarIcon } from '../../../assets/svgs/sidebar_icon.svg';
import { ReactComponent as DashboardIcon } from '../../../assets/svgs/dashboard_icon.svg';
import NeumoButton from '../neumo-button/NeumoButton';

const TopBar: React.FC = () => {
  return (
    <nav className="top-bar">
      <Grid columns={3} className="tight">
        <Grid verticalAlign="middle">
          <Grid.Column className="spaced-content">
            <NeumoButton raised Icon={<SidebarIcon />}></NeumoButton>
          </Grid.Column>
        </Grid>
        <Grid centered verticalAlign="middle">
          <Grid.Row centered className="page-title align-center">
            <DashboardIcon className="icon" />
            <h1 className="title">Bike Management</h1>
          </Grid.Row>
        </Grid>
      </Grid>
    </nav>
  );
};

export default TopBar;
