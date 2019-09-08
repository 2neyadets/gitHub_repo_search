import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Preloader from './components/Preloader';
import RepoList from './components/RepoList';

import api from './api/index'

import './App.css';
import SearchBlock from "./containers/SearchBlock";

class App extends Component {

  constructor() {
    super();
    this.state = {
      lineState: "",
      textUnderSearchFieldState: "",
      progressBarState: "0%",
      searchFieldValueState: "",
      buttonIsDisabledState: true,
      preloaderState: false,
      dataFromGitLoadedState: false,
      reposFromGitHubState: [
          {
            "id": 0,
            "name": "",
            "owner" : {
              "avatar_url": "",
            },
            "html_url": "",
          }
      ],
    }
  }

  render() {

    const {
      preloaderState,
      dataFromGitLoadedState,
      textUnderSearchFieldState,
      lineState,
      progressBarState,
      buttonIsDisabledState,
      reposFromGitHubState,
      searchFieldValueState,
    } = this.state;

    return (
      <div className="App">
        <Router>
          <Route path={'/'} exact={true} render={ () =>
            <SearchBlock
                textUnderSearchFieldState={textUnderSearchFieldState}
                lineState={lineState}
                progressBarState={progressBarState}
                buttonIsDisabledState={buttonIsDisabledState}
                handleSearchFieldBlurChange={this.handleSearchFieldBlurChange}
                handleSearchFieldClick={this.handleSearchFieldClick}
                handleSearchFieldValueChange={this.handleSearchFieldValueChange}
                handleButtonClickChange={this.handleButtonClickChange}
                defaultValueForSearch={searchFieldValueState}
            />
          }>
          </Route>
          <Route path={'/results'} exact={true} render={ () =>
            (preloaderState || !dataFromGitLoadedState) ? (
              <div className="app-grid-wrapper">
                <div className="content-position flex-center column-flex-direction">
                  <Preloader/>
                </div>
              </div>
            ) : (
              <div className="app-grid-wrapper2">
                <RepoList
                    repos={reposFromGitHubState}
                    currentRequest={searchFieldValueState}
                />
              </div>
            )
          }>
          </Route>
        </Router>
      </div>
    );

  }

  handleSearchFieldClick = (event) => {
    this.setState({
      lineState: "1px solid rgba(96, 64, 176, 1)",
      textUnderSearchFieldState: "rgba(96, 64, 176, 1)",
      progressBarState: "100%",
    });
  };

  handleSearchFieldBlurChange = (event) => {
    this.setState({
      lineState: "1px solid rgba(66, 66, 66, 0.4)",
      textUnderSearchFieldState: "rgba(66, 66, 66, 0.4)",
      progressBarState: "0%",
    });
  };

  handleSearchFieldValueChange = (event) => {
    if(event.key === "Enter") {
      this.handleButtonClickChange();
    } else {
      this.setState({ searchFieldValueState: event.target.value });
      if (event.target.value) {
        this.setState({ buttonIsDisabledState: false });
      } else {
        this.setState({ buttonIsDisabledState: true });
      }
    }
  };

  handleButtonClickChange = async () => {
    const {searchFieldValueState} = this.state;
    this.setState({preloaderState: true});
    const res = await api.repos.getRepos(searchFieldValueState);
    if (res.status === 200 && res.data.items.length > 0) {
      this.setState({
        preloaderState: false,
        reposFromGitHubState: res.data.items,
        dataFromGitLoadedState: true
      })
    }
  }
}

export default App;
