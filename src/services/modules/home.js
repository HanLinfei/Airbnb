import requestInstance from "../request";

// 高性价比房源
export function getHomeGoodPriceData() {
  return requestInstance.get({ url: "/home/goodprice" });
}

// 高评分房源
export function getHomeGoodScoreData() {
  return requestInstance.get({ url: "/home/highscore" });
}

// 折扣房源
export function getHomeDiscountData() {
  return requestInstance.get({ url: "/home/discount" });
}

// 热门景点
export function getHomeRecomendData() {
  return requestInstance.get({ url: "/home/hotrecommenddest" });
}

// 猜你想去
export function getHomeLongforData() {
  return requestInstance.get({ url: "/home/longfor" });
}
