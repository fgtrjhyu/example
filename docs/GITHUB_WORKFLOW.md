# GitHub Workflow Guide

A comprehensive guide to working with GitHub in a team environment.

## Standard Git/GitHub Workflow

### 1. Fork and Clone (First Time Setup)

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR-USERNAME/example.git
cd example

# Add the original repository as upstream
git remote add upstream https://github.com/fgtrjhyu/example.git

# Verify remotes
git remote -v
```

### 2. Create a Feature Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create and switch to a new branch
git checkout -b feature/your-feature-name
```

### 3. Make Changes

```bash
# Make your code changes
# ...

# Check what you've changed
git status
git diff

# Stage your changes
git add .

# Commit your changes
git commit -m "Add feature: description of changes"
```

### 4. Keep Your Branch Updated

```bash
# Fetch latest changes from upstream
git fetch upstream

# Merge upstream main into your branch
git merge upstream/main

# Or rebase your branch onto upstream main
git rebase upstream/main
```

### 5. Push Your Branch

```bash
# Push to your fork
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template:
   - Clear title
   - Description of changes
   - Link related issues (e.g., "Fixes #123")
4. Request reviewers
5. Submit the PR

### 7. Address Review Comments

```bash
# Make requested changes
# ...

# Stage and commit
git add .
git commit -m "Address review comments: specific changes"

# Push to update the PR
git push origin feature/your-feature-name
```

### 8. Merge and Cleanup

After your PR is merged:

```bash
# Switch to main
git checkout main

# Pull the latest changes
git pull upstream main

# Delete your local feature branch
git branch -d feature/your-feature-name

# Delete your remote feature branch
git push origin --delete feature/your-feature-name

# Update your fork's main branch
git push origin main
```

## Branch Naming Conventions

Use descriptive branch names with prefixes:

- `feature/` - New features (e.g., `feature/add-login`)
- `bugfix/` - Bug fixes (e.g., `bugfix/fix-memory-leak`)
- `hotfix/` - Urgent production fixes (e.g., `hotfix/security-patch`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/optimize-queries`)
- `test/` - Adding or updating tests (e.g., `test/add-unit-tests`)

## Commit Message Guidelines

### Format

```
Type: Brief description (50 chars or less)

More detailed explanation if needed (wrap at 72 chars).
Explain the problem this commit solves and why you chose
this solution.

Fixes #123
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code restructuring without changing behavior
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependency updates

### Examples

```bash
# Good commits
git commit -m "feat: Add user authentication system"
git commit -m "fix: Resolve null pointer exception in login"
git commit -m "docs: Update installation instructions"

# Bad commits (avoid these)
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfasdf"
```

## Pull Request Best Practices

### PR Title

- Clear and descriptive
- Start with a verb (Add, Fix, Update, Remove)
- Reference issue number if applicable

Examples:
- `Add user authentication feature (#123)`
- `Fix memory leak in data processor (#456)`
- `Update documentation for API endpoints`

### PR Description

Include:
1. **Summary** - What does this PR do?
2. **Changes** - List of changes made
3. **Testing** - How was this tested?
4. **Screenshots** - For UI changes
5. **Related Issues** - Links to issues (Fixes #123)

Template:
```markdown
## Summary
Brief description of the changes.

## Changes
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] No breaking changes

## Related Issues
Fixes #123
```

### During Review

- Respond to all comments
- Push additional commits to address feedback
- Mark conversations as resolved when addressed
- Be open to suggestions and constructive criticism

## Conflict Resolution

When you encounter merge conflicts:

```bash
# Update your branch with latest main
git fetch upstream
git merge upstream/main

# Git will show conflicts in affected files
# Open each file and resolve conflicts (look for <<<<<<, ======, >>>>>>)

# After resolving conflicts
git add .
git commit -m "Resolve merge conflicts with main"
git push origin feature/your-feature-name
```

## Working with Issues

### Creating Good Issues

Include:
- Clear, descriptive title
- Problem description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details
- Screenshots if applicable

### Issue Labels

Common labels:
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - Urgent issues

### Linking Issues to PRs

In your PR description or commits:
```
Fixes #123
Closes #456
Resolves #789
```

These keywords automatically close the issue when the PR is merged.

## Code Review Guidelines

### As a Reviewer

- Be constructive and respectful
- Explain *why* when suggesting changes
- Approve when ready, request changes if needed
- Test the changes locally when possible

### As an Author

- Don't take feedback personally
- Ask questions if you don't understand
- Thank reviewers for their time
- Make requested changes promptly

## Git Hygiene

### Before Committing

```bash
# Check what you're committing
git status
git diff

# Lint your code
npm run lint  # or your project's lint command

# Run tests
npm test  # or your project's test command
```

### Keep Commits Clean

```bash
# Combine multiple small commits into one
git rebase -i HEAD~3

# Amend the last commit (before pushing)
git commit --amend

# Note: Don't rewrite history after pushing to a shared branch
```

## Useful Git Aliases

Add these to your `.gitconfig`:

```bash
[alias]
  st = status
  co = checkout
  br = branch
  ci = commit
  unstage = reset HEAD --
  last = log -1 HEAD
  lg = log --oneline --graph --all
  amend = commit --amend --no-edit
```

## Emergency Procedures

### Accidentally Committed to Main

```bash
# Create a branch with your changes
git branch my-feature-branch

# Reset main to match remote
git reset --hard origin/main

# Switch to your feature branch
git checkout my-feature-branch
```

### Need to Undo Last Commit

```bash
# Keep changes, undo commit
git reset --soft HEAD~1

# Discard changes, undo commit
git reset --hard HEAD~1
```

### Pushed Sensitive Data

1. Remove the sensitive data from your code
2. Contact repository administrators immediately
3. Consider all exposed credentials compromised
4. Rotate any exposed secrets/passwords

## Resources

- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Forking Projects](https://guides.github.com/activities/forking/)
- [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
