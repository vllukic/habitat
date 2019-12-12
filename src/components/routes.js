const { pathToRegex } = require('path-to-regexp');

export const routes = {
  home: '/',
  map: '/map',
  propertyList: '/propertyList',
  search: '/search',
};

export const path = (pathname, params = {}) => (
  pathToRegex.compile(routes[pathname])(params)
);
