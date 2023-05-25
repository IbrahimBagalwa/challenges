class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  };
  setHash = (...value) => {
    const address = this._hash(value[0]);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push(value[0], value[1]);
    }
    this.data[address].push(value[0], value[1]);
    return this.data;
  };
  getHash = (key) => {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  };
}
const hashvalue = new HashTable(50);
const setH = hashvalue.setHash("grapes", 1000);
console.log(setH);
