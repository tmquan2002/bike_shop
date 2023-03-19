import React from 'react';
import { Grid } from 'semantic-ui-react';
import './SideBar.css';
import { ReactComponent as CustomerIcon } from '@assets/svgs/customer_icon.svg';
import { ReactComponent as BikeStoreIcon } from '@assets/svgs/bikestore_icon.svg';
import { ReactComponent as OrderIcon } from '@assets/svgs/order_icon.svg';
import { ReactComponent as BoxIcon } from '@assets/svgs/box_icon.svg';
import { useLocation } from 'react-router-dom';
import NeumoButton from '@components/neumo-button/NeumoButton';

const SideBar: React.FC = () => {
  const location = useLocation().pathname
  return (
    <nav className="side-bar">
      <Grid className="tight">
        <Grid.Column className="button-group">
          <NeumoButton
            shade={location === '/customer' ? 'light' : 'dark'}
            raised
            navLink={location === '/customer' ? undefined : '/customer'}
            Icon={<CustomerIcon />}
          />
          <NeumoButton
            shade={location === '/store' ? 'light' : 'dark'}
            raised
            navLink={location === '/store' ? undefined : '/store'}
            Icon={<BikeStoreIcon />}
          />
          <NeumoButton
            shade={location === '/order' ? 'light' : 'dark'}
            raised
            navLink={location === '/order' ? undefined : '/order'}
            Icon={<OrderIcon />}
          />
          <NeumoButton
            shade={location === '/product' ? 'light' : 'dark'}
            raised
            navLink={location === '/product' ? undefined : '/product'}
            Icon={<BoxIcon />}
          />
        </Grid.Column>
      </Grid>
    </nav>
  );
};

export default SideBar;
