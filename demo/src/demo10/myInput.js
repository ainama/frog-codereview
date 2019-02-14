import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sass/input.scss';

export default class Input extends Component {
  constructor(porps, context) {
    super(porps);
  }

  render() {
    let {
      placeholder,
      title,
      round,
      type,
      layout,
      maxLength,
      normaltext,
      normaltextBottom,
      wrongtext,
      onChange,
      disabled,
      pictureicon,
      rightButton
    } = this.props;


    return (
      <div className = { `box ${ layout ? 'box-column' : 'box-row' }` }>
        {
          round && (
            <div className = 'round-small'></div>
          )
        }
        {
          title !== undefined && (
            <div
              className = { `
              textname
              ${ layout ? 'textname-top' : 'textname-left' }
              ` }>
              { title }
            </div>
          )
        }
        <div
          className = { `
        ${ wrongtext ? 'wronginputstyle' : 'inputstyle' }
        ${
            pictureicon === undefined ? '' :
            pictureicon === 'iconleft' ? 'personurl personurl-left' :
            pictureicon === 'iconright' ? 'personurl personurl-right' : ''
          }` }>
          <input
            className = { `
              ${ disabled ? 'input-disabled' : '' }
              ${ rightButton === undefined ? '' : rightButton.length > 0 ? 'input-border-right' : '' }
              ` }
            disabled = { disabled }
            type = { type }
            placeholder = { placeholder }
            maxLength = { maxLength }
            onChange = { onChange }
          />
          {
            layout &&
            (
              <div
                className = { `
                  pointout
                  ${ normaltextBottom ? 'pointout-position-bottom' : 'pointout-position-right' }
                  ${ wrongtext ? 'wrong' : 'normal' }
                  ` }>
                  { normaltext }
              </div>
            )
          }
          {
            layout === undefined && normaltextBottom &&
            (
              <div
                className = { `
                  pointout
                  pointout-position-bottom
                  ${ wrongtext ? 'wrong' : 'normal' }
                  ` }>
                  { normaltext }
              </div>
            )
          }
        </div>
        {
          layout === undefined && normaltextBottom === undefined && rightButton === undefined &&
          (
            <div
              className = { `
                pointout
                pointout-right
                ${ wrongtext ? 'wrong' : 'normal' }
                ` }>
                { normaltext }
            </div>
          )
        }
        {
          rightButton !== undefined && rightButton.length > 0 &&
          (
            <button className = 'button-submit'>{ rightButton }</button>
          )
        }
      </div>

    )
  }
}
Input.propTypes = {
  //layout: PropTypes.bool,
  //maxLength: PropTypes.number,
  rightButton: PropTypes.string
};
