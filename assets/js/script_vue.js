$(document).ready(function () {
    $('.fancybox').fancybox({
        helpers: {
            title: {
                type: 'inside'
            }
        }

    });
}); // ready

//    $( '[data-fancybox="images"]' ).fancybox({
//     infobar : false,
//     caption : function( instance, item ) {
//       var caption = $(this).data('caption') || '';

//       return ( caption.length ? caption + '<br />' : '' ) + 'Image <span data-fancybox-index></span> of <span data-fancybox-count></span>';
//     }
//   });


const url = './assets/data.json';
$.getJSON(url).then(data => {
    var services = new Vue({
        el: '#services',
        data: { services: data.services },
    })
    console.log(data.projects);
    var experience = new Vue({
        el: '#experience',
        data: { experience: data.experience },
    })
    var skills = new Vue({
        el: '#skills',
        data: { skills: data.skills },
    })
    var projects = new Vue({
        el: '#projects',
        data: { projects: data.projects },
    })
    var education = new Vue({
        el: '#education',
        data: { education: data.education },
    })
    var certifications = new Vue({
        el: '#certifications',
        data: { certifications: data.certifications },
    })

    var location = new Vue({
        el: '#location',
        data: { location: data.location },
    })
    var email = new Vue({
        el: '#email',
        data: { email: data.email },
    })
    var contact = new Vue({
        el: '#contact',
        data: { contact: data.contact },
    })


})
//created() -> calls before the DOM is rendered
//mounted() -> calls after the DOM is rendered
//Computed()