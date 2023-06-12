const User = {
    async render() {
      return `
              <h2>Sidebar<h2>
              `;
    },
  
    async afterRender() {
      const headerElement = document.querySelector('header');
      headerElement.classList.add('remove-content');
    },
  };
  
  export default User;