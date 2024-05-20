//1.线性结构 数组

//2.栈结构
// 2.1认识栈结构和特性

// 2.2栈结构特性-面试题
//有六个元素6，5，4，3，2，1 的顺序进栈，请问下列哪一个不是合法的出栈序列？
// A:5,4,3,6,1,2  B:4，5，3，2，1  C:3，4，6，5，2，1  D：2，3，4，1，5，6

// 2.3实现栈结构的封装
//stack == > 实现方式(数组/链表)
//封装一个栈
class ArrayStack{
    //定义一个数组 用于存储数组
    private data:any[] = []
    //实现栈相关的操作方法
    push(element:any):void{
        this.data.push(element)
    }
    pop():any{
        return this.data.pop()
    }
    peek():any{
        return this.data[this.data.length - 1]
    }
    isEmpty():boolean{
        return this.data.length === 0
    }
    size():number{
        return this.data.length
    }
    //栈最常见的操作
    //push() 添加一个新元素到顶栈位置
    //pop() 移除栈顶的元素，同时返回移除的元素
    //peek() 返回栈顶元素 ，不对栈做任何处理
    //isEmpty() 如果没有任何元素返回true 否则返回false
    //size() 返回栈的元素个数
}
const stack1 = new ArrayStack()
stack1.push(1)
stack1.push(12)
stack1.push(13)
console.log(stack1.peek())
console.log(stack1.pop())
console.log(stack1.isEmpty())
console.log(stack1.size())
// 2.4栈结构常见的方法
// 2.5栈面试题-转二进制
// 2.6栈面试题-有效括号


export {}
