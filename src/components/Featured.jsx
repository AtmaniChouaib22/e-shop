import { useEffect } from "react";
import Card from "./card";

const Featured = () => {
    const dataArray = [] ;
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                dataArray.push(json)
                console.log(dataArray)
            })
            .catch((err) => {
                console.log(err)
            })          
    })
    
  return <div>Featured</div>;
};

export default Featured;
