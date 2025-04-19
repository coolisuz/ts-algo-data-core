# Contributing to TS-ALGO-DATA-CORE

## Commit Message Conventions

I follow the [Conventional Commits](https://www.conventionalcommits.org/) specification with specific scopes for better organization.

### Format

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process, tools, etc.

### Scopes
- `arrays`: Array algorithms
- `binary-tree/bst`: Binary search tree implementation
- `binary-tree/avl`: AVL tree implementation
- `graph`: Graph algorithms and implementation
- `interfaces`: Interface definitions
- `linked-list`: Linked list implementations
- `queue`: Queue implementations
- `stack`: Stack implementations

### Examples

```diff
+ feat(binary-tree/bst): implement insert method
- fix(stack): resolve pop method returning incorrect value
# refactor(interfaces): add IStack interface
! test(stack): add unit tests for pop method