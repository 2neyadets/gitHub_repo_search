import React from 'react';
import PropTypes from 'prop-types';

const TextUnderSearchField = ({styleToText}) => {

  return (
    <div className="">
      <p className="text-under-searchfield text-center" style={styleToText}>
        Фраза для поиска репозитория GitHub
      </p>
    </div>
  );

};

TextUnderSearchField.propTypes = {
  styleToText: PropTypes.object,
};

export default TextUnderSearchField;
