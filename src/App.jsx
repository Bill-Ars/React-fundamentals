import "./App.css";
import {
  UserRound,
  MoveRight,
  MoveUpRight,
  SquareArrowUp,
  Mail,
  Heart
} from "lucide-react";

import Message from "./components/Message.jsx";
import Welcome from "./components/Welcome.jsx";

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import CustomButton from "./components/button.jsx";

import Student from "./components/Student.jsx";

import ProductCard from "./components/ProductCard.jsx";



function App() {
 
 
  return (
    <div>
      <Header />
      <Main />

      <Welcome />
      <Message />

  <CustomButton
    leftIcon={<Mail />}
    rightIcon={<MoveRight />}
    text="Sign Up"
    className="btn btn-pagar" />


     
        <Student name="Bill" />
           <Student name="Camilo" />


    <div className="product-list">


     <div> <ProductCard
      name="Laptop HP"
      price={25000}
      ClassName="product-card"
      /></div>
     
    <div><ProductCard
      name="iPhone 15"
      price={60000}
      ClassName="product-card"
    /></div>
    

     <div> <ProductCard
      name="Samsung "
      price={50000}
      ClassName="product-card"
    /></div>
   
    </div>






    <div className="ui-kit">

     

     {/* primeira caixinha vertical */}
      <div  className="caixaVertical1">

        <h1>Button UI Kit</h1>


        <CustomButton
          text="Props"
          className="btnK1" />


          <CustomButton
          text="Instance swap"
          className="btnK1" />

          <CustomButton
          text="Responsive"
          className="btnK1" />


          <CustomButton
          text="Auto layout"
          className="btnK1" />
      </div>





      {/**Segunda caixinha vertical */}
      <div  className="caixaVertical2">
                

                {/* primeira linha */}
        <div className="linha">
          <CustomButton
          text="Label"
          className="btnA1" />
    
          <CustomButton
          text="Label"
          className="btnA2"
          leftIcon={<Heart   fill="white" size={18}/>} />
       
          <CustomButton
          text="Label"
          className="btnA2"
          rightIcon={<Heart   fill="white" size={18}/>} />
       
          
          <CustomButton
        
          className="btnA4"
          rightIcon={<Heart   fill="white" size={18}/>} />
        </div>


        {/**segunda linha */}

        <div className="linha">

          <CustomButton
          text="Label"
          className="btnB1" />

           <CustomButton
          text="Label"
          className="btnB2"
          leftIcon={<Heart   fill="white" size={18}/>} />


          <CustomButton
          text="Label"
          className="btnB2"
          rightIcon={<Heart   fill="white" size={18}/>} />


         <CustomButton
        
          className="btnB4"
          rightIcon={<Heart   fill="white" size={18}/>} />
        </div>


         {/**terceira linha */}

       <div className="linha">

          <CustomButton
          text="Label"
          className="btnC1" />

           <CustomButton
          text="Label"
          className="btnC2"
          leftIcon={<Heart color="purple" fill="purple" size={18} />} />


          <CustomButton
          text="Label"
          className="btnC2"
          rightIcon={<Heart color="purple" fill="purple" size={18} />} />


         <CustomButton
        
          className="btnC4"
          rightIcon={<Heart color="purple" fill="purple" size={18} />} />
        </div>




        {/**Quarta linha */}

       <div className="linha">

          <CustomButton
          text="Label"
          className="btnD1" />

           <CustomButton
          text="Label"
          className="btnD2"
          leftIcon={<Heart color="purple" fill="purple" size={18} />} />


          <CustomButton
          text="Label"
          className="btnD2"
          rightIcon={<Heart color="purple" fill="purple" size={18} />} />


         <CustomButton
        
          className="btnD4"
          rightIcon={<Heart color="purple" fill="purple" size={18} />} />
        </div>




         {/* Quinta linha */}
        <div className="linha">

          <CustomButton
          text="Label"
          className="btnE1" />

           <CustomButton
          text="Label"
          className="btnE2"
          leftIcon={<Heart color="white" fill="white" size={18} />} />


          <CustomButton
          text="Label"
          className="btnE2"
          rightIcon={<Heart color="white" fill="white" size={18} />} />


         <CustomButton
        
          className="btnE4"
          rightIcon={<Heart color="white" fill="white" size={18} />} />
        </div>



        {/* Sexta linha */}
        <div className="linha">

          <CustomButton
          text="Label"
          className="btnF1" />

           <CustomButton
          text="Label"
          className="btnF2"
          leftIcon={<Heart color="black" fill="black" size={18} />} />


          <CustomButton
          text="Label"
          className="btnF2"
          rightIcon={<Heart color="black" fill="black" size={18} />} />


         <CustomButton
        
          className="btnF4"
          rightIcon={<Heart color="black" fill="black" size={18} />} />
        </div>



      </div>

    </div>
    





     
      
    </div>

    

  );


 
}

export default App;