function leastInterval(tasks: string[], n: number): number {
    if (n === 0 || tasks.length === 0) return tasks.length;

    let totalTask = tasks.length;
    let tasksCount: { [key: string]: number } = {};
    tasks.forEach((v) => {
        tasksCount[v] = tasksCount[v] ? ++tasksCount[v] : 1;
    });

    let executeHistory: string[] = [];
    let totalTime = 0;

    while (totalTask > 0) {
        let nextTask = getHighestIdle();
        if (nextTask !== "IDLE") {
            executeHistory.push(nextTask);
            tasksCount[nextTask] -= 1;
            totalTask -= 1;
        } else executeHistory.push("IDLE");
        ++totalTime;
    }
    return totalTime;

    function getHighestIdle(): string {
        let max = { task: "IDLE", count: 0 };
        Object.keys(tasksCount).forEach((v) => {
            if (
                tasksCount[v] > max.count &&
                !executeHistory.slice(-n).includes(v)
            ) {
                max.task = v;
                max.count = tasksCount[v];
            }
        });
        return max.task;
    }
}

leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2);
