const posts = [
  {title: 'Post One', body: 'This is post 1'},
  {title: 'Post Two', body: 'This is post 2'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPosts({ title: 'Post Three', body: 'This is post 3'}, getPosts);