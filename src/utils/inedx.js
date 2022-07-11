export const showLoading = (title = "加载中") => {
  uni.showLoading({
    title: title,
    mask: true,
  });
};
export const hideLoading = () => {
  uni.hideLoading();
};
export const showModal = (content) => {
  uni.showModal({
    title: "提示",
    content: content,
    showCancel: false,
    cancelText: "",
    confirmText: "确定",
  });
};
export const showToast = (title, callBack) => {
  uni.showToast({
    title: title,
    mask: true,
    complete: callBack,
  });
};
export const showMsg = (title, callBack) => {
  uni.showToast({
    title: title,
    icon: "none",
    mask: true,
    complete: callBack,
  });
};
/**
 * 它从本地存储中删除数据
 * @param key - 要删除的数据的键。
 */
export const removeData = (key) => {
  try {
    uni.removeStorageSync(key);
  } catch (err) {}
};
/**
 * 它接受两个参数，一个键和一个值，然后在本地存储中设置键的值。
 * @param key - 存储数据的密钥。
 * @param val - 要存储的值。
 */
export const setData = (key, val) => {
  uni.setStorageSync(key, val);
};
/**
 * 它尝试从存储中获取数据，如果失败，则返回 null。
 * @param key - 要获取的数据的key。
 * @returns 键的值。
 */
export const getData = function (key) {
  try {
    return uni.getStorageSync(key);
  } catch (err) {
    return null;
  }
};
/**
 * 如果字符串与模式匹配，则返回 true，否则返回 false。
 * @param str - 要验证的字符串
 * @param type - mobile, tel, card, mobileCode, pwd, payPwd, postal, QQ, email, money, URL, IP, date,
 * number, english, chinese, lower, upper, HTML
 */
export const checkStr = (str, type) => {
  switch (type) {
    case "mobile": //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case "tel": //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case "card": //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case "mobileCode": //6位数字验证码
      return /^[0-9]{6}$/.test(str);
    case "pwd": //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^([a-zA-Z0-9_]){6,18}$/.test(str);
    case "payPwd": //支付密码 6位纯数字
      return /^[0-9]{6}$/.test(str);
    case "postal": //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case "QQ": //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case "email": //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case "money": //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case "URL": //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      );
    case "IP": //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      );
    case "date": //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case "number": //数字
      return /^[0-9]$/.test(str);
    case "english": //英文
      return /^[a-zA-Z]+$/.test(str);
    case "chinese": //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case "lower": //小写
      return /^[a-z]+$/.test(str);
    case "upper": //大写
      return /^[A-Z]+$/.test(str);
    case "HTML": //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};
