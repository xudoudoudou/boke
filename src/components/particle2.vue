<template>
  <div class="particle">
    <div id="particleCanvas"></div>
  </div>
</template>

<script>
import particles from 'particles.js'
export default {
    name: 'particle',
    data: function() {
      return {
      }
    },
    mounted() {
      document.getElementById('particleCanvas').width = window.innerWidth
      document.getElementById('particleCanvas').height = window.innerHeight
       particlesJS('particleCanvas',{"particles": {
          "number": {
            "value": 80,//粒子数量
            "density": {//粒子的稀密程度
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": '#ffffff'
          },
          "shape": {
            // circle, edge, triangle, polygon, star, image
            "type": 'circle',
            "stroke": {
              "width": 0,
              "color": "#192231"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": "0.7",
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": "5",
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": "true",
            "distance": "150",
            "color": "#ffffff",
            "opacity": "0.4",
            "width": "2"
          },
          "move": {
            "enable": true,
            "speed": "3",
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": "true",
              "mode": "grab"
            },
            "onclick": {
              "enable": "true",
              "mode": "push"
            },
            "onresize": {
              "enable": true,
              "density_auto": true,
              "density_area": 400
            }
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true});
        console.log('---',this)
       
       
    }
}
</script>

<style scoped>
.particle{
  background: pink;
  z-index: -100;
}
</style>