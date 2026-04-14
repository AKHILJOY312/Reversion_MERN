#!/bin/bash

git pull
git add .
echo "Added to the staging area"

# Get the previous commit message
prev_message=$(git log -1 --pretty=%B 2>/dev/null)

echo ""
echo "📝 Previous commit message:"
echo "   $prev_message"
echo ""

# Extract number from previous commit (e.g., c51 → 51)
if [[ $prev_message =~ ([a-zA-Z]*)([0-9]+) ]]; then
    prefix=${BASH_REMATCH[1]}
    number=${BASH_REMATCH[2]}
    
    # Increment number
    next_number=$((number + 1))
    auto_message="${prefix}${next_number}"
else
    # fallback if no number found
    auto_message="c1"
fi

echo "⚡ Suggested commit message: $auto_message"

# Ask user (press enter to accept auto message)
read -p "Enter new commit message (or press Enter to use suggested): " message

# Use auto message if empty
if [ -z "$message" ]; then
    message=$auto_message
fi

git commit -m "$message"

# Get current branch
current_branch=$(git branch --show-current)

git push -u origin "$current_branch"