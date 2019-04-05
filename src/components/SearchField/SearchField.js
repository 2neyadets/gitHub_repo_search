import React from 'react';

const SearchField = ({focusChange, styleToSearchField, onValueChange, onBlurChange, progressBar}) => {
    return (
        <div className="searchField-wrapper" style={styleToSearchField}>
            <input 
            onClick={focusChange}
            onBlur={onBlurChange}
            onChange={onValueChange}
            onKeyPress={onValueChange}
            className="searchField text-center" 
            type="search" 
            placeholder="Введите фразу для поиска репозитория GitHub">
            </input>
            <div className="test" style={progressBar}></div>
        </div>
    );
}

export default SearchField;