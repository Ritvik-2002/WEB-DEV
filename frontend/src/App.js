import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Quizes from "./components/quizes/QuizeHome"
import Home from "./components/home/Home"
import CourseInfo from "./components/courseInfo/CourseInfoMain"
import Visualizer from './components/visualizer/VisualizerHome'
import Tutorial from "./components/tutorial/TutorialHome"
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import change from "./redux/counter";
import Login from "./components/login/Login"
import Profile from "./components/login/Profile"
import Register from "./components/login/Register"
import Checkout from "./components/checkout/Checkout";
const store = createStore(change, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());


function App() {

  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<CourseHome />} />
            <Route path='/quiz' element={<Quizes />} />
            <Route path='/team' element={<Team />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/journal' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses/:id' element={<CourseInfo />} />
            <Route path='/visualizer' element={<Visualizer />} />
            <Route path='/tutorial' element={<Tutorial />} />
            <Route path = '/checkout' element = {<Checkout/>} />
          </Routes>
          <Footer />
        </Router>
      </>
      )
}

      export default App
