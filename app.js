// These words cannot be apart of the comments given:
// zoom, channel, galvanize, mcsp, garrett, ross, incompetent, unfunny

// If any of these words appear in a comment, they need to be blocked out with dashes eg. ('z---')
let preventWords = ['zoom', 'channel', 'galvanize', 'mcsp', 'garrett', 'ross', 'incompetent', 'unfunny']
const inputForm = document.querySelector('#inputForm')
const commentButton = document.querySelector('.commentButton')
const feed = document.querySelector('.feed');
const submitButton = document.querySelector('.submit')

commentButton.addEventListener('click', () => {
    inputForm.style.display = 'block';
    commentButton.style.display = 'none';
})

submitButton.addEventListener('click', ()=> {
    inputForm.style.display = 'none';
    commentButton.style.display = 'block';
})

const filter = (form) => {
    let string = form.comments.value.toLowerCase().split(' ');
    let newString;
    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        if(current == preventWords[0]){
            current = 'z---'
        } else if(current == preventWords[1]) {
            current = 'c------'
        } else if(current == preventWords[2]) {
            current = 'g--------'
        } else if(current == preventWords[3]) {
            current = 'm---'
        } else if(current == preventWords[4]) {
            current = 'g------'
        } else if(current == preventWords[5]) { 
            current = 'r---'
        } else if(current == preventWords[6]) {
            current = 'i----------'
        } else if (current == preventWords[7]) {
            current = 'u------'
        } else {
            newString = string.join(' ')
        }
        
    }

    inputForm.comments.value = ''
    createFeed(newString);
}

const createFeed = (newString) => {
    let newComment = document.createElement("div")
    newComment.innerHTML = newString;
    feed.prepend(newComment)
}

