import React from 'react';
import { Grid } from 'semantic-ui-react';
import './SideBar.css';
import { ReactComponent as CustomerIcon } from '../../../assets/svgs/customer_icon.svg';
import { ReactComponent as Envelope } from '../../../assets/svgs/envelope_icon.svg';
import { ReactComponent as BoxIcon } from '../../../assets/svgs/box_icon.svg';
import NeumoButton from '../../neumo-button/NeumoButton';
import { useLocation } from 'react-router-dom';

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
            shade={location === '/staff' ? 'light' : 'dark'}
            raised
            navLink={location === '/staff' ? undefined : '/staff'}
            Icon={<BoxIcon />}
          />
          {/* <NeumoButton
            shade="dark"
            raised
            navLink={`${props.routerPath}/account`}
            Icon={<BsPersonFill />}
          /> */}
          <NeumoButton
            shade={location === '/product' ? 'light' : 'dark'}
            raised
            navLink={location === '/product' ? undefined : '/product'}
            Icon={<Envelope />}
          />
        </Grid.Column>
      </Grid>
    </nav>
  );
};

export default SideBar;
