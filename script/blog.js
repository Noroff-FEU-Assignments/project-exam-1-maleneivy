const blog = document.querySelector(".blog");

const baseUrl = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts";

async function fetchBlogs() {

    try {
        const response = await fetch(baseUrl);
        const blogPosts = await response.json();

        console.log(blogPosts);

        blog.innerHTML = "";

        createHtml(blogPosts);

    }
    catch (error) { }
}

fetchBlogs();

function createHtml(blogPosts) {

    //console.log(blogPosts[0].content);

    for (let i = 0; i < blogPosts.length; i++) {
        const content = blogPosts[i].content;
        const date = blogPosts[i].date;

        blog.innerHTML += `
                           <section class = "post-name"><h2>Blog Post</h2></header>
                           <a href="specificBlog.html?id=${blogPosts[i].id}" class = "wp-block-wpzoom-recipe-card-block-recipe-card">  <div class = "posted-it"><h3>Posted</h3> ${date}</div>${content.rendered} 
                           </a>`
    }
}

