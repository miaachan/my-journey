/*
        6kyu - Multiples of 3 or 5
        https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
*/

export class Challenge {
    static solution(number) {
        let sum = 0;
        for (let i = 3; i < number; i++) {
            sum += (i % 3 == 0 || i % 5 == 0) ? i : 0;
        }
        return sum;
    }
}

/* export class Challenge {
    static solution(number) {
        return this.multiples3(number) + this.multiples5(number);
    }

    static multiples3(number) {
        let sum = 0;
        for (let i = 3; i < number; i += 3) {
            if (i % 5 != 0) sum += i;
        }
        return sum;
    }

    static multiples5(number) {
        let sum = 0;
        for (let i = 5; i < number; i += 5) sum += i;
        return sum;
    }
} */

console.log(Challenge.solution(20));