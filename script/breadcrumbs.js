
function setBreadcrumbs(breadcrumbs) {
    let breadcrumbsContainer = document.querySelector(".breadcrumbs");

    for (let i = 0; i < breadcrumbs.length; i++) {
        let breadcrumb = breadcrumbs[i];

        if (i + 1 < breadcrumbs.length) {
            breadcrumbsContainer.innerHTML += `<a href="${breadcrumb.path}">${breadcrumb.title}</a>`
            breadcrumbsContainer.innerHTML += '<div>/</div>'
        } else {
            breadcrumbsContainer.innerHTML += `<div>${breadcrumb.title}</div>`
        }
    }
}



