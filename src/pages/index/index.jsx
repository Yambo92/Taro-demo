import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Input,Image} from '@tarojs/components'
import './index.scss'
import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'
import icon1 from '../../asset/images/icon1.jpeg'
import icon8 from '../../asset/images/icon8.jpg'
import icon9 from '../../asset/images/icon9.jpeg'
import more from '../../asset/images/more.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super()
    this.state = {
      list:[{
            "question_id": 1,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答1",
            "feed_source_img": icon1,
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 2,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题2",
            "feed_source_img": icon8,
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 3,
            "answer_id": 61,
            "feed_source_id": 25,
            "feed_source_name": "George",
            "feed_source_txt": "赞了回答3",
            "feed_source_img": icon9,
            "question": "气象铁塔的辐射大吗？",
            "answer_ctnt": "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 4,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答4",
            "feed_source_img": icon1,
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 5,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题5",
            "feed_source_img": icon8,
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 6,
            "answer_id": 61,
            "feed_source_id": 25,
            "feed_source_name": "George",
            "feed_source_txt": "赞了回答6",
            "feed_source_img": icon9,
            "question": "气象铁塔的辐射大吗？",
            "answer_ctnt": "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 7,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答7",
            "feed_source_img": icon1,
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 8,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题8",
            "feed_source_img": icon8,
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
        }
      ]
    }
  }
  navigateTo(url){
    Taro.navigateTo({url: url})
  }
  updateList(){
    console.log('test')
  }
  appendNextPageList(){
    console.log('append')
  }
  render () {
    return (
      <ScrollView className='container index-wrapper'
        scroll-y
        scroll-with-animation
        scroll-top='0'
        lower-threshold='20'
        upperThreshold='20'
        bindscrolltoupper={this.updateList}
        onScrolltoupper={this.appendNextPageList}
      >
        <View className='search flex-wrp'>
          <View className='search-left flex-item'>
            <Image src={searchPng}></Image>
            <Input type='text' placeholder='搜索话题，问题或人' placeholderClass='search-placeholder' />
          </View>
          <View className='search-right flex-item'>
            <Image src={lightingPng}></Image>
          </View>
        </View>
        { 
          this.state.list.map((item, index) => {
            return (
              <View className='feed-item' key={index}>
                <View className='feed-source'>
                  <View className='avatar flex1'>
                    <Image src={item.feed_source_img}></Image>
                  </View>
                  <View className="flex8">
                    <Text className="feed-source-txt">{item.feed_source_name}{item.feed_source_txt}</Text>
                  </View>
                  <View className="flex1">
                    <Image className="item-more" mode="aspectFit" src={more}></Image>
                  </View>
                </View>
                <View className="feed-content">
                  <View className="question" qid="{item.question_id}" onClick={this.navigateTo.bind(this,'/pages/question/question')}>
                      <View className="question-link">
                          <Text>{item.question}</Text>
                      </View>
                  </View>
                  <View className="answer-body">
                      <View>
                          <Text className="answer-txt" aid="{item.answer_id}" onClick={this.navigateTo.bind(this,'/pages/answer/answer')} >{item.answer_ctnt}</Text>
                      </View>
                      <View className="answer-actions">
                          <View className="like dot">
                              <View>{item.good_num} 赞同 </View>
                          </View>
                          <View className="comments dot">
                              <View>{item.comment_num} 评论 </View>
                          </View>
                          <View className="follow-it">
                              <View>关注问题</View>
                          </View>
                      </View>
                  </View>
              </View>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
