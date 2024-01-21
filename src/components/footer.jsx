import { Github } from "lucide-react"

const Footer = () => {
    return (
        <div className="flex justify-around p-6">
            <div><img src="" alt="icon" /></div>
            <div>all rights reserved</div>
            <div className="flex gap-1">
                <a href="https://github.com/AtmaniChouaib22" target="_blank">Atmanichouaib22</a>
                <Github />
            </div>
        </div>
    )
}


export default Footer