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

  // Longest Common Prefix
  longestCommonPrefix() {
    let prefix = "";
    let node = this.root;

    while (
      node &&
      !node.isEndOfWord &&
      Object.keys(node.children).length === 1
    ) {
      let char = Object.keys(node.children)[0];
      prefix += char;
      node = node.children[char];
    }

    return prefix;
  }
}

// Example usage
const trie = new Trie();
["flower", "flow", "flight"].forEach((word) => trie.insert(word));
console.log(trie.longestCommonPrefix()); // "fl"
