import React , {useState} from 'react'
import HomePage from '../homePage/homePage'
import Profile from '../navbar/profile'
import { Drawer, Button,  Space } from 'antd';

 const DrawerPage =() => {
     const [drawer, setdrawer] = useState({ visible: false, placement: 'right' })

  const showDrawer = () => {
    setdrawer({
      visible: true,
    });
  };
  const drawerStyle = {
      background : "none",
      margin : "150px",
  }

  const onClose = () => {
    setdrawer({
      visible: false,
    });
  };

    const { placement, visible } = drawer;
    return (
      <>
        <Space>
          <Button type="link" onClick={showDrawer} link>
            view profile
          </Button>
        </Space>
        <Drawer
          title="User Profile"
          placement={placement}
          width={416}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
            <Profile />
        </Drawer>
      </>
    );
  }


export default DrawerPage;