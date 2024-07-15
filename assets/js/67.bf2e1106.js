(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{469:function(t,a,s){"use strict";s.r(a);var e=s(2),l=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("堆和栈是用于存储数据的两个不同的内存区域，它们分别用于存储不同类型的数据。")]),t._v(" "),a("h2",{attrs:{id:"堆-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆-heap"}},[t._v("#")]),t._v(" 堆（Heap）")]),t._v(" "),a("p",[t._v("堆是用于动态分配内存的区域，用于存储引用类型的数据，例如对象（Object）和数组（Array）。在堆中存储的数据是通过引用来进行访问的，而不是直接访问数据本身。因此，存储在堆中的数据是通过引用进行传递和共享的。\n（先进先出）")]),t._v(" "),a("h2",{attrs:{id:"栈-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈-stack"}},[t._v("#")]),t._v(" 栈（Stack）")]),t._v(" "),a("p",[t._v("栈是用于静态分配内存的区域，用于存储基本类型的数据和引用类型的值（即存储在堆中的对象的引用）。基本类型数据包括数字（Number）、布尔值（Boolean）、字符串（String）、null、undefined等。栈中的数据是按照一种后进先出的方式进行管理的。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("为什么会这样分配呢？\n栈的分配方式是由编程语言和编译器决定的，其主要目的是提高内存管理的效率和性能。栈的分配速度较快，数据的存取也更加直接和高效。基本类型的数据和引用类型的值可以被静态地分配和管理，因为他们的大小是固定的。\n堆的分配方式则允许动态的分配和管理内存，因为对象和数组的大小是不固定的，并且它们的生命周期可能会动态变化。堆的分配速度相对较慢，因为需要在运行时动态分配和释放内存，并且存在垃圾回收机制来处理不在引用的数据")])]),a("h3",{attrs:{id:"var、let、const区别的实现原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var、let、const区别的实现原理是什么"}},[t._v("#")]),t._v(" var、let、const区别的实现原理是什么")]),t._v(" "),a("ul",[a("li",[t._v("var，会直接在栈内存里预分配空间，然后等到实际语句执行的时候，再存储对应的变量，如果传的是引用类型，那么会在堆内存里开辟一个内存空间存储实际内容，栈内存会存储一个指向堆内存的指针")]),t._v(" "),a("li",[t._v("let，是不会在栈内存里预分配内存空间，而且在栈内存分配变量时，做一个检查，如果已经有相同变量名存在就会报错")]),t._v(" "),a("li",[t._v("const，也不会预分配内存空间，在栈内存分配变量时也会做同样的检查。不过const存储的变量是不可修改的，对于基本类型来说无法修改定义的值，对于引用类型类说你无法修改栈内存里分配的指针，但是你可以修改指针指向的对象里面的属性")])]),t._v(" "),a("h3",{attrs:{id:"var、let、const具体区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var、let、const具体区别"}},[t._v("#")]),t._v(" var、let、const具体区别")]),t._v(" "),a("ul",[a("li",[t._v("var：遇到有var的作用域，在任何语句执行前都己经完成了生命和初始化，也就是变量提升而且拿到undefined的原因由来")]),t._v(" "),a("li",[t._v("function：声明、初始化、赋值一开始就全部完成，所以函数的变量提升优先级更高")]),t._v(" "),a("li",[t._v("let：解析器进入一个块级作用域，发现let关键字，变量只是先完成声明，并没有到初始化那一步。此时如果在此作用域提前访问，则报错xx is not defined，这就是暂时性死区的由来。等到解析到有let那一行的时候，才会进入初始化阶段。如果let的那一行是赋值操作，则初始化和赋值同时进行。")]),t._v(" "),a("li",[t._v("const、class都是同let一样的道理")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("暂时性死区的由来与JavaScript引入了块级作用域绑定（let、const）以及变量提升机制有关。在块级作用域中，使用let和const声明的变量不会像使用var声明的变量那样进行变量提升。相反，它们在声明之前会存在一个从当前作用域的开始到变量声明处的暂时性死区。\n具体来说，当使用let或const声明一个变量时，变量会被绑定到当前作用域，但在声明之前，改变量是不可访问的。这意味着在变量声明之前访问变量会导致引擎抛出一个ReferenceError异常。")])])])}),[],!1,null,null,null);a.default=l.exports}}]);