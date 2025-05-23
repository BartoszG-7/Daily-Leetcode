var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.next.val === current.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
