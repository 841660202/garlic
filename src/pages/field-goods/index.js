import Taro, {Component} from '@tarojs/taro'
import {View,} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui';
import './index.scss'

export default class FiledGoods extends Component {
  config = {
    navigationBarTitleText: '增产'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  navigateTo(url) {
    Taro.navigateTo({url: url})
  }

  render() {
    return (
      <View>
        <AtTabs
          current={this.state.current}
          height='100vh'
          tabDirection='vertical'
          scroll
          tabList={[
            { title: '大蒜' },
            { title: '小麦' },
            { title: '玉米' },
            { title: '大豆' },
            { title: '棉花' },
            { title: '土豆' },
            { title: '黄瓜' },
            { title: '稻谷' },
            { title: '西红柿' },
          ]}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页六的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={6}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页七的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={7}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页八的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={8}>
            <View style='font-size:18px;text-align:center;height:100vh;'>标签页久的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}



