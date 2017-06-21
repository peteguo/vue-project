/**
 * Validator class
 */

class Validator {
  /**
   * Create a new instance.
   * @param object data
   * @param object rules
   */
  constructor(data, rules, messages) {
    //contains the validation errors.
    this.errors = [];

    //the data to be checked out.
    this.data = data;

    //the rules required.
    this.rules = rules;

    //Error messages container.
    this.messages = messages;
  }

  /**
   * Create a new static instance.
   * @param object data
   * @param object rules
   */
  static make(data, rules, messages) {
    let validate = new Validator(data, rules, messages);

    return validate.handle();
  }

  /**
   * Walk through the validations rules.
   * @returns void
   */
  handle() {
    let methods = null;

    for (let rule in this.rules) {
      methods = this.rules[rule].split(',');
      this.evaluate(methods, rule);
    }

    return this.errors;
  }

  /**
   * Evaluate the input against rules.
   * @param methods
   * @param value
   * @returns array
   */
  evaluate(methods, field) {
    let value = this.data[field];

    for (let method in methods) {
      //if the rule required exits and there was an error, the
      //stack errors method is called to keep track of rules
      //that did not pass the validation.
      if (this[methods[method]] && !this[methods[method]](value)) {
        this.stackErrors({
          key: field, //evaluated field.
          error: this.messages[methods[method]]
        });
      }
    }
  }

  /**
   * keep errors tracked out.
   * @param data
   */
  stackErrors(data) {
    if (!this.errors.find((error) => error.key == data.key)) {
      this.errors[data.key] = data.error;
    }
  }
  /**
   * 中文、英文、数字及下划线
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  alphaNumberChineseUnderline(value) {
    return (/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/).test(value);
  }
  /**
   * No blank fields.
   * @param string value
   * @return boolean
   */
  required(value) {
    if (typeof value == 'boolean')
      return value;

    return !((value == null) || (value.length == 0));
  }
  /**
   * username
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  username(value) {
    return (/^[A-Za-z]{1}[0-9A-Za-z_]{3,20}$/).test(value);
  }
  /**
   * Numeric rule.
   * @param string value
   * @return boolean
   */
  numeric(value) {
    return (/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(value);
  }

  /**
   * Integer rule.
   * @param string value
   * @return boolean
   */
  integer(value) {
    return (/^(-?[1-9]\d*|0)$/).test(value);
  }

  /**
   * Digits rule.
   * @param string value
   * @return boolean
   */
  digits(value) {
    return (/^[\d() \.\:\-\+#]+$/).test(value);
  }

  /**
   * Alpha rule.
   * @param string value
   * @return boolean
   */
  alpha(value) {
    return (/^[a-zA-Z]+$/).test(value);
  }

  /**
   * Alpha num rule.
   * @param string value
   * @return boolean
   */
  alphaNum(value) {
    return !(/\W/).test(value);
  }

  /**
   * Emails rule.
   * @param string value
   * @return boolean
   */
  email(value) {
    return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
  }

  /**
   * mobile rule
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  mobile(val) {
    return (/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(val));
  }
  /**
   * isPhone
   *
   * This function check whether the value of the string is phone.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isPhone(val) {
    return (/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/.test(val));
  }

  /**
   * isPostcode
   *
   * This function check whether the value of the string is Postcode.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isPostcode(val) {
    return (/^[0-9]{6}$/.test(val));
  }
  /**
   * isQQ
   *
   * This function check whether the value of the string is QQ.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isQQ(val) {
    return (/^[1-9]\d{4,9}$/.test(val));
  }


  /**
   * isDateTime
   *
   * This function check whether the value of the string is DateTime.
   *
   * example:YYYY-MM-DD HH:MM:SS   OR   YY-MM-DD HH:MM:SS
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isDateTime(val) {
    return (/^(\d{4}|\d{2})-((0?([1-9]))|(1[1|2]))-((0?[1-9])|([12]([1-9]))|(3[0|1]))\s((1|0?)[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(val));
  }


  /**
   * isChinese
   *
   * This function check whether the value of the string is chinese.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isChinese(val) {
    return (/^[\u4e00-\u9fa5]+$/.test(val));
  }
  /**
   * isChrnum
   *
   * This function check whether the value of the string is num or character.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isChrnum(val) {
    return (/^([a-zA-Z0-9]+)$/.test(val));
  }
  /**
   * isIp
   *
   * This function check whether the value of the string is ip.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  isIp(val) {
    return (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(val));
  }

  /**
   * Url rule.
   * @param string value
   * @return boolean
   */
  url(value) {
    return (/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(value);
  }

  /**
   * minlength
   *
   * This function validate whether the minimum length.
   *
   * @param {String|Array} val
   * @param {String|Number} min
   * @return {Boolean}
   */

  minlength(val, min) {
    if (typeof val === 'string') {
      return val.length >= parseInt(min, 10);
    } else if (Array.isArray(val)) {
      return val.length >= parseInt(min, 10);
    } else {
      return false;
    }
  }

  /**
   * maxlength
   *
   * This function validate whether the maximum length.
   *
   * @param {String|Array} val
   * @param {String|Number} max
   * @return {Boolean}
   */

  maxlength(val, max) {
    if (typeof val === 'string') {
      return val.length <= parseInt(max, 10);
    } else if (Array.isArray(val)) {
      return val.length <= parseInt(max, 10);
    } else {
      return false;
    }
  }
}

export default Validator
