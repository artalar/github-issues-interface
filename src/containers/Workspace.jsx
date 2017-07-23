import React, { Component } from 'react';
import styled from 'styled-components';

import SearchForm from './SearchForm.jsx';
import LoadBar from '../components/LoadBar.jsx';
import Issue from '../components/Issue.jsx';
import EmptyResult from '../components/EmptyResult.jsx';


class Workspace extends Component {

  state = {
    issuesList: [],
    emptyResult: false,
    isSearching: false,
  };

  startSearch = () => this.setState({ isSearching: true, });

  onSearchSuccess = list => {
    this.setState({
      issuesList: list.length ? list : [],
      emptyResult: !list.length,
      isSearching: false,
    })
  }

  onSearchError = (err) => {
    this.setState({
      emptyResult: true,
      isSearching: false,
    })
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className='workspace'>
          <h1 className='workspace-header'>Search issues on GitHub</h1>
          <SearchForm startSearch={this.startSearch} onSearchSuccess={this.onSearchSuccess} onSearchError={this.onSearchError}/>
          {this.state.isSearching
            ?
            <LoadBar />
            :
            <div className='issues-list'>
              {this.state.emptyResult && <EmptyResult />}
              {
                this.state.issuesList.map(issue => <Issue key={issue.id} issue={issue} />)
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default styled(Workspace)`
  display: flex;
  justify-content: center;
  width: 100%;

  .workspace {
    display: flex;
    flex-direction: column;
    width: 90vmin;
  }

  .workspace-header {
    text-align: center;
    color: darkblue;
  }

  .issues-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;