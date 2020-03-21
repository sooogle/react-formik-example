import * as React from 'react';
import PropTypes from 'prop-types';

const Overlay = (props) => (props.show ?
  <div className='overlay'>{props.children}</div> : null);

Overlay.propTypes = { show: PropTypes.bool.isRequired };

export default Overlay;