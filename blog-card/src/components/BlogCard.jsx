import "./BlogCard.css";
import blogimage from "../assets/images/illustration-article.svg";
import blogname from "../assets/images/image-avatar.webp";

const BlogCard = () => {
  return (
    <article className="BlogCard">
      <div className="blog_image">
        <img src={blogimage} alt="Illustration representing the blog article" />
      </div>
      <div className="blog_content">
        <span className="tag">Learning</span>
        <time dateTime="2023-12-21">Published 21 Dec 2023</time>
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and perssentation.
        </p>
      </div>
      <div className="author">
        <img src={blogname} alt="Avatar of Greg Hooper" />
        <span>Greg Hooper</span>
      </div>
    </article>
  );
};

export default BlogCard;
