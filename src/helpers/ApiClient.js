import superagent from 'superagent';
import config from 'config';
import cookie from 'react-cookie';
import cookieServer from 'utils/cookie';

const methods = ['get', 'post', 'put', 'patch', 'del'];
function formatUrl(path, direct_url = false) {
  if (direct_url) return path;
  const adjustedPath = path[0] !== '/' ? '/' + path : path;

  return 'http' + (config.apiSSL ? 's' : '') + '://' + config.apiHost + (config.apiPort ? ':' + config.apiPort : '') + '/api' + adjustedPath;
}

class _ApiClient {
  constructor(req) {
    methods.forEach((method) => {
      this[method] = (path, { params, data, headers, attachments, direct_url } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path, direct_url));
        if (params) {
          request.query(params);
        }

        if (__SERVER__) {
          const server_cookies = req.get('cookie');
          if (server_cookies) {
            const uid = cookieServer.getServer(server_cookies, 'uid');
            const client = cookieServer.getServer(server_cookies, 'client');
            const token = cookieServer.getServer(server_cookies, config.apiTokenKey);

            if (uid && client && token) {
              request.set('uid', uid);
              request.set('client', client);
              request.set(config.apiTokenKey, token);
              request.set('token-type', 'Bearer');
            }
          }
        } else if (__CLIENT__) {
          const uid = cookie.load('uid');
          const client = cookie.load('client');
          const token = cookie.load(config.apiTokenKey);

          if (uid && client && token) {
            request.set('uid', uid);
            request.set('client', client);
            request.set(config.apiTokenKey, token);
            request.set('token-type', 'Bearer');
          }
        }

        if (!attachments) {
          request.set('Content-Type', 'application/json');
        }

        if (headers) {
          for (const header in headers) { // eslint-disable-line
            if (headers.hasOwnProperty(header)) { // eslint-disable-line
              request.set(header, headers[header]);
            }
          }
        }

        if (attachments) {
          if (attachments && typeof attachments === 'object') {
            Object.keys(attachments).forEach((c) => {
              typeof attachments[c] !== 'object' ? request.field(c, attachments[c]) : request.attach(c, attachments[c]);
            });
          }
        }

        if (data && !attachments) {
          request.send(data);
        }

        request.end((err, res = {}) => {
          if (res) {
            const { header } = res;
            if (!!header && header.uid && header.client && header.expiry && header[config.apiTokenKey]) {
              const now = header.expiry ? new Date(header.expiry * 1000) : 'session';
              cookie.save('uid', header.uid, { path: '/', expires: now });
              cookie.save('client', header.client, { path: '/', expires: now });
              cookie.save(config.apiTokenKey, header[config.apiTokenKey], { path: '/', expires: now });
            }
          }
          // return err ? reject(err, res.body, request.xhr) : resolve(res.body, request.xhr);
          if (err) {
            return reject(res.body, err, request.xhr);
          }
          return resolve(res.body, request.xhr);
        });
      });
    });
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
