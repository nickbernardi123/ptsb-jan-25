import TopicBoard from "./TopicBoard"

// This is a "function-based React component"
// it's a function that returns a single JSX element
// component titles are always in WordCase, AKA PascalCase
function App() {
  const classTitle = "Full Stack Software Engineering!"

  // JSX is a "syntactical extension" of JS
  // It looks and feels (to us, the developers) like HTML
  // but with the ability to interpret JS within it (very useful!)
  // but it's rendered as separate HTML and Javascript for the browswer
  return (
    // <></> is a React Fragment,
    // useful when we need to group elements together to make a single component
    // but don't necessarily need a parent element in the HTML
    <>
      <h1>{classTitle.toUpperCase()}</h1>
      <h3>Stuff we've learned so far:</h3>
      {/* You can use another component, after importing it into this file
          Components in JSX will look like custom HTML elements
          Always maintain capitalization!
      */}
      <TopicBoard />
    </>
  )
}

export default App
