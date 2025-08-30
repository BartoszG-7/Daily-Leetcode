var partition = function (head, x) {
    var before_head = new ListNode(0);
    var before = before_head;
    var after_head = new ListNode(0);
    var after = after_head;
    while (head != null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }
    after.next = null;
    before.next = after_head.next;
    return before_head.next;
};
