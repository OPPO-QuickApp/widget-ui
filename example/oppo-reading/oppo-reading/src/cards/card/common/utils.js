import network from '@system.network'
import device from '@system.device'
import router from '@system.router'
import data from './mock'

// 检测网络
export function checkNetwork() {
  return new Promise((res, rej) => {
    network.getType({
      success: (data) => {
        if (typeof data == 'object' && data.type != 'none') {
          res(true)
        } else {
          res(true)
        }
      },
      fail: (err) => {
        res(false)
      },
    })
  })
}

// 获取平台版本号
export function getPlatformVersionCode() {
  return new Promise((resolve) => {
    try {
      device.getInfo({
        success: function (ret) {
          resolve(ret.platformVersionCode)
        },
        fail(data, code) {
          resolve(0)
        },
      })
    } catch (e) {
      resolve(0)
    }
  })
}

// 检测平台版本号
// 举例：当大于1070时，该卡片可使用
export function checkVersion() {
  return getPlatformVersionCode().then((platformVersionCode) => {
    return platformVersionCode >= 1070
  })
}

// 获取远程数据
// 举例：获取固定的数据
export function getRemoteData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.nav.sort(() => (Math.random > 0.5 ? 1 : -1))
      resolve(data)
    }, 2000)
  })
}

// 跳转至wlan管理页
export function routerToWlanManager() {
  router.push({
    uri: 'hap://settings/wlan_manager',
  })
}

// 跳转至软件商店的快应用详情页
export function routerToPlatformMarket(appName) {
  let ret = router.push({
    uri: 'market://details?id=com.nearme.instant.platform&caller=com.nearme.instant.platform',
    params: {
      ___PARAM_DEEPLINK_TARGET_PKG___: 'com.heytap.market',
    },
  })

  if (ret !== 'success') {
    ret = router.push({
      uri: 'market://details?id=com.nearme.instant.platform&caller=com.nearme.instant.platform',
      params: {
        ___PARAM_DEEPLINK_TARGET_PKG___: 'com.oppo.market',
      },
    })
  }

  if (ret !== 'success') {
    router.push({
      uri: 'market://details?id=com.nearme.instant.platform&caller=com.nearme.instant.platform',
      params: {
        ___PARAM_DEEPLINK_TARGET_PKG___: 'com.oneplus.market',
      },
    })
  }
}

// 跳转至系统设置的快应用详情页
export function routerToPlatformSettings() {
  router.push({
    uri: 'hap://settings/details_settings?package=com.nearme.instant.platform',
  })
}
