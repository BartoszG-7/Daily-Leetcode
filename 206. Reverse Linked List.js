var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;    
};
