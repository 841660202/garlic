import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import './index.scss'

import eyePng from '../../asset/images/eye.png'
import starPng from '../../asset/images/star.png'
import draftPng from '../../asset/images/draft.png'
import recentPng from '../../asset/images/recent.png'
import bookPng from '../../asset/images/book.png'
import livePng from '../../asset/images/live.png'
import zhiPng from '../../asset/images/zhi.png'
import bgp from '../../asset/images/bgp.png'

export default class More extends Component {
  config = {
    navigationBarTitleText: '我的'
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
              <Image class='c-i-img' src={`${eyePng}`} />
              <Text className='c-i-text'>关注</Text>
            </View>
            <View className='center-item'>
              <Image class='c-i-img' src={`${eyePng}`} />
              <Text className='c-i-text'>收藏</Text>
            </View>
            <View className='center-item'>
              <Image class='c-i-img' src={`${eyePng}`} />
              <Text className='c-i-text'>浏览</Text>
            </View>
            <View className='center-item'>
              <Image class='c-i-img' src={`${eyePng}`} />
              <Text className='c-i-text'>记账</Text>
            </View>
          </View>
        </View>
        <View className='my'>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={bookPng} />
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的浏览</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={livePng} />
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的发布</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={zhiPng} />
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的草稿</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={zhiPng} />
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

