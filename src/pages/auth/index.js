import Taro, {Component} from '@tarojs/taro'
import {View, Button, Image} from '@tarojs/components'
import '@tarojs/async-await'
import { AtCurtain, AtToast, AtMessage } from "taro-ui"
import {observer, inject} from '@tarojs/mobx'
import six from '../../asset/images/six.jpg'
import './index.scss'
import {login} from "../../service/api";

@inject('counterStore')
@observer
class Auth extends Component {

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
  constructor () {
    super(...arguments)
    this.state = {
      isOpened: true,
    }
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
  onClose () {
    Taro.atMessage({
      'message': '授权后您将查看更多信息',
      'type': 'warning',
    })
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
          if(result.data){
            this.setState({
              isOpened: false
            })
          }
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  };

  render() {
    return (
       <View className='login-wrap'>
         <View className='login-bg' />
         <AtMessage />
         <AtCurtain
           closeBtnPosition='top-right'
           isOpened={this.state.isOpened}
           onClose={this.onClose.bind(this)}
         >
           <Button
             className='login-btn'
             openType='getUserInfo'
             onGetUserInfo={this.onLoginByWeapp}
             type='primary'
             plain
             size='mini'
           >
             授权登陆
           </Button>
           <Image
             style='width:100%;height:150px'
             src={six}
           />
         </AtCurtain>
         <AtToast isOpened text='这个不是很好哦'></AtToast>
       </View>
    )
  }
}

export default Auth
