import React from 'react'
import "./dashboard.css"

import { faHome, faTicketAlt} from '@fortawesome/free-solid-svg-icons'

//Importing reusable components from
import { SideBar, Card, BottomBar } from "../../../reusable"

export function Dashboard() {

  const icons = [faHome, faTicketAlt]
  const sidebarLinks = ["Dashboard" ,"My-Tickets"]


  return (
    <>
      <div className="d-flex flex-row">
        <div className="container-fluid">
          <div className="row">
            <SideBar className="col-3 d-none d-lg-block" menuIcons = {icons} menuItems={sidebarLinks}/>
            <BottomBar className="d-block d-lg-none" items={icons}/>
            <div className="col-md-9 col-12 pt-3">
              <div className="container-fluid col-12">
                <div className="row justify-content-around">
                  <Card className="col-12 col-sm-6 col-md-3" cardTitle="Tickets you raised" cardDescription="2345" cardFooter="since 2019"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
