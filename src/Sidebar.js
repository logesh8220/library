import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading mx-2">Books</div>
                        <Link class="nav-link" to={"/Validation"}>
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                           Library
                        </Link>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    You
                </div>
            </nav>
        </div>


    )
}

export default Sidebar