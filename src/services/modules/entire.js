import requestInstance from "../request";

export function getEntireRoomList(offset = 0, size = 20) {
  return requestInstance.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
