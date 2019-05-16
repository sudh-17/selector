<template>
  <div class="table-wrapper">
    <div class="header">
      <table>
        <thead>
          <th><div class="header-item">序号</div></th>
          <th><div class="header-item">片名1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div></th>
          <th><div class="header-item">导演</div></th>
          <th><div class="header-item">剧情介绍</div></th>
        </thead>
      </table>
    </div>
    <div class="content">
      <table>
        <thead>
          <th><div class="header-item">序号</div></th>
          <th><div class="header-item">片名1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div></th>
          <th><div class="header-item">导演</div></th>
          <th><div class="header-item">剧情介绍</div></th>
        </thead>
        <tbody>
          <tr v-for="item in list" v-bind:key="item.id">
            <td v-for="(obj, i) in item" v-bind:key="i">
              <div class="list-item">{{obj}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
const data = [
  {
    "id": 74,
    "name": "袁伟",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 7,
    "name": "林刚",
    "sex": "男",
    "phone": "@18008641348嘻嘻嘻嘻嘻嘻嘻嘻寻xxxxxxxxxxxxxxxxxDDDDDDDDDDDDDDD"
  },
  {
    "id": 72,
    "name": "朱芳",
    "sex": "女",
    "phone": "@18008641348"
  },
  {
    "id": 75,
    "name": "方磊",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 28,
    "name": "汪伟",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 22,
    "name": "于洋",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 1,
    "name": "周霞",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 21,
    "name": "史桂英",
    "sex": "女",
    "phone": "@18008641348"
  },
  {
    "id": 14,
    "name": "叶明",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 78,
    "name": "史敏",
    "sex": "女",
    "phone": "@18008641348"
  },
  {
    "id": 63,
    "name": "钱静",
    "sex": "女",
    "phone": "@18008641348"
  },
  {
    "id": 13,
    "name": "郑秀兰",
    "sex": "男",
    "phone": "@18008641348"
  },
  {
    "id": 99,
    "name": "朱霞",
    "sex": "女",
    "phone": "@18008641348嘻嘻嘻嘻嘻嘻嘻嘻寻xxxxxxxxxxxxxxxxxDDDDDDDDDDDDDDD"
  },
  {
    "id": 15,
    "name": "毛娜",
    "sex": "女",
    "phone": "@18008641348"
  },
  {
    "id": 4,
    "name": "龚艳",
    "sex": "女",
    "phone": "@18008641348"
  }
]
export default {
  name: 'table1',
  props: {
    msg: String
  },
  data () {
    return {
      list: data
    }
  },
  mounted () {
    this.initSelect()
  },
  methods: {
    initSelect () {
      
    }
  }
}
</script>

<style lang="less" scoped>
::-webkit-scrollbar-track-piece { //滚动条凹槽的颜色，还可以设置边框属性
  background-color:#f8f8f8;
}
::-webkit-scrollbar {//滚动条的宽度
  width:5px;
  height:5px;
}
::-webkit-scrollbar-thumb {//滚动条的设置
  background-color:#dddddd;
  background-clip:padding-box;
  min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color:#bbb;
}
.table-wrapper {
  width: 600px;
  border: 1px solid #dddddd;
  .header {
    height: 30px;
    border: 1px solid #f00;
    table {
      width: 100%;
      border-collapse: collapse;/*关键代码*/
      box-sizing: border-box;
      th .header-item{
        border: 1px solid #f00;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .content {
    height: 200px;
    overflow: auto;
    &::-webkit-scrollbar-track {
      background: #EDEDED;
      -webkit-border-radius: 2em;
      -moz-border-radius: 2em;
      border-radius:2em;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    }
    &::-webkit-scrollbar-thumb {
      background-color:#7ee4f9;
      -webkit-border-radius: 2em;
      -moz-border-radius: 2em;
      border-radius:2em;
      background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
      background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    }
    table {
      width: 100%;
      border-collapse: collapse;/*关键代码*/
      box-sizing: border-box;
      thead {
        th {
          .header-item {
            width: 130PX;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 0;
          }
        }
      }
      tr {
        td {
          .list-item {
            border: 1px solid #dddddd;
            box-sizing: border-box;
            white-space: nowrap;  
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
