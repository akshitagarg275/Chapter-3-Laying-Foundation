import React from "react"
import  ReactDOM  from "react-dom/client"

const heading1 = React.createElement("h1" , {id: "heading",key:"h1"} , "Namaste")
const heading2 = React.createElement("h1" , {id: "heading",key:"h2"} , "heading 2")
const container = React.createElement("div",{id:"container"},[heading1,heading2])

// JSX
const heading = (<h1 id="title">
    Writing using JSX
    </h1>
) 

const Title = () => {
    return <h2>title</h2>
}

// Functional Compoenents

const HeaderComponent = () => {
    return (
        <>
            <h1>Header Component</h1>
            {heading}
            {/* Component Composition */}
            <Title/>
            {Title()}
        </>

    )
}
// const HeaderComponent1 = () => (
//         <h1>Header Component</h1>
//     )
// const HeaderComponent2 = function() {
//     return(
//         <h1>Header Component</h1>
//     ) 
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent/>)

// console.log(container)