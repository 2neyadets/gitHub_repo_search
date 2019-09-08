import React from "react";
import PropTypes from 'prop-types';
import Repo from "../Repo";

const RepoList = ({ repos, currentRequest }) => {
    if(currentRequest === "facebook") {
        currentRequest="";
    }
    return(
        <div>
            <h1>Search repositories like "{currentRequest}"</h1>
            {repos.map((repo, i) => (
                <Repo
                    key={repos[i].id}
                    id={repos[i].id}
                    name={repos[i].name}
                    avatarURL={repos[i].owner.avatar_url}
                    linkToRepo={repos[i].html_url}
                />
            ))}
        </div>
    );
};

RepoList.propTypes = {
    repos: PropTypes.array,
    currentRequest: PropTypes.string,
};

export default RepoList;
