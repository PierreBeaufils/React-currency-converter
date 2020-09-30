import React from 'react';
import PropTypes from 'prop-types';

import './toggler.scss';

const Toggler = ({ open, onClickHandler }) => {
  const cssClassNames = open ? 'toggler toggler--open' : 'toggler';
  return (
    <button className={cssClassNames} type="button" onClick={onClickHandler}>
      =
    </button>
  );
};

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Toggler;
