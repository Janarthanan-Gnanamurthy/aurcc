<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const username = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username.value, password: password.value })
    });
    
    const result = await response.json();

    if (response.ok) {
      alert(result.message);  // Handle successful login
    } else {
      alert(result.message);  // Handle login failure
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
};
</script>

<template>
  <div>
  <header class="bg-[#21209c] text-white">
    <div class=" bg-[#aae0ed] text-black">
      <div  class="container mx-auto px-4 text-sm" style="font-family: 'Clash Grotesk', sans-serif;">
        <div class="p-2 flex items-center justify-between">
          <strong class="text-xl">Counselling Code: <strong>2025</strong> </strong>
          <ul class="flex items-center justify-between">
            <li class="relative group">
              <button class="px-4 py-2">
                Life@aurcc
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/sports" class="block px-4 py-2  hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">Sports</a></li>
                <li><a href="/nss" class="block px-4 py-2  hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">NSS</a></li>
                <li><a href="/tamilmandram" class="block px-4 py-2  hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">kani thamizh paravai</a></li>
                <li><a href="/fine-arts" class="block px-4 py-2  hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">Fine Arts Club</a></li>
                <li><a href="/alumni" class="block px-4 py-2  hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">Alumni</a></li>
              </ul>
            </li>
            <li><a href="/library" class="px-4 py-2  text-black">Library</a></li>
            <li><a href="/hostel" class="px-4 py-2  text-black">Hostel</a></li>
            <li><a href="/contact" class="px-4 py-2  text-black">Contact</a></li>
          </ul>
        </nav>
      </div>
    </ul>
          </div>
        </div>

      </div>

    </div>
    
    <div class="sticky top-0 container mx-auto px-4 py-4">
      <nav class="flex items-center justify-between" style="font-family: 'Clash Grotesk', sans-serif;" >
        <div class="flex items-center">
          <img src="./assets/logo.svg" alt="Logo" class="h-20 mr-4" />
          <RouterLink to="/" class="" activeClass="border-yellow-600">
            <p class="text-5xl font-bold">ANNA UNIVERSITY</p>
            <span class="hidden lg:inline text-2xl font-bold"> REGIONAL CAMPUS COIMBATORE</span>
          </RouterLink>
        </div>
        <div class="hidden lg:flex">
          <ul class="flex space-x-2">
            <li class="relative group">
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827]">
                Administration
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white  shadow-lg  p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-black"
              >
                <li><a href="" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Organogram</a></li>
                <li><a href="/VC" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Vice Chancellor</a></li>
                <li><a href="/Registrar" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Administrator</a></li>
                <li><a href="administration" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Administrative staff</a></li>
                <li><a href="/HOD" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Head of the Departments</a></li>
                <li><a href="/COD" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Centres Directors</a></li>
                <li><a href="" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Dean Office Staff</a></li>

              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827]">
                Academics
              </button>
              <ul
                class="absolute z-50 left-0 mt-2 w-48 bg-white  shadow-lg  p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-black"
              >
                <li><a href="/programs_offered" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Programs Offered</a></li>
                <li><a href="/curriculum_syllabus" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Curriculum & Syllabus</a></li>
                <li><a href="/regulation" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Regulations</a></li>
                <li><a href="/student_affairs" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Student Affairs</a></li>
              </ul>
            </li>
            <li class="relative group">
            <button class=" px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Departments
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white text-black shadow-lg  opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/departments/cse" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Computer Science Engg</a></li>
                <li><a href="/departments/eee" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Electrical and Electronics Engg</a></li>
                <li><a href="/departments/ece" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Electronics and Communications Engg</a></li>
                <li><a href="/departments/mech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Mechanical Engg</a></li>
                <li><a href="/departments/mba" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">MBA</a></li>
                <li><a href="/departments/biotech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Bio-Technology</a></li>
                <li><a href="/departments/nanotech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Nano-Technology</a></li>
                <li><a href="/departments/s&h" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Science & Humanities</a></li>
              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Offices
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 animate-slideDown"
              >
                <li><RouterLink to="/admission" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Admission</RouterLink ></li>
                <li><RouterLink to="/dgate" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">DGATE Cell</RouterLink ></li>
                <li><RouterLink to="/pace-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">PACE Cell</RouterLink ></li>
                <li><RouterLink to="/zonal" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Zonal Office</RouterLink ></li>
                <li><RouterLink to="/office-affiliation" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Office of Affiliation</RouterLink ></li>
                <li><RouterLink to="/distance-education" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Distance Education</RouterLink ></li>
                <li><RouterLink to="/ed-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">ED Cell</RouterLink ></li>
                <li><RouterLink to="/placement-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Placement Cell</RouterLink ></li>
                <li><RouterLink to="/research-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Research Cell</RouterLink ></li>
                <li><RouterLink to="/exam-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Exam cell</RouterLink ></li>
                <li><RouterLink to="/EstateOff" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Estate Office</RouterLink ></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="lg:hidden">
          <button class="btn btn-square btn-ghost text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView style="font-family: 'Clash Grotesk', sans-serif;" />

  <footer class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-700">
      <div class="space-y-4 pb-6 md:pb-0 md:pr-6">
        <h2 class="text-3xl font-extrabold mb-4">Anna University Regional Campus Coimbatore</h2>
        <p class="text-lg">
          Maruthamalai Main Road, Somayampalayam,<br>
          Coimbatore(Dt), Tamil Nadu 641046, India
        </p>
        <p class="text-lg font-semibold">Email: ucedean-kovai@gmail.com</p>
        <h3 class="text-2xl font-bold mb-4">Social media</h3>
        <div class="flex flex-wrap gap-2">
          <a href="https://www.annauniv.edu/" class="transition-transform hover:scale-110">
            <img src="./assets/AN-logo.png" alt="AN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </a>
          <a href="https://www.tn.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="TN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </a>
          <a href="http://india.gov.in" class="transition-transform hover:scale-110">
            <img src="./assets/india.png" alt="India logo" class="w-10 h-10 rounded-full bg-white p-1">
          </a>
          <a href="https://www.annauniv.edu/" class="transition-transform hover:scale-110">
            <img src="./assets/AN-logo.png" alt="AN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </a>
          <a href="https://www.tn.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="TN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </a>
        </div>
      </div>
      
      
      <div class="space-y-4 py-6 md:py-0 md:px-6">
        <h3 class="text-2xl font-bold mb-4">Important Links</h3>
        <div class="flex flex-wrap gap-2">
          <a href="https://www.annauniv.edu/" class="transition-transform hover:scale-110">
            <img src="./assets/AN-logo.png" alt="AN logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a href="https://www.tn.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="TN logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a href="http://india.gov.in" class="transition-transform hover:scale-110">
            <img src="./assets/india.png" alt="India logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a href="#" class="transition-transform hover:scale-110">
            <img src="./assets/mhrd.png" alt="MHRD logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a href="https://www.aicte-india.org/" class="transition-transform hover:scale-110">
            <img src="./assets/aicte.png" alt="AICTE logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a href="https://www.ugc.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/ugc.png" alt="UGC logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
        </div>

      </div>
      
      <div class="space-y-6 pt-6 md:pt-0 md:pl-6">
        <div>
          <h3 class="text-2xl font-bold mb-2">UG Courses</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Computer Science Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Electronics and Communication Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
          </ul>
        </div>
        <div class="border-t border-blue-700 pt-4">
          <h3 class="text-2xl font-bold mb-2">MBA Courses</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Computer Science Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
            <li>Artificial Intelligence and Data Science</li>
          </ul>
        </div>
      </div>
    </div>
    
    <hr class="my-8 border-blue-700">
    
    <div class="flex justify-between items-center">
      <div class="py-2 text-center">
        <p class="text-lg">&copy; {{new Date().getFullYear()}} Anna University Regional Campus Coimbatore. All rights reserved.</p>
      </div>
      <a href="/about" class="text-xl font-bold text-blue-300 hover:text-blue-100 transition-colors">Website Development Team</a> 
    </div>
  </div>
</footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
/* Keyframe animations for slides and fades */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.animate-typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid black; /* Adjust color to match text */
  animation: typewriter 4s steps(40, end) 1s 1 normal both;
}

@keyframes glow {
  0% { text-shadow: 0 0 5px #fff; }
  50% { text-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
  100% { text-shadow: 0 0 5px #fff; }
}

.animate-glow {
  animation: glow 1.5s infinite alternate;
}

@keyframes scaleUp {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.animate-scaleUp {
  animation: scaleUp 1s infinite ease-in-out;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-rotate {
  animation: rotate 4s linear infinite;
}

@keyframes fadeScale {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-fadeScale {
  animation: fadeScale 1s ease-out;
}

@keyframes colorPulse {
  0% { color: #fff; }
  50% { color: #f00; }
  100% { color: #fff; }
}

.animate-colorPulse {
  animation: colorPulse 2s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Animation classes */
.animate-slideInLeft {
  animation: slideInLeft 0.5s ease-out;
}

.animate-slideInRight {
  animation: slideInRight 0.5s ease-out;
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in;
}


/* Styles for running scroll */
.running-scroll {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  animation: pulseAnimation 1.5s infinite; /* New animation */
}

.scroll-content {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-left 15s linear infinite;
}

/* Animation for running scroll */
@keyframes scroll-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Additional animations */
@keyframes pulseAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Apply the new animations */
.admin-interface {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px; /* Adjust width as needed */
}
</style>
