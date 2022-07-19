let id = 0;

class Id {
  //这个相较于createId可以重新声明一个新的对象调用他的方法
  value: number;
  constructor() {
    id += 1;
    this.value = id;
  }
}

export default Id;
