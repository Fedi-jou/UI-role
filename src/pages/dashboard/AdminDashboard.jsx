import React , {useState} from "react";
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Home from "../../components/content/Content";

const AdminDashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return  <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
};

export default AdminDashboard;
