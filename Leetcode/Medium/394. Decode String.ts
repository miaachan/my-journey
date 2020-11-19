function decodeString(s: string): string {
    let stack: string[] = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "]") {
            let subStr = "";
            while (stack[stack.length - 1] !== "[") {
                subStr = stack.pop() + subStr;
            }
            stack.pop(); //remove '['
            let repeatTimes = stack.pop() ?? ""; //number of times
            while (
                stack[stack.length - 1]?.charCodeAt(0) >= 48 &&
                stack[stack.length - 1]?.charCodeAt(0) <= 57
            ) {
                repeatTimes = stack?.pop() + repeatTimes;
            }
            stack.push(subStr.repeat(parseInt(repeatTimes)));
            // console.log(stack)
            continue;
        }

        stack.push(s[i]);
    }

    // console.log(stack.join(''));
    return stack.join("");
}

// decodeString("3[a]2[bc]");
// decodeString("3[a2[c]]");
decodeString("100[leetcode]");