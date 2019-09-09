import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({
                       onFocusChange,
                       styleToSearchField,
                       onValueChange,
                       onBlurChange,
                       progressBar,
                       defaultValueForSearch
}) => {

  return (
    <div className="searchField-wrapper" style={styleToSearchField}>
      <input
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        onChange={onValueChange}
        defaultValue={defaultValueForSearch}
        onKeyPress={onValueChange}
        className="searchField text-center"
        type="search"
        placeholder="Введите фразу для поиска репозитория GitHub">
      </input>
      <div className="test" style={progressBar}></div>
    </div>
  );

};

SearchField.propTypes = {
  onFocusChange: PropTypes.func,
  onValueChange: PropTypes.func,
  onBlurChange: PropTypes.func,
  styleToSearchField: PropTypes.object,
  progressBar: PropTypes.object,
  defaultValueForSearch: PropTypes.string,
};

export default SearchField;
