// let id = 0;
let id = parseInt(window.localStorage.getItem("idMax") || "0");

class Id {
  //这个相较于createId可以重新声明一个新的对象调用他的方法
  value: number;
  constructor() {
    id += 1;
    window.localStorage.setItem("idMax", id.toString()); //每次刷新页面id都会变成零所以加这个
    this.value = id;
  }
}

export default Id;
