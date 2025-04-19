

const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const Post = document.querySelector('#add-post-form');


async function showPosts() {

    try {
        const res = await fetch('http://localhost:8000/api/posts')    

        if (!res.ok) {
            throw new Error('Failed to fetch posts')
        }
        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postEL = document.createElement('div');
            postEL.textContent = post.title;
            output.appendChild(postEL);
        });

    } catch (error) {
        console.log('Error fetching posts: ', error);
        
    }

    
}


// submit new post
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({title})
        })

        if (!res.ok) {
            throw new Error('Failed to add Post');
        }

        const newPost = await res.json();

        const postEl = document.createElement('div');
        postEl.textContent = newPost.title;
        output.appendChild(postEl);
        showPosts();

    } catch (error) {
        console.error('Error adding post');                
    }
}


// EventListeners
button.addEventListener('click', showPosts);
Post.addEventListener('submit', addPost);