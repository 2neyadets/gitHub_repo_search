import React from 'react';
import PropTypes from 'prop-types';

const Button = ({isDisabled, onClick}) => {

  return (
    <div className="button-wrapper flex-center">
      <input
        id="buttonID"
        className="button"
        type="button"
        disabled={isDisabled}
        value="Найти репозитории"
        onClick={onClick}
      />
    </div>
  );

};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
