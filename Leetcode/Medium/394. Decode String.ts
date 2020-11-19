function decodeString(s: string): string {
    let stack: string[] = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "]") {
            let subStr = "";
            while (stack[stack.length - 1] !== "[") {
                subStr = stack.pop() + subStr;
            }
            stack.pop(); //remove '['
            let repeatTimes = parseInt(stack.pop()); //number of times
            console.log(repeatTimes)
            stack.push(subStr.repeat(repeatTimes));
            console.log(stack, subStr)
            continue;
        }

        stack.push(s[i]);
    }

    console.log(stack.join(''));
    return stack.join('');
}

// decodeString("3[a]2[bc]");
// decodeString("3[a2[c]]");
decodeString("100[leetcode]");
