// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const activity = db.collection('activity');
  const _ = db.command;

  if(event.op == 'add') { //添加新活动
    try {
      return await activity
      .add({
        data: {
          name: event.name,
          address: event.address,
          contact: event.contact, //活动联系方式
          masterid: wxContext.OPENID, //活动发布者的openid，只有发布者才会添加活动数据
          total: event.total,
          type: event.type,//活动类型
          startTime:  event.startTime,
          remarks: event.remarks, //活动备注
          members: [wxContext.OPENID], //初始只有活动发布者的openid
          finish: false,
        }
      }) 
    } catch (e) {
      console.error(e);
    }
  } else if (event.op == 'addMember') {  //添加活动参与人员
    try {
      return await activity.where({
        _id: event._id
      })
      .update({
        data: {
          members: _.push([event.newMember])
        },
      })
    } catch (e) {
      console.error(e);
    }
  } else if( event.op == 'finishActivity') {  //完成活动
    try {
      return await activity.where({
        _id: event._id
      })
      .update({
        data: {
          finish: true
        },
      })
    } catch (e) {
      console.error(e);
    }
  } else if(event.op == 'removeActivity') {  //删除活动
    try {
      return await activity.where({
        _id: event._id
      }).remove();
    } catch (error) {
      console.error(error)
    }
  } else if(event.op == 'update') { //更新活动信息
    try {
      return await activity.where({
        _id: event._id
      })
      .update({
        data: {
          name: event.name,
          address: event.address,
          contact: event.contact, //活动联系方式
          total: event.total,
          type: event.type,//活动类型
          startTime:  event.startTime,
          remarks: event.remarks, //活动备注
        },
      })
    } catch (e) {
      console.error(e);
    }
  } else if(event.op == 'queryAll') { //查询所有活动信息
    try {
      return await activity.get();
    } catch(e) {
      console.error(e);
    }
  } else if(event.op == 'queryByMasterid') { //根据masterid查询
    try{
    return await activity.where({
      masterid: event.masterid
    }).get();
  } catch (error) {
    console.error(error);
  }
  } else if (event.op == 'queryBy_id') {  //查询当前活动（根据_id）
    try{
      return await activity.where({
        _id: event._id
      }).get();
    } catch (error) {
      console.error(error);
    }
  } else if(event.op == 'queryUnfinish') {  //查询未结束活动
    try{
      return await activity.where({
        finish: false
      }).get();
    } catch (error) {
      console.error(error);
    }
  } else if(event.op = 'queryByType') {  //查询某一类型活动
    try{
      return await activity.where({
        type: event.type
      }).get();
    } catch (error) {
      console.error(error);
    }
  } 
}