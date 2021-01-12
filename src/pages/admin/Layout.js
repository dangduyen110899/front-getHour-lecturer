import React, {useState, useMemo} from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import TableDataExcel from './DataTKB/TableDataExcel';
import FormAddData from './DataTKB/FormAddData';

const { Content, Sider } = Layout;

export default function LayoutAdmin() {
  const [defaultCheck, setDefault] = useState("1")
  return (
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultCheck]}>
        <Menu.Item key="1" icon={<UserOutlined />} onClick={() => setDefault("1")}>
          Create data
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => setDefault("2")}>
          Data teacher
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => setDefault("3")}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        {
          useMemo(() => {
            return(
              defaultCheck==="1" ? <TableDataExcel/> : defaultCheck==="2" ?  <FormAddData/> : "nha3"
            )
          }, [defaultCheck])
        }
        </div>
      </Content>
    </Layout>
  </Layout>
  )
}
