import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import '@tarojs/async-await'
import {observer, inject} from '@tarojs/mobx'

import './index.scss'
import {login} from "../../service/api";

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '授权登陆'
  }

  componentWillMount() {
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onLoginByWeapp = (e) => {
    console.log(e)
    e.stopPropagation();
    Taro.login({
      success: async (res) => {
        if (res.code) {
          console.log(res.code)
          //用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 openid 和 session_key 等信息
          // login({code: res.code}).then(result => {
          //   console.log(result)
          // })
          const result = await login({code: res.code})
          console.log(result)
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  };

  render() {
    return (
      <View className='index'>
        <Button className='btn' openType='getUserInfo' onGetUserInfo={this.onLoginByWeapp} type='primary'>
          开启缘分
        </Button>
      </View>
    )
  }
}

export default Index
