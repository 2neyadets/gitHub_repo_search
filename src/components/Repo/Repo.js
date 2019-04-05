import React from 'react';

const Repo = ({id, name, avatarURL, linkToRepo}) => {

    return (
        <div className="Repo-wrapper flex-center">
            <img className="avatar" src={avatarURL} alt="avatar"></img>
            <p className="">{name}</p>
            <a className="link-to-repo" href={linkToRepo} target="_blank" rel="noopener noreferrer"> → </a>
        </div>
    );
}

export default Repo;