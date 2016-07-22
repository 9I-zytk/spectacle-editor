const normalizeDomain = (domain) => {
  if (domain.indexOf("http://") === 0 || domain.indexOf("https://") === 0) {
    return domain;
  }

  return `http://${domain}`;
};

export const testApiUrl = (domain) => {
  const normalizedDomain = normalizeDomain(domain);

  return fetch(normalizedDomain)
    .then((response) => response.text());
};
