<template>
  <div class="shop_custom_classify">
    <div class="_breadcrumb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/mall' }">首页</el-breadcrumb-item>
        <!--<el-breadcrumb-item>店铺商品</el-breadcrumb-item>-->
      </el-breadcrumb>
    </div>
    <div class="main-all">
      <div class="map-look">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-star-off"  @click.native="intera"></i>
              监管点一览
            </span>
          </div>
          <div class="user-info-list">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple-dark">
                  <div id="main" class="main-map" style="height:350px;width: 700px"></div>
                </div>
              </el-col>
              <div id="line" :class="lineCity + index" v-for="(items , index) in cityData.regionList">
                <hr>
                <p class="p1">转运站：{{items.rtsCount}}个</p>
                <p class="p2">垃圾处理厂：{{items.landfillCount}}个</p>
              </div>
            </el-row>
            <p class="sum-city">垃圾中转站：<span>{{cityData.rtsCount}}</span>个；垃圾处理厂：<span>{{cityData.landfillCount}}</span>个；清运公司：<span>{{cityData.cleanCompanyCount}}</span>个；清运车辆：<span>{{cityData.cleanVehicleCount}}</span>辆</p>
          </div>
        </el-card>
      </div>
      <div class="main-alarm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="header-info">
              <span>最新告警   {{alarmData[0].alarDate}}</span>
            </span>
          </div>
          <div class="user-info-list">
            <div class="alarm-list">
              <ul :style="{top:topRun}">
                <li class="alarm-li" v-for = "val in alarmData">
                  <a href="">
                    <span>{{ val.alarDate }}</span>
                    <img style="height: 37px;margin-left: 4px" src="/static/images/u114.jpg" alt="">
                    <span class="color-name1" v-if="val.alarType == 1">【臭味超标】</span>
                    <span class="color-name2" v-if="val.alarType == 2">【超速告警】</span>
                    <span class="color-name3" v-if="val.alarType == 3">【故障告警】</span>
                    <span style="display: inline-block;width: 98px;margin-left: 8px">{{ val.carNum }}</span>
                    <span v-if="val.alarType == 2"><img src="/static/images/u129.png" alt=""><span style="display: inline-block;margin-left: 10px">{{ val.alarAddress }}</span></span>
                    <span v-else><img src="/static/images/u116.png" alt=""><span style="display: inline-block;margin-left: 10px">{{ val.alarAddress }}</span></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="page-all">
              <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div>
          <div class="alarm-list_two"></div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {
    _cityMapList,
    _alarm
  } from '@/vuex/api/indexAPI'
  import geoJson from '../../../../static/echarts/map/json/province/shenzhen.json'
  import {deepCopy} from '@/assets/lib/utils'
  export default {
    name: "main",
    components: {

    },
    computed: {
      ...mapGetters([
        'login',
      ]),
      topRun: function () {
        return -this.indexTop * 37 + 'px'
      }

    },
    data() {
      return {
        visible: false,
        username: '',
        indexTop: 0,
        //topRun: 0,
        alarmData: [
          {alarType: "",
           alarDate: "",
           carNum: "",
           alarAddress: ""
          }
        ],
        lineCity:'line-city',
        cityData: [],
      }
    },
    methods:{
      intera(id) {
        this.$router.push({ name: 'map_list', params: { id: id }})
      }
    },
    created(){
      _alarm({'username': this.login.username}).then((val) => {
          const {success, msg_code, data} = val;
          if(success) {
            this.alarmData = data;
          } else {
            console.log("失败")
          }
        });
    },
    mounted(){
//      app.title = '34 省切换查看';
    _cityMapList('cityId=1').then((val) => {
      const {success, msg_code, data} = val;
      if(success) {
        let _this = this
        this.cityData = deepCopy(data);
        let regions = this.cityData.regionList,
          cityRegions = [];
        regions.map(val => cityRegions.push({'id':val.id,'name':val.regionName}))
        console.log(JSON.stringify(cityRegions))
        var provinces = ['shenzhen', 'shanghai'];
        var provincesText = ['深圳市', '上海'];
        var myChart = echarts.init(document.getElementById('main'));
        function showProvince() {
          var name = provinces[currentIdx];
          myChart.showLoading();
          var currentIdx = 0;
          echarts.registerMap('shenzhen', geoJson);
          myChart.hideLoading();
          myChart.setOption(option = {
            backgroundColor: '#FFF',
            title: {
              text: provincesText[currentIdx],
              textStyle: {
                color: '#cccccc'
              },
              bottom:0,
              left:60
            },
            series: [
              {
                type: 'map',
                mapType: 'shenzhen',
                label: {
                  emphasis: {
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },
                //roam:true,
                itemStyle: {
                  normal: {
                    borderColor: '#EFF2F7',
                    areaColor: '#20A0FF',
                    label:{show:true,color:'#EFF2F7'},
                  },
                  emphasis: {
                    areaColor: '#1F2D3D',
                    borderWidth: 2,
                    label:{show:true,color:'#fff'},
                  }
                },

                data:cityRegions,
                animation: false
              }
            ]
          });
        }
        myChart.on('click', function (params) {
          //this.$router.push({ path: 'mall', params: { userId: 123 }})
          _this.intera(params.data.id)
          console.log(params)

        });
        let option = {
          series: []
        };
        showProvince();
      } else {
        console.log("失败")
      }
    });


//        setInterval(() => {
//          if(this.indexTop < this.alarmData.length){
//            this.indexTop += 1;
//          }else {
//            this.indexTop = 0;
//          }
//        },2000)
    }
  }
</script>

<style lang="scss" scoped>
  #line {
    position: relative;
    z-index: 10;
    width: 65%;
    font-size:10px;
    hr {
      border: 0;
      height: 1px;
      background: #333;
      background-image: linear-gradient(to right, #ccc, #333, #ccc);

    }
  }
  .line-city0 {
    top:250px;
    left: -220px;
    position: relative;
    hr {
      transform:rotate(-7deg);
      -ms-transform:rotate(-7deg);
      -moz-transform:rotate(-7deg);
      -webkit-transform:rotate(-7deg);
      -o-transform:rotate(-7deg);
    }
    .p1 {
      position: absolute;
      right: 60px;
      top:-10px;
    }
    .p2 {
      position: absolute;
      right: 60px;
      top:10px;
    }
  }
  .line-city1 {
    top:30px;
    left: -220px;
    position: relative;

  hr {
    transform:rotate(20deg);
    -ms-transform:rotate(20deg);
    -moz-transform:rotate(20deg);
    -webkit-transform:rotate(20deg);
    -o-transform:rotate(20deg);
  }
  .p1 {
    position: absolute;
    right: 60px;
    top:-35px;
  }
  .p2 {
    position: absolute;
    right: 60px;
    top:-20px;
  }
  }
  .sum-city span {
    font-weight: bold;
  }
  .page-all {
    float: right;
    margin: 10px 0;
  }
  .alarm-list {
    overflow:hidden;
    height:260px;
    padding-left:10px;
    ul{
      padding-left: 0;
      position: relative;
      transition:top 2s;
    }
  }
  .color-name1 {
    color: red;
  }
  .color-name2 {
    color: orange;
  }
  .color-name3 {
    color: blue;
  }
  .shop_custom_classify {
    width: 100%;
  }
  .user-info-list{
    margin:10px 0;
  }
  .grid-content {
    width: 30%;
  }
  .map-look {
    width: 38%;
    margin-right: 150px;
  }
  .alarm-li {
    list-style-type:none;
    display: block;
    line-height:35px;
    a {
      color: #000000;
      text-decoration:none;
      display: block;
      span {
        position: relative;
        top: 2px;
      }
    }


  }
  .box-card {
    margin-top: 15px;
    margin-right: 20px;
    .header-info {
      display: flex;
      justify-content: space-between;
    }
  }
  .main-all {
    width:100%;
    display: flex;
    justify-content: center;
  }
  .main-map {
    position: relative;
    left: -60px;
  }
  .main-alarm {
    width: 38%;
  }
</style>


