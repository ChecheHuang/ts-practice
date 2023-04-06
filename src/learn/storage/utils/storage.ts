//expire過期時間key permanent永久不過期
import { StorageCls, Key, Expire, Data,Result } from "../type/storage";
import { Dictionaries } from "../enum/storage";
export class Storage implements StorageCls {
  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value,
      [Dictionaries.expire]: expire,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  get<T>(key: Key): Result<T|null> {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      if (
        typeof data[Dictionaries.expire] === "number" &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key);
        return {
          message: `您的${key}已過期`,
          value: null,
        };
      } else {
        return {
          message: "成功",
          value: data.value,
        };
      }
    } else {
      return {
        message: "值無效",
        value: null,
      };
    }
  }
  remove(key: Key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}