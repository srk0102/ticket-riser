import React from 'react'
import "./dashboard.css"

import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'

//Importing reusable components from
import { SideBar, Card, BottomBar, BreadCrumb, TicketModal } from "../../../reusable"

export function Dashboard() {

  const icons = [faTicketAlt]
  const sidebarLinks = ["My-Tickets"]
  const dashboardSummery = [{ title: "Tickets Raised", tickets: 2345 }, { title: "Tickets cleared", tickets: 2345 }, { title: "Tickets pending", tickets: 2345 }, { title: "Tickets Unassigned", tickets: 2345 }]


  return (
    <>
      <div className="d-flex flex-row">
        <div className="container-fluid">
          <div className="row">
            <SideBar addClassToSideBar="d-none d-lg-block sticky-top" menuIcons={icons} menuItems={sidebarLinks} />
            <BottomBar addClassToBottomBar="d-block d-lg-none" items={icons} />
            <div className="col-md-10 col-12 pt-3">
              <div className="container-fluid col-12">
                <div className="row">
                  <BreadCrumb addClassToBread="d-none d-md-block" />
                  {
                    dashboardSummery.map((e) =>
                      <Card addClassToCard="col-12 col-sm-6 col-md-3" cardTitle={e.title} cardName={e.title} cardDescription={e.tickets} cardBorder="2px solid #ff2684" cardTheme="#2e3054" />
                    )
                  }
                  <div>
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
