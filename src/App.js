import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      {/*
        alt is a function for the visually impaired,
        and React is recommeded to use it.
       */}
      <img src={picture} alt={name}/>
      <h4>{rating}/5</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodList = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://m.gungangmall.co.kr/web/product/big/201607/861_shop1_630241.png",
    rating : 5
  },
  {
    id : 2,
    name : "Sagyeopsal",
    image : "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating : 4.8
  }
]

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />
// }
// This is the same code as above.
// {foodList.map( dish => (<Food name={dish.name} picture={dish.image} />))}



function App() {
  return (
    <div className="App">
      {/* dish is foodList Obejct.
          If you don't define a key value when using a list in JavaScript, 
          you can see that there is an error in the web browser console.
          However, it is not a problem for execution.
          This key allows uniqueness as the index number of a list object.
      */}
      {foodList.map( dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

export default App;
