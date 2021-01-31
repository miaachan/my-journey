function find_ele_in_the_middle(stack: any[]) {
    let depth = 0;
    return helper(0);

    function helper(cur_depth) {
        if (stack.length === 0) {
            console.log("reached btm", cur_depth);
            depth = cur_depth;
            return 0;
        }

        let pop = stack.pop();
        let res = helper(cur_depth + 1);
        stack.push(pop);
        let middle = Math.floor(depth / 2);
        if (cur_depth === middle) {
            return pop;
        }
        return res;
    }
}

find_ele_in_the_middle([-1, 99, 2]); // return 99
