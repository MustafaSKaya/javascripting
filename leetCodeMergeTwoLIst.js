let mergeTwoLists = function(l1, l2) {
    let fh = new ListNode(-1);
    let current = fh;
    while(l1 || l2){

        if(l2 == null || (l1 !== null && l1.val <= l2.val)){
            fh.next = l1;
            fh = fh.next;
            l1 = l1.next;
        } else {
            fh.next = l2;
            fh = fh.next;
            l2 = l2.next;
        }
    }
    return current.next;
};

/*

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/

console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));