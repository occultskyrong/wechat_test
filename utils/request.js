/**
 * 封装请求
 */
const alert = require('./alert.js');

/**
 * promise的请求方法
 * @param {object}      option              配置
 * @param {string}      option.uri          请求地址
 * @param {boolean}     [option.loading]    是否使用加载中效果
 * @return {Promise}                        返回一个promise
 */
const request = (option) => new Promise((resolve, reject) => {
    const uri = 'uri' in option ? option.uri : alert.error('未获取到请求地址');
    const loading = 'loading' in option ? option.loading : true; // 默认为true
    if (loading) {
        alert.loading();
    }
    wx.request({
        url: uri,
    });
});

module.exports = request;
