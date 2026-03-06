function removeDuplicates(head) {
  if (!head) return head;

  const seen = new Set();
  let current = head;
  let prev = null;

  while (current) {
    if (seen.has(current.val)) {
      prev.next = current.next; // remove duplicate
    } else {
      seen.add(current.val);
      prev = current;
    }
    current = current.next;
  }

  return head;
}
