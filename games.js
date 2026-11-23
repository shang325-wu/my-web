// ============================================
//  我玩游戏 - 数据文件
//  想添加新游戏时，照着下面 games 里已有的样子
//  复制一段、改内容即可，不用碰 index.html
//
//  字段说明：
//  name     游戏名（必填）
//  platform 平台，如 Switch / Steam / PS5 / 手机
//  status   状态，只能填这4个之一：
//           "playing" 在玩  "done" 已通关
//           "wish" 想玩    "dropped" 弃坑
//  rating   评分 1~5 星（整数，可填 0 表示不打分）
//  comment  一句话感想（可不填）
//  cover    封面图片路径，如 "covers/hsr.jpg"
//           把图片放进 covers 文件夹里再填文件名
//           留空 "" 会自动生成一个霓虹封面
//  page     该游戏的专页文件名，如 "hsr.html"
//           没有专页的游戏留空 ""
// ============================================

const games = [
  {
    name: "崩坏：星穹铁道",
    platform: "手机 / PC",
    status: "playing",
    rating: 5,
    comment: "每天清体力，剧情党狂喜。",
    cover: "",
    page: "hsr.html",
  },
  {
    name: "明日方舟",
    platform: "手机",
    status: "playing",
    rating: 5,
    comment: "老博士了，基建永不毕业。",
    cover: "",
    page: "arknights.html",
  },
  {
    name: "明日方舟：终末地",
    platform: "PC / 手机",
    status: "playing",
    rating: 4,
    comment: "流水线建起来了，敌人还没打明白。",
    cover: "",
    page: "endfield.html",
  },
];