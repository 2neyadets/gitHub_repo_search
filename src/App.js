import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route } from 'react-router-dom'
import history from "./history/history";
import SearchBlock from "./containers/SearchBlock";
import Preloader from './components/Preloader';
import RepoList from './components/RepoList';
import './App.css';

import {
  buttonClickAction,
  searchFieldFocusAction,
  searchFieldBlurAction,
  searchFieldChangeAction,
} from "./Redux/actions"

const mapStateToProps = state => {
  return {
    repos: state.changeSearchBlockReducer.repos,
    searchFieldValue: state.changeSearchBlockReducer.searchFieldValue,
    isDisabledButton: state.changeSearchBlockReducer.isDisabledButton,
    isShowPreloader: state.changeSearchBlockReducer.isShowPreloader,
    isLoaded: state.changeSearchBlockReducer.isLoaded,

    line: state.styleReducer.line,
    textUnderSearchFieldColor: state.styleReducer.textUnderSearchFieldColor,
    progressBar: state.styleReducer.progressBar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClick: (event) => dispatch(buttonClickAction(event)),
    searchFieldFocus: (event) => dispatch(searchFieldFocusAction(event)),
    searchFieldBlur: (event) => dispatch(searchFieldBlurAction(event)),
    searchFieldChange: (event) => dispatch(searchFieldChangeAction(event)),
  }
};

class App extends Component {

  render() {

    const {
      repos,
      searchFieldValue,
      isDisabledButton,
      isShowPreloader,
      isLoaded,
      line,
      textUnderSearchFieldColor,
      progressBar,

      buttonClick,
      searchFieldFocus,
      searchFieldBlur,
      searchFieldChange,
    } = this.props;

    return (
      <div className="App">
        <Router history={history}>
          <Route path={'/'} exact={true} render={ () =>
            <SearchBlock
              isDisabledButton={isDisabledButton}
              handleSearchFieldBlur={searchFieldBlur}
              handleSearchFieldFocus={searchFieldFocus}
              handleSearchFieldChange={searchFieldChange}
              handleButtonClick={buttonClick}
              defaultValueForSearch={searchFieldValue}
              line={line}
              textUnderSearchFieldColor={textUnderSearchFieldColor}
              progressBar={progressBar}
            />
          }>
          </Route>
          <Route path={'/results'} exact={true} render={ () =>
            (isShowPreloader || !isLoaded) ? (
              <div className="app-grid-wrapper">
                <div className="content-position flex-center column-flex-direction">
                  <Preloader/>
                </div>
              </div>
            ) : (
              <div className="app-grid-wrapper2">
                <RepoList
                    repos={repos}
                    currentRequest={searchFieldValue}
                />
              </div>
            )
          }>
          </Route>
        </Router>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
