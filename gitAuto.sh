#!/bin/bash
git pull
git add .
echo "Added to the staging area"

# Get the previous commit message
prev_message=$(git log -1 --pretty=%B 2>/dev/null)

# Show previous commit message if it exists
if [ -n "$prev_message" ]; then
    echo ""
    echo "📝 Previous commit message:"
    echo "   $prev_message"
    echo ""
fi

# Prompt for new commit message
read -p "Enter new commit message: " message

git commit -m "$message"

# Get current branch
current_branch=$(git branch --show-current)

# Push to same branch
git push -u origin "$current_branch"