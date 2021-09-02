import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestLaunchData, setDataList, requestLaunchYear } from '../actions';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';
import ButtonList from '../components/ButtonList';

const mapStateToProps = (state) => {
  return {
    launchYear: state.requestLaunchYear.launchYear,
    launchYearIsPending: state.requestLaunchYear.launchYearIsPending,
    search: state.searchDataList.search,
    launchData: state.requestLaunchData.launchData,
    launchDataIsPending: state.requestLaunchData.launchDataIsPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (event) => dispatch(setDataList(event.target.name, event.target.value)),
    onRequestLaunchData: (search) => requestLaunchData(dispatch, search),
    onRequestLaunchYear: () => requestLaunchYear(dispatch),
  }
}

const App = props => {
  const { launchDataIsPending,
    launchData,
    onRequestLaunchData,
    onRequestLaunchYear,
    onSearchClick,
    search,
    launchYear,
    launchYearIsPending
  } = props;
  const launchStatus = ["true", "false"];
  const landingStatus = ["true", "false"];

  useEffect(() => {
    onRequestLaunchData(search);

  }, [search])

  useEffect(() => onRequestLaunchYear(), []);

  return (
    <div className='tc'>
      <Header />
      <div className="body">
        <aside className="tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
          <h2>Launch Year</h2>
          {
            launchYearIsPending ? <p>Loading...</p> :
              <ErrorBoundry>
                <ButtonList buttonList={launchYear} name="launch_year" handleClick={onSearchClick} />
              </ErrorBoundry>
          }
          <h2>Successful Launch</h2>
          <ButtonList buttonList={launchStatus} name="launch_success" handleClick={onSearchClick} />
          <h2>Successful Landing</h2>
          <ButtonList buttonList={landingStatus} name="land_success" handleClick={onSearchClick} />
        </aside>
        <section>
          {launchDataIsPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              {
                Object.keys(launchData).length ? <CardList launchData={launchData} /> :
                  <h1>No record found</h1>
              }
            </ErrorBoundry>
          }
        </section>
      </div>
      <footer>Developed by Oliver James Aco</footer>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
