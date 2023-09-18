import React from "react";
import  ReactDOM  from "react-dom/client";

const restaurants = [{name:"Ashoka tiffins",
id:1,
img:"https://farm8.staticflickr.com/7613/17099547052_8dc47c1c0d_z.jpg",
cuisines:["breakfast","south indian"],
rating:"4 star"},
{name:"KFC",
id:2,
img:"https://www.pngmart.com/files/22/KFC-PNG-HD.png",
cuisines:["fried chicken","grill chicken"],
rating:"4 star"},
{name:"Burger King",
id:3,
img:"https://farm8.staticflickr.com/7613/17099547052_8dc47c1c0d_z.jpg",
cuisines:["breakfast","south indian"],
rating:"4 star"},
{name:"Donne Biryani",
id:4,
img:"./assets/Burger-Food-PNG.png",
cuisines:["South indian","continental"],
rating:"5 star"},
{name:"Ashoka tiffins",
id:5,
img:"https://farm8.staticflickr.com/7613/17099547052_8dc47c1c0d_z.jpg",
cuisines:["breakfast","south indian"],
rating:"4 star"},{name:"Ashoka tiffins",
id:6,
img:"https://farm8.staticflickr.com/7613/17099547052_8dc47c1c0d_z.jpg",
cuisines:["breakfast","south indian"],
rating:"3,5 star"},{name:"Ashoka tiffins",
id:7,
img:"https://farm8.staticflickr.com/7613/17099547052_8dc47c1c0d_z.jpg",
cuisines:["breakfast","south indian"],
rating:"4.5 star"}]


const Header =()=>{
    return (
        <div className="header">
            <a href="/">
                <img  className="logo"  alt="logo" src="https://fitbottomedgirls.com/wp-content/uploads/2016/09/food-bowl.jpg"/>
            </a>
            <ul>
                <li><h2>Home</h2></li>
                <li><h2>About</h2></li>
                <li><h2>Contact Us</h2></li>
            </ul>
        </div>
       
    )
}

const Rest = (props) =>{
    return(
        <div className="card" key={restaurants.id}> 
        <img src={props.restaurant.img}/>
        <h2>{props.restaurant.name}</h2>
        <h4>{props.restaurant.cuisines.join(",")}</h4>
        <h3>{props.restaurant.rating}</h3>
        </div>
    )
}

const Body =()=>{
    return(
        <div className="restaurant-list" >
        {restaurants.map((rest)=>{
          return <Rest restaurant={rest} key={rest.id}/>
        })}
        </div>
    )

}
const Footer = () =>{
    return <h1>Footer</h1>
}

const App = () =>{
    return (
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)