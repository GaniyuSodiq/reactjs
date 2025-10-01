import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './assets/data'

export default function App() {
  const entryElements = entryData.map((entry) =>
    <Entry
      key={entry.id}
      // entry={entry}
      {...entry}
    />)
  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

// the coolest thing about how we have setup the project
/** 
 * is that the display is a function of the datat we're pulling into our app
 * this means we can go into the data and duplicate the objects in array then save
 * and we get more entries in our page - automatically, 
 * Besides - this will done by pulling data from API
 * 
 * Exh time we hit save this error comes up in the console
 * "Each child in a list should have a unique "key" prop."
 * this is a common error you will get anything you take an array od data 
 * and turn into components
 * 
 * React has a unique way to take care of items ID. 
 * especially useful for react when you have functionality that remove or add to the list
 * 
 * So we pass in a unique prop (key={}) when rendering the component
 * since our database, where the data is coming from will most likely have id for each object/ grp
 * we can use the ID coming from the data (key={entry.id}) 
 * 
 * if you have the ID in your data, something beginners do is to use th index provided by .map array method
 * const entryElements = entryData.map((entry, index) => <Entry key={index} moreProps={blah} />
 * and use the index inplace of the data id key={index}
 * USING THE INDEX IS FROWNED UPON - it has limitatiotns. So try to avaoid it.
*/

// ❤️‍🔥 Pass object as props
/**
 * One thing you will notice is typing props into our components is that these props we type
 * is a little bit lengthy
 * imagine if we have more data included in the objects in each array
 * more props to img, title, country etc
 * it will be way too cumbersome to type out all the props in the object
 * so what we could do is create entry prop and pass the entire prop down
 * entry={entry}
 * the property name can be anything but the value is coming as the parameter in the callback function
 * nothing should happen to our key={entry.id}.
 * Remember it is uniquely usefult to React. so we leave it as it is
 * so changing the props we are sendingt o our components will affect how our code was previuosly written.
 * so we need to fix this issue from the component declaration
 * so instead of just props.img props.title, i am using props.entry.img props.entry.title as my 
 */

// ❤️‍🔥 Spread Objects as props
/**
 * there is one syntactic trick you can use when passing a full object down to the component through props
 * you might see it in the wild - so you dont get confused
 * the trick uses js spread notation
 * And instead of entry={entry} , we remove the props entirely and replace it {...entry}
 * this is similar to us writing title={entry.title} country={entry.country} etc
 * in the component declaration, we have to turn 'props.entry.title' into 'props.title'
 * so we are back at how we use the props at the begining.
*/


      