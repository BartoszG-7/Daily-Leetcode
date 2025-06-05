var hasCycle = function (head) {
    let nodesSeen = new Set();
    let current = head;
    while (current != null) {
        if (nodesSeen.has(current)) {
            return true;
        }
        nodesSeen.add(current);
        current = current.next;
    }
    return false;
};
