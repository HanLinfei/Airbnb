function cssStringToObject(cssString) {
  // 删除所有空格和换行符
  cssString = cssString.replace(/\s/g, "");

  // 将样式字符串按分号分割成数组
  let cssArray = cssString.split(";");

  // 创建一个对象来存储CSS属性
  let cssObject = {};

  // 遍历CSS属性数组
  for (let i = 0; i < cssArray.length; i++) {
    // 分割每个CSS属性为属性名和属性值
    let cssProperty = cssArray[i].split(":");

    // 如果属性名存在且属性值存在
    if (cssProperty[0] && cssProperty[1]) {
      // 将属性名转换为驼峰命名
      let propertyName = cssProperty[0].replace(
        /-([a-z])/g,
        function (match, letter) {
          return letter.toUpperCase();
        }
      );

      // 添加属性名和属性值到CSS对象
      cssObject[propertyName] = cssProperty[1];
    }
  }

  return cssObject;
}

export default cssStringToObject;
