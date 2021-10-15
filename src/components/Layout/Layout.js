import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import Profile from '../../pages/profile';
import Login from '../../pages/login';
import UIButtons from '../../pages/ui-elements/buttons';
import UIIcons from '../../pages/ui-elements/icons';
import UITabsAccordion from '../../pages/ui-elements/tabs-accordion/';
import UINotifications from '../../pages/ui-elements/notifications';
import UIListGroups from '../../pages/ui-elements/list-groups';
import FormsElements from '../../pages/forms/elements';
import FormsValidation from '../../pages/forms/validation';
import FormsWizard from '../../pages/forms/wizard';
import TablesStatic from '../../pages/tables/static';
import TablesDynamic from '../../pages/tables/dynamic';
import MapsGoogle from '../../pages/maps/google';
import MapsVector from '../../pages/maps/vector';
import ExtraCalendar from '../../pages/extra/calendar';
import ExtraInvoice from '../../pages/extra/invoice';
import ExtraSearch from '../../pages/extra/search';
import ExtraTimeline from '../../pages/extra/timeline';
import ExtraGallery from '../../pages/extra/gallery';
import Grid from '../../pages/grid';
import ChatPage from '../../pages/chat';
import Widgets from '../../pages/widgets';
import Products from '../../pages/products';
import Management from '../../pages/management';
import Product from '../../pages/product';
import Package from '../../pages/package';
import Email from '../../pages/email';
import CoreTypography from '../../pages/core/typography';
import CoreColors from '../../pages/core/colors';
import CoreGrid from '../../pages/core/grid';
import UIAlerts from '../../pages/ui-elements/alerts';
import UIBadge from '../../pages/ui-elements/badge';
import UICard from '../../pages/ui-elements/card';
import UICarousel from '../../pages/ui-elements/carousel';
import UIJumbotron from '../../pages/ui-elements/jumbotron';
import UIModal from '../../pages/ui-elements/modal';
import UIProgress from '../../pages/ui-elements/progress';
import UINavbar from '../../pages/ui-elements/navbar';
import UINav from '../../pages/ui-elements/nav';
import UIPopovers from '../../pages/ui-elements/popovers';
import Charts from '../../pages/charts';
import ApexCharts from '../../pages/charts/apex';
import Echarts from '../../pages/charts/echarts';
import HighCharts from '../../pages/charts/highcharts';
import DashboardAnalytics from '../../pages/analytics';
import Dashboard from '../../pages/dashboard';
import UserFormPage from '../Users/form/UsersFormPage';
import UserListPage from '../Users/list/UsersListPage';
import UserViewPage from '../Users/view/UsersViewPage';
import ChangePasswordFormPage from '../Users/changePassword/ChangePasswordFormPage';
import { SidebarTypes } from '../../reducers/layout';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Helper from '../Helper';
import { openSidebar, closeSidebar, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import { DashboardThemes } from '../../reducers/layout';
import ProductEdit from '../../pages/management/components/productEdit';
import BreadcrumbHistory from '../BreadcrumbHistory';
import BasicDetails from '../../pages/basicDetails/basicDetails';
import LegalHierarchy from '../LegalHierarchy/LegalHierarchy';
import KycQuestionnaire from '../KycQuestionnaire/KycQuestionnaire';
import RiskQuestionnaire from '../RiskQuestionnaire/RiskQuestionnaire';
import SpecialDue from '../SpecialDue/SpecialDue';
import Fatca from '../Fatca/Fatca';
import Documents from '../Documents/Documents';
import MyClients from '../MyClients/MyClients';
import MyProfile from '../MyProfile/MyProfile';

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dashboardTheme: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
    dashboardTheme: DashboardThemes.DARK
  };
  constructor(props) {
    super(props);
    this.state = {
      hideShowSide : true
    };
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth <= 768 && this.props.sidebarStatic) {
      this.props.dispatch(toggleSidebar());
    }
  }

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4) {
        if(localStorage.getItem('pathName') && !(localStorage.getItem('pathName') === '1'
          || localStorage.getItem('pathName') === '2')){
            this.props.dispatch(openSidebar());
          }
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  hideSideBar(pathName) {
    console.log('hide side bar',localStorage.getItem('pathName'));
    // const value = pathName === 1 ? this.setState({ hideShowSide: true }) : this.setState({ hideShowSide: false });
    // console.log('hide side bar value', this.state.hideShowSide);
  }

  render() {
    return (
      <div
        className={[
          s.root,
          this.props.sidebarStatic ? `${s.sidebarStatic}` : '',
          !this.props.sidebarOpened ? s.sidebarClose : '',
          'sing-dashboard',
          `dashboard-${(localStorage.getItem("sidebarType") === SidebarTypes.TRANSPARENT) ? "light" : localStorage.getItem("dashboardTheme")}`,
          `header-${localStorage.getItem("navbarColor") ? localStorage.getItem("navbarColor").replace('#', '') : 'FFFFFF'}`
        ].join(' ')}
      >
        {
          !(localStorage.getItem('pathName') === '1' || localStorage.getItem('pathName') === '2') && <Sidebar />
        }
        {/* <Sidebar /> */}
        <div className={`${localStorage.getItem('pathName') && (localStorage.getItem('pathName') === '1'
          || localStorage.getItem('pathName') === '2') ? s.hideSideBar :''} ${s.wrap}`}>
          
          <Header hideSideBarForProfile={this.hideSideBar}/>
          <Helper />         
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
            {/* <BreadcrumbHistory url={this.props.location.pathname} /> */}
        
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/my-profile" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/main/widgets" exact component={Widgets} />
                    <Route path="/app/main/analytics" exact component={DashboardAnalytics} />
                    <Route path="/app/edit_profile" exact component={UserFormPage} />
                    <Route path="/app/password" exact component={ChangePasswordFormPage} />
                    <Route path="/admin" exact render={() => <Redirect to="/admin/users" />} />
                    <Route path="/admin/users" exact component={UserListPage} />
                    <Route path="/admin/users/new" exact component={UserFormPage} />
                    <Route path="/admin/users/:id/edit" exact component={UserFormPage} />
                    <Route path="/admin/users/:id" exact component={UserViewPage} />
                    <Route path="/app/ecommerce" exact render={() => <Redirect to="/app/ecommerce/management" />} />
                    <Route path="/app/ecommerce/management" exact component={Management} />
                    <Route path="/app/ecommerce/management/:id" exact component={ProductEdit} />
                    <Route path="/app/ecommerce/management/create" exact component={ProductEdit} />
                    <Route path="/app/ecommerce/products" exact component={Products} />
                    <Route path="/app/ecommerce/product" exact component={Product} />
                    <Route path="/app/ecommerce/product/:id" exact component={Product} />
                    <Route path="/app/profile" exact component={Profile} />
                    <Route path="/app/loginpage" exact component={Login} />
                    <Route path="/app/inbox" exact component={Email} />
                    <Route path="/app/ui" exact render={() => <Redirect to="/app/ui/components" />} />
                    <Route path="/app/ui/buttons" exact component={UIButtons} />
                    <Route path="/app/ui/icons" exact component={UIIcons} />
                    <Route path="/app/ui/tabs-accordion" exact component={UITabsAccordion} />
                    <Route path="/app/ui/notifications" exact component={UINotifications} />
                    <Route path="/app/ui/list-groups" exact component={UIListGroups} />
                    <Route path="/app/ui/alerts" exact component={UIAlerts} />
                    <Route path="/app/ui/badge" exact component={UIBadge} />
                    <Route path="/app/ui/card" exact component={UICard} />
                    <Route path="/app/ui/carousel" exact component={UICarousel} />
                    <Route path="/app/ui/jumbotron" exact component={UIJumbotron} />
                    <Route path="/app/ui/modal" exact component={UIModal} />
                    <Route path="/app/ui/popovers" exact component={UIPopovers} />
                    <Route path="/app/ui/progress" exact component={UIProgress} />
                    <Route path="/app/ui/navbar" exact component={UINavbar} />
                    <Route path="/app/ui/nav" exact component={UINav} />
                    <Route path="/app/grid" exact component={Grid} />
                    <Route path="/app/chat" exact component={ChatPage} />
                    <Route path="/app/package" exact component={Package} />
                    <Route path="/app/basic-details" exact component={BasicDetails} />
                    <Route path="/app/legal-hierarchy" exact component={LegalHierarchy} />
                    <Route path="/app/kyc-questionnaire" exact component={KycQuestionnaire} />
                    <Route path="/app/risk-questionnaire" exact component={RiskQuestionnaire} />
                    <Route path="/app/special-due-diligence" exact component={SpecialDue} />
                    <Route path="/app/FATCA" exact component={Fatca} />
                    <Route path="/app/documents" exact component={Documents} />
                    <Route path="/app/my-clients" exact component={MyClients} />
                    <Route path="/app/my-profile" exact component={MyProfile} />
                    <Route path="/app/forms" exact render={() => <Redirect to="/app/forms/elements" />} />
                    <Route path="/app/forms/elements" exact component={FormsElements} />
                    <Route path="/app/forms/validation" exact component={FormsValidation} />
                    <Route path="/app/forms/wizard" exact component={FormsWizard} />
                    <Route path="/app/charts/" exact render={() => <Redirect to="/app/charts/overview" />} />
                    <Route path="/app/charts/overview" exact component={Charts} />
                    <Route path="/app/charts/apex" exact component={ApexCharts} />
                    <Route path="/app/charts/echarts" exact component={Echarts} />
                    <Route path="/app/charts/highcharts" exact component={HighCharts} />
                    <Route path="/app/tables" exact render={() => <Redirect to="/app/tables/static" />} />
                    <Route path="/app/tables/static" exact component={TablesStatic} />
                    <Route path="/app/tables/dynamic" exact component={TablesDynamic} />
                    <Route path="/app/extra" exact render={() => <Redirect to="/app/extra/calendar" />} />
                    <Route path="/app/extra/calendar" exact component={ExtraCalendar} />
                    <Route path="/app/extra/invoice" exact component={ExtraInvoice} />
                    <Route path="/app/extra/search" exact component={ExtraSearch} />
                    <Route path="/app/extra/timeline" exact component={ExtraTimeline} />
                    <Route path="/app/extra/gallery" exact component={ExtraGallery} />
                    <Route path="/app/maps" exact render={() => <Redirect to="/app/maps/google" />} />
                    <Route path="/app/maps/google" exact component={MapsGoogle} />
                    <Route path="/app/maps/vector" exact component={MapsVector} />
                    <Route path="/app/core" exact render={() => <Redirect to="/app/core/typography" />} />
                    <Route path="/app/core/typography" exact component={CoreTypography} />
                    <Route path="/app/core/colors" exact component={CoreColors} />
                    <Route path="/app/core/grid" exact component={CoreGrid} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
                {/* Sing App React Admin Dashboard Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a> */}
              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    dashboardTheme: store.layout.dashboardTheme,
    navbarColor: store.layout.navbarColor,
    sidebarType: store.layout.sidebarType,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
