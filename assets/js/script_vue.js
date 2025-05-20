$(document).ready(function () {
    $('.fancybox').fancybox({
      helpers: {
        title: {
          type: 'inside'
        }
      }
    });
    Vue.component('section-title', {
        props: ['title'],
        template: `
          <div class="section-title text-center mb-60">
            <h2 class="mb-20 white-color">{{ title }}</h2>
            <div class="horizontal-line">
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
        `
      });
      Vue.component('experience-section', {
        props: ['items'],
        template: `
          <div class="row">
            <div class="col-xs-12 col-sm-12 mobile-mb-30" v-for="(value, index) in items" :key="index">
              <div class="left">
                <div class="single-experi mb-50">
                  <div class="left-text floatleft relative">
                    <div class="dashed-line"></div>
                    <h4 class="montserrat weight-medium mb-5 capitalize light-color">{{ value.company }}</h4>
                    <p class="montserrat weight-medium">{{ value.year }}</p>
                  </div>
                  <div class="right-text">
                    <i class="zmdi zmdi-check-circle"></i>
                    <h3 class="capitalize font-20 light-color">{{ value.role }}</h3>
                    <p>{{ value.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      });

    const url = './assets/data.json';
  
    $.getJSON(url).then(data => {
      new Vue({
        el: '#app', // Make sure all your Vue elements are inside this container in HTML
        data: {
          services: data.services,
          experience: data.experience,
          skills: data.skills,
          projects: data.projects,
          education: data.education,
          certifications: data.certifications,
          contact: data.contact,
          email: data.email,
          location: data.location,
          contactInfo: data.contactInfo
        }
      });
    });
  });
  