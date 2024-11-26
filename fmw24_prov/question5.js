// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.



function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        return response.json(); 
      })
      .then(function (posts) {
        const postsContainer = document.getElementById("posts-container");
  
        
        posts.forEach(function (post) {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
  
          postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
  
          postsContainer.appendChild(postElement);
        });
      })
      .catch(function (error) {
        console.error("Error fetching posts:", error);
      });
  }
  
  
  fetchPosts();
  
  
  
    
