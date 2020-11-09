// <!--v-real-img 就是刚刚定义的指令，绑定的为真实要显示的图片地址。src为默认图片地址-->
// <img src="images/logoError.png" v-real-img="images/logo.png"></img>

export default (Vue) => {
  // 全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
  Vue.directive('real-img', async function (el, binding) { // 指令名称为：real-img
    const imgURL = binding.value// 获取图片地址
    // console.log(imgURL + '-----------imgURL')
    if (imgURL) {
      const exist = await imageIsExist(imgURL)
      if (exist) {
        el.setAttribute('src', imgURL)
      }
    }
  })

  /**
* 检测图片是否存在
* @param url
*/
  const imageIsExist = function (url) {
    return new Promise((resolve) => {
      var img = new Image()
      img.onload = function () {
        if (this.complete === true) {
          resolve(true)
          img = null
        }
      }
      img.onerror = function () {
        resolve(false)
        img = null
      }
      img.src = url
    })
  }
}
