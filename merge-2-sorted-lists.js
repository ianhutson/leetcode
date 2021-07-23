// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    } else {
        if (l1.val < l2.val) {
            return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
        } else {
            return new ListNode(l2.val, mergeTwoLists(l1, l2.next))
        }
    }
};