import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.scss'
import "./asset/iconfont/iconfont.css";


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {
  config = {
    pages: [
      // 'pages/auth/index',
      'pages/index/index',
      'pages/detail/index',
      // 'pages/home/index',
      'pages/mine/index',
      'pages/field-goods/index',
      'pages/price/index',
      'pages/farmers-traders/index',
      'pages/publish/index',
      'pages/trader/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      }, {
        pagePath: "pages/price/index",
        text: "蒜价",
        iconPath: "./asset/images/discovery.png",
        selectedIconPath: "./asset/images/discovery_focus.png"
      },
        // {
        //   pagePath: "pages/home/index",
        //   text: "科普",
        //   iconPath: "./asset/images/discovery.png",
        //   selectedIconPath: "./asset/images/discovery_focus.png"
        // },
        {
          pagePath: 'pages/field-goods/index',
          text: "增产",
          iconPath: "./asset/images/discovery.png",
          selectedIconPath: "./asset/images/discovery_focus.png"
        },
        {
          pagePath: "pages/mine/index",
          text: "我",
          iconPath: "./asset/images/burger.png",
          selectedIconPath: "./asset/images/burger_focus.png"
        }]
    }
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
