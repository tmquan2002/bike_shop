import React from 'react';
import { Grid } from 'semantic-ui-react';
import './TopBar.css';
import { ReactComponent as SidebarIcon } from '../../../assets/svgs/sidebar_icon.svg';
import { ReactComponent as DashboardIcon } from '../../../assets/svgs/dashboard_icon.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/svgs/bell_icon.svg';

interface TopBarProps {
  username: string;
}

const TopBar: React.FC<TopBarProps> = (props) => {
  return (
    <nav className="top-bar">
      <Grid columns={3} className="tight">
        {/* <Grid verticalAlign="middle" className="tight column six wide">
          <Grid.Column className="spaced-content">
            <NeumoButton raised Icon={<SidebarIcon />}></NeumoButton>
          </Grid.Column>
        </Grid> */}
        <Grid
          centered
          verticalAlign="middle"
          className="tight column four wide"
        >
          <Grid.Row centered className="page-title align-center">
            <DashboardIcon className="icon" />
            <h1 className="title">Dashboard</h1>
          </Grid.Row>
        </Grid>
        <Grid verticalAlign="middle" className="tight column six wide">
          {/* <Grid.Column className="content-floated-right spaced-content">
            <NeumoButton
              shape="rectangular"
              label={`Good morning, ${props.username}`}
              chevron={{ position: 'right', direction: ChevronDirection.down }}
            ></NeumoButton>
            <NeumoButton Icon={<NotificationIcon />}></NeumoButton>
          </Grid.Column> */}
        </Grid>
      </Grid>
    </nav>
  );
};

export default TopBar;
