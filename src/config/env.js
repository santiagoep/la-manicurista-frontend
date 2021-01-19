class Env {
  static init() {}

  static getInstance() {
    if (this.load) return this;
    this.init();
    return this;
  }
}

export default Env;
