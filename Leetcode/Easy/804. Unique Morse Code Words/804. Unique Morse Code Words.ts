function uniqueMorseRepresentations(words: string[]): number {
    const TABLE = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
    ];
    let set = new Set();
    for (let word of words) {
        let parsedCode = "";
        for (let charIndex = 0; charIndex < word.length; ++charIndex) {
            parsedCode += TABLE[word.charCodeAt(charIndex) - "a".charCodeAt(0)];
        }
        set.add(parsedCode);
    }
    return set.size;
}

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
