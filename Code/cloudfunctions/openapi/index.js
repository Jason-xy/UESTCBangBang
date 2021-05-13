// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  switch (event.op) {
    case 'requestMessageToMaster': {
      return requestMessageToMaster(event)
    }
    case 'sendMessageToMaster': {
      return sendMessageToMaster(event)
    }
    case 'requestMessageToMember': {
      return requestMessageToMember(event)
    }
    case 'sendMessageToMember': {
      return sendMessageToMember(event)
    }
    default: {
      return
    }
  }
}

async function requestMessageToMaster(event) {
  // 此处为模板 ID，开发者需要到小程序管理后台 - 订阅消息 - 公共模板库中添加模板，
  // 然后在我的模板中找到对应模板的 ID，填入此处
  return '1IpxC0dLN4TLuN1a1AuVBO93kDUuM2bGVbOlUK5TE04' // 如 'N_J6F05_bjhqd6zh2h1LHJ9TAv9IpkCiAJEpSw0PrmQ'
}

async function requestMessageToMember(event) {
  // 此处为模板 ID，开发者需要到小程序管理后台 - 订阅消息 - 公共模板库中添加模板，
  // 然后在我的模板中找到对应模板的 ID，填入此处
  return '4XZRODGHuhipDXbBAPmh0-waEMFhD2wc6oH0OEvrFM4' // 如 'N_J6F05_bjhqd6zh2h1LHJ9TAv9IpkCiAJEpSw0PrmQ'
}

async function sendMessageToMaster(event) {
  const templateId = "1IpxC0dLN4TLuN1a1AuVBO93kDUuM2bGVbOlUK5TE04";
  const OPENID = event.openid;

  const sendResult = await cloud.openapi.subscribeMessage.send({
    touser: OPENID,
    templateId,
    miniprogram_state: 'developer',
    page: "pages/activities/activities",
    // 此处字段应修改为所申请模板所要求的字段
    data: {
      thing1: {
        value: event.name,
      },
      character_string3: {
        value: "test@test",
      },
      phone_number4: {
        value: event.phone,
      },
      character_string2: {
        value: "test"
      }
    }
  })

  return sendResult
}

async function sendMessageToMember(event) {
  const OPENID = event.openid;

  const templateId = "4XZRODGHuhipDXbBAPmh0-waEMFhD2wc6oH0OEvrFM4";

  const sendResult = await cloud.openapi.subscribeMessage.send({
    touser: OPENID,
    templateId,
    miniprogram_state: 'developer',
    page: "pages/activities/activities",
    // 此处字段应修改为所申请模板所要求的字段
    data: {
      thing10: {
        value: event.activityName,
      },
      thing13: {
        value: "成功",
      },
      time8: {
        value: event.time,
      },
      thing5: {
        value: event.remark
      }
    }
  })

  return sendResult
}


