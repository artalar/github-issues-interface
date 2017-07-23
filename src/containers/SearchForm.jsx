import React, { Component } from 'react';
import styled from 'styled-components';

class SearchForm extends Component {

  state = {
    inputUser: '',
    inputRepo: '',
  };

  sendReq = event => {
    this.props.startSearch();
    event.preventDefault();
    fetch(`https://api.github.com/repos/${this.state.inputUser}/${this.state.inputRepo}/issues`)
      .then(resp => resp.json())
      .then((resp, err) => {
        this.props.onSearchSuccess(resp)
      })
      .catch(err => {
        this.props.onSearchError(err)
      });
  };

  inputChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  };

  render() {
    return (
      <form onSubmit={this.sendReq} className={this.props.className}>
        <div className='search-input-fields'>
          <div className='search-input-field'>
            <div className='search-input-placeholder'>user</div>
            <input id='inputUser' type='text' className='search-input-user' value={this.state.inputUser} onChange={this.inputChange} />
          </div>
          <div className='search-input-field'>
            <div className='search-input-placeholder'>repo</div>
            <input id='inputRepo' type='text' className='search-input-repo' value={this.state.inputRepo} onChange={this.inputChange} />
          </div>
        </div>
        <button className='search-input-submit'>🔍</button>
      </form>
    );
  }
};

export default styled(SearchForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .search-input-fields {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .search-input-field {
      width: 200px;
      display: flex;
      align-items: center;
      height: 30px;
      margin: 10px;
      padding-right: 10px;
      border: 1px solid darkblue;
      border-radius: 5px;
      background-color: rgb(242, 242, 249);
      overflow: hidden;

      .search-input-placeholder {
        height: 100%;
        padding: 10px 5px 0px 5px;
        background: rgba(0, 0, 139, 0.1);
        color: darkblue;
      }
      
      input {
        width: 100%;
        border: none;
        background: rgba(0,0,0,0);
        margin-left: 10px;
        z-index: 1;
        color: darkblue;
        :focus { outline: none; }
        -webkit-box-shadow: inset 0 0 0 50px rgb(242, 242, 249);
        -webkit-text-fill-color: darkblue;
      }
    }
  }

  .search-input-submit {
    margin-top: 10px;
    width: 150px;
    border-radius: 5px;
    background-color: rgb(242, 242, 249);
    border: 0px solid;
    box-shadow: 0 0 10px -3px darkblue;
    color: darkblue;
    font-weight: bold;
    cursor: pointer;
    :focus { outline: none; }
    :active {
      box-shadow: inset 0 0 10px -3px darkblue;
    }
  }
`;