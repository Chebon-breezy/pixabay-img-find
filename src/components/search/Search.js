import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {
   state = {
    SearchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api/', 
    apiKey: '35093601-20354e15dc55ab6abf947d2f8',
    images: []
   }

  render() {
    return (
      <div>
        <TextField 
          name="searchText"
          value={this.state.SearchText}
          onChange={this.onTextChange}
          floatingLabelText= "Search For Images"
          fullWidth={true}
        />
      </div>
    )
  }
}

export default Search;