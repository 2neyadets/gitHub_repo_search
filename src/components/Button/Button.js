import React from 'react';

const Button = ({isDisabled, styleToButton, onClick}) => {
    return (
        <div className="button-wrapper flex-center">
            <input
                id="buttonID"
                className="button"
                type="button"
                disabled={isDisabled}
                style={styleToButton}
                value="Найти репозитории"
                onClick={onClick}
            />
        </div>
    );
}

export default Button;