import React from 'react';
import TextUnderSearchField from "../../components/TextUnderSearchField";
import SearchField from "../../components/SearchField";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SearchBlock = ({
                         isDisabledButton,
                         defaultValueForSearch,

                         handleButtonClick,
                         handleSearchFieldFocus,
                         handleSearchFieldBlur,
                         handleSearchFieldChange,

                         line,
                         textUnderSearchFieldColor,
                         progressBar,
}) => {

    return (
        <div className="app-grid-wrapper">
            <div className="content content-position flex-center column-flex-direction">
                <TextUnderSearchField
                    styleToText={{ color: textUnderSearchFieldColor }}
                />
                <SearchField
                    className=""
                    onBlurChange={handleSearchFieldBlur}
                    onFocusChange={handleSearchFieldFocus}
                    onValueChange={handleSearchFieldChange}
                    defaultValueForSearch={defaultValueForSearch}
                    styleToSearchField={{ borderBottom: line }}
                    progressBar={{ width: progressBar}}
                />
                <Link to={'/results'} style={{textDecoration: 'none'}}>
                    <Button
                        isDisabled={isDisabledButton}
                        onClick={handleButtonClick}
                    />
                </Link>
            </div>
        </div>
    );
};

SearchBlock.propTypes = {
    textUnderSearchFieldColor: PropTypes.string,
    line: PropTypes.string,
    progressBar: PropTypes.string,
    isDisabledButton: PropTypes.bool,
    handleButtonClick: PropTypes.func,
    handleSearchFieldFocus: PropTypes.func,
    handleSearchFieldBlur: PropTypes.func,
    handleSearchFieldChange: PropTypes.func,
    defaultValueForSearch: PropTypes.string,
};

export default SearchBlock;
