import { Link } from "react-router-dom"
const Hero = () => {
    return (
        <div className="flex flex-col gap-4 p-16 justify-center w-full text-center">
            <h1 className="text-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloremque saepe blanditiis sequi, possimus cupiditate? Eius rerum fugiat et quae?</p>
            <div>
                <button className="py-2 px-3 bg-blue-500 rounded"><Link to="/products" className="text-lg text-white">Shop Now</Link></button>
            </div>
        </div>
    )
}


export default Hero 