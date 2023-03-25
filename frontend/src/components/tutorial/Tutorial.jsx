import React from 'react'
import './tutorial.css'
const Tutorial = () => {
    return (
        <>
            <section id='tutoriall' className='tutorialll'>

                <div className="containerr">
                    <div className="topicc">Learn Concepts of DataStructures</div>
                    <div className="contentt">
                        <input type="radio" name="sliderr" checked id="stack" />
                        <input type="radio" name="sliderr" id="queue" />
                        <input type="radio" name="sliderr" id="bst" />
                        <input type="radio" name="sliderr" id="heap" />
                        <input type="radio" name="sliderr" id="hash" />
                        <div className="listt">
                            <label for="stack" className="stack">
                                <span className="title">Stack</span>
                            </label>
                            <label for="queue" className="queue">
                                <span className="title">Queue</span>
                            </label>
                            <label for="bst" className="bst">
                                <span className="title">BST</span>
                            </label>
                            <label for="heap" className="heap">
                                <span className="title">Heap</span>
                            </label>
                            <label for="hash" className="hash">
                                <span className="title">Hash</span>
                            </label>
                            <div className="sliderr"></div>
                        </div>
                        <div className="text-content">
                            <div className="stack text">
                                <div className="title">Stack Data Structure</div>
                                <p>Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO -- Last In First Out or FILO -- First In Last Out. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. A Stack is an abstract data type with a pre-defined capacity, which means that it can store the elements of a limited size. It is a data structure that follows some order to insert and delete the elements, and that order can be LIFO or FILO.</p>
                            </div>
                            <div className="queue text">
                                <div className="title">Queue Data Structure</div>
                                <p>A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order. We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.  The element which is first pushed into the order, the operation is first performed on that. Enqueue: Add an element to the end of the queue Dequeue: Remove an element from the front of the queue IsEmpty: Check if the queue is empty IsFull: Check if the queue is full Peek: Get the value of the front of the queue without removing it</p>
                            </div>
                            <div className="bst text">
                                <div className="title">BST Data Structure</div>
                                <p>A tree is a kind of data structure that is used to represent the data in hierarchical form. Now, let's start the topic, the Binary Search tree. A binary search tree follows some order to arrange the elements. In a Binary search tree, the value of left node must be smaller than the parent node, and the value of right node must be greater than the parent node. This rule is applied recursively to the left and right subtrees of the root. Searching an element in the Binary search tree is easy as we always have a hint that which subtree has the desired element. As compared to array and linked lists, insertion and deletion operations are faster in BST.</p>
                            </div>
                            <div className="heap text">
                                <div className="title">Heap Data Strucuture</div>
                                <p>A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types: Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of its children. The same property must be recursively true for all sub-trees in that Binary Tree. Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of its children. The same property must be recursively true for all sub-trees in that Binary Tree. Heapify: a process of creating a heap from an array. Insertion: process to insert an element in existing heap time complexity Olog N. </p>
                            </div>
                            <div className="hash text">
                                <div className="title">Hash Data Strucuture</div>
                                <p>Hashing is a technique or process of mapping keys, and values into the hash table by using a hash function.It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used.Let a hash function Hx maps the value x at the index x%10 in an Array.For example if the list of values is 11,12,13,14,15 it will be stored at positions 1,2,3,4,5 in the array or Hash table respectively. Many programs that have a linear search in an "inner loop" can be sped up dramatically just by changing the linear lookup to a hashed lookup.Pearson Hashing spreads the key out so well and so fast,avoiding the slowdowns that come with too many key collisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='margin'></div> */}
            </section>


            
        </>
    )
}

export default Tutorial