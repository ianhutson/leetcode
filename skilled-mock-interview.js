/*
1- reverse a string (without str.reverse())
2- find out if a given string is a palindrome. kayak mom racecar bonus: "A man, a plan, a canal. Panama"
3- given an array of integers find the most repeated number
	findMostRepeated([3,3,4,4,4,4,5,5,6,6,6,1,1,4,4,4,4]) = 4
4- From a unsorted array, check whether there are any two numbers that will sum up to a given number
	sumFinder([6,4,2,2,1,7], 9) = true
	sumFinder([6,4,2,2,1,7], 2) = false

let a = 5
let b = 3
let temp = a
a = b
b = temp

a = a + b  
b = a - b
a = a - b 

a = a ^ b
b = a ^ b
a = a ^ b

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

look up: SCOPE, HOISTING, CLOSURES, CALLBACKS, PROMISES

https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4

Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.
Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

COMPOSITION
https://youtu.be/wfMtDGfHWpA
https://ui.dev/javascript-inheritance-vs-composition/

DESIGN PATTERNS
Design patterns are documented solutions to commonly occurring problems in software engineering. 
Engineers don’t have to bang their heads on the problems that someone else has already solved.
https://www.telerik.com/blogs/design-patterns-in-javascript


REACT:
STATE
States are the heart of React components. States are the source of data and must be kept as simple as possible. 
Basically, states are the objects which determine components rendering and behavior. 
They are mutable unlike the props and create dynamic and interactive components.

PROPS
Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. 
They are always passed down from the parent to the child components throughout the application. 
A child component can never send a prop back to the parent component. 
This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.

PHASES OF COMPONENTS LIFECYCLE
Initial Rendering Phase: 
This is the phase when the component is about to start its life journey and make its way to the DOM.
Updating Phase: 
Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
Unmounting Phase: 
This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.
 

LIFECYCLE METHODS
componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() – Executed on the client side only after the first render.
componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() – Called just before rendering takes place in the DOM.
componentDidUpdate() – Called immediately after rendering takes place.
componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.


Higher Order Components(HOC)
Higher Order Component is an advanced way of reusing the component logic. 
Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. 
They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. 
You can say that HOC are ‘pure’ components.

HOC can be used for many tasks like:
Code reuse, logic and bootstrap abstraction
Render High jacking
State abstraction and manipulation
Props manipulation

What are Pure Components
Pure components are the simplest and fastest components which can be written. 
They can replace any component which only has a render(). 
These components enhance the simplicity of the code and performance of the application.


REDUX
Redux is one of the most trending libraries for front-end development in today’s marketplace. 
It is a predictable state container for JavaScript applications and is used for the entire applications state management.
Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.

Three principles that Redux follows
Single source of truth: 
The state of the entire application is stored in an object/ state tree within a single store. 
The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
State is read-only: 
The only way to change the state is to trigger an action. 
An action is a plain JS object describing the change. 
Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
Changes are made with pure functions: 
In order to specify how the state tree is transformed by actions, you need pure functions. 
Pure functions are those whose return value depends solely on the values of their arguments.


SIZES:
%, px, pt (1pt = 1/72 inch), mm, cm, in, em, vh, vw, pi (= 12pt), auto

youtube.com/AlphaEchoes


*/

function create() {
	let counter = 0
	return {
		increment: function() {
        	counter++
    	},
  
    	print: function() {
        	console.log(counter)
    	}
	}
}
let c = create()
c.increment()
c.print()






var isPalindrome = function(x){
	for (let i=0; x.length/2; i++)
		if (x[i] !== x[x.length-i-1]) 
			return false
	return true
}
console.log(isPalindrome("racecar"))

var findMostRepeated = function(x){
	const tallies = {}
	x.forEach(number => {
		if (tallies[number]) {
			// number already in the obj
			tallies[number]++
		} else {
			// number not in the obj
			tallies[number] = 1
		}
	})

	let maxValue = 0
	let maxNumber = Number.MIN_SAFE_INTEGER

	Object
		.keys(tallies)
		.forEach(number => {
			let currentValue = tallies[number]
			if (currentValue > maxValue) {
				maxValue = currentValue
				maxNumber = number
			}
		})
	return maxNumber
}




youtube.com/AlphaEchoes