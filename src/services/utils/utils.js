export function isNotSearch(data, status) {
  return !data && !status;
};

export function hasRepos(repos) {
  return repos && repos.length;
};

export function hasNotRepos(repos) {
  return repos && !repos.length;
};