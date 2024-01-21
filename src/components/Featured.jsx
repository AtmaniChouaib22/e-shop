import { useEffect, useState} from "react";
import Card from "./card";

const Featured = () => {
    const [data , setDataArray] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res=>res.json())
            .then(json=> {
                setDataArray(json)
                console.log(json)
            })
            .catch((err) => {
                console.log(err)
            })          
    },[])
    
  return (
    <div className="flex flex-col items-center gap-6 bg-slate-50 p-8 drop-shadow-lg">
        <h1 className="text-4xl font-bold p-5">Featured Items </h1>
        <div className="flex justify-center flex-wrap gap-5">
            {data.map((item) => (
            <Card title={item.title} price={item.price} image={item.image} key={item.id}/>
            ))}
        </div>
    </div>
  )
};

export default Featured;
