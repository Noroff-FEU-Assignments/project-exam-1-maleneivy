const dinnerPostsContainer = document.querySelector(".dinner-posts-on-index-page");

const dinnerUrl = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts?categories=59";

async function fetchBlogs() {

    try {
        const response = await fetch(dinnerUrl);
        const dinnerBlogsPosts = await response.json();

        dinnerPostsContainer.innerHTML = "";
        console.log(dinnerBlogsPosts);
        createDinnerCarousel(dinnerBlogsPosts);

        getDinnerPosts(dinnerBlogsPosts);

    }
    catch (error) { }
}

fetchBlogs();

function createDinnerCarousel(dinnerBlogsPosts) {

    for (let i = 0; i < dinnerBlogsPosts.length; i++) {
        const content = dinnerBlogsPosts[i].content;
        let dateString = dinnerBlogsPosts[i].date;
        let newDate = new Date(dateString);

        let dateOnBlog = `Posted: ${newDate.toDateString()}`

        dinnerPostsContainer.innerHTML += `
        <li class="blog-post-wrapper">
        <div class="latest-blog-post">
        <a href="specificBlog.html?id=${dinnerBlogsPosts[i].id}">
                ${content.rendered}
                <div class="blog-card-date">${dateOnBlog}</div></a>
        </li>
        `
    }

    const blogCards = document.querySelector(".blog-post-wrapper");
    const slideWidth = blogCards.clientWidth;

    const nextBtn = document.querySelector("#next-btn-dinner");
    nextBtn.addEventListener("click", () => {
        dinnerPostsContainer.scrollLeft += slideWidth;
    });

    const prevBtn = document.querySelector("#prev-btn-dinner");
    prevBtn.addEventListener("click", () => {
        dinnerPostsContainer.scrollLeft -= slideWidth;
    });
}
