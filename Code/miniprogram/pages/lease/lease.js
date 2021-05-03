Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "球拍",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '羽毛球拍',
            image: "http://m.qpic.cn/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcQDqwGSE96RDSpZqCMXf5X0*us86eTkm7egYsOP5eFid9VsSFqSQf9k7UIeRhzOi8E17nKZiv6nHJ0aCauYYWK0!/b&bo=NwG7AQAAAAADF74!&rf=viewer_4",
            initiator: '赵明',
            money: '租金：5元/天',
            time: '租用时长：最多三天',
            trip:'是否完好：是',
            number:'数量：一个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 2,
            name: '乒乓球拍',
            image: "http://m.qpic.cn/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcQDqwGSE96RDSpZqCMXf5X1KJrs6X6GO1tSmoHtBVq*wDBgdpl2BDyLr8SXjg89zNts.iKTqW*OA3TSDVb*R*4E!/b&bo=QgEDAgAAAAADF3A!&rf=viewer_4",
            initiator: '封媛',
            money: '租金：3元/天',
            time: '租用时长：最多一周',
            trip:'是否完好：是',
            number:'数量：一副',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 3,
            name: '网球拍',
            image: "http://m.qpic.cn/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcQDqwGSE96RDSpZqCMXf5X1Nb7BA9WA2pCGgrl31*EITV1m0q4NWY8xJddJpEidT01cbWtlNA.193BFpj6y89*Q!/b&bo=YQEbAgAAAAADF0s!&rf=viewer_4",
            initiator: '周柯',
            money: '租金：5元/天',
            time: '租用时长：最多五天',
            trip:'是否完好：是',
            number:'数量：一个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 4,
            name: '各种球拍',
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F63%2F44%2F5bda4190f3d34_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622117300&t=dd3bbf8af70ef6e7de83affccf13bcad"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "球",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '篮球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcQbBcFUX21J3Ja9*Tf8pJOV9gIPrPziLmG1qVY7swf7Tz9.9q5*OSX7fs.6cm.qSaXo2E7aXd9dbiXhbzsTSecM!/r",
            initiator: '周柯',
            money: '租金：3元/天',
            time: '租用时长：最多三天',
            trip:'是否完好：是',
            number:'数量：一个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 2,
            name: '足球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcQbBcFUX21J3Ja9*Tf8pJOWx5LKdZz8R48MrNXphaOrLFNeyf*1Yw9owRn*Q0vAt9sU.UzCIr.zLnq*8hFxwhp8!/r",
            initiator: '孙月',
            money: '租金：5元/天',
            time: '租用时长：最多一周',
            trip:'是否完好：是',
            number:'数量：一个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 3,
            name: '乒乓球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcQbBcFUX21J3Ja9*Tf8pJOVfP2gioZfs.PdYEpbfX82S0sQndDiUBOqZA*llr3aQxAUZ2EA4joH9Y5YtI5Kc7sA!/r",
            initiator: '苏素',
            money: '租金：2元/天',
            time: '租用时长：最多五天',
            trip:'是否完好：是',
            number:'数量：三个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 4,
            name: '网球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcWHdrYxzVMp6oRAztf2t9sbOgM39CNwQr5T7YqG5WQXM90mPDo2G5lLQ.f4w748sQdzQj1qY.Ev2qiWcQy3hQd0!/r",
            initiator: '梅岚',
            money: '租金：2元/天',
            time: '租用时长：最多三天',
            trip:'是否完好：是',
            number:'数量：两个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 5,
            name: '排球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcWHdrYxzVMp6oRAztf2t9sYFpiPcmKCRxjs6yVA.*eP*k54dlNtkilMhE1o1xido0m7wg9t2WuAebxnpipTCNIo!/r",
            initiator: '赵鸣睿',
            money: '租金：5元/天',
            time: '租用时长：最多五天',
            trip:'是否完好：是',
            number:'数量：一个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 6,
            name: '羽毛球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcWHdrYxzVMp6oRAztf2t9sZUQY4j8IgfzmpBJ*ltW.gDHdon0yV6CZrWzNWkK4Wd8z.tkc9tCh5sDjcs8wtwgAw!/r",
            initiator: '詹璟',
            money: '租金：2元/天',
            time: '租用时长：最多一周',
            trip:'是否完好：是',
            number:'数量：三个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 7,
            name: '羽毛球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcWHdrYxzVMp6oRAztf2t9sbtXCdf4ICLQRygmK7QdyUPyldsyFIWx3R3E9M86i*dDCOEfV2wmt7SyOcIO0h3Eh0!/r",
            initiator: '冯琦',
            money: '租金：2元/天',
            time: '租用时长：最多五天',
            trip:'是否完好：是',
            number:'数量：两个',
            remarks:'无',
            buName:'租'
          },
          {
            child_id: 8,
            name: '羽毛球',
            image: "http://r.photo.store.qq.com/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mca7nq9oTSBhayGpcoAt9vkTWUvVNPF.rIsNic2Px8XfaA7f.*fghn66JkXMTVG3KRBDjKMVcVGEtJG3SvY3rnK8!/r",
            initiator: '齐泽宇',
            money: '租金：2元/天',
            time: '租用时长：最多三天',
            trip:'是否完好：是',
            number:'数量：五个',
            remarks:'无',
            buName:'租'
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "书",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '思修',
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.tbw-xie.com%2FtuxieJDEwLmFsaWNkbi5jb20vYmFvL3VwbG9hZGVkL2k0LzI2NjM0NTI0NDEvTzFDTjAxMVR1MUZrTFRWT2lRdnV2XyEhMjY2MzQ1MjQ0MSQ5.jpg&refer=http%3A%2F%2Fwww.tbw-xie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622117857&t=ea40148e25b21cbde9710c72e9c4d5b8"
          },
          {
            child_id: 2,
            name: '计算机网络第七版',
            image: "https://img0.baidu.com/it/u=2996252816,3887493920&fm=15&fmt=auto&gp=0.jpg"
          },
          {
            child_id: 3,
            name: '操作系统第四版',
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.tbw-xie.com%2FtuxieJDEwLmFsaWNkbi5jb20vYmFvL3VwbG9hZGVkL2k0LzEwNDYyNzYwNDAvTzFDTjAxclBsUlhxMXVVTWpLRkpOTmdfISEkMw.jpg&refer=http%3A%2F%2Fwww.tbw-xie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622117967&t=047c161e3e79bf796ed87d4b06a3141a"
          },
          {
            child_id: 4,
            name: '数据库系统第三版',
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmall3.qiyipic.com%2Fmall%2F20171026%2F0d%2Fb1%2Fmall_59f1d0bf74d5792e74a60db1_1x1.jpg&refer=http%3A%2F%2Fmall3.qiyipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622118017&t=59268798a7652953796d2df93aba3d2c"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "拼车",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '拼车出租车',
            initiator: '郭萍',
            money:'金额：预计人均20元左右',
            time: '时间：5.8号中午12点',
            trip:'行程：电子科大沙河-电子科大清水河',
            number:'人数：1人',
            image:"http://m.qpic.cn/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcSTH5MGD*BAzQVxRXcnQR7PoO9SNFnUbjVVFjuxZ0EOiOFObC0wn*Zz4vUlfkR72cN88YZAp*McqVt*mwnCVCXk!/b&bo=*AIRBQAAAAADR4g!&rf=viewer_4",
            remarks:"无",
            buName:'拼'
          },
          {
            child_id: 2,
            name: '拼车出租',
            initiator: '唐泽',
            money:'金额：预计人均25元左右',
            time: '时间：5.12号下午3点',
            trip:'行程：电子科大沙河-成都高铁东站',
            number:'人数：1人',
            image:"http://m.qpic.cn/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcSTH5MGD*BAzQVxRXcnQR7PoO9SNFnUbjVVFjuxZ0EOiOFObC0wn*Zz4vUlfkR72cN88YZAp*McqVt*mwnCVCXk!/b&bo=*AIRBQAAAAADR4g!&rf=viewer_4",
            remarks:"无",
            buName:'拼'
          },
          {
            child_id: 3,
            name: '拼车网约车',
            initiator: '姚孜莲',
            money:'金额：预计人均20元左右',
            time: '时间：5.13号早上10点',
            trip:'行程：电子科大沙河-电子科大清水河',
            number:'人数：1人',
            image:"http://m.qpic.cn/psc?/V53LW8u82N2ReE3iSV630nPeZ21RLSYt/45NBuzDIW489QBoVep5mcfrGOD2GgmSC9JErCYUdBo8hV0utBSDNzx8edXqx.1Vel4sbMLVbf7.aJ9NJgsVHhDjJyimwuyiqWhhHFStu*.M!/b&bo=AgMGBQAAAAADNxA!&rf=viewer_4",
            remarks:"无",
            buName:'拼'
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  
