import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/discovery/discovery'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#fbfbfb',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/index/index',
        text: '',
        iconPath: './asset/images/index.png',
        selectedIconPath: './asset/images/index_focus.png'
      },
      {
        pagePath: 'pages/discovery/discovery',
        text: '',
        iconPath: './asset/images/discovery.png',
        selectedIconPath: './asset/images/discovery_focus.png'
      }]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
