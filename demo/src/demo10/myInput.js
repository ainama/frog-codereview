import React, { Component } from 'react';
import PropTypes from 'prop-types';

import personicon from '../img/person.svg';
import searchicon from '../img/search.png';

import './sass/input.scss';


export default class Input extends Component {
  constructor(porps, context) {
    super(porps);
    this.state = {
      focus: false
    };
  }

  _inputonfocus() {
    this.setState({
      focus: true,
    });
  }

  _inputFocusBorder() {
    this.refs.myInput.focus();
    this.setState({
      focus: true,
    });
    //console.log(this.props.value);
  }

  focus() {
    this.setState({
      focus: true,
    });
  }

  _without() {

  }

  render() {
    let {
      value,
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
      rightButton,
      //inputStyle,
      onSearch,
      replaceNormaltext,
      leftIconUrl,
      iconLeftStyle,
      inputWidth,
      inputHeight,
      rightIconUrl,
      iconRightStyle,
      onFocus,
      defaultValue,
      onInput

    } = this.props;

    let { focus } = this.state;

    let iconBackground = {};

    if (inputWidth !== undefined || inputHeight !== undefined) {
      iconBackground = {
        width: inputWidth,
        height: inputHeight
      };
    } else {
      iconBackground = {
        width: '220px',
        height: '30px'
      };
    }

    if (pictureicon === 'iconleft') {
      if (leftIconUrl === undefined) {
        iconBackground = {
          width: inputWidth === undefined ? '220px' : inputWidth,
          height: inputHeight === undefined ? '30px' : inputHeight,
          backgroundImage: `url(${ personicon })`,
          backgroundSize: iconLeftStyle === undefined ? '15px 12px' : iconLeftStyle,
          backgroundPosition: '11px center',
          backgroundRepeat: 'no-repeat',
        }
      } else {
        iconBackground = {
          width: inputWidth,
          height: inputHeight,
          backgroundImage: `url(${ leftIconUrl })`,
          backgroundSize: iconLeftStyle === undefined ? '15px 12px' : iconLeftStyle,
          backgroundPosition: '11px center',
          backgroundRepeat: 'no-repeat',
        };
      }
    } else if (pictureicon === 'iconright') {

      if (rightIconUrl === undefined) {
        iconBackground = {
          width: inputWidth,
          height: inputHeight,
          backgroundImage: `url(${ searchicon })`,
          backgroundSize: iconRightStyle === undefined ? '14px 14px' : iconRightStyle,
          backgroundPosition: '95% center',
          backgroundRepeat: 'no-repeat',
        }

      } else {
        iconBackground = {
          width: inputWidth,
          height: inputHeight,
          backgroundImage: `url(${ rightIconUrl })`,
          backgroundSize: iconRightStyle === undefined ? '14px 14px' : iconRightStyle,
          backgroundPosition: '95% center',
          backgroundRepeat: 'no-repeat',
        }
      }
    }

    return (
      <div className = { `box ${ layout ? 'box-column' : 'box-row' }` }>
        <div className = { ` box-row ${ layout ? 'box-round' : 'box-normal' }` }>
          {
            round && (
              <div className = 'round-small'></div>
            )
          }
          {
            title !== undefined && (
              <div
                className =
                  { `textname ${ round ? 'textname-left' : 'textname-right' }` }>
                { title }
              </div>
            )
          }
        </div>
        <div
          className = { ` box-normal ${ normaltextBottom ? 'box-column' : ' box-row' } ${ rightButton ? ' box-row ' : '' }` }>

          <div
            className = { `
              ${ wrongtext ? 'wronginputstyle' : 'inputstyle' }
              ${ pictureicon === 'iconleft' ? ' personurl' : '' }
              ${ focus ? 'inputonfocus' : '' }
              ` }>

            <input
              style = { iconBackground }
              className = { `
              ${ disabled ? 'input-disabled' : '' }
              ${ rightButton === undefined ? '' : rightButton.length > 0 ? 'input-border-right' : '' }
              ` }
              disabled = { disabled }
              type = { type }
              placeholder = { placeholder }
              maxLength = { maxLength }
              onChange = { onChange }
              value = { value }
              onClick = { onFocus ? () => {
                this._inputonfocus()
              } : this._without() }
              ref = 'myInput'
              defaultValue = { defaultValue }
              onInput = { onInput }

            />
            {
              layout === undefined && normaltextBottom &&
              (
                <div
                  className = { `
                    pointout
                    pointout-position-bottom
                    ${ wrongtext ? 'wrong' : 'normal' }` }>
                  { wrongtext ? replaceNormaltext ? replaceNormaltext : normaltext : normaltext }
                </div>
              )
            }
          </div>
          {
            layout && rightButton === undefined &&
            (
              <div
                className = { `
                  pointout
                  ${ normaltextBottom ? 'pointout-bottom' : 'pointout-right' }
                  ${ wrongtext ? 'wrong' : 'normal' }
                  ` }>
                { wrongtext ? replaceNormaltext ? replaceNormaltext : normaltext : normaltext }
              </div>
            )
          }
          {
            layout === undefined && normaltextBottom === undefined && rightButton === undefined &&
            (
              <div
                className = { `
                  pointout
                  pointout-right
                  ${ wrongtext ? 'wrong' : 'normal' }
                  ` }>
                { wrongtext ? replaceNormaltext ? replaceNormaltext : normaltext : normaltext }
              </div>
            )
          }
          {
            rightButton !== undefined && rightButton.length > 0 &&
            (
              <button
                className = 'button-submit'
                onClick = { onSearch ? () => this._inputFocusBorder() : this._without() }>{ rightButton }</button>
            )
          }
          {
            layout && rightButton !== undefined && normaltextBottom === undefined &&
            (
              <div
                className = { `
                  pointout
                  ${ normaltextBottom ? 'pointout-bottom' : 'pointout-right' }
                  ${ wrongtext ? 'wrong' : 'normal' }
                  ` }>
                { wrongtext ? replaceNormaltext ? replaceNormaltext : normaltext : normaltext }
              </div>
            )
          }
        </div>
        {
          layout && rightButton !== undefined && normaltextBottom &&
          (
            <div
              className = { `
                  pointout
                   ${ normaltextBottom ? 'pointout-bottom' : '' }
                  ${ wrongtext ? 'wrong' : 'normal' }
                  ` }>
              { wrongtext ? replaceNormaltext ? replaceNormaltext : normaltext : normaltext }
            </div>
          )
        }
      </div>
    )
  }
}
Input.defaultProps = {
  round: false,
  onFocus: false,
  wrongtext: false
};
Input.propTypes = {
  round: PropTypes.bool,
  onFocus: PropTypes.bool,
  wrongtext: PropTypes.bool,
  //maxLength: PropTypes.number,
  rightButton: PropTypes.string,
  pictureicon: PropTypes.string,
  //defaultValue: PropTypes.string,
  iconBackground: PropTypes.object,
};
