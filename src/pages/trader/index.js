import Taro, {Component} from '@tarojs/taro'
// 引入 map 组件
import {Map, View, Text, Image} from '@tarojs/components'
import location from '../../asset/images/center-location.png'
import self_location from '../../asset/images/self-location.png'
import './index.scss'

export default class TraderMap extends Component {
  config = {
    navigationBarTitleText: '企业信息'
  }

  constructor() {
    super(...arguments)
    this.state = {
      latitude: 30.282566,
      longitude: 120.054646,
      markers: [{
        iconPath: location,
        id: 0,
        latitude: 30.282566,
        longitude: 120.054646,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: self_location,
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    }
  }

  onTap() {
  }

  regionchange(e) {
    console.log(e.type)
  }


  markertap(e) {
    console.log(e.markerId)
  }


  controltap(e) {
    console.log(e.controlId)
  }

  render() {
    const {
      markers,
      polyline,
      controls,
      longitude,
      latitude
    } = this.state
    return (
      <View className='content'>
        <View className='trader-head'>
          <Image
            className='trader-bg'
            src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1752243568,253651337&fm=27&gp=0.jpg'
          />
          <Image className='trader-logo' src='https://nervjs.github.io/taro/img/logo-taro.png' />
        </View>
        <View className='trader-info'>
          <View className='trader-info-left'>
            <Text className='trader-name'>百年蒜业</Text><Text className='authentication'>资质认证</Text>
            <View className='label'><Text>邳州</Text>|<Text>出口</Text>|<Text>冷藏</Text></View>
          </View>
          <View><Text className='trader-follow'>+关注</Text></View>
        </View>
        <View className='trader-base'>
          <Text>基本信息</Text>
          <View>
            <Text className='trader-des'>XXXX是一家从事大蒜收购的百年企业，本着服务农民，造福一方，以最优的价格，收购大蒜，进行对外出口贸易。联系方式：</Text>
            <Text className='trader-link'>15651712065</Text>
          </View>
        </View>
        <View className='trader-address'>
          <View className='address'>
            <Text>企业地址</Text>
          </View>
          <Map
            showLocation
            onClick={this.onTap}
            longitude={longitude}
            latitude={latitude}
            scale='14'
            controls={controls}
            bindcontroltap={this.controltap}
            markers={markers}
            bindmarkertap={this.markertap}
            polyline={polyline}
            bindregionchange={this.regionchange}
            show-location
            style='width: 100%; height: 200px;'
          ></Map>
        </View>
      </View>
    )
  }
}
