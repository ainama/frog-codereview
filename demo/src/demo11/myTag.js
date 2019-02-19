import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sass/tag.scss';

export default class Tag extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      tagHover,
      tagActive,
      tagDisabled,
      tagText,
      addTagText,
      addTag,
      addTagHover,
      addTagActive,
      addTagDisabled,
      tagOnclik,
      inputVisible
    } = this.props;
    //console.log(addTagText);
    return (
      <div className = 'tag-body'>
        {
          tagText !== undefined && tagText.length > 0 && (
            <div
              className = { `
           tag-style
           ${ tagHover ? 'tag-hover' : '' }
           ${ tagActive ? 'tag-active' : '' }
           ${ tagDisabled ? 'tag-disabled' : '' }
           ` }>
              { tagText }
            </div>
          )
        }
        {
          addTag && (
            <div
              className = { `
                addTagtext-body
                ${ addTagHover ? 'addtag-hover' : '' }
                ${ addTagActive ? 'addtag-active' : '' }
                ${ addTagDisabled ? 'addtag-disabled' : '' }
                ` }
              onClick = { tagOnclik }
            >
              + { addTagText ? addTagText : '添加标签' }
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
  addTag: false,
  addTagHover: false,
  addTagActive: false,
  addTagDisabled: false,
};
Tag.propTypes = {
  Tagtext: PropTypes.string,
  addTagText: PropTypes.string,
  taghover: PropTypes.bool,
  tagActive: PropTypes.bool,
  tagDisabled: PropTypes.bool,
  addTag: PropTypes.bool,
  addTagHover: PropTypes.bool,
  addTagActive: PropTypes.bool,
  addTagDisabled: PropTypes.bool,
};