// import HomePage from './HomePage';
import { Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
import { connect } from 'react-redux';
import Registration from './pages/Registration';
import PropTypes from  'prop-types';

function App(props) {
  return (
    <>
    <Switch>
      <Route exact path="/" render={() => (
        <Registration/>

      )}/>

      <Route path="/profile" render={(routeProps) => (
        <Profile info={props.info} {...routeProps}/>
      )}/>
    </Switch>
      
      
    </>
  );
}

App.propTypes = {
  info: PropTypes.array
}

const mapStateToProps = state => {
  return {
    info: state.info
  }
}

export default connect(
  mapStateToProps
)(App);
