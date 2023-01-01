function dayOrNight() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function renderPost() {
    let content = document.getElementById('content-posts');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        let autor = getUserFromId(post.autor);
        generatePost(content, post, autor);
    }
}

function generatePost(content, post, autor) {
    content.innerHTML += `
        <div class="post">
            ${generatePostHeader(post.location, autor)}
            ${generatePostPicture(post.picture)}
            ${generateActionButtons()}
            ${generateLikes(post.likes)}    
            ${generatePostText(post.text, autor.name)}
            ${generatePostComment()}          
        </div>`;
}

function generatePostHeader(postLocation, userProfile) {
    return `<div class="post-header">
                <div class="post-profilpicture"><img src="pictures/${userProfile.picture}"></div>
                <div class="post-info">
                    <div class="post-profilname"><span>${userProfile.name}</span></div>
                    <div class="profil-location"><span>${postLocation}</span></div>
                </div>
            </div>`;
}

function generatePostPicture(postPicture) {
    return `<div class="post-picture"><img src="pictures/${postPicture}">
    </div>`;
}

function generateActionButtons() {
    return `<div class="post-content">
                <div class="post-menu">
                    <div class="post-action">
                        <img src="png/heart.png">
                        <img src="png/plaudern.png">
                        <img src="png/paper-airplane.png">
                    </div>
                    <img src="png/goal.png">
                </div>`;
}

function generateLikes(postLikes) {
    return `<div class="post-like">Gefällt <span>${postLikes}</span> mal
    </div>`;
}

function generatePostText(postText, autorName) {
    return ` <div class="post-infotext">               
    <span class="post-autorname">${autorName} </span>
    <span class="post-text">${postText}</span>
</div>
</div>`;
}

function generatePostComment() {
    return `<div class="post-comment">
                <img src="png/happiness.png">
                <div contenteditable data-placeholder="Kommentieren..."></div>
                <button>Posten</button>
            </div>`
}

function getUserFromId(userId) {
    let itemsFound = userprofiles.filter(function(element) {
        return element.id == userId;
    });
    if (itemsFound.length == 1) {
        return itemsFound[0];
    }
    return getUserFromId(0);
}