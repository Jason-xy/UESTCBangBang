# UESTCBangBang

成电帮帮微信小程序

## 数据库设计

1. user表


|property|type|comment|
|-|-|-|
|_id | string|自动生成|
|openid| string |通过云函数利用微信接口获取|
|phone|string|用户输入，手机号|
|image| string |用户上传到云存储，数据库中存放Fileid|
|tags|arrary[string,string]|用户选择自身标签,使用数组存放,可以有多个|
|activity|number  |用户活跃度，后台管理，初始为0，用户每参加/发布一次活动/租借加一|
---
2. activity表

|property|type|comment|
|-|-|-|
|_id|string |自动生成|
|masterid| string |活动发起者的_id|
|name| string |发起者输入，活动名|
|type|string |发起者选择，活动类型|
|startTime| date |发起者输入，活动开始时间，格式 YYYY-MM-dd HH:mm:ss|
|address| string |发起者输入，活动地点|
|contact|string |发起者输入，联系方式，如手机号，微信号，群号等|
|total|number |发起者输入，活动总人数|
|remarks| string |发起者输入，活动的备注信息|
|members| array[string, string]|有成功申请者，系统添加申请者的_id到数组中|
---
3. item表

|property|type|comment|
|-|-|-|
|_id |string |自动生成|
|masterid |string|物品出租者的_id|
|name |string |出租者输入，物品名|
|type |string |出租者选择，物品类型|
|image| string |出租者上传物品描述图片到云存储，数据库中存放Fileid|
|startTime| date|出租者输入，物品的开始出租时间|
|endTime|date |出租者输入，物品的截止出租时间|
|address| string |出租者输入，物品的交易地点|
|price |string |出租者输入，物品的租金|
|remarks| string|出租者输入，物品的备注|

![](https://gitee.com/zhangjie0524/picgo/raw/master/20210503154242.png)# UESTCBangBang


