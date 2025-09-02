var rotateRight = function (head, k) {
    
    if (head == null) return null;
    if (head.next == null) return head;
    
    let old_tail = head;
    let n;
    for (n = 1; old_tail.next != null; n++) old_tail = old_tail.next;
    old_tail.next = head;
    
    let new_tail = head;
    for (let i = 0; i < n - (k % n) - 1; i++) new_tail = new_tail.next;
    let new_head = new_tail.next;
    
    new_tail.next = null;
    return new_head;
};
