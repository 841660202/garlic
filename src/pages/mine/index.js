import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
import bgp from '../../asset/images/six.jpg'

export default class More extends Component {
  config = {
    navigationBarTitleText: '我的'
  }
  navigateTo(url) {
    Taro.navigateTo({url: url})
  }
  render () {
    return (
      <View className='more'>
        <View className='head-wrap'>
          <Image className='head-bg' src={bgp} />
          <View className='user flex-wrp'>
            <View className='avatar flex-item'>
              <Image className='userinfo-avatar' src='https://image.ibb.co/nKV5Cy/default_avatar.jpg' />
            </View>
            <View className='user-info flex-item'>
              <Text className='userinfo-nickname'>蒜头</Text>
              <Text className='edit'>勋章</Text>
            </View>
            <View className='user-money'>
              <Text className='brokerage'>佣金</Text>
            </View>
          </View>
          {/*center*/}
          <View className='center-wrap'>
            <View className='center-item'>
              <AtIcon className='c-i-img' prefixClass='iconfont' value='follow' size='27' color='#E91E63'></AtIcon>
              {/*<Image class='c-i-img' src={`${eyePng}`} />*/}
              <View className='c-i-text'><Text>关注</Text></View>
            </View>
            <View className='center-item'>
              <AtIcon className='c-i-img' prefixClass='iconfont' value='collection' size='27' color='#FF5722'></AtIcon>
              <View className='c-i-text'><Text>收藏</Text></View>
            </View>
            <View className='center-item'>
              <AtIcon className='c-i-img' prefixClass='iconfont' value='follow' size='27' color='#00E676'></AtIcon>
              <View className='c-i-text'><Text>浏览</Text></View>
            </View>
            <View className='center-item'>
              <AtIcon className='c-i-img' prefixClass='iconfont' value='bill' size='27' color='#F00'></AtIcon>
              <View className='c-i-text'><Text>记账</Text></View>
            </View>
          </View>
        </View>
        <View className='my'>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon prefixClass='iconfont' value='browse' size='22' color='#009688'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的浏览</Text>
            </View>
          </View>
          <View className='my-item flex-wrp' onClick={this.navigateTo.bind(this, '/pages/publish/index')}>
            <View className='myitem-icon flex-item' >
              <AtIcon prefixClass='iconfont' value='publish' size='22' color='#448AFF'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的发布</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon prefixClass='iconfont' value='draft' size='22' color='#2196F3'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的草稿</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon prefixClass='iconfont' value='setting' size='22' color='#000'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>设置</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

