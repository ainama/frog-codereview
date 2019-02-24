import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PersonIcon from '../img/person.svg';
import SearchIcon from '../img/search.png';

import './sass/input.scss';

export default class Input extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      focus: false
    };
  }

  _inputOnFocus(t) {
    if (!t) return;

    this.setState({
      focus: true,
    });
  }

  _inputFocusBorder(t) {
    if (!t) return;

    this.refs.myInput.focus();
    this.setState({
      focus: true,
    });
  }

  _AllInputStyle() {

    let inputWidth = this.props.inputWidth;
    let inputHeight = this.props.inputHeight;
    let pictureicon = this.props.pictureicon;
    let leftIconUrl = this.props.leftIconUrl;
    let iconLeftStyle = this.props.iconLeftStyle;
    let rightIconUrl = this.props.rightIconUrl;
    let iconRightStyle = this.props.iconRightStyle;

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
          backgroundImage: `url(${ PersonIcon })`,
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
          backgroundImage: `url(${ SearchIcon })`,
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
          paddingRight: '30px'
        }
      }
    }

    return iconBackground;
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
      onSearch,
      replaceNormaltext,
      onFocus,
      defaultValue,
      onInput,
      onBlur

    } = this.props;

    let { focus } = this.state;


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
          className = { `
            box-normal
            ${ normaltextBottom ? 'box-column' : 'box-row' }
            ${ rightButton ? ' box-row ' : '' }
          ` }>
          <div
            className = { `
              ${ wrongtext ? 'wronginputstyle' : 'inputstyle' }
              ${ pictureicon === 'iconleft' ? ' personurl' : '' }
              ${ focus ? 'inputonfocus' : '' }
              ` }>
            <input
              style = { this._AllInputStyle() }
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
              ref = 'myInput'
              defaultValue = { defaultValue }
              onInput = { onInput }
              onFocus = { () => this._inputOnFocus(onFocus) }
              onBlur = { onBlur }
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
                onClick = { () => this._inputFocusBorder(onSearch) }>{ rightButton }</button>
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
  onFocus: true,
  wrongtext: false
};
Input.propTypes = {
  round: PropTypes.bool,
  onFocus: PropTypes.bool,
  wrongtext: PropTypes.bool,
  maxLength: PropTypes.number,
  rightButton: PropTypes.string,
  pictureicon: PropTypes.string,
  //defaultValue: PropTypes.string,
  iconBackground: PropTypes.object,
};
