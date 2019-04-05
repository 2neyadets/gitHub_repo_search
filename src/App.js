import React, { Component } from 'react';
import SearchField from './components/SearchField/SearchField';
import TextUnderSearchField from './components/TextUnderSearchField/TextUnderSearchField';
import Button from './components/Button/Button';
import Preloader from './components/Preloader/Preloader';

import RepoList from './components/RepoList/RepoList';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      lineState: "",
      textUnderSearchFieldState: "",
      progressBarState: "0%",
      searchFieldValueState: "facebook",
      buttonIsDisabledState: true,
      preloaderState: false,
      dataFromGitLoadedState: false,
      reposFromGitHubState: {
        "items": [
          {
            "id": 0,
            "name": "",
            "owner" : {
              "avatar_url": "",
            },
            "html_url": "",
          }
        ]
      },

    }
  }

  onSearchFieldClick = (event) => {
    this.setState({ lineState: "1px solid rgba(96, 64, 176, 1)" });
    this.setState({ textUnderSearchFieldState: "rgba(96, 64, 176, 1)" });
    this.setState({ progressBarState: "100%" });
  }
  onSearchFieldBlurChange = (event) => {
    this.setState({ lineState: "1px solid rgba(66, 66, 66, 0.4)" });
    this.setState({ textUnderSearchFieldState: "rgba(66, 66, 66, 0.4)" });
    this.setState({ progressBarState: "0%" });
  }

  onSearchFieldValueChange = (event) => {

    if(event.key === "Enter") {
      this.onButtonClickChange();
    } else {
      this.setState({ searchFieldValueState: event.target.value });
      if (event.target.value) {
        this.setState({ buttonIsDisabledState: false });
      } else {
        this.setState({ buttonIsDisabledState: true });
      }
    }

    
  } 

  onButtonClickChange = () => {
    this.setState({ preloaderState: true });

    

    fetch(`https://api.github.com/search/repositories?q=${this.state.searchFieldValueState}`)
      .then(response => response.json())
      .then(items => {
        this.setState({reposFromGitHubState: items});
        return this.state.reposFromGitHubState.items[0].name;
      })
      .then(name => {
        if(name) {
          this.setState({dataFromGitLoadedState: true})
          return this.state.dataFromGitLoadedState;
        } else {
          return false;
        }
      })
      .then(isLoaded => {
        if(isLoaded) {
          this.setState({preloaderState: false});
        }
      })
      .catch(err => console.log(err));

}

  render() {

    const style1 = { borderBottom: this.state.lineState };
    const style2 = { color: this.state.textUnderSearchFieldState };
    const style3 = { width: this.state.progressBarState};

    if(!this.state.preloaderState) {
      if (!this.state.dataFromGitLoadedState) {
        return (
          <div className="App">
            <div className="app-grid-wrapper">
              <div className="content content-position flex-center column-flex-direction">
                <TextUnderSearchField
                styleToText={style2}
                />
                <SearchField 
                className="" 
                onBlurChange={this.onSearchFieldBlurChange}
                focusChange={this.onSearchFieldClick}
                onValueChange={this.onSearchFieldValueChange}
                styleToSearchField={style1}
                progressBar={style3}
                />
                <Button
                isDisabled={this.state.buttonIsDisabledState}
                onClick={this.onButtonClickChange}
                />
              </div>
            </div>
          </div>
        );
      } else {
        const gitHubRepos = this.state.reposFromGitHubState.items;
        return (
          <div className="App">
            <div className="app-grid-wrapper2">
              <RepoList
                repos={gitHubRepos}
                currentRequest={this.state.searchFieldValueState}
              />
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="App">
          <div className="app-grid-wrapper">
            <div className="content-position flex-center column-flex-direction">
              <Preloader/>
            </div>
          </div>
        </div>
      );
    }
    
  }
}

export default App;