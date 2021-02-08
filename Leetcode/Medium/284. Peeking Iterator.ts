/*
 * @lc app=leetcode id=284 lang=typescript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    iterator: Iterator;
    _next: number | null;
    constructor(iterator: Iterator) {
        this.iterator = iterator;
    }

    peek(): number {
        if (this._next) {
            return this._next;
        } else {
            this._next = this.iterator.next();
            return this._next;
        }
    }

    next(): number {
        if (this._next) {
            let res = this._next;
            this._next = null;
            return res;
        } else {
            return this.iterator.next();
        }
    }

    hasNext(): boolean {
        return (this._next) ? true : this.iterator.hasNext();
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
