const blog = document.querySelector(".blog");


const baseUrl = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts?per_page=100";

async function fetchBlogs() {

    try {
        const response = await fetch(baseUrl);
        const blogPosts = await response.json();

        blog.innerHTML = "";

        createHtml(blogPosts);

    }
    catch (error) { }
}

fetchBlogs();

setBreadcrumbs([
    { path: "/", title: "Home" },
    { path: "/blog.html", title: "Blog" },
])

function createHtml(blogPosts) {

    for (let i = 0; i < blogPosts.length; i++) {
        const content = blogPosts[i].content;

        let dateString = blogPosts[i].date;
        let newDate = new Date(dateString);

        let dateOnBlog = `Posted: ${newDate.toDateString()}`

        blog.innerHTML += `
                           <section class = "post-name">
                           <a href="specificBlog.html?id=${blogPosts[i].id}" class = "wp-block-wpzoom-recipe-card-block-recipe-card">  ${content.rendered} 
                           </a>
                           <div class="blog-card-date">${dateOnBlog}</div></a>  </section>
                           `
    }

    let loadMoreCta = document.querySelector(".load-btn-container");
    let startIndex = 0;
    let count = 9;

    revealPosts(startIndex, count);
    startIndex += count;

    loadMoreCta.onclick = () => {
        revealPosts(startIndex, count);
        startIndex += count;
    }
}

function revealPosts(startIndex, count) {
    let blogPostCards = [...document.querySelectorAll(`.blog .post-name`)];

    for (var x = startIndex; x < startIndex + count; x++) {
        let blogPostCard = blogPostCards[x];

        if (blogPostCard === undefined) {
            let loadMoreCta = document.querySelector(".load-btn-container");
            loadMoreCta.style.display = "none";
        } else {
            blogPostCards[x].style.display = "block";
        }
    }
}