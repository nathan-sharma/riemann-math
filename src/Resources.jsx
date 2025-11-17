import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';





function Resources() {
 

  return (
    <div className="App flex flex-col w-full bg-white">

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>
<h1 className = "text-3xl text-center mt-5 mx-3">This page will open after we conduct our first classes.</h1>

<p className = " text-center mt-5 mx-3">Here, you'll find free resources for preparing for math competitions, as well as recordings of all in class lectures. Stay tuned!</p>
 
           
      

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default Resources;
