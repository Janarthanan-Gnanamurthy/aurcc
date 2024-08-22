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
      <div class="bg-[#aae0ed] text-black">
        <div class="container mx-auto px-4 text-sm" style="font-family: 'Clash Grotesk', sans-serif;">
          <div class="p-2 flex items-center justify-between animate-fadeIn">
            <strong class="text-xl mr-5 blinking-text">Counselling Code: <strong>2025</strong></strong>
            <ul class="flex items-center justify-between">
              <li class="relative group">
                <button class="px-4 py-2 animate-colorPulse">
                  Life@aurcc
                </button>
                <ul
                  class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 animate-slideDown"
                >
                  <li><a href="/sports" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">Sports</a></li>
                  <li><a href="/nss" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">NSS</a></li>
                  <li><a href="/tamilmandram" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">kani thamizh paravai</a></li>
                  <li><a href="/fine-arts" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">Fine Arts Club</a></li>
                  <li><a href="/alumni" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out text-black hover:text-black">Alumni</a></li>
                </ul>
              </li>
              <li><a href="/library" class="px-4 py-2 text-black hover:animate-bounce">Library</a></li>
              <li><a href="/hostel" class="px-4 py-2 text-black hover:animate-bounce">Hostel</a></li>
              <li><a href="/contact" class="px-4 py-2 text-black hover:animate-bounce">Contact</a></li>
              <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav>
          <ul class="flex space-x-4">
            <li><router-link to="/login" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Admin</router-link></li>
          </ul>
        </nav>
      </div>
    </ul>
          </div>
        </div>
      </div>

      <div class="sticky top-0 container mx-auto px-4 py-4">
        <nav class="flex items-center justify-between" style="font-family: 'Clash Grotesk', sans-serif;">
          <div class="flex items-center animate-slideInLeft">
            <img src="./assets/logo.svg" alt="Logo" class="h-20 mr-4" />
            <RouterLink to="/" class="" activeClass="border-yellow-600">
              <p class="text-5xl font-bold mr-4 animate-fadeScale">ANNA UNIVERSITY</p>
              <span class="hidden lg:inline text-2xl font-bold mr-4 animate-fadeScale">REGIONAL CAMPUS COIMBATORE</span>
            </RouterLink>
          </div>
          <div class="hidden lg:flex animate-slideInRight">
            <ul class="flex space-x-2">
              <li class="relative group">
                <button class="px-4 py-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827]">
                  Administration
                </button>
                <ul
                  class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 animate-slideDown text-black"
                >
                  <li><a href="/organogram" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Organogram</a></li>
                  <li><a href="/VC" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Vice Chancellor</a></li>
                  <li><a href="/Registrar" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Administrator</a></li>
                  <li><a href="administration" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Administrative staff</a></li>
                  <li><a href="/HOD" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Head of the Departments</a></li>
                  <li><a href="/COD" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Centres Directors</a></li>
                  <li><a href="" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Dean Office Staff</a></li>
                </ul>
              </li>
              <li class="relative group">
                <button class="px-4 py-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827] ">
                  Academics
                </button>
                <ul
                  class="absolute z-50 left-0 mt-2 w-48 bg-white shadow-lg p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-black animate-slideDown"
                >
                  <li><a href="/programs_offered" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Programs Offered</a></li>
                  <li><a href="/curriculum_syllabus" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Curriculum & Syllabus</a></li>
                  <li><a href="/regulation" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Regulations</a></li>
                  <li><a href="/student_affairs" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Student Affairs</a></li>
                </ul>
              </li>
              <li class="relative group">
                <button class="px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ">
                  Departments
                </button>
                <ul
                  class="absolute z-20 left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 animate-slideDown"
                >
                  <li><a href="/departments/cse" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Computer Science Engg</a></li>
                  <li><a href="/departments/eee" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Electrical and Electronics Engg</a></li>
                  <li><a href="/departments/ece" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Electronics and Communications Engg</a></li>
                  <li><a href="/departments/mech" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Mechanical Engg</a></li>
                  <li><a href="/departments/mba" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">MBA</a></li>
                  <li><a href="/departments/biotech" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Bio-Technology</a></li>
                  <li><a href="/departments/nanotech" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Nano-Technology</a></li>
                  <li><a href="/departments/s&h" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Science & Humanities</a></li>
                </ul>
              </li>
              <li class="relative group">
              <button class="px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ">
                Offices
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 animate-slideDown"
              >
                <li><a href="/admission" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Admission</a></li>
                <li><a href="/dgate" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">DGATE Cell</a></li>
                <li><a href="/pace-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">PACE Cell</a></li>
                <li><a href="/zonal" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Zonal Office</a></li>
                <li><a href="/office-affiliation" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Office of Affiliation</a></li>
                <li><a href="/distance-education" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Distance Education</a></li>
                <li><a href="/ed-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">ED Cell</a></li>
                <li><a href="/placement-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Placement Cell</a></li>
                <li><a href="/research-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Research Cell</a></li>
                <li><a href="/exam-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Exam cell</a></li>
                <li><a href="/EstateOff" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Estate Office</a></li>
              </ul>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
    
    <footer class="bg-[#21209c] text-white text-center py-4">
      <p class="animate-fadeIn">© 2024 Anna University Regional Campus Coimbatore</p>
    </footer>
    
  </div>
</template>

<style>
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.blinking-text {
  animation: blink 2s infinite;
}

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
#chatbot-container {
  /* Styling for chatbot container */
  z-index: 1000; /* Ensure it appears above other elements */
}
</style>
