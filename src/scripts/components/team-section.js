class TeamSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="team-section">
        <h1 class="text-white text-center mb-5 mt-5">Tim <span class="orangefont">Grave Discover</span></h1>
        <div class="container text-center">
          <div class="row row-cols-4 justify-content-center">
            <div class="card-profile col">
              <div class="team-profiles-pic">
              <img src="./img/ProfilePicZein.jpg" alt="Team Picture">
              </div>
              <h4><strong>Zein Hasyim</strong></h4>
              <h5>Frontend Developer</h5>
              <div class="icons-block d-flex justify-content-center" >
                <a href=""><i class="fab fa-github" alt="Github-icon"></i></a>
                <a href=""><i class="fab fa-instagram" alt="Instagram-icon"></i></a>
                <a href=""><i class="fab fa-linkedin" alt="Linkedin-icon"></i></a>
              </div>
            </div>
            <div class="card-profile col">
              <div class="team-profiles-pic">
                <img src="./img/blankpic.png" alt="Team Picture">
                </div>
              <h4><strong>Dodhy Kurniawan</strong></h4>
              <h5>Frontend Developer</h5>
              <div class="icons-block d-flex justify-content-center">
                <a href=""><i class="fab fa-github" alt="Github-icon"></i></a>
                <a href=""><i class="fab fa-instagram" alt="Instagram-icon"></i></a>
                <a href=""><i class="fab fa-linkedin" alt="Linkedin-icon"></i></a>
              </div>
            </div>
            <div class="card-profile col">
              <div class="team-profiles-pic">
              <img src="./img/ProfilePicFebri.jpg" alt="Team Picture">
              </div>
              <h4><strong>Febri Pujiani</strong></h4>
              <h5>Frontend Developer</h5>
              <div class="icons-block d-flex justify-content-center">
                <a href=""><i class="fab fa-github" alt="Github-icon"></i></a>
                <a href=""><i class="fab fa-instagram" alt="Instagram-icon"></i></a>
                <a href=""><i class="fab fa-linkedin" alt="Linkedin-icon"></i></a>
              </div>
            </div>
            <div class="card-profile col">
              <div class="team-profiles-pic">
              <img src="./img/ProfilePicNovan.jpg" alt="Team Picture">
              </div>
              <h4><strong>Novan Rizki</strong></h4>
              <h5>Frontend Developer</h5>
              <div class="icons-block d-flex justify-content-center">
                <a href=""><i class="fab fa-github" alt="Github-icon"></i></a>
                <a href=""><i class="fab fa-instagram" alt="Instagram-icon"></i></a>
                <a href=""><i class="fab fa-linkedin" alt="Linkedin-icon"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
        `
    }
}

customElements.define('team-section', TeamSection);