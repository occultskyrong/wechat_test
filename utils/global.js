/**
 * 全局通用配置、工具集
 */

const ENV = getApp().ENV;

const config = {
    development: {
        base_uri: 'http://localhost:3000',
    },
    production: {},
};

module.exports = config[ENV];
