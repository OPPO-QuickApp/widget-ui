import network from '@system.network'

export function checkNetwork() {
  return new Promise((res, rej) => {
    network.getType({
      success: (data) => {
        if (typeof data == 'object' && data.type != 'none') {
          res(true)
        } else {
          res(false)
        }
      },
      fail: (err) => {
        res(false)
      },
    })
  })
}
