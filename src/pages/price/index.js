import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'

import img1 from '../../asset/images/eye.png'
import img2 from '../../asset/images/comment2.png'
import img3 from '../../asset/images/invite.png'
import img4 from '../../asset/images/write.png'
import img5 from '../../asset/images/icon1.jpeg'
import MoveChart from "../../components/MoveChart";

export default class Question extends Component {
  config = {
    navigationBarTitleText: '蒜价'
  }

  constructor() {
    super(...arguments)
  }

  navigateTo(url) {
    Taro.navigateTo({url: url})
  }
  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['4/1', '4/2', '4/3', '4/4', '4/5', '4/6', '4/7','4/8', '4/9', '4/10', '4/11', '4/12', '4/13', '4/14', '4/15', '4/16', '4/17','4/18', '4/19', '4/20',]
      },
      measures: [{
        data: [10, 52, 200, 334, 390, 330, 220, 334, 390, 330, 220, 10, 52, 200, 220, 334, 390, 330, 220, 52,  ]
      }]
    }
    this.moveChart.refresh(chartData);
  }
  refMoveChart = (node) => this.moveChart = node

  render() {
    return (
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
                <View className='price-item'><Text className='size'>3.5</Text><Text className='money'>0.8元/斤</Text></View>
                <View className='price-item'><Text className='size'>小三级</Text><Text className='money'>0.66元/斤</Text></View>
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
  }
}



