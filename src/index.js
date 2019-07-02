/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    var len = preferences.length;
    var isUsed = new Array(len).fill(false);
    for (var i = 0; i < len; i++) {
        if (!isUsed[i]) {
            if (preferences[i] <= len && preferences[preferences[i] - 1] <= len && i + 1 === preferences[preferences[preferences[i] - 1] - 1] && preferences[i] !== (i + 1)) {
                isUsed[i] = true;
                isUsed[preferences[i] - 1] = true;
                isUsed[preferences[preferences[i] - 1] - 1] = true;
                count++;
            }
        }
    }
    return count;
};