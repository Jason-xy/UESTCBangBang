// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  //上下文对象
  const wxContext = cloud.getWXContext();
  //数据库对象
  const db = cloud.database();
  //user集合对象
  const user = db.collection('user');

  const _ = db.command;
  
  if(event.op == 'add') { //添加记录
    try {
        return await user.add({
        // data 字段表示需新增的 JSON 数据
        data: {
          openid: wxContext.OPENID,
          activity: 0 ,//初次添加用户时默认为0
          image: 	event.image, //图片的fileid
          phone: event.phone,
          tags:event.tags, //标签数组
        }
      })
    } catch (error) {
      console.error(error);
    }
  } else if (event.op ==  'queryAll') { //查询所有用户
    try {
      return await user.get();
    } catch (error) {
      console.error(error);
    }
  } else if(event.op == 'queryCurrent') { //查询当前用户
    try {
      return await user.where({
        openid: wxContext.OPENID
      }).get();
    } catch (error) {
      console.error(error);
    }
  } else if (event.op == 'remove') { //删除当前用户
    try {
      return await user.where({
        openid: wxContext.OPENID
      }).remove();
    } catch (error) {
      console.error(error)
    }
  } else if (event.op == 'update') { //更新用户信息
    try {
      return await user.where({
        openid: wxContext.OPENID
      })
      .update({
        data: {
          image: 	event.image, //更新图片的fileid
          phone: event.phone, //更新用户手机号
          tags:event.tags, //更新标签数组
        },
      })
    } catch(e) {
      console.error(e)
    }
  } else if (event.op == 'activityUp') {
    try {
      return await user.where({
        openid: wxContext.OPENID
      })
      .update({
        data: {
          activity: event.activity + 1
        },
      })
    } catch(e) {
      console.error(e)
    }
  } else if(event.op == 'addTag') {
    try {
      return await user.where({
        openid: wxContext.OPENID,
      })
      .update({
        data: {
          tags: _.push([event.tag])
        }
      })
    } catch (e) {
      console.error(e);
    }
  } else if(event.op == 'removeTag') {
    try {
      return await user.where({
        openid: wxContext.OPENID,
      })
      .update({
        data: {
          tags: _.pullAll([event.tag])
        }
      })
    } catch (e) {
      console.error(e);
    }
  }

}