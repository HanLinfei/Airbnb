import requestInstance from "../request";

export function getHomeGoodPriceData() {
  return requestInstance.get({ url: "/home/goodprice" });
}
