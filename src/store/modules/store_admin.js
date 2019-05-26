import {  apiAdminAdd, apiAdminDelete, apiAdminGet,
  apiAdminList, apiAdminUpdate} from '../../api/api_admin'
import {alertSuccessMsg,alertErrorMsg} from '@/utils/message'

const state = {
  adminList:[],
  pageInfo:{
    total:100,
    pageNo:1,
    pageSize:5,
    pageSizes:[5, 10, 25, 50],
  }
};

const getters = {
  adminList:state=>state.adminList,
  pageInfo:state=>state.pageInfo,
};

const mutations = {
  setPageInfo(state,pageInfo){
    state.pageInfo = Object.assign(state.pageInfo,pageInfo);
  },
  setAdminList(state,data){
    state.adminList = data;
  }
};

const actions = {
  changePage({dispatch,commit,state},pageInfo){
    commit('setPageInfo',pageInfo);
    dispatch('list',{
      page : state.pageInfo.pageNo,
      pageSize : state.pageInfo.pageSize,
    });
  },
  list({commit,state},data){
    console.log(data);
    apiAdminList(data).then(res=>{
      const pageResult = res.data;
      commit('setAdminList',pageResult.list);
      commit('setPageInfo',{
        total : pageResult.total
      });
    },err=>{
      console.log("err",err);
    });
  },

  deleteAdmin({dispatch,commit},id){
    apiAdminDelete(id).then(res=>{
      console.log('res',res);
      alertSuccessMsg('删除成功');
      dispatch('changePage');
    },err=>{
      console.log("err",err);
      alertErrorMsg('删除失败');
    });
  }
};



export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
