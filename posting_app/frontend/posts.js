const postsDiv = document.getElementById("posts");

async function getPosts(){

    const response = await fetch("http://localhost:3003/posts");

    const data = await response.json();

    data.posts.forEach(post=>{

        postsDiv.innerHTML += `

        <div class="card">

            <img src="${post.image}">

            <p>${post.caption}</p>

        </div>

        `;

    });

}

getPosts();