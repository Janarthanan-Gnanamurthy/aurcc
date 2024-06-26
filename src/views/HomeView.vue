<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 right-0 z-40">
      <a v-for="item in menuItems" :key="item" :href="'#' + item.toLowerCase()" class="block py-2 text-blue-800 hover:text-blue-600 transition-colors">{{ item }}</a>
    </div>

    <main>
      <section class="hero min-h-screen relative overflow-hidden">
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="../assets/videoplayback.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="hero-overlay bg-black bg-opacity-75 z-10" ></div>

    <div class="relative z-10 text-center text-white">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">Welcome to Anna University</h1>
      <p class="text-xl md:text-2xl mb-8">Empowering Minds, Shaping Futures</p>
      <a href="#about" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors">Learn More</a>
    </div>
  </section>



      <!-- About Section -->
      <section id="about" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">About Our Campus</h2>
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <img src="../assets/campus.jpg" alt="Campus" class="rounded-lg shadow-lg" />
            </div>
            <div class="md:w-1/2 md:pl-8">
              <p class="text-lg mb-4">
                The Regional Campus Coimbatore of Anna University, established in 2012, offers world-class education in Engineering and Technology. Nestled in a serene environment away from the city's hustle, our campus boasts state-of-the-art infrastructure and a team of highly qualified faculty members.
              </p>
              <p class="text-lg">
                We are committed to providing hands-on experience to our students, enabling them to master their skills in various disciplines and prepare for the challenges of the future.
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- college stats -->
      <div class="flex flex-wrap bg-gray-900 text-white p-8 ">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <!-- 15 years of delivering quality education -->
          <div class="flex flex-col items-center p-4">
            <svg class="text-yellow-500 mb-2 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <p class="text-2xl font-bold text-yellow-500">15 years</p>
            <p class="text-sm text-gray-300 text-center">of delivering quality education</p>
          </div>

          <!-- 7th rank in Coimbatore for TNEA 2023 -->
          <div class="flex flex-col items-center p-4">
            <svg class="text-yellow-500 mb-2 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <p class="text-2xl font-bold text-yellow-500">7th rank</p>
            <p class="text-sm text-gray-300 text-center">in Coimbatore for TNEA 2023</p>
          </div>

          <!-- 100% admission rate -->
          <div class="flex flex-col items-center p-4">
            <svg class="text-yellow-500 mb-2 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <p class="text-2xl font-bold text-yellow-500">100%</p>
            <p class="text-sm text-gray-300 text-center">admission rate</p>
          </div>

          <!-- 19th out of 450+ engineering institutions in TN -->
          <div class="flex flex-col items-center p-4">
            <svg class="text-yellow-500 mb-2 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <p class="text-2xl font-bold text-yellow-500">19th</p>
            <p class="text-sm text-gray-300 text-center">out of 450+ engineering institutions in TN</p>
          </div>

          <!-- An Autonomous Institution -->
          <div class="flex flex-col items-center p-4">
            <svg class="text-yellow-500 mb-2 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <p class="text-2xl font-bold text-yellow-500">An Autonomous</p>
            <p class="text-sm text-gray-300 text-center">Institution</p>
          </div>
        </div>
      </div>


      <!-- Dean's Message Section -->
      <section id="deans-message" class="py-24 bg-gradient-to-r from-[#21209c] to-indigo-500 text-white">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-12">From the Dean's Desk</h2>
          <div class="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter backdrop-blur-lg">
            <div class="md:w-1/3">
              <img src="../assets/dean.jpg" alt="Dean's Photo" class="w-full h-full object-cover" />
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-2xl font-semibold mb-4">Prof. Samantha Johnson</h3>
              <p class="text-indigo-200 mb-6 italic">"Empowering the next generation of innovators and leaders."</p>
              <p class="mb-4">
                Welcome to Anna University! Our institution stands at the forefront of technological education and research. We are committed to nurturing not just skilled professionals, but visionary leaders who will shape the future of our society.
              </p>
              <p class="mb-4">
                Our world-class faculty, cutting-edge facilities, and industry partnerships provide an unparalleled learning environment. We encourage our students to push boundaries, think critically, and innovate fearlessly.
              </p>
              <p>
                Join us in this exciting journey of discovery and growth. Together, let's build a brighter, more sustainable future through the power of education and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Section -->
      <section class="bg-[#f1f1f1] w-full py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-8 text-[#21209c] animate-fade-in-up">Programs Offered</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
        <div class="bg-[#fdb827] p-2 rounded-full">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <router-link to='/departments/cse'>
          <h3 class="font-bold text-white">B.E. Computer Science Engg</h3>
          <p class="text-sm text-gray-300">CSE Department</p>
        </router-link>
      </div>

      <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
        <div class="bg-[#fdb827] p-2 rounded-full">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <router-link to='/departments/cse'>
          <h3 class="font-bold text-white">B.Tech Artificial Intelligence and DataScience</h3>
          <p class="text-sm text-gray-300">CSE Department</p>
        </router-link>
      </div>

      <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
        <div class="bg-[#fdb827] p-2 rounded-full">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-white">B.E. Electrical and Electrical Engg</h3>
          <p class="text-sm text-gray-300">EEE Department</p>
        </div>
      </div>

      <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
        <div class="bg-[#fdb827] p-2 rounded-full">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-white">B.E. Electrical and Electronics Engg</h3>
          <p class="text-sm text-gray-300">ECE Department</p>
        </div>
      </div>

      <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
        <div class="bg-[#fdb827] p-2 rounded-full">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-white">B.E. Mechanical Engg</h3>
          <p class="text-sm text-gray-300">Mechanical Department</p>
        </div>
      </div>

      <div class="text-lg bg-[#fdb827] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
        <div class="bg-[#21209c] p-2 rounded-full">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-[#23120b]">MBA</h3>
          <p class="text-sm text-gray-700">MBA Department</p>
        </div>
      </div>
    </div>
  </div>
</section>


  <!-- Gallery Section -->
  <section id="gallery" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-[#21209c]">Gallery of Memories IG</h2>
      <div class="relative flex items-center justify-center gap-8">
        <div @click="prevImage" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#21209c]  text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 z-30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <!-- <img :src="prevImageSrc" alt="Previous Image" class="w-1/3 h-48 object-cover opacity-75 transition-opacity duration-500 ease-in-out" /> -->
        <div class=" flex w-1/2">
          <div v-for="(image, index) in galleryImages" :key="index" class="flex-shrink-0 w-full transition-transform transform duration-500 ease-in-out px-6" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
            <div class="relative group">
              <img :src="image.src" :alt="image.alt" class="w-full h-72  object-cover rounded-lg shadow-md" />
              <div class="absolute bottom-0 h-2/5 w-full bg-gray-800 bg-opacity-75 rounded-b-md flex items-center justify-center">
                <p class="text-white text-center px-4">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <img :src="nextImageSrc" alt="Next Image" class="w-1/3 h-48 object-cover opacity-75 transition-opacity duration-500 ease-in-out" /> -->
        <div @click="nextImage" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#21209c]  text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <button 
          v-for="(image, index) in galleryImages" 
          :key="index" 
          @click="goToSlide(index)" 
          class="w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors"
          :class="index === currentImageIndex ? 'bg-indigo-600' : 'bg-indigo-300'"
        ></button>
      </div>
    </div>
  </section>


      <!-- Testimonials Section -->
      <section id="testimonials" class="py-24 bg-indigo-100">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-12 text-indigo-800">Voices of Success</h2>
          <div class="relative">
            <div class="overflow-hidden">
              <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 px-4">
                  <div class="bg-white text-gray-800 rounded-lg p-8 shadow-xl">
                    <p class="text-xl italic mb-6">"{{ testimonial.message }}"</p>
                    <div class="flex items-center">
                      <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <p class="font-bold text-lg">{{ testimonial.name }}</p>
                        <p class="text-indigo-600">{{ testimonial.branch }}, {{ testimonial.batch }}</p>
                        <p class="text-sm text-gray-600">{{ testimonial.company }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-[#21209c]  text-white p-2 rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full focus:outline-none hover:bg-indigo-700 transition-colors">
              &gt;
            </button>
          </div>
          <div class="flex justify-center mt-8">
            <button 
              v-for="(dot, index) in testimonials.length" 
              :key="index" 
              @click="goToSlide(index)" 
              class="w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors"
              :class="index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-300'"
            ></button>
          </div>
        </div>
      </section>
    </main>


  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ['About', 'Programs', 'Testimonials', 'Contact'],
      mobileMenuOpen: false,
      programs: [
        { name: 'Computer Science Engineering', image: '../assets/cse.jpg', description: 'Learn cutting-edge technologies and software development.' },
        { name: 'Electrical Engineering', image: '../assets/ee.jpg', description: 'Explore power systems, control, and electrical machines.' },
        { name: 'Mechanical Engineering', image: '../assets/me.jpg', description: 'Study mechanics, thermodynamics, and manufacturing processes.' },
      ],
      form: {
        name: '',
        email: '',
        message: '',
      },
      testimonials: [
        {
          name: 'Adithya M',
          branch: 'EEE',
          batch: '2015 Batch',
          company: 'SIEMENS',
          message: 'I am truly proud to have graduated from Anna University. The exceptional opportunities provided here enabled me to excel in every aspect, leading to my employment at Siemens, Bangalore.',
          image: "../assets/pic1.webp",
        },
        {
          name: 'Pathi R',
          branch: 'CSE',
          batch: '2016 Batch',
          company: 'Google',
          message: 'My journey at Anna University was transformative. The rigorous curriculum and supportive faculty prepared me well for the challenges in the tech industry.',
          image: "../assets/pic2.webp",
        },
        {
          name: 'Priya S',
          branch: 'Mechanical',
          batch: '2017 Batch',
          company: 'Tesla',
          message: 'The hands-on experience and industry exposure at Anna University were invaluable. It gave me the confidence to pursue my dreams and land a job at Tesla.',
          image: "../assets/pic3.webp",
        },
      ],
      currentIndex: 0,
      galleryImages: [
        { src: 'src/assets/1.webp', alt: 'Gallery Image 1', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/4.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/computer-lab.webp', alt: 'Gallery Image 3', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/cse-girls-closeup.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
      ],
      currentImageIndex: 1,
      
    };
  },
  computed: {
    prevImageSrc() {
      const prevIndex = (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
      return this.galleryImages[prevIndex].src;
    },
    nextImageSrc() {
      const nextIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
      return this.galleryImages[nextIndex].src;
    }
  },

  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-h-9 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.carousel-item {
  transition: transform 0.5s ease-in-out;
}

/* Add any additional custom styles here */
</style>