import React from 'react';
import preloader from './preloader.gif';

const Preloader = () => {
    return (
        <div className="preloader-wrapper flex-center">
            <img src={preloader} alt="preloader"></img>
        </div>
    );
};

export default Preloader;
