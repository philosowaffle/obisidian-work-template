module.exports = function (tagContent) {
    return tagContent
            .replaceAll(" Project", "")
            .replaceAll(" ", "_")
            .replaceAll(".", "_")
            .replaceAll("-", "")
            .replaceAll("+", "_")
            .toLowerCase();
};
