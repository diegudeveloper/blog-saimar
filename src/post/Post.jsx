import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
            className="postImg"
            src="https://images.pexels.com/photos/20448103/pexels-photo-20448103/free-photo-of-campo-flores-verano-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 Hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
    </div>
  )
}
