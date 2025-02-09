# Lesson Plans

## What We're Doing

--> We'll modify the Navbar in our React app by adding:

1. Theme toggle (Light/Dark Mode) //useState // useContext
2. Mobile menu that opens and closes when clicked

To do this, we'll use _React Hooks_ _(useState, useContext, useEffect)_, so I'll break them down in detail.

## Key Concepts

Props allows us to pass data from one function to another.

1. React Hooks - What are they?
   Hooks are built-in functions in React that let you use features like state and context inside functional components. Context is particularly powerful - it's like creating a global data store that any component can access, avoiding the need to pass props through multiple levels _(known as "prop drilling")_. Think of context like a family tree where information at the top (parent) can be directly accessed by any descendant, without having to pass it through each generation.

Here, we use three hooks:

- useState → A React Hook that lets you add state variables to functional components. It returns an array with two elements: the current state value and a function to update it. When the state updates, React re-renders the component automatically. For example:

  ```jsx
  const [initialState, a function that changes the initial state to a new state] = useState(0)
  const [count, setCount] = useState(2);
  ```

  Here, count is the state variable starting at 0, and setCount is the function to change it.

- useEffect → A React Hook that lets you execute side effects in your components. Side effects are operations like data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but you can control when it runs by providing a dependency array. For example:
  ```jsx
  useEffect(() => {
    // Code here runs after component mounts
    // and when dependencies change
  }, [count]);

  domcontentLoaded()
  ```
- useContext → Shares data across multiple components. 2. What is State (useState)?
  📌 Think of state as a special variable that React watches for changes.
  Whenever this variable changes, React automatically updates the UI.

🔹 count is our variable.
🔹 setCount is the function to update count.
🔹 Whenever we click the button, count increases and React updates the UI.

### Passing theme data using useContext

1. We create a Theme Context (a global storage for theme settings).
2. We wrap our whole app inside this provider.
3. We can now access the theme inside any component.

📌 What This Does:
✅ Stores whether the theme is light or dark.
✅ Saves the theme inside local storage, so it stays even after refreshing.
✅ Updates the HTML tag with a class to apply styles.

Step 2: Wrap Everything in Theme Provider
We need to wrap our entire app inside ThemeProvider, so all components can access theme data.

📌 Now, all components can access theme settings.

Step 3: Update Navbar with Theme Toggle & Mobile Menu
Now, we modify the Header.js file.
✅ Theme Toggle (Light/Dark Mode)
✅ Mobile Menu (Opens/Closes on Click)

Let me know if you need more explanations! 🚀
