
import { Link } from "react-router-dom"

const newPage = (props) => {
    return (
        <div>
            <h1>This is my new page</h1>
            <p><Link to="/" >Go to the home page</Link></p>
        </div>
    )
}

export default newPage