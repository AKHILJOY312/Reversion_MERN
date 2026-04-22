function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // skip duplicate node
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
