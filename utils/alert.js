/**
 * 封装alert提示框
 */
const alert = {
    /**
     * 成功提示
     * @param {object}      option              配置
     * @param {string}      [option.title]      提示信息
     */
    success: (option) => {
        wx.showToast({
            title: 'title' in option ? option.title : '成功',
        });
    },

    /**
     * 错误提示
     * @param {object|string}       option              配置|提示信息
     * @param {string}              [option.title]      提示信息
     */
    error: (option) => {
        let object = {};
        if (typeof option === 'string') {
            object = {
                title: option,
            };
        } else {
            object = {
                title: 'title' in option ? option.title : '加载失败',
            };
        }
        wx.showToast(object);
    },

    /**
     * 加载中效果
     * @param {object}      option              配置
     * @param {string}      [option.title]      提示信息
     */
    loading: (option) => {
        wx.showLoading({
            title: 'title' in option ? option.title : '玩命加载中',
            mask: true, // 显示蒙层
        });
    },
};

module.exports = alert;
