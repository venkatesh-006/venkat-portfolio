import React from 'react';
import Header from './Components/Header/Header';
import Topcontainer from './Components/Topcontainer/Topcontainer';
import Skillcontainer from './Components/Skillcontainer/Skillcontainer';
import Projectscontainer from './Components/Projectscontainer/Projectscontainer';
import Contact from './Components/Contact/Contact';
const App=() =>{
  return(
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectscontainer />
      <Contact/>
    </div>
  )
}
export default App