var getIntersectionNode = function (headA, headB) {
    let nodesInB = new Set();

    while (headB !== null) {
        nodesInB.add(headB);
        headB = headB.next;
    }

    while (headA !== null) { 
        if (nodesInB.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }

    return null;
}