export const app = {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        this.posts = data.slice(0, 5); // Load only first 5 posts
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  template: `
    <div>
      <h1>Posts</h1>
      <button @click="fetchPosts">Load Posts</button>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <strong>{{ post.title }}</strong>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  `
};
  