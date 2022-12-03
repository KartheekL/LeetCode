//  Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	console.log("List1", list1);
	console.log("List2", list2);
	if (list1 == null || list2 == null) {
		return list1 == null ? list2 : list1;
	}

	let ans;

	while (list2 != null && list1 != null) {
		let nextEle2 = list2.next;
		let nextEle1 = list1.next;
		if (list1.val >= list2.val) {
			if (!ans) {
				ans = list2;
			}
			if (!nextEle2 || nextEle2.val >= list1.val) {
				list2.next = list1;
				list1.next = nextEle2;
				list1 = nextEle1;
			} else {
				list2 = list2.next;
			}
		} else {
			if (!ans) {
				ans = list1;
			}
			if (!nextEle1 || nextEle1.val >= list2.val) {
				list1.next = list2;
				list2.next = nextEle1;
				list2 = nextEle2;
			} else {
				list1 = list1.next;
			}
		}
		console.log("List1", list1);
		console.log("List2", list2);
	}
	return ans;
};
