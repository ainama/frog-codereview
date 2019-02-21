import React, { Component } from 'react';
import PropTypes from 'prop-types';

import deleteicon from '../img/delete.svg';
import reviseicon from '../img/revise.svg';

import './sass/tag.scss';


export default class Tag extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      inputFocus: false,
      value: '',
      tagList: [],
      inputReviseValue: ''
    };
    if (this.props.tagText !== undefined && this.props.tagText.length > 0) {
      var tagText = this.props.tagText.split(',');
      for (let i = 0; i < tagText.length; i++) {
        this.state.tagList.push(tagText[i]);
      }
    }
  }

  _tagInput() {
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
    if (this.state.inputVisible) {
      this.refs.myTag.focus();
    }
    if (this.state.inputReviseVisible) {
      this.refs.myReviseTag.focus();
    }
  }

  _inputOnBlur() {
    let _that = this;
    if (this.state.value !== '' && this.state.value !== ' ') {
      this.state.tagList.push(this.state.value);
    }
    if (this.state.inputReviseValue !== '' && this.state.inputReviseValue !== ' ') {
      _that.state.tagList[this.state.inputReviseindex] = this.state.inputReviseValue;
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
      inputReviseValue: _value,
    });
  }

  _without() {

  }

  _deleteTag(i) {
    this.state.tagList.splice(i, 1);
    this.setState({
      tagList: this.state.tagList
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
      size,
      tagColor,
      tagStyleIndex,
      tagStyle,
      addTag

    } = this.props;

    let {
      inputVisible,
      inputFocus,
      value,
      tagList,
      inputReviseVisible,
      inputReviseindex,
      inputReviseValue
    } = this.state;

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
    if (tagStyle === 'leftRadius') {
      tagStyleradius = {
        borderRadius: '1px',
        position: 'relative',
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

    let tagstyle = Object.assign({}, tagSize, tagColor, tagStyleradius);


    return (
      <div className = 'tag-body'>
        {
          tagList.map((tagList, i) => {
            return (
              <div
                style = { i === tagStyleIndex ? tagstyle : tagStyleIndex === undefined ? tagstyle : {} }
                key = { i }
                className = { `
                    ${ i === inputReviseindex ? 'tag-style-input' : 'tag-style' }
                    ${ tagHover ? 'tag-hover' : '' }
                    ${ tagActive ? 'tag-active' : '' }
                    ${ tagDisabled ? 'tag-disabled' : '' }
                    ${ deleteTag === 'rightCenter' ? 'margin-style' : '' }
                    ` }>
                {
                  tagRevise && i !== inputReviseindex && (
                    <div
                      className = 'reviseicon-style'
                      onClick = { () => this._reviseTagInput(tagList, i)
                      }>
                      <img src = { reviseicon } alt = "" />
                    </div>
                  ) }
                {
                  i !== inputReviseindex && (
                    <span>{ tagList }</span>
                  )
                }
                {
                  deleteTag === 'rightTop' && (
                    <div className = 'deleteTag-rightTop' onClick = { () => this._deleteTag(i) }>
                      <img src = { deleteicon } alt = "" className = 'deleteicon-style' />
                    </div>
                  ) }

                {
                  deleteTag === 'rightCenter' && i !== inputReviseindex && (
                    <span
                      className = 'rightCenter-style'
                      onClick = { () => this._deleteTag(i) }
                    >x</span>
                  ) }

                {
                  inputReviseVisible && i === inputReviseindex && (

                    <input
                      type = "text"
                      className = 'inputRevise'
                      onBlur = { () => this._inputOnBlur() }
                      onChange = { (e) => this._inputTagReviseValue(e) }
                      value = { inputReviseValue }
                      ref = 'myReviseTag'
                    />
                  )
                }
              </div>


            )
          })
        }
        {
          addTag && inputVisible && (
            <div className = { `addTagtext-body ${ inputFocus ? 'inputtag' : '' }` }>
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
                ${ addTagActive ? 'addtag-active' : '' }
                ${ addTagDisabled ? 'addtag-disabled' : '' }
                ` }
              onClick = { tagOnclik ? () => {
                this._tagInput()
              } : this._without()
              }>
              <span className = 'addTagText-span'>+</span>
              { addTagText ? addTagText : '添加标签' }
            </div>
          )
        }
      </div>
    )
  }
}
Tag.defaultProps = {
  taghover: false,
  tagActive: false,
  tagDisabled: false,
  addTagHover: false,
  addTagActive: false,
  addTagDisabled: false,
  inputVisible: false,
  tagRevise: false,
  inputReviseVisible: false,
  addTag: false
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
  tagStyleIndex: PropTypes.number
};