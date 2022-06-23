const { createApp } = Vue;
const URL_API = "https://pixabay.com/api/";
const API_KEY = "?key=28174097-382d3cd267bff06ee06d0b005&q"

const app = createApp({
    data() {
        return {
            imagenes: [],
        }
    },
    methods: {
        fetchImagenes(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => this.imagenes = data.hits)
                .catch(err => {
                    console.error(err);
                })
        }
    },
    created() {
        this.fetchImagenes(`${URL_API}${API_KEY}=trip+adventure&image_type=photo&pretty=true`);
    }
});

app.component(
    'imagen-item',
    {
        props: ["imagen"],
        data() {
            return {
                url_img: "https://pixabay.com/get/",
            }
        },
        template: `
            <div class="card bg-dark text-white">
              <img :src="imagen.webformatURL" class="card-img" alt="...">
              <div class="card-img-overlay">
                
                 <h5 class="card-title">{{imagen.tags}}</h5>
          
              </div>
            </div>
            <br>
        
        `,
    }
);

app.mount('#app');

