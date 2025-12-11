export default function Count(props){
    console.log("Count rendered")
    return <h2 className="count">{props.number}</h2>
}

// a component that just renders h2 is probably over kill 
// just to explain React rendering again

// the App component is passed to the main.jsx, main is linked to index.html
// so the content of App is what we display on the page

// remember our App has some code including calling this Count component
// what that means is the the App components will run before this Count

// the count state is in App, and if we update the state, 
// bothe App and Count componets will reload....
// we test this by having console log in the APP and Count component

// POINT TO REMEMBER
// if we have a state change inside a component,
// React will re-render the component, 
// and so doing re-render all the components in that component
