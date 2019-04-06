import React, { Component, PropTypes } from 'react';
import { capitalizeFirstLetter, getModels, getSections } from '../../utils/utils';

/**
* Panel div component
*/
export default class PanelSections extends Component {
  constructor(props, context) {
    super(props, context);
  }

  /**
  * @method: renderSections
  * @description: List models for section
  */
  renderSections() {
    const panels = [];
    const sections = getSections(this.props.data.models);

    sections.forEach((section) => {
        panels.push(<div key={section} className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title'>
            { section }
          </h4>
        </div>
        <div className='panel'>
          <div className='panel-body'>
            { this.renderModels(section) }
          </div>
        </div>
        </div>);
    });

    return panels;
  }

  /**
  * @method: renderModels
  * @description: Render models to sections in list-group
  * @param section {string}: Section to which the models belongs
  */
  renderModels(section) {
    const arrModels = [];
    const models = getModels(this.props.data.models, section);

    models.forEach((model, i) => {
      arrModels.push(<a key={i} href={'#/' + model} className='list-group-item'>{capitalizeFirstLetter(model)}</a>);
    });

    return <div className='list-group'>
      { arrModels }
    </div>
  }

  render() {
    return (
      <div className='panel-group' id='accordion' role='tablist'>
        { this.renderSections() }
      </div>
    );
  }
}

PanelSections.propTypes = {
  data: PropTypes.object.isRequired,
}
