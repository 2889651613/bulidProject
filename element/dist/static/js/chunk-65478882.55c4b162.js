(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65478882"],{"0ec6":function(o,e,t){"use strict";t("5a93")},"465e":function(o,e,t){"use strict";t.r(e);var i=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("chart",{attrs:{options:o.options1}}),t("div",[t("chart",{attrs:{options:o.options2}}),t("el-button",{on:{click:o.change}},[o._v("change")])],1)],1)},a=[],r=t("99fc"),l={name:"testChart",data:function(){return{options1:window.test.TestChart.test1,options2:window.test.TestChart.test2}},components:{chart:r["a"]},methods:{change:function(){window.test.TestChart.test2.series.data=[{name:"E",value:1212},{name:"F",value:2323},{name:"G",value:1919}],this.options1=window.test.TestChart.test2}}},s=l,n=t("2877"),c=Object(n["a"])(s,i,a,!1,null,"f5f5a63e",null);e["default"]=c.exports},"5a93":function(o,e,t){},"99fc":function(o,e,t){"use strict";var i=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{attrs:{id:o.id}})},a=[],r={version:1,themeName:"customed",theme:{seriesCnt:3,backgroundColor:"rgba(0, 0, 0, 0)",titleColor:"#333",subtitleColor:"#aaa",textColorShow:!1,textColor:"#333",markTextColor:"#eee",color:["#409EFF","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#bf444c","#d88273","#f6efa6"],legendTextColor:"#333",kColor:"#c23531",kColor0:"#314656",kBorderColor:"#c23531",kBorderColor0:"#314656",kBorderWidth:1,lineWidth:"01",symbolSize:"3",symbol:"emptyRoundRect",symbolBorderWidth:"2",lineSmooth:!1,graphLineWidth:1,graphLineColor:"#aaa",mapLabelColor:"#000",mapLabelColorE:"rgb(100,0,0)",mapBorderColor:"#444",mapBorderColorE:"#444",mapBorderWidth:.5,mapBorderWidthE:1,mapAreaColor:"#eee",mapAreaColorE:"rgba(255,215,0,0.8)",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!1,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!0,toolboxColor:"#999",toolboxEmphasisColor:"#666",tooltipAxisColor:"#ccc",tooltipAxisWidth:1,timelineLineColor:"#293c55",timelineLineWidth:1,timelineItemColor:"#293c55",timelineItemColorE:"#a9334c",timelineCheckColor:"#e43c59",timelineCheckBorderColor:"rgba(194,53,49, 0.5)",timelineItemBorderWidth:1,timelineControlColor:"#293c55",timelineControlBorderColor:"#293c55",timelineControlBorderWidth:.5,timelineLabelColor:"#293c55",datazoomBackgroundColor:"rgba(47,69,84,0)",datazoomDataColor:"rgba(47,69,84,0.3)",datazoomFillColor:"rgba(167,183,204,0.4)",datazoomHandleColor:"#a7b7cc",datazoomHandleWidth:"100",datazoomLabelColor:"#333"}},l={theme:r},s=t("e925"),n={data:function(){return{id:Object(s["c"])(),chart:null,test:{width:"300px",height:"300px"}}},props:{options:{type:Object,required:!0},click:{type:Function,default:null},_override:{type:Object},series:{type:Array}},name:"chart",mounted:function(){this.setChart()},methods:{setChart:function(){var o=this;this.$chart.registerTheme(l.theme.themeName,l.theme.theme);var e=this.$chart.init(document.getElementById(this.id),l.theme.themeName,{width:this.$el.offsetWidth,height:250});this.chart=e,e.clear(),this.options&&e.setOption(this.options,!0),e.off("click"),e.on("click",(function(e){o.click&&o.click(e)}))},updateSeries:function(){this.chart.setOption({series:[{data:this.series}]})}},watch:{options:function(){this.setChart()},series:function(){this.updateSeries()}}},c=n,h=(t("0ec6"),t("2877")),C=Object(h["a"])(c,i,a,!1,null,"478a472f",null);e["a"]=C.exports}}]);