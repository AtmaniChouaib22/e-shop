import { Link } from "react-router-dom"
const Hero = () => {
    return (
        <div className="flex flex-col gap-3 p-5">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloremque saepe blanditiis sequi, possimus cupiditate? Eius rerum fugiat et quae?</p>
            <div>
                <button><Link to="/products">Shop Now</Link></button>
            </div>
        </div>
    )
}


export default Hero 