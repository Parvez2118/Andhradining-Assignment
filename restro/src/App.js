import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
     <header class="header">
        <nav class="nav bd-grid">
           <div style={{ display: "flex" }}>
              <div id="logo" >
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6R9kDzMr-19JxjyjxuDLSFzWNgBPe1QJKA&usqp=CAU" alt="Company Logo" style={{ width: "50px", height: "50px" }} />
              </div>
              <div id="company-name" style={{ fontSize: "30px", marginTop: "10px" }}>
                 <span style={{ color: "white" }}>Retro</span>
              </div>
           </div>

           <div class="nav__menu" id="nav-menu" >
              <ul class="nav__list">
                 <li class="nav__item" ><a href="#home" ><span style={{ color: "white" }} >Home</span></a></li>
                 <li class="nav__item"><a href="#Reservation" ><span style={{ color: "white" }}>Reservation</span></a></li>
                 <li class="nav__item"><a href="#Menu" ><span style={{ color: "white" }}>Menu</span></a></li>
                 <li class="nav__item"><a href="#Blog" ><span style={{ color: "white" }}>Blog</span></a></li>
                 <li class="nav__item"><a href="#Page"><span style={{ color: "white" }}>Page</span></a></li>
                 <li class="nav__item"><a href="#Shop" ><span style={{ color: "white" }}>Shop</span></a></li>
                 <li class="nav__item"><a href="#Contact"><span style={{ color: "#ebe715" }}>Contact</span></a></li>
              </ul>
           </div>

           <div class="nav__toggle" id="nav-toggle">
              <i class='bx bx-menu'></i>
           </div>
        </nav>
     </header>
     <div class="slider">
        <div class="list">
           <div class="item">
              <img src="https://nextrestaurants.com/wp-content/uploads/2019/10/Restaurant-Instagram-Photography.png" alt="Food Image" />
              <div class="text-box" >
                 <h1>Fresh, Fast & delicious!</h1>
                 <p style={{ fontSize: "20px" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <input type="button" value="Book a Table" class="contact__button button1" style={{ marginTop: "15px" }} />
              </div>
           </div>
        </div>
     </div>

     <footer class="footer">
  
              <div class="section10 orange-section">
                 <div class="contain">
                 <div class="col">
                       <h1 ><h3 class="title ">Know About Restro</h3></h1>
                       <ul>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6R9kDzMr-19JxjyjxuDLSFzWNgBPe1QJKA&usqp=CAU" alt="Company Logo" />

                       </ul>
                    </div>
                    <div class="col">
                       <h1 ><h4 class="title ">Opening Hours</h4></h1>
                       <ul>
                          <li>Lorem ipsum dolor sit amet,</li>
                          <li> <span className="spanfontsize spancolor">Monday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">Closed</span></li>
                          <li><span className="spanfontsize spancolor">Tuesday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">10 AM - 11 PM</span></li>
                          <li><span className="spanfontsize spancolor">Wednesday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">10 AM - 11 PM</span>  </li>
                          <li><span className="spanfontsize spancolor">Thrusday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">10 AM - 11 PM</span></li>
                          <li><span className="spanfontsize spancolor">Friday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">10 AM - 11 PM</span></li>
                          <li><span className="spanfontsize spancolor">Saturday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">10 AM - 11 PM</span></li>
                          <li><span className="spanfontsize spancolor">Sunday</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spanfontsize">10 AM - 11 PM</span></li>

                       </ul>
                    </div>
                    <div class="col">
                    <h1 ><h4 class="title ">Contact</h4></h1>
                       <ul>
                          <li><p class="contact-info">203 Abc road, xyz</p><br/>
                         <p class="contact-info"><b className="spancolor">Phone:</b> +1 (123) 456-7890</p><br/>
                         <p class="contact-info"><b className="spancolor">Email:</b> admin@parikshan.net.in</p></li>
                        
                       </ul>
                    </div>
                    <div class="col">
                    <h1><h4  class="title ">Newsletter</h4></h1>
                       <ul>
                          <li>Subscribe our newsletter & get all promo!</li>
                          <li><input className="inputsize"  placeholder="Email Address"></input></li>
                          <li> <input type="button" value="Subscribe" class="contact__button button1" style={{ marginTop: "15px" , color:"black"}} /></li>
                       </ul>
                    </div>
                 </div>
                 <div class="legal">
                    <p>Retro. &copy; 2022 . All rights reserved.</p>
                 </div>
              </div>
           </footer>
        </>

        )
}

export default App;
