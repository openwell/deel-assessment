1. What is the difference between Component and PureComponent? give an
   example where it might break my app.
   **Answers**
   ` Component and Pure Component are very similar but differ in the situation where pure component does a comparison of the props to determine if it should re-render or not by making use of should component update.`
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
   `It can be bad if you don't structure your code well or understand very well their weakness. In a situation you have 3 component and the middle subscribe to context and the bottom component doesn't. if you have a ShouldComponentUpdate in the middle it could block the bottom component from receiving update. Also spreading a content wrongly can lead to it being the same when comparing prevProps and nextProps. `
3. Describe 3 ways to pass information from a component to its PARENT.
   **Answers**
   `A callback function passed as props` `context api/redux` `useState`
4. Give 2 ways to prevent components from re-rendering.
   **Answers**
   `Making use of usememo` `making use of pure component`
5. What is a fragment and why do we need it? Give an example where it might
   break my app.
   **Answers**
   `Fragment is a syntax to group e.g list elements to avoid redundant syntax. Meaning it does appear in the dom. `
6. Give 3 examples of the HOC pattern.
   `Decorators`
   `A class component that renders props.children. most times the class is the data layer`
   `A function component that renders props.children`
7. what's the difference in handling exceptions in promises, callbacks and
   async...await.
   `They are fairly the similar`
   `promises make use of rejection and .catch chaining`
   `callbacks makes use of .catch`
   `async...await makes use if try and catch`
8. How many arguments does setState take and why is it async.
   `Two argument`
   `For efficiency, performance and to void continuous rerendering due to bad code that why I believe the second argument was provided`
9. List the steps needed to migrate a Class to Function Component.
   `remove constructor if any`
   `Change class to function`
   `remove the render method`
   `refactor methods to functions`
   `remove all this statement`
   `refactor setState to hooks`
   `refactor componentDidMount to use useEffect`

10. List a few ways styles can be used with components.
    `Global styles`
    `Css module`
    `Styled components`
    `Inline styles`
11. How to render an HTML string coming from the server.
    `You render it using a special method provided by react called dangerouslySetInnerHTML`
