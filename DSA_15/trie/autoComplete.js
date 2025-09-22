class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert word into trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Helper: DFS to collect all words
  collectWords(node, prefix, results) {
    if (node.isEndOfWord) results.push(prefix);

    for (let char in node.children) {
      this.collectWords(node.children[char], prefix + char, results);
    }
  }

  // Auto-complete based on prefix
  autoComplete(prefix) {
    let node = this.root;

    // Step 1: Navigate to prefix node
    for (let char of prefix) {
      if (!node.children[char]) return []; // no suggestions
      node = node.children[char];
    }

    // Step 2: Collect suggestions
    let results = [];
    this.collectWords(node, prefix, results);
    return results;
  }
}

// Example usage
const trie = new Trie();
const words = ["apple", "app", "apply", "apt", "bat", "ball", "bake"];
words.forEach((word) => trie.insert(word));

console.log(trie.autoComplete("ap")); // ["apple", "app", "apply", "apt"]
console.log(trie.autoComplete("ba")); // ["bat", "ball", "bake"]
console.log(trie.autoComplete("cat")); // []
