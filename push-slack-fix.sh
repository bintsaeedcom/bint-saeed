#!/bin/bash
# Fix Xcode license and push Slack notification fix to main
set -e
cd "$(dirname "$0")"

echo "Step 1: Accepting Xcode license"
echo ">>> You will be prompted for your Mac password in the terminal below <<<"
sudo xcodebuild -license accept

echo "Step 2: Pushing to main..."
git add -A
git status
git commit -m "Re-enable Slack visitor notifications on coming soon page" || echo "(Nothing to commit)"
git push origin main

echo "Done!"
