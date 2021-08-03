const isAnagram = (str1, str2) => {
    const anagramCheck = (str) =>
        str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();

    return anagramCheck(str1) === anagramCheck(str2);
};

module.exports = isAnagram;
