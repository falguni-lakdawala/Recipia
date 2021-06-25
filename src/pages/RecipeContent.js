import React from 'react'
import Header from '../components/semantic_components/Header'
import Body from '../components/semantic_components/Body'
import Footer from '../components/semantic_components/Footer'

const values={a:2,b:3}
const contextapp=React.createContext(values);

const RecipeContent = () => {
    return (
        <div className="recipe_content">
    <contextapp.Provider value={values}>
        {/* Whatever the value you pass here will be available in child components and also causes re-renders */}
     <Header/>
     <Body/>
     <Footer/>
     </contextapp.Provider>
        </div>
    )
}

export {contextapp}

export default RecipeContent