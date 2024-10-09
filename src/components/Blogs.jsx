import "./Blogs.css"
import Card from "../components/reusables/Card"
import infoBlogs from "./reusables/infoBlogs.js"


const Blogs = () => {
  return (
    <div className="blogs-section">
      <Card title="Our Blogs" />
      <div className="blogs">
        {infoBlogs.map((obj) => (
          <div key={obj.id} className="blogs-specifics">
            <img src={obj.image} />
            <h3>{obj.headline}</h3>
            <p>{obj.text}</p>
            <a href="#">Read more...</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
