const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "wolves-web.main": "/wolves-web",
  },
  features: {
    "wolves-web": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "wolves-web.api": "/api",
  },
  // Укажите путь к кастомному HTML-шаблону для prom-режима или оставьте undefined
  htmlTemplatePath: undefined,
};
