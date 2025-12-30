import "./Social.css";
import avatar from "../assets/images/avatar-jessica.jpeg";

const Social = () => {
  return (
    <main className="social">
      <div className="social_author">
        <img src={avatar} alt="Jessica Randall profile picture" />
        <h1>Jessica Randall</h1>
        <span>London, United Kingdom</span>
        <p>"Front-end developer and avid reader."</p>
      </div>
      <nav className="author_links">
        <ul>
          <li>
            <a href="https://github.com/jeongbin-k" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/jeongbin-k"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </li>
          <li>
            <a href="#">Linkedln</a>
          </li>
          <li>
            <a href="#">X</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Social;
