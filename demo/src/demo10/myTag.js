import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../img/delete.svg';

import './sass/tag.scss';


export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false,
      value: '',
      tagList: this._tagList(),
      inputReviseValue: '',
      addTagActiveState: false,
      svgHover: false
    };
  }

  _tagList() {
    let tagText = this.props.tagText;
    let tagList = [];
    if (tagText !== '' && tagText !== undefined) {
      tagList = tagText;
      for (let i = 0; i < tagList.length; i++) {
        if (tagList[i].tagName === '' || tagList[i].tagName === ' ') {
          tagList.splice(i, 1);
        } else {
          tagList[i]['tagActiveState'] = false;

        }
      }
      return tagList;
    } else {
      return [];
    }

  }

  _tagInput(t, addTagActive) {

    if (!t) {
      if (addTagActive) {
        this.setState({
          addTagActiveState: true
        });
      } else {
        this.setState({
          addTagActiveState: false
        });
      }
      return;
    }

    this.setState({
      inputVisible: true,
      inputFocus: true
    });
  };

  _reviseTagInput(value, index) {
    this.setState({
      inputReviseVisible: true,
      inputReviseindex: index,
      inputReviseValue: value
    });
  }

  componentDidUpdate() {
    let _that = this;
    if (this.state.inputVisible) {
      _that.refs.myTag.focus();
    }
    if (this.state.inputReviseVisible) {
      _that.refs.myReviseTag.focus();
    }
  }

  _inputOnBlur() {
    let _that = this;

    if (this.state.value !== '' && this.state.value !== ' ') {
      let _value = {};
      _value['tagName'] = this.state.value;
      this.state.tagList.push(_value);

    }
    if (this.state.inputReviseValue !== '' && this.state.inputReviseValue !== ' ') {
      _that.state.tagList[this.state.inputReviseindex].tagName = this.state.inputReviseValue;
    }

    this.setState({
      tagList: this.state.tagList
    });

    this.setState({
      inputVisible: false,
      value: '',
      inputReviseVisible: false,
      inputReviseValue: '',
      inputReviseindex: ''
    });
  }

  _inputTagValue(e) {
    let _value = e.target.value;
    this.setState({
      value: _value,
    });
  }

  _inputTagReviseValue(e) {
    let _value = e.target.value;
    this.setState({
      inputReviseValue: _value
    });
  }


  _tagAllStyle() {

    let size = this.props.size;
    let tagStyle = this.props.tagStyle;
    let tagSize = {};

    if (size === 'large') {
      tagSize = {
        fontSize: '14px',
        padding: '0 20px',
        height: '29px',
        lineHeight: '29px'
      }
    }
    if (size === 'default') {
      tagSize = {
        fontSize: '12px',
        padding: '0 23px',
        height: '24px',
        lineHeight: '24px'
      }
    }
    if (size === 'small') {
      tagSize = {
        fontSize: '10px',
        padding: '0 18px',
        height: '18px',
        lineHeight: '18px'
      }
    }
    let tagStyleradius = {};

    if (tagStyle === 'rightRadius') {
      tagStyleradius = {
        fontSize: '10px',
        background: '#f2f7fe',
        border: '1px solid #7fb6f5',
        boxShadow: '0 1px 2px 0 rgba(73,144,226,0.10)',
        borderRadius: '1px 100px 100px 1px',
        padding: '0 16px',
        color: '#4990e2',
        height: '16px',
        lineHeight: '16px'
      }
    }
    if (tagStyle === 'default') {
      tagStyleradius = {
        borderRadius: '3px',
        fontSize: '10px',
        background: '#f2f7fe',
        border: '1px solid #7fb6f5',
        boxShadow: '0 1px 2px 0 rgba(73,144,226,0.10)',
        padding: '0 16px',
        color: '#4990e2',
        height: '16px',
        lineHeight: '16px'
      }
    }
    if (tagStyle === 'allRadius') {
      tagStyleradius = {
        borderRadius: '100px',
        fontSize: '10px',
        background: '#f2f7fe',
        border: '1px solid #7fb6f5',
        boxShadow: '0 1px 2px 0 rgba(73,144,226,0.10)',
        padding: '0 16px',
        color: '#4990e2',
        height: '16px',
        lineHeight: '16px'
      }
    }
    let tagAllStyle = Object.assign({}, tagSize, tagStyleradius);

    return tagAllStyle;

  }

  _tagActive(tagActive, index, onlyTagActive) {

    let _that = this;

    if (tagActive) {

      if (_that.state.tagList[index].tagActiveState) {

        _that.state.tagList[index].tagActiveState = false;

      } else {
        _that.state.tagList[index].tagActiveState = true;

      }

      this.setState({
        tagList: this.state.tagList
      });
    }
    if (onlyTagActive) {

      for (let i = 0; i < _that.state.tagList.length; i++) {
        if (i === index) {
          _that.state.tagList[index].tagActiveState = true;

        } else {
          _that.state.tagList[i].tagActiveState = false;
        }
      }
      this.setState({
        tagList: this.state.tagList
      });
    }

  }


  _deleteTag(i, e) {
    this.state.tagList.splice(i, 1);
    this.setState({
      tagList: this.state.tagList
    });
    e.stopPropagation();

  }

  _onMouseOver(t, index, color) {
    if (color === undefined) {
      color = "#4990e2";
    }
    if (!t) return;

    this.setState({
      svgHover: !this.state.svgHover
    });

    let svgStyle = {};
    svgStyle = { fill: color };
    this.setState({
      svgStyle: svgStyle,
      svgIndex: index
    });
  }

  _onMouseOut(t, index, color) {

    if (!t) return;

    this.setState({
      svgHover: !this.state.svgHover
    });

    let svgStyle = {};
    svgStyle = { fill: '#4990e2' };
    this.setState({
      svgStyle: svgStyle,
      svgIndex: index
    });
  }


  render() {

    let {
      tagHover,
      tagActive,
      tagDisabled,
      addTagText,
      addTagHover,
      addTagActive,
      addTagDisabled,
      tagOnclik,
      deleteTag,
      tagRevise,
      addTag,
      onlyTagActive

    } = this.props;

    let {
      inputVisible,
      inputFocus,
      value,
      tagList,
      inputReviseVisible,
      inputReviseindex,
      inputReviseValue,
      addTagActiveState,
      svgHover,
      svgStyle,
      svgIndex
    } = this.state;

    return (
      <div className = 'tag-body'>
        {
          tagList.map((tagList, i) => {
            return (

              <div
                style = {
                  Object.assign({}, tagList.tagStyleColor, this._tagAllStyle())
                }
                key = { i }
                className = { `
                  ${ i === inputReviseindex ? 'tag-style-input' : 'tag-style' }
                  ${ tagHover ? 'tag-hover' : '' }
                  ${ tagList.tagActiveState ? 'tag-active' : '' }
                  ${ tagDisabled ? 'tag-disabled' : '' }
                  ${ deleteTag === 'rightCenter' ? 'margin-style' : '' }
                ` }
                onClick = { () => this._tagActive(tagActive, i, onlyTagActive) }
                onMouseOver = { () => this._onMouseOver(tagHover, i, tagList.svgFill) }
                onMouseOut = { () => this._onMouseOut(tagHover, i, tagList.svgFill) }
              >
                {
                  tagRevise && i !== inputReviseindex && (
                    <div
                      className = 'reviseicon-style'
                      onClick = { () => this._reviseTagInput(tagList.tagName, i) }>
                      <svg t = "1550643919542"
                           viewBox = "0 0 1024 1024"
                           version = "1.1"
                           width = "10" height = "10">
                        <path
                          style = { i === svgIndex && svgHover ? svgStyle : {} }
                          d = "M929.661 1023.995H94.341c-52.017 0-94.335-42.319-94.335-94.336V94.339C0.006 42.322 42.324 0.004 94.341 0.004h571.208c16.612 0 30.08 13.467 30.08 30.08s-13.468 30.08-30.08 30.08H94.341c-18.845 0-34.176 15.331-34.176 34.176v835.32c0 18.846 15.331 34.177 34.176 34.177h835.32c18.844 0 34.174-15.331 34.174-34.177V358.45c0-16.612 13.468-30.079 30.079-30.079 16.612 0 30.08 13.467 30.08 30.079v571.21c0 52.016-42.318 94.335-94.333 94.335z"
                          p-id = "3116" fill = { tagList.svgFill ? tagList.svgFill : '#727272' }></path>
                        <path
                          style = { i === svgIndex && svgHover ? svgStyle : {} }
                          d = "M284.24 778.776h-0.005c-14.549-0.001-23.424-5.823-28.307-10.707-13.691-13.691-10.758-33.036-9.794-39.393 1.282-8.454 3.95-18.668 8.157-31.226 8.936-26.674 22.501-57.011 32.307-77.763 23.017-48.711 58.276-113.975 81.899-137.598L813.308 37.281C836.467 14.12 867.26 1.365 900.014 1.365S963.56 14.12 986.72 37.28c23.161 23.16 35.916 53.954 35.916 86.707 0 32.754-12.755 63.547-35.916 86.708l-444.81 444.81c-26.885 26.886-101.873 64.564-124.215 75.472-36.568 17.851-102.53 47.799-133.455 47.799zM900.014 61.365c-16.727 0-32.452 6.514-44.279 18.342l-444.811 444.81c-10.819 10.819-36.18 51.244-63.717 107.575-16.611 33.979-27.579 60.426-34.125 78.828 18.402-6.545 44.847-17.513 78.829-34.125 56.33-27.537 96.754-52.897 107.574-63.717l444.81-444.81c11.828-11.828 18.342-27.554 18.342-44.281s-6.514-32.453-18.342-44.28-27.555-18.342-44.281-18.342z"
                          p-id = "3117" fill = { tagList.svgFill ? tagList.svgFill : '#727272' }></path>
                        <path
                          style = { i === svgIndex && svgHover ? svgStyle : {} }
                          d = "M834.61 58.394L965.596 189.38l-42.425 42.426L792.185 100.82zM429.346 463.67l130.987 130.986-42.426 42.426L386.92 506.095z"
                          p-id = "3118" fill = { tagList.svgFill ? tagList.svgFill : '#727272' }></path>
                      </svg>
                    </div>
                  )
                }
                {
                  i !== inputReviseindex && (
                    <span>{ tagList.tagName !== '' ? tagList.tagName : '' }</span>
                  )
                }
                {
                  deleteTag === 'rightTop' && (
                    <div className = 'deleteTag-rightTop' onClick = { (e) => this._deleteTag(i, e) }>
                      <img src = { DeleteIcon } alt = "" className = 'deleteicon-style' />
                    </div>
                  )
                }

                {
                  deleteTag === 'rightCenter' && i !== inputReviseindex && (
                    <span
                      className = 'rightCenter-style'
                      onClick = { (e) => this._deleteTag(i, e) }>
                      x
                    </span>
                  )
                }

                {
                  inputReviseVisible && i === inputReviseindex && (

                    <input
                      type = "text"
                      className = ' inputRevise'
                      onBlur = { () => this._inputOnBlur() }
                      onChange = { (e) => this._inputTagReviseValue(e) }
                      value = { inputReviseValue }
                      ref = 'myReviseTag' />
                  )
                }
              </div>
            )
          })
        }
        {
          addTag && inputVisible && (
            <div className = { `addTagtext-body ${ inputFocus ? ' inputtag' : '' }` }>
              <input
                type = "text"
                ref = 'myTag'
                onBlur = { () => this._inputOnBlur() }
                onChange = { (e) => this._inputTagValue(e) }
                value = { value }
              />
            </div>
          )
        }
        {
          addTag && !inputVisible && (
            <div
              className = { `
                addTagtext-body
                ${ addTagHover ? 'addtag-hover' : '' }
                ${ addTagActiveState ? 'addtag-active' : '' }
                ${ addTagDisabled ? 'addtag-disabled' : '' }
              ` }
              onClick = { () => this._tagInput(tagOnclik, addTagActive) }>
              <span className = 'addTagText-span'>+</span>
              { addTagText ? addTagText : ' 添加标签' }
            </div>
          )
        }
      </div>
    )
  }
}

Tag.defaultProps = {
  tagHover: true,
  tagActive: true,
  tagDisabled: false,
  addTagHover: true,
  addTagActive: true,
  addTagDisabled: false,
  inputVisible: false,
  tagRevise: false,
  inputReviseVisible: false,
  addTag: false,
  tagOnclik: false,
  onlyTagActive: false,
};

Tag.propTypes = {
  Tagtext: PropTypes.string,
  addTagText: PropTypes.string,
  taghover: PropTypes.bool,
  tagActive: PropTypes.bool,
  tagDisabled: PropTypes.bool,
  addTagHover: PropTypes.bool,
  addTagActive: PropTypes.bool,
  addTagDisabled: PropTypes.bool,
  inputVisible: PropTypes.bool,
  tagRevise: PropTypes.bool,
  inputReviseVisible: PropTypes.bool,
  addTag: PropTypes.bool,
  tagOnclik: PropTypes.bool,
  onlyTagActive: PropTypes.bool,
};