import Taro, {Component} from '@tarojs/taro'
import {View, ScrollView, Text, Input, Image, Swiper, SwiperItem} from '@tarojs/components'
import './index.scss'
import Feed from '../../components/feed/index'
import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'
import { AtGrid } from "taro-ui"

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      loading: true,
      list: []
    }
  }

  componentDidMount() {
    // 获取远程数据
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          loading: false,
          list: res.data.data
        })
      }
    })
  }

  updateList = () => {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          loading: false,
          list: res.data.data
        })
      }
    })
  }
  appendNextPageList = () => {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          list: this.state.list.concat(res.data.data),
          loading: false
        })
      }
    })
  }

  render() {
    const swipers = [
      {
        url:'http://img1.imgtn.bdimg.com/it/u=1315248590,188701943&fm=26&gp=0.jpg',
        des: '绿色食品安全'
      },
       {
        url:'http://img1.imgtn.bdimg.com/it/u=2231824396,4245910945&fm=26&gp=0.jpg',
        des: '精心维护种植'
      },
       {
        url:'http://img3.imgtn.bdimg.com/it/u=2868996691,4035240372&fm=26&gp=0.jpg',
        des: '精心维护种植'
      },
       {
        url:'http://img2.imgtn.bdimg.com/it/u=2136012447,2871408081&fm=26&gp=0.jpg',
        des: '就靠大蒜娶媳妇'
      },
       {
        url:'http://img3.imgtn.bdimg.com/it/u=1862994181,2530498908&fm=26&gp=0.jpg',
        des: '新鲜可口'
      },
    ]
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {
            swipers.map(item=>(
              <SwiperItem key={item.url}>
                <View className='swiperItem-wrap'>
                  <Image src={item.url} mode='aspectFill' style={{width: '100%',height:150}} />
                  <Text className='swiperItem-des'>{item.des}</Text>
                </View>
              </SwiperItem>
            ))
          }
        </Swiper>
        <AtGrid  hasBorder={false} columnNum={5}  data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '蒜苗'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '青蒜'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '蒜苔'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '蒜头'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '化肥'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '农药'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '地膜'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '蒜主'
            },{
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '农户'
            },{
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '时令'
            },
          ]
        }
        />
        {/*<View className='search flex-wrp'>*/}
        {/*<View className='search-left flex-item'>*/}
        {/*<View className='flex-wrp'>*/}
        {/*<View className='flex1'><Image src={searchPng}></Image></View>*/}
        {/*<View className='flex6'><Input type='text' placeholder='搜索话题, 问题或人' placeholderClass='search-placeholder' /></View>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View className='search-right flex-item'>*/}
        {/*<Image onClick={this.updateList} src={lightingPng}></Image>*/}
        {/*</View>*/}
        {/*</View>*/}
        <ScrollView className='container'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='10'
          upperThreshold='10'
          style='height:300px'
          onScrollToUpper={this.updateList}
          onScrollToLower={this.appendNextPageList}
        >
          {
            this.state.loading
              ? <View className='txcenter'>加载中</View>
              : this.state.list.map((item, key) => {
                return <Feed
                  key={key}
                  feedSourceImg={item.feed_source_img}
                  feedSourceName={item.feed_source_name}
                  feedSourceTxt={item.feed_source_txt}
                  question={item.question}
                  answerCtnt={item.good_num}
                  goodNum={item.comment_num}
                  commentNum={item.commentNum}
                />
              })
          }
        </ScrollView>
      </View>
    )
  }
}

