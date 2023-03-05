import React from 'react';
import { Grid } from 'semantic-ui-react';
import './TopBar.css';
import { ReactComponent as BikeIcon } from '../../../assets/svgs/bike_icon.svg';
import NeumoButton from '../../neumo-button/NeumoButton';

const TopBar: React.FC = () => {
  return (
    <nav className="top-bar">
      <Grid verticalAlign='middle'>
        <Grid.Column>
          <NeumoButton raised navLink='/' Icon={<BikeIcon />}></NeumoButton>
        </Grid.Column>
        <Grid.Column width={2}>
          <h1 className="title">Bike Management</h1>
        </Grid.Column>
      </Grid>
    </nav>
  );
};

export default TopBar;
