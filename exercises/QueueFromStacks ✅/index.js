/**
 * Queue From Stacks
 *
 * Implement a Queue datastructure using two stacks.
 * *Do not* create an array inside of the 'Queue' class.
 * Queue should implement the methods 'add', 'remove', and 'peek'.
 * For a reminder on what each method does, look back
 * at the Queue exercise.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.add(2);
 * q.peek();  // returns 1
 * q.remove(); // returns 1
 * q.remove(); // returns 2
 */

const Stack = require('./stack');

class Queue {
    constructor() {
        this.queueStack = new Stack();
        this.tempStack = new Stack();
    };
    
    // add method -- O(n) space/time complexity
    add(item) {
        this.queueStack.push(item)
    };

    // remove method -- O(n) space/time complexity
    remove() {
        // move everything into temp stack
        while (this.queueStack.peek() !== undefined) {
            this.tempStack.push(this.queueStack.pop())
        };
        //then pop off the last value and store in var
        let dequeuedItem = this.tempStack.pop()
        // put items back into queue stack
        while (this.tempStack.peek() !== undefined) {
            this.queueStack.push(this.tempStack.pop())
        };
        // finally, return the dequeued item
        return dequeuedItem;
    };

    // peek method
    peek() {
        // same thing as remove() except we don't remove
        // the last item once we transfer them
        // just return the last item
        while (this.queueStack.peek() !== undefined) {
            this.tempStack.push(this.queueStack.pop())
        };
        
        let queuePeek = this.tempStack.peek();

        while (this.tempStack.peek() !== undefined) {
            this.queueStack.push(this.tempStack.pop())
        };

        return queuePeek;
    };

}

module.exports = Queue;