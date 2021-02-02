import '@less/index.less'
import hello from './hello'

if(module.hot) {
  module.hot.accept(['./hello.js'])
}
hello()