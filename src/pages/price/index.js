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
              <View>
                <View className='avatar'>
                  <Image src={img5}></Image>
                </View>
                <Text className='answer-name'>品种</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View onClick={this.navigateTo.bind(this, '/pages/detail/index')}>
                  <Text className='answer-txt'>
                    蒜的自汉代张骞出使西域，把大蒜带到中国安家落户，至今已有两千多年的历史。大蒜是人类日常生活中不可缺少的调料，
                    在烹调鱼、肉、禽类和蔬菜时有去腥增味的作用，特别是在凉拌菜中，既可增味，又可杀菌。习惯上，人们平时所说的“大蒜”，是指蒜头而言的 </Text>
                </View>
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
                <Text className='answer-name'>产地</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View onClick={this.navigateTo.bind(this, '/pages/detail/index')}>
                  <Text className='answer-txt'>
                    中国传统蒜种为独子蒜。广东开平特产金山火蒜就是一种加工过的独子蒜。常见的分瓣大蒜则原产南欧、中亚，由汉朝张骞从西域引入。
                    其他如大白蒜绝大部分产于河南、山东。江苏、新疆也产一些；四六瓣蒜大多产于陕西、河北；红皮蒜大多产于山东、云南、四川；
                    最好的独蒜在云南洱源县；蒜种一般产于四川、江苏等地。相对来说白蒜产量多，味道淡，含油低；红蒜及独蒜产量少，味道辣，香，含油高
                  </Text>
                </View>
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
                <Text className='answer-name'>中国大蒜产地</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View onClick={this.navigateTo.bind(this, '/pages/detail/index')}>
                  <Text className='answer-txt'>
                    中国大蒜之乡是山东省济宁市金乡县。其他著名产地还有：
                    广西：玉林市仁东镇。
                    山东：济宁市金乡、临沂市苍山、莱芜市、济南市商河县、东营市广饶县、聊城市茌平县、菏泽市成武县，潍坊市安丘。
                    江苏：邳州市、徐州市丰县、盐城市射阳县、太仓市。
                    河北：邯郸市永年区、邯郸市大名县北部。
                    河南：开封市杞县、郑州市中牟县贺兵马村。
                    上海：嘉定。
                    安徽：亳州市、滁州市来安县。
                    四川：成都市温江区、彭州市。
                    云南：大理市。
                    陕西：兴平市。
                    新疆</Text>
                </View>
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
                <Text className='answer-name'>药用</Text>
              </View>
            </View>
            <View className='feed-content'>
              <View className='answer-body'>
                <View onClick={this.navigateTo.bind(this, '/pages/detail/index')}>
                  <Text className='answer-txt'>
                    蒜含有大蒜素。《本草纲目》记载蒜可治疗便毒诸疮、产肠脱下、小儿惊风。现代医学认为大蒜能提高免疫力，提高人体淋巴T细胞、巨噬细胞等免疫系统转化能力。将新鲜的大蒜切片或捣碎后生吃有助于心脏健康[4]。医学上被用来驱除肠内的寄生虫。
                    可解除体内毒素和利用加强免疫系统来保护对抗感染，可降低血压，有助于血糖含量的稳定。对于治疗动脉硬化症、关节炎、气喘、癌症、血液循环问题、感冒、流行性感冒、消化问题、心脏问题、失眠症、肝脏疾病、静脉窦炎、溃疡和酵母菌感染都有益。靠抑制幽门杆菌的生长来预防胃溃疡，对于各种疾病或感染都有效。

                    锺景光(中国医药大学 生技制药暨食品科学院
                    院长)指出，大蒜中的有机硫化合物能有效抑制大肠癌细胞，而他们的研究完整厘清大蒜中抗癌成分对癌细胞的影响过程，得知抗癌成分如何让癌细胞周期停滞，直到死亡的过程，提供大肠癌药物研发的参考依据[5]。

                    一般的大白蒜在60℃左右高湿条件下加热一个月以上，会成为黑蒜（日语：黒にんにく）[6]。另一个配合电饭煲的快捷制黑蒜的方法：将大白蒜连皮
                    (用布抹干净)放入电饭煲里，设定“保温”状态12天，取出并风干5天即可食用。[7]

                    黑大蒜在经过长时间的发酵熟成后，大蒜中所含的蛋白质被分解成氨基酸，碳水化合物被分解成单糖，原本容易造成打嗝、异味的蒜素成分在发酵过程中，也转化成没有刺鼻异味的含硫化物，口感变得更好、更易入口。[8]

                    蒜头内的蒜素是改变细菌丛生态的帮手，可以调整体质，调节生理机能，促进新陈代谢。不过蒜素因为耐热度不佳，必需用浸泡的方式，才可以完全释放出蒜头的营养，因此衍生出酿制蒜头醋的养生方式。</Text>
                </View>
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



