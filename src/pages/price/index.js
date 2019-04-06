import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import './index.scss'
import img5 from '../../asset/images/icon1.jpeg'
import MoveChart from "../../components/MoveChart";

export default class Question extends Component {
  config = {
    navigationBarTitleText: '蒜价'
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  navigateTo(url) {
    Taro.navigateTo({url: url})
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['4/1', '4/2', '4/3', '4/4', '4/5', '4/6', '4/7', '4/8', '4/9', '4/10', '4/11', '4/12', '4/13', '4/14', '4/15', '4/16', '4/17', '4/18', '4/19', '4/20',]
      },
      measures: [{
        data: [1.0, 5.2, 2.0, 3.34, 3.90, 3.30, 2.20, 3.34, 3.90, 3.30, 2.20, 10, 5.2, 2.00, 2.20, 3.34, 3.90, 3.30, 2.20, 5.2,]
      }]
    }
    this.moveChart.refresh(chartData);
  }

  refMoveChart = (node) => this.moveChart = node

  render() {
    const renderContent =  (
      <View>
        <View className='move-chart'>
          <MoveChart ref={this.refMoveChart} />
        </View>
        <View className='answer-feed'>
          <View className='feed-item'>
            <View className='feed-source'>
              <View onClick={this.navigateTo.bind(this, '/pages/trader/index')}>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>大名蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='feed-item'>
            <View className='feed-source'>
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>宝蓝蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='feed-item'>
            <View className='feed-source'>
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>青海蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='feed-item'>
            <View className='feed-source'>
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>日企蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='feed-item'>
            <View className='feed-source'>
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>大名蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='feed-item'>
            <View className='feed-source'>
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>大名蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='feed-item'>
            <View className='feed-source'>
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>大名蒜业</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View className='price-item'><Text className='size'>6.5</Text><Text className='money'>6元/斤</Text></View>
                <View className='price-item'><Text className='size'>6.0</Text><Text className='money'>5元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.5</Text><Text className='money'>4元/斤</Text></View>
                <View className='price-item'><Text className='size'>5.0</Text><Text className='money'>3元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.5</Text><Text className='money'>2元/斤</Text></View>
                <View className='price-item'><Text className='size'>4.0</Text><Text className='money'>1元/斤</Text></View>
                <View className='price-item'><Text className='size'>3.5</Text><Text
                  className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text
                  className='money'>0.66元/斤</Text></View>
                <View className='answer-actions'>
                  <View className='like dot'>
                    <View>3.9K 赞同 </View>
                  </View>
                  <View className='comments dot'>
                    <View>254 评论 </View>
                  </View>
                  <View className='time'>
                    <View>2 个月前</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )

    return (
      <View>
        <View className='tabs-wrap'>
          <AtTabs
            current={this.state.current}
            scroll
            tabList={[
              {title: '综合'},
              // {title: '白蒜'},
              // {title: '红蒜'},
              {title: '毛蒜'},
              {title: '净蒜'},
              {title: '脱水'},
              {title: '级漏蒜'},
              {title: '蒜种'}
            ]}
            onClick={this.handleClick.bind(this)}
          >
            {/*<AtTabsPane current={this.state.current} index={0}>*/}
            {/*</AtTabsPane>*/}
            {/*<AtTabsPane current={this.state.current} index={1}>*/}
            {/*</AtTabsPane>*/}
            {/*<AtTabsPane current={this.state.current} index={2}>*/}
            {/*</AtTabsPane>*/}
            {/*<AtTabsPane current={this.state.current} index={3}>*/}
            {/*</AtTabsPane>*/}
            {/*<AtTabsPane current={this.state.current} index={4}>*/}
            {/*</AtTabsPane>*/}
            {/*<AtTabsPane current={this.state.current} index={5}>*/}
            {/*</AtTabsPane>*/}
          </AtTabs>
        </View>
        {renderContent}
      </View>
    )
  }
}



