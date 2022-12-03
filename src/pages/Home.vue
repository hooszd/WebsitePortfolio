<template>
   <Navber />
   <section id="hero">
    <div class="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>{{name}}<span></span></h1>
        <a href="#projects" type="button" class="cta">My Profile</a>
      </div>
    </div>
  </section>
  <!-- End Hero Section  -->

  <!-- Service Section -->
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Kano<span>K</span>wan</h1>
        <p>In three words I can sum up everything I’ve learned about life : it goes on.</p>
      </div>
      <div class="service-item">
        <h2>My experiencers</h2>
        <p>{{experiencers}}</p>
      </div>
    </div>
  </section>
  <!-- End Service Section -->

  <!-- Projects Section -->
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>{{project_name}}</h1>
            <h2>2020</h2>
            <p>{{project_detail}}</p>
          </div>
          <div class="project-img">
            <img src="./pj.jpg" alt="img">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Projects Section -->

  <!-- About Section -->
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="./pf.jpg" alt="img">
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>{{motto}}</h2>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{content}}</p>
      </div>
    </div>
  </section>
  <!-- End About Section -->

  <!-- Contact Section -->
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>kanokwan.doun@bumail.net</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div class="contact-info">
            <h1>Location</h1>
            <h2>{{address}}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->

  <!-- Footer -->
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>K</span>anokwan <span>D</span>oungkeaw</h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
      </div>
      <p>© 2020 Kanokwan  Doungkeaw</p>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navber.vue';
import axios from 'axios'

export default {
    companents: { Navbar },
    methods: {
      async fetcExperience() {
        try {
          let res = await axios.get("https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/experiences")
          this.experiencers = res.data
        } catch (error) {

        }
      }
    },
    data() {
        return {
            name: "Kanokwan Doungkeaw",
            motto: "Be You. Do You. For You.",
            content: "Six years of high school, science-mathematics, learning python programming, circuit connection, resulting in an interest in technology, Programming and choose to study in the field of technology.",
            age: 20,
            address: "Thailand",
            project_name: "Cup sleeves",
            project_detail: "ออกแบบคัพสลิปของโปรเจคคาเฟ่วันเกิดคิมฮันบิน",
            experiencers: []
        }
    },
    beforeMount() {
      this.fetcExperience()
    }
}
</script>

<style>

</style>