import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { useAuth } from '../../contexts/AuthContext';
import { RiDashboardLine } from "react-icons/ri";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const { user } = useAuth(); // Assuming useAuth provides information about the user

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <RiDashboardLine className='icon_header' /> Dashboard
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        {user && user.roles.includes('admin') && (
          <>
            <li className='sidebar-list-item'>
              <a href="">
                <BsGrid1X2Fill className='icon' /> Dashboard
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsFillArchiveFill className='icon' /> Products
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsFillGrid3X3GapFill className='icon' /> Categories
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsPeopleFill className='icon' /> Customers
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsListCheck className='icon' /> Inventory
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsMenuButtonWideFill className='icon' /> Reports
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsFillGearFill className='icon' /> Setting
              </a>
            </li>
          </>
        )}

        {user && user.roles.includes('user') && (
          <>
            <li className='sidebar-list-item'>
              <a href="">
                <BsFillArchiveFill className='icon' /> Products
              </a>
            </li>
            <li className='sidebar-list-item'>
              <a href="">
                <BsFillGrid3X3GapFill className='icon' /> Categories
              </a>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
