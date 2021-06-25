// 只有用default导出才能删除大括号
import { request123 } from "./request";
export function getHomeBanner() {
  return request123({
    url: "/home/multidata"
  });
}
