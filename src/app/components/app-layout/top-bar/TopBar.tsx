import React from 'react';
import { Grid } from 'semantic-ui-react';
import './TopBar.css';
import { ReactComponent as BikeIcon } from '../../../assets/svgs/bike_icon.svg';
import NeumoButton from '../../neumo-button/NeumoButton';

const TopBar: React.FC = () => {
  return (
    <nav className="top-bar">
      <Grid columns={3} className="tight">
        <Grid verticalAlign="middle">
          <Grid.Column className="spaced-content">
            <NeumoButton raised navLink='/' Icon={<BikeIcon />}></NeumoButton>
          </Grid.Column>
        </Grid>
        <Grid centered verticalAlign="middle">
          <Grid.Row centered className="page-title align-center">
            <h1 className="title">Bike Management</h1>
          </Grid.Row>
        </Grid>
      </Grid>
    </nav>
  );
};

export default TopBar;
