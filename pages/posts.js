import axios from 'axios';

function PostsPage({ posts }) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await axios.get('https://api.example.com/posts');
    const posts = response.data;
    return {
        props: { posts },
    };
}

export default PostsPage;