webpackJsonp([0],{"8C4o":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("xAzT"),s=a.n(l),i={name:"basetable",data:function(){return{totalNum:"",url:"./static/vuetable.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""},idx:-1}},created:function(){console.log(s.a),this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,l=0;l<e.del_list.length;l++)if(t.name===e.del_list[l].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){this.tableData=s.a.list,this.totalNum=this.tableData.length},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")]),e._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选省份"},model:{value:e.select_cate,callback:function(t){e.select_cate=t},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"广东省",value:"广东省"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"湖南省",value:"湖南省"}})],1),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",formatter:e.formatter}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:e.totalNum},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=a("vSla")(i,n,!1,function(e){a("Wci7")},"data-v-906fae26",null);t.default=o.exports},Wci7:function(e,t){},xAzT:function(e,t){e.exports={list:[{date:"1997-11-11",name:"林丽",address:"吉林省 辽源市 龙山区"},{date:"1987-09-24",name:"文敏",address:"江西省 萍乡市 芦溪县"},{date:"1996-08-08",name:"杨秀兰",address:"黑龙江省 黑河市 五大连池市"},{date:"1978-06-18",name:"魏强",address:"广东省 韶关市 始兴县"},{date:"1977-07-09",name:"石秀兰",address:"江苏省 宿迁市 宿豫区"},{date:"1994-09-20",name:"朱洋",address:"海外 海外 -"},{date:"1980-01-22",name:"傅敏",address:"海外 海外 -"},{date:"1985-10-10",name:"毛明",address:"内蒙古自治区 包头市 九原区"},{date:"1975-09-08",name:"何静",address:"西藏自治区 阿里地区 普兰县"},{date:"1970-06-07",name:"郭秀英",address:"四川省 巴中市 恩阳区"}]}}});