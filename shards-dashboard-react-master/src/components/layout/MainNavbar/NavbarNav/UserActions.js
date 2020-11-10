import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import Cookies from "../../../../module/Cookies"
export default class UserActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }
  logout(){
    Cookies.removeCookie(Cookies.LOGIN_DATA);
    window.location.href="/login"
}

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src= {Cookies.getCookie(Cookies.LOGIN_DATA, Cookies.LOGIN_DATA_KEY) ? "https://s2.glbimg.com/WS5mFzuaRWfLep9M9ORsM1l7HsU=/850x446/s2.glbimg.com/IbfBijhnUyHCcr0LbSE1_fqHcQ0=/695x0/s.glbimg.com/po/tt2/f/original/2016/05/31/gmail-0.jpg": "https://pbs.twimg.com/profile_images/1021955076498305027/zEb_pdA6_400x400.jpg"}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{Cookies.getCookie(Cookies.LOGIN_DATA, Cookies.LOGIN_DATA_KEY) ? "Autenticado pelo Gmail" : "Login anônimo"}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>

          <DropdownItem onClick={this.logout} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
