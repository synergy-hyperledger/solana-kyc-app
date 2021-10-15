import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Progress, Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup";
import {
  openSidebar,
  closeSidebar,
  changeActiveSidebarItem,
} from "../../actions/navigation";
import isScreen from "../../core/screenHelper";
import { logoutUser } from "../../actions/auth";

import HomeIcon from "../../images/sidebar/Outline/Home";
import BrowserIcon from "../../images/sidebar/Outline/Browser";
import EmailIcon from "../../images/sidebar/Outline/Email";
import CopyIcon from "../../images/sidebar/Outline/Copy";
import FileTextIcon from "../../images/sidebar/Outline/FileText";
import FireIcon from "../../images/sidebar/Outline/Fire";
import GridIcon from "../../images/sidebar/Outline/Grid";
import KeypadIcon from "../../images/sidebar/Outline/Keypad";
import LayersIcon from "../../images/sidebar/Outline/Layers";
import LayoutIcon from "../../images/sidebar/Outline/Layout";
import ListIcon from "../../images/sidebar/Outline/List";
import MessageCircleIcon from "../../images/sidebar/Outline/MessageCircle";
import PersonIcon from "../../images/sidebar/Outline/Person";
import PieChartIcon from "../../images/sidebar/Outline/PieChart";
import PinIcon from "../../images/sidebar/Outline/Pin";
import ShoppingBagIcon from "../../images/sidebar/Outline/ShoppingBag";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
    activeItem: "",
  };

  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  onMouseEnter() {
    if (!this.props.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
      const paths = this.props.location.pathname.split("/");
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join("/")));
    }
  }

  onMouseLeave() {
    if (!this.props.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    }
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div
        className={`${
          !this.props.sidebarOpened && !this.props.sidebarStatic
            ? s.sidebarClose
            : ""
          } ${(localStorage.getItem('pathName') &&
            !(localStorage.getItem('pathName') === '1' || localStorage.getItem('pathName') === '2')) ? s.sidebarWrapper : s.closeSidbar}`}
      >
        <nav
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className={s.root}
        >
          <header className={s.logo}>
            <a href="">
              <span className={s.logoStyle}>KYC on Solana</span>{" "}
            </a>
          </header>
          <ul className={s.nav}>
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Basic Details"
              iconElement={<LayersIcon />}
              link="/app/basic-details"
              isHeader
              iconName="flaticon-database-1"
              index="packages"
            />
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Legal Hierarchy"
              iconElement={<LayersIcon />}
              link="/app/legal-hierarchy"
              isHeader
              iconName="flaticon-archive-1"
              index="packages"
            />
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="KYC Questionnaire"
              iconElement={<LayersIcon />}
              link="/app/kyc-questionnaire"
              isHeader
              iconName="flaticon-notebook-1"
              index="packages"
            />
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Risk Questionnaire"
              iconElement={<LayersIcon />}
              link="/app/risk-questionnaire"
              isHeader
              iconName="flaticon-control-6"
              index="packages"
            />
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Special Due Diligence"
              iconElement={<LayersIcon />}
              link="/app/special-due-diligence"
              isHeader
              iconName="list-1"
              index="packages"
            />
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="FATCA"
              iconElement={<LayersIcon />}
              link="/app/FATCA"
              isHeader
              iconName="windows-4"
              index="packages"
            />
             <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Documents"
              iconElement={<LayersIcon />}
              link="/app/documents"
              isHeader
              iconName="document"
              index="packages"
            />
          </ul>
          {/* eslint-enable */}
          <h5 className={s.navTitle}>PROJECTS</h5>
          <div className={s.sidebarAlerts}>
            {this.props.alertsList.map(
              (
                alert // eslint-disable-line
              ) => (
                <Alert
                  key={alert.id}
                  className={s.sidebarAlert}
                  color="transparent"
                  isOpen={true} // eslint-disable-line
                  toggle={() => {
                    this.dismissAlert(alert.id);
                  }}
                >
                  <span>{alert.title}</span>
                  <br />
                  <Progress
                    className={`${s.sidebarProgress} sidebar-bottom-aler-${alert.color} progress-xs mt-1`}
                    color={"unset"}
                    value={alert.value}
                  />
                  <small>{alert.footer}</small>
                </Alert>
              )
            )}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
    navbarType: store.navigation.navbarType,
    sidebarColor: store.layout.sidebarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
