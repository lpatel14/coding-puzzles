//Delete alternate nodes of a singly-linked list

class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}


function deleteAlternate() {
    var head
    //do nothing if no head
    if (head == null) {
        return;
    }

    prev = head;
    curr = prev.next;

    //re-link nodes
    while (prev != null && curr != null) {
        prev.next = curr.next;

        curr = null;

        //reset previous and current nodes
        prev = prev.next;
        if (prev != null) {
            curr = prev.next;
        }
    }
}