# Git Commands Cheat Sheet

Quick reference for commonly used Git commands.

## Configuration

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# View configuration
git config --list
```

## Repository Basics

```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone <repository-url>

# Check status
git status

# View commit history
git log
git log --oneline
git log --graph --oneline --all
```

## Staging and Committing

```bash
# Stage specific files
git add file1.txt file2.txt

# Stage all changes
git add .

# Unstage a file
git restore --staged <file>

# Commit staged changes
git commit -m "Commit message"

# Amend the last commit
git commit --amend
```

## Branches

```bash
# List branches
git branch

# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>
git switch <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>
git switch -c <branch-name>

# Delete a branch
git branch -d <branch-name>
git branch -D <branch-name>  # Force delete

# Rename current branch
git branch -m <new-name>
```

## Remote Operations

```bash
# List remote repositories
git remote -v

# Add a remote
git remote add <name> <url>

# Fetch from remote
git fetch <remote>

# Pull from remote (fetch + merge)
git pull <remote> <branch>

# Push to remote
git push <remote> <branch>

# Push and set upstream
git push -u origin <branch>
```

## Merging and Rebasing

```bash
# Merge a branch into current branch
git merge <branch-name>

# Rebase current branch onto another
git rebase <branch-name>

# Abort a merge
git merge --abort

# Abort a rebase
git rebase --abort
```

## Viewing Changes

```bash
# View unstaged changes
git diff

# View staged changes
git diff --staged

# View changes between branches
git diff <branch1> <branch2>

# View changes in a specific file
git diff <file>
```

## Undoing Changes

```bash
# Discard changes in working directory
git restore <file>
git checkout -- <file>

# Unstage a file
git restore --staged <file>
git reset HEAD <file>

# Reset to a previous commit (keep changes)
git reset --soft <commit>

# Reset to a previous commit (discard changes)
git reset --hard <commit>

# Revert a commit (create new commit)
git revert <commit>
```

## Stashing

```bash
# Stash current changes
git stash

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove most recent stash
git stash pop

# Clear all stashes
git stash clear
```

## Tags

```bash
# List tags
git tag

# Create a lightweight tag
git tag <tag-name>

# Create an annotated tag
git tag -a <tag-name> -m "Tag message"

# Push tags to remote
git push --tags

# Delete a tag
git tag -d <tag-name>
```

## Advanced Operations

```bash
# Cherry-pick a commit
git cherry-pick <commit>

# Show commit details
git show <commit>

# Find commits by message
git log --grep="search term"

# Find commits by author
git log --author="name"

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Clean untracked files
git clean -fd
```

## Collaboration Tips

1. **Always pull before you push** - Keep your branch up to date
2. **Commit often** - Make small, focused commits
3. **Write clear commit messages** - Future you will thank you
4. **Use branches** - Keep main/master stable
5. **Review before committing** - Use `git diff` and `git status`
