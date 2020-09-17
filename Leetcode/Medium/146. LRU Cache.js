/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {

    // all operation in object / hashlist is O(1), how to maintain a list (storing the used order) in the same time?
    // array push係O()
    this.capacity = capacity;
    this.cacheMap = new Map();
    this.lruOrder = new Array();
    

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

    // perform order update
    this.lruOrder.push(key);
    return this.cacheMap.has(key) ? this.cacheMap.get(key) : -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (Map.size >= this.capacity) {
        
    } else 

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2 /* capacity */);


cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4