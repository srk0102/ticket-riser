import React from 'react'
import "./dashboard.css"

import { faHome, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

//Importing reusable components from
import { SideBar, Card, BottomBar, BreadCrumb, TicketModal } from "../../../reusable"

export function Dashboard() {

  const icons = [faHome, faTicketAlt]
  const sidebarLinks = ["Dashboard", "My-Tickets"]
  const dashboardSummery = [{ title: "Tickets Raised", tickets: 2345 }, { title: "Tickets cleared", tickets: 2345 }, { title: "Tickets pending", tickets: 2345 }, { title: "Tickets Unassigned", tickets: 2345 }]


  return (
    <>
      <div className="d-flex flex-row">
        <div className="container-fluid">
          <div className="row">
            <SideBar className="d-none d-lg-block sticky-top" menuIcons={icons} menuItems={sidebarLinks} />
            <BottomBar className="d-block d-lg-none" items={icons} />
            <div className="col-md-10 col-12 pt-3">
              <div className="container-fluid col-12">
                <div className="row">
                  <BreadCrumb className="d-none d-md-block" />
                  {
                    dashboardSummery.map((e) =>
                      <Card className="col-12 col-sm-6 col-md-3" cardTitle={e.title} cardName={e.title} cardDescription={e.tickets} cardBorder="2px solid #ff2684" cardTheme="#2e3054" />
                    )
                  }
                  <div className="d-flex flex-row justify-content-end" style={{position: "fixed", bottom: "-1px", right: "10px", marginBottom: "20px"}}>
                    <TicketModal modalButton="+" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
