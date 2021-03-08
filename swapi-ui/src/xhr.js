export default async function xhr(url, config = {}) {

  config.credentials = 'same-origin';
  config.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  if (config.body) {
    config.body = JSON.stringify(config.body);
  }

  const res = await fetch(url, config);
  if (res.status >= 300) {
    return Promise.reject(res);
  }
  if (res.status === 204) {
    return Promise.resolve();
  }
  return Promise.resolve(res.json());
}
