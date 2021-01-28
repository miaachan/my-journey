class TokenBucket {
    maxBucketSize: number;
    refillRate: number; // per second
    currentBucketSize: number;
    lastRefillTimestamp: number; // in ms

    constructor(maxBucketSize: number, refillRate: number) {
        this.maxBucketSize = maxBucketSize;
        this.refillRate = refillRate;

        this.currentBucketSize = maxBucketSize;
        this.lastRefillTimestamp = new Date().getTime();
    }

    allowRequest(token: number) {
        this.refill();

        if (this.currentBucketSize >= token) {
            this.currentBucketSize -= token;
            return true;
        }
        return false;
    }

    refill() {
        let now = new Date().getTime();
        let tokensToAdd =
            ((now - this.lastRefillTimestamp) * this.refillRate) / 1e3;
        this.currentBucketSize = Math.min(
            this.currentBucketSize + tokensToAdd,
            this.maxBucketSize
        );
        this.lastRefillTimestamp = now;
    }
}
