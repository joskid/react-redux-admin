import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getDataGrid, setFetching } from '../../actions/admin';

/**
* Search input crud component
*/
class Search extends Component {
  constructor(props, context) {
      super(props, context);
  }

  /**
  * @method: onSearch
  * @description: To event onSearch in click go
  */
  onSearch(e) {
    e.preventDefault();

    const textSearch = e.target.input_search.value

    //Set fetching in false to show loading
    this.props.dispatch(setFetching(false));

    const url = this.props.model.api + this.props.model.model;
    //If empty return to page 1
    if (textSearch === '') {
      //Obtengo la primera página
      this.props.dispatch(getDataGrid(
        url, 1, this.props.model.pagination,
        this.props.model.columns,
        this.props.model.id_unique
      ));
    } else {
      //Obtengo la primera página
      this.props.dispatch(getDataGrid(
        url, null, this.props.model.pagination,
        this.props.model.columns,
        this.props.model.id_unique, textSearch
      ));
    }
  }

  render() {
    return (
      <div className='form-inline' onSubmit={this.onSearch.bind(this)}>
        <form name='searchform'>
          <input type='search' name='input_search' id='input_search'
              className='form-control' placeholder='Search' />
          <input type='submit' className='btn btn-dark' value='Go' />
        </form>
      </div>
    )
  }
}

export default connect()(Search);
