// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const item = db.collection('item');
  const _ = db.command;

  if(event.op == 'addItem') { //添加新物品
    try {
      return await item
      .add({
        data: {
          name: event.name, //物品名称
          address: event.address, //物品交易地点
          contact: event.contact, //出租者的联系方式
          masterid: wxContext.OPENID, //出租者的openid，只有出租者者才会添加物品数据
          type: event.type,//物品类型
          price: event.price,
          image: event.image,
          startTime:  event.startTime, //物品开始出租时间
          endTime: event.endTime, //物品结束出租时间
          remarks: event.remarks, //物品备注
          rented: false,
        }
      }) 
    } catch (e) {
      console.error(e);
    }
  } else if(event.op == 'update') { //更新物品信息
    try {
      return await item.where({
        _id: event._id
      })
      .update({
        data: {
          name: event.name, //物品名称
          address: event.address, //物品交易地点
          contact: event.contact, //出租者的联系方式
          type: event.type,//物品类型
          price: event.price,
          image: event.image,
          startTime:  event.startTime, //物品开始出租时间
          endTime: event.endTime, //物品结束出租时间
          remarks: event.remarks, //物品备注
        },
      })
    } catch (e) {
      console.error(e);
    }
  }  else if( event.op == 'rentItem') {  //标记物品已出租
    try {
      return await item.where({
        _id: event._id
      })
      .update({
        data: {
          rented: true
        },
      })
    } catch (e) {
      console.error(e);
    }
  } else if(event.op == 'removeItem') {  //删除指定物品
    try {
      return await item.where({
        _id: event._id
      }).remove();
    } catch (error) {
      console.error(error)
    }
  } else if(event.op == 'queryAll') { //获取所有物品信息
    try{
      return await item.get();
    } catch(e) {
      console.error(e);
    }
  }else if(event.op == 'queryByMasterid') { //根据masterid查询，获取当前用户所有物品信息
    try{
    return await item.where({
      masterid: event.masterid
    }).get();
  } catch (error) {
    console.error(error);
  }
  } else if (event.op == 'queryBy_id') {  //查询当前物品（根据_id）
    try{
      return await item.where({
        _id: event._id
      }).get();
    } catch (error) {
      console.error(error);
    }
  } else if(event.op == 'queryUnRented') {  //查询未出租物品
    try{
      return await item.where({
        rented: false
      }).get();
    } catch (error) {
      console.error(error);
    }
  } else if(event.op = 'queryByType') {  //查询某一类型物品
    try{
      return await item.where({
        type: event.type
      }).get();
    } catch (error) {
      console.error(error);
    }
  } 
}