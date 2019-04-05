import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtForm, AtInput, AtButton, AtTag} from 'taro-ui'
import './index.scss'

export default class Publish extends Component {
  config = {
    navigationBarTitleText: '发布'
  }

  constructor() {
    super(...arguments)
    this.state = {
      form: {
        'size65': null,
        'size60': null,
        'size55': null,
        'size50': null,
        'size45': null,
        'size40': null,
        'size35': null,
        'size30': null,
      },
      types: [
        {title: '不挑不拣', active: false, value: '1'},
        {title: '白蒜', active: false, value: '2'},
        {title: '红蒜', active: false, value: '3'},
        {title: '自己推', active: false, value: '4'},
        {title: '净蒜', active: false, value: '5'},
        {title: '后牌干净', active: false, value: '6'},
        {title: '不收糖化', active: false, value: '7'},]
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  onSubmit(event) {
    console.log(event)
  }

  onReset() {
    this.setState({
      form: {
        'size65': null,
        'size60': null,
        'size55': null,
        'size50': null,
        'size45': null,
        'size40': null,
        'size35': null,
        'size30': null,
      }
    })
  }

  onTag = (index) => {
    const _types = this.state.types
    _types[index].active = !_types[index].active
    this.setState({
      types: _types
    })
  }

  render() {
    const {
      types,
      form: {
        size65,
        size60,
        size55,
        size50,
        size45,
        size40,
        size35,
        size30,
      },
    } = this.state;
    return (
      <View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
          <View><Text className='category'>收价：</Text></View>
          <AtInput
            name='value'
            title='6.5'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size65}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='6.0'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size60}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='5.5'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size55}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='5.0'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size50}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='4.5'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size45}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='4.0'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size40}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='3.5'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size35}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='小三级'
            type='digit'
            placeholder='请输入价格 如3.5'
            value={size30}
            onChange={this.handleChange.bind(this)}
          />
          <View><Text className='category'>特色：</Text></View>

          <View>
            {
              types.map((item, index) =>
                (
                  <AtTag
                    key={item.value}
                    type='primary'
                    name={item.value}
                    active={item.active}
                    circle
                    onClick={this.onTag.bind(this, index)}
                    className='_tag'
                  >{item.title}</AtTag>
                ))
            }
          </View>
         <View className='submit-buttons'>
           <AtButton size='small' type='primary' formType='submit'>提交</AtButton>
           <AtButton size='small' formType='reset'>重置</AtButton>
         </View>
        </AtForm>
      </View>
    )
  }
}


