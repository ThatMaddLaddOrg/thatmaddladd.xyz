import React, { useEffect, useState } from 'react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/thatmaddladdorg/repos?sort=updated')
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h2><i className="fab fa-github" style={{ marginRight: '0.5rem', color: '#fff' }}></i>GitHub Projects</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {repos.map(repo => (
          <li key={repo.id} style={{ marginBottom: '1rem' }}>
            <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: '#1da1f2' }}>
              <strong>{repo.name}</strong>: {repo.description || 'No description'}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GitHubProjects;
