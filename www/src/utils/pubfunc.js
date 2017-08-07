/**
 * 判断字符串是否为空
 * @param  val
 */
export const isNullOrEmpty = (val) => {
  if(val === '' ||
	val === 0 ||
	val === null ||
	typeof(val) === 'undefined') {
	  return true;
  } else {
    if (typeof(val) === 'object' && (Object.keys(val).length === 0)) {
      return true;
    }
	  return false;
  }
}

export const oneDay = () => {
  return 1000*60*60*24;
}

export const orderTimeout = () => {
  return 1000*60*20;
}

/**
 * 判断是否为合法手机号码
 * @param  val
 */
export const isPhone = (val) => {
	var mobileCheck=/^1[2|3|4|5|6|7|8|9]\d{9}$/;
	return mobileCheck.test(val)
}
export const isPayPassword = (val) => {
	var mobileCheck=/^\d{6}$/;
	return mobileCheck.test(val)
}
export const isBankCard = (val) => {
	var bankcardCheck=/^\d{19}|\d{16}$/;
	return bankcardCheck.test(val)
}


//判断是否是邮编
export const isZip = (val) => {
	var zipCheck=/[1-9]\d{5}(?!\d)/;
	return zipCheck.test(val)
}

/**
 * JS-MD5加密用户密码
 * @param  pwd
 */
export const encryptedPassword =(pwd) => {
  let md5 = require('js-md5');
  let pwdkey = md5(pwd);
  return pwdkey;
}







