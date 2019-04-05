import React from 'react';

const TextUnderSearchField = ({styleToText}) => {
    return (
        <div className="">
            <p className="text-under-searchfield text-center" style={styleToText}>
                Фраза для поиска репозитория GitHub
            </p>
        </div>
    );
}

export default TextUnderSearchField;