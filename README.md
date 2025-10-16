# GitHub Operations Learning Guide

Welcome to the GitHub Operations Learning Guide! This repository is designed to help you learn essential GitHub operations through practical examples.

## Table of Contents

1. [Basic Git Operations](#basic-git-operations)
2. [Branch Management](#branch-management)
3. [Collaboration Workflow](#collaboration-workflow)
4. [GitHub Actions](#github-actions)
5. [Issue and PR Management](#issue-and-pr-management)
6. [Best Practices](#best-practices)

## Basic Git Operations

### Clone a Repository
```bash
git clone https://github.com/fgtrjhyu/example.git
cd example
```

### Check Repository Status
```bash
git status
```

### Add and Commit Changes
```bash
# Add specific files
git add file1.txt file2.txt

# Add all changes
git add .

# Commit with a message
git commit -m "Your commit message"
```

### Push Changes
```bash
git push origin main
```

### Pull Latest Changes
```bash
git pull origin main
```

## Branch Management

### Create a New Branch
```bash
# Create and switch to a new branch
git checkout -b feature/new-feature

# Or using the newer syntax
git switch -c feature/new-feature
```

### List Branches
```bash
# List local branches
git branch

# List all branches (including remote)
git branch -a
```

### Switch Between Branches
```bash
git checkout main
# or
git switch main
```

### Merge Branches
```bash
# Switch to the target branch
git checkout main

# Merge the feature branch
git merge feature/new-feature
```

### Delete a Branch
```bash
# Delete local branch
git branch -d feature/new-feature

# Delete remote branch
git push origin --delete feature/new-feature
```

## Collaboration Workflow

### Fork and Clone
1. Fork the repository on GitHub
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/example.git`
3. Add upstream remote: `git remote add upstream https://github.com/fgtrjhyu/example.git`

### Keep Your Fork Updated
```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream changes into your local main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

### Create a Pull Request
1. Create a new branch for your changes
2. Make your changes and commit them
3. Push your branch to your fork
4. Go to GitHub and create a Pull Request from your fork to the original repository

## GitHub Actions

GitHub Actions allow you to automate workflows. See the `.github/workflows/` directory for examples.

### Basic Workflow Structure
```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run a command
        run: echo "Hello, GitHub Actions!"
```

## Issue and PR Management

### Creating an Issue
1. Go to the "Issues" tab
2. Click "New Issue"
3. Fill in the title and description
4. Add labels, assignees, and projects as needed
5. Submit the issue

### Linking Issues to Pull Requests
In your PR description or commit message, use keywords:
- `Fixes #123` - Closes issue #123 when PR is merged
- `Resolves #123` - Same as Fixes
- `Closes #123` - Same as Fixes

### Code Review Process
1. Create a Pull Request
2. Request reviewers
3. Address feedback and push new commits
4. Once approved, merge the PR

## Best Practices

### Commit Messages
- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove)
- Keep the subject line under 50 characters
- Add a detailed description if needed

### Branch Naming
- `feature/` - New features
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent fixes
- `docs/` - Documentation updates

### Pull Requests
- Keep PRs focused and small
- Write descriptive PR titles and descriptions
- Link related issues
- Request appropriate reviewers
- Respond to feedback promptly

## Additional Resources

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Skills](https://skills.github.com)
- [GitHub Learning Lab](https://lab.github.com)

## Contributing

Feel free to contribute to this learning guide by:
1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a Pull Request

## License

This is a learning repository - feel free to use and modify as needed for educational purposes.
