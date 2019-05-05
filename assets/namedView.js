/**
 * 命名视图
 * @param {Object} routes 路由
 * @param {Function} resolve 整合路径方法
 * @param {String} dirname 路径
 */
const extendRoutes = (routes, resolve, dirname) => {
  console.log(typeof routes)
  console.log(typeof resolve)
  console.log(typeof dirname)
  const indexIndex = routes.findIndex(route => route.name === 'index2')
  let index = routes[indexIndex].children.findIndex(route => route.name === 'index2-child-id')
  console.group('left')
    console.log(...routes)
    console.log('________________')
    console.log(routes[indexIndex].children[index])
    console.log('________________')
    console.log(resolve(dirname, 'components/childLeft.vue'))
  console.groupEnd();
  routes[indexIndex].children[index] = {
    ...routes[indexIndex].children[index],
    components: {
      default: routes[indexIndex].children[index].component,
      left: resolve(dirname, 'components/childLeft.vue')
    },
    chunkNames: {
      left: 'components/cildLeft'
    }
  }
  console.log(routes[indexIndex].children[index])

  index = routes.findIndex(route => route.name === 'main')
  routes[index] = {
    ...routes[index],
    components: {
      default: routes[index].component,
      top: resolve(dirname, 'components/mainTop.vue')
    },
    chunkNames: {
      top: 'components/mainTop'
    }
  }
}

export default extendRoutes