/* 
    Get the distance between all points and store in a Set.
    There are only two number left (Diagonal & Sides length) if it is a valid square.
*/
function validSquare(
    p1: number[],
    p2: number[],
    p3: number[],
    p4: number[]
): boolean {
    let distances = new Set([
        getD(p1, p2),
        getD(p1, p3),
        getD(p1, p4),
        getD(p2, p3),
        getD(p2, p4),
        getD(p3, p4),
    ]);

    return !distances.has(0) && distances.size === 2;

    function getD(p1: number[], p2: number[]): number {
        return (p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2;
    }
}
