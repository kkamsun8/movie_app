import React from "react";
import axios from "axios";


 class App extends React.Component{
   state = {
     isLoading: true,
     movies:[]
   };
   componentDidMount(){
    //  setTimeout(()=>{
    //    this.setState({isLoading: false});
    //  },6000);
    axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
     
   }
   render(){
     const {isLoading} = this.state;
     return (
       <div>
         {isLoading ? "Loading..." : "We are ready"}
       </div>
     )
   }
 }


// const foodILike = [
//   {
//     id : 1,
//     name : "kimchi",
//     image : "http://www.kimchi21.com/good_image/1685371236_s_1.jpg",
//     rating : 3
//   },
//   {
//     id : 2,
//     name : "비빔밥",
//     image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
//     rating : 2
//   },
//   {
//     id : 3,
//     name : "칼국수",
//     image : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Korean.noodle-Kalguksu-01.jpg/220px-Korean.noodle-Kalguksu-01.jpg",
//     rating : 5
//   }
// ];

// function Food(props) {
//   return (
//   <>
//   <h1>I like {props.name}</h1>
//   <h4>{props.rating}</h4>
//   <img src={props.image} alt={props.name}/>
//   </>);
// }

//  Food.propTypes ={
//    name: PropTypes.string.isRequired,
//    image : PropTypes.string.isRequired,
//    rating : PropTypes.number.isRequired
//  };

// function App() {
//   return <div>
//     <h1>Hello</h1>
//     {foodILike.map(arg => <Food key={arg.id} name={arg.name} image={arg.image} rating={arg.rating}/>)}
//   </div>;
// }

export default App;
