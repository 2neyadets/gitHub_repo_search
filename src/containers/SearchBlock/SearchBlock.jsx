import React from 'react';
import TextUnderSearchField from "../../components/TextUnderSearchField";
import SearchField from "../../components/SearchField";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SearchBlock = ({
                         textUnderSearchFieldState,
                         lineState,
                         progressBarState,
                         buttonIsDisabledState,
                         handleSearchFieldBlurChange,
                         handleSearchFieldClick,
                         handleSearchFieldValueChange,
                         handleButtonClickChange,
                         defaultValueForSearch
}) => {

    return (
        <div className="app-grid-wrapper">
            <div className="content content-position flex-center column-flex-direction">
                <TextUnderSearchField
                    styleToText={{ color: textUnderSearchFieldState }}
                />
                <SearchField
                    className=""
                    onBlurChange={handleSearchFieldBlurChange}
                    onFocusChange={handleSearchFieldClick}
                    onValueChange={handleSearchFieldValueChange}
                    defaultValueForSearch={defaultValueForSearch}
                    styleToSearchField={{ borderBottom: lineState }}
                    progressBar={{ width: progressBarState}}
                />
                <Link to={'/results'} style={{textDecoration: 'none'}}>
                    <Button
                        isDisabled={buttonIsDisabledState}
                        onClick={handleButtonClickChange}
                    />
                </Link>
            </div>
        </div>
    );
};

SearchBlock.propTypes = {
    textUnderSearchFieldState: PropTypes.string,
    lineState: PropTypes.string,
    progressBarState: PropTypes.string,
    buttonIsDisabledState: PropTypes.bool,
    handleSearchFieldBlurChange: PropTypes.func,
    handleSearchFieldClick: PropTypes.func,
    handleSearchFieldValueChange: PropTypes.func,
    handleButtonClickChange: PropTypes.func,
    defaultValueForSearch: PropTypes.string,
};

export default SearchBlock;
