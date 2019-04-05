import React from "react";
import Repo from "../Repo/Repo";

const RepoList = ({ repos, currentRequest }) => {
    if(currentRequest === "facebook") {
        currentRequest="";
    }
    const repoArray = repos.map((repo, i) => {
        return (
        <Repo 
            key={repos[i].id} 
            id={repos[i].id} 
            name={repos[i].name} 
            avatarURL={repos[i].owner.avatar_url}
            linkToRepo={repos[i].html_url} 
        />
        );
    })
    return(
        <div>
            <h1>Search repositories like {currentRequest}</h1>
            {repoArray}
        </div>
    );
}

export default RepoList;