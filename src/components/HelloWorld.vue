<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <select name="" id="" class="wraper">
      <option value="22">22</option>
      <option value="22">22fffs</option>
    </select>
    <div class="wrapper">
      <div class="contents" @click="focus">fgggffs</div>
      <div class="panel">
        <div class="panel-header">
          <input type="text" name="search">
        </div>
        <div class="panel-content">
          <ul class="panel-list">
            <li class="panel-item">
              <span>12231345</span>
              <input class="check" type="checkbox" name="" id="">
            </li>
            <li class="panel-item">
              <span>12231345</span>
              <input class="check" type="checkbox" name="" id="">
            </li>
            <li class="panel-item">
              <span>12231345</span>
              <input class="check" type="checkbox" name="" id="">
            </li>
            <li class="panel-item">
              <span>12231345</span>
              <input class="check" type="checkbox" name="" id="">
            </li>
            <li class="panel-item">
              <span>12231345</span>
              <input class="check" type="checkbox" name="" id="">
            </li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
            <li class="panel-item">122222</li>
          </ul>
        </div>
        <div class="panel-footer">
          <div class="bt-gb"><button class="cancel" @click="handleCancel">取消</button></div>
          <div class="bt-gb"><button class="ok" @click="handleOk">确定</button></div>
        </div>
      </div>
      <div class="backdrop"></div>
    </div>
  </div>
</template>

<script>
import Model from '../model.js'
const data = [
  {
    "key": "C76Be67E-ccae-EcBC-7Fd5-B7e12C1d18E1",
    "value": "叶明"
  },
  {
    "key": "EDedAF3C-DE5c-5c8E-FDAD-e7c1195c6438",
    "value": "朱强"
  },
  {
    "key": "0be8eBC8-cc7F-beE5-11BB-6cC17A5D32BF",
    "value": "萧娟"
  },
  {
    "key": "CF96C4F9-e6f2-26Db-A4Eb-c22750FB4408",
    "value": "万秀兰"
  },
  {
    "key": "4Dd3EC4e-DAaA-EeFC-83f9-e25b896C9FAB",
    "value": "邱芳"
  },
  {
    "key": "0F8F4F32-6f0E-8Ab3-D0ee-a8fb5Cf9676B",
    "value": "韩秀兰"
  },
  {
    "key": "Eaf5A46b-B86e-e8cb-DFde-573DEF22AA54",
    "value": "程军"
  },
  {
    "key": "E2EdCD8a-dd56-A76C-F42B-D55a16F837F7",
    "value": "魏杰"
  },
  {
    "key": "A77Bdd1E-CDE5-54bA-96c5-13ee14FaBc8F",
    "value": "郭芳"
  },
  {
    "key": "AcfEfFea-cD6D-Dac8-B8BB-Fde8fd38DC4B",
    "value": "钱杰"
  }
];
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      list: data,
      Model
    }
  },
  mounted () {

  },
  methods: {
    show() {
      document.querySelector('.panel').style.display = 'block'
      document.querySelector('.backdrop').style.display = 'block'
    },
    hide(){
      document.querySelector('.panel').style.display = 'none'
      document.querySelector('.backdrop').style.display = 'none'
    },
    focus() {
      this.show()
    },
    handleCancel(){
      this.hide()
    },
    handleOk(){
      this.hide()
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  .contents {
    width: 80vw;
    height: 5vh;
    border: 1px solid #ff0000;
  }
  .panel {
    width: 80vw;
    max-height: 50vh;
    border: 1px solid #00ff00;
    display: none;
    position: absolute;
    top: 30%;
    left: 50%;
    z-index: 999;
    background: #ffffff;
    margin-left: -40vw;
    div {
      position: relative;
    }
    .panel-header {
      height: 32px;
      input[name='search']{
        width: 98%;
      }
    }
    .panel-content{
      overflow-y: auto;
      max-height: 30vh;
      .panel-list{
        list-style: none;
        margin: 0;
        padding: 0 10px 0 10px;
        .panel-item{
          text-align: left;
          .check{
            float: right;
          }
        }
      }
    }
    .panel-footer{
      display: flex;
      div{
        box-sizing: border-box;
      }
      .bt-gb{
        width: 50%;
        flex: 1;
        box-sizing: border-box;
        button{
          float: left;
        }
      }
    }
  }
  .backdrop{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
}

</style>
