import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
        <h2>Notfound</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas dolore minima iste inventore veritatis cumque culpa assumenda impedit, cum alias fuga reiciendis esse harum veniam quos temporibus iure pariatur.</p>

        <p>Go tto the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}

export default Notfound