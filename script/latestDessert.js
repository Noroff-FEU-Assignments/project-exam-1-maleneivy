const latestDessertContainer = document.querySelector(".latest-dessert-post");

const dessertUrl = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts?categories=122";



async function fetchDesserts() {

    try {
        const response = await fetch(dessertUrl);
        const desserts = await response.json();

        let latestDessert = desserts[0].content.rendered;

        latestDessertContainer.innerHTML = "";

        latestDessertContainer.innerHTML += `
                    <div class=latest-blog-post-dessert>
                        <a href="specificBlog.html?id=${desserts[0].id}"> ${latestDessert}
                        </a>
                    </div>
                    `

    }
    catch (error) { }
}

fetchDesserts();

