# TypeScript Algorithms & Data Structures
![CI](https://github.com/coolisuz/ts-algo-data-core/actions/workflows/ci.yml/badge.svg)

Personal collection of data structures and algorithms implemented in TypeScript with full type safety.

## 🚀 Project Overview
This repository serves as both a practical reference and learning resource for common data structures and algorithms implemented in TypeScript. Each implementation includes:

* Type-safe code with TypeScript generics
* Comprehensive unit tests
* Time and space complexity analysis
* Practical usage examples

## 📋 Contents
### Data Structures

 - [x] Linked List
 - [x] Stack
 - [x] Queue
 - [x] Hash Table
 - [x] Binary Search Tree
 - [x] Heap / Priority Queue
 - [x] Graph
 - [x] Trie
 - [x] AVL Tree
 - [x] Red-Black Tree

### Algorithms
#### Sorting

 - [ ] Bubble Sort
 - [ ] Selection Sort
 - [ ] Insertion Sort
 - [ ] Merge Sort
 - [ ] Quick Sort
 - [ ] Heap Sort
 - [ ] Radix Sort

#### Searching

 - [x] Linear Search
 - [x] Binary Search
 - [x] Depth-First Search
 - [x] Breadth-First Search

#### Graph Algorithms

 - [x] Dijkstra's Algorithm
 - [x] Bellman Ford Algorithm
 - [ ] Topological Sort

#### Dynamic Programming

 - [ ] Fibonacci Sequence
 - [ ] Longest Common Subsequence
 - [ ] Knapsack Problem
 - [ ] Matrix Chain Multiplication
 - [ ] Longest Increasing Subsequence

## 🛠️ Setup and Usage
#### Prerequisites
* Node.js >= 18.0.0
* Yarn (recommended) or npm

### Installation
```markdown
# Clone the repository
git clone https://github.com/coolisuz/ts-algo-data-core.git
cd ts-algo-core
```


### Install dependencies
```markdown
# Install dependencies
yarn install

# Running in Development Mode. Start the development server
yarn dev

# Building the Project
# Compile TypeScript to JavaScript
yarn build
```

### Run the compiled code
```markdown
# Run 
yarn start

# Running Tests
yarn test

# Run tests in watch mode during development
yarn test:watch
```
### Code Quality Tools
```markdown
# Lint your code
yarn lint

# Format your code according to Prettier rules
yarn format
```
### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below, you may find the most common orders of growth of algorithms specified in Big O notation.

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | Constant    | 1                            | 1                             | 1                               |
| **O(log N)**   | Logarithmic | 3                            | 6                             | 9                               |
| **O(N)**       | Linear      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |


### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |


### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### Fork the project
* Create your feature branch (git checkout -b feature/amazing-feature)
* Commit your changes (git commit -m 'Add some amazing feature')
* Push to the branch (git push origin feature/amazing-feature)
* Open a Pull Request

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements
- Big O Cheat Sheet
- JavaScript Algorithms Repository by trekhleb
- Introduction to Algorithms (CLRS)

## Author
Saidjamol Ikramov (coolisuz)