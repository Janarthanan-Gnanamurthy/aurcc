<template>
  <div class="min-h-screen flex flex-col ">
    <main class="">
      <!-- Hero section -->
      <section
        class="bg-cover bg-center relative -z-10"
        :style="'background-image: url(http://localhost:5173/src/assets/' + department.image + ')'"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto md:py-28 py-4 text-white p-9 relative z-10">
          <h1 class="text-xl md:text-4xl font-serif font-bold mb-4">Welcome to {{ department.name }}</h1>
          <p class="text-sm md:text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
          <!--<button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>-->
        </div>
      </section>
      <!-- Horizontal Tabs -->
      <div class="sticky top-0 bg-[white] shadow-md hidden xl:block relative z-10">
        <div class="flex justify-between  px-9  ">
          <nav role="tablist" class="tabs">
            <button role="tab"
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section)"
              :class="{
                'bg-[#21209C] text-white ': currentSection === section,
                'text-black hover:bg-blue-700 hover:text-white ': currentSection !== section
              }"
              class="font-semibold p-4 h-full transition duration-300 ease-in-out tab text-xl relative-z-10 "
            >
              {{ section }}
            </button>
          </nav>
        </div>
      </div>
      <!-- Content sections -->
      <section class=" mx-auto" @scroll="handleScroll">
        <div id="content-sections" class="w-full">
          <div class="px-8 bg-blue-100">
          
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 pb-16 items-stretch">
              <div class="flex flex-col">
                <div class="size-full max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <h2 class="text-2xl md:text-4xl md:p-4 p-3 bg-[#21209c]  text-white font-serif text-center font-medium md:mb-6">About Department</h2>
                  <p class="text-lg md:text-xl text-gray-700 md:p-6 p-4 leading-relaxed">{{ department.description }}</p>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6" style="font-family: 'Clash Grotesk', sans-serif;">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <h3 class="text-2xl md:text-4xl md:p-4 p-3 bg-[#21209c]  text-white font-serif text-center font-medium ">Vision</h3>
                  <div class="md:p-5 p-3 overflow-hidden relative" style="max-height: 300px;">
                    <p class="text-lg md:text-xl text-gray-700 leading-relaxed">{{ department.vision }}</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden ">
                  <h3 class="text-2xl md:text-4xl md:p-4 p-3 bg-[#21209c] text-white font-serif text-center font-medium">Mission</h3>
                  <div class="md:p-5 p-3 overflow-hidden relative" style="md:max-height: 300px;">
                    <ul class="text-lg md:text-xl list-disc pl-5 text-gray-700 space-y-2">
                      <li v-for="mission in department.mission" :key="mission">{{ mission }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

        </div>
        <div id="events" class="pb-8 bg-blue-100">
          <div class="bg-white rounded-lg shadow-md mx-8 ">
          <h2 class="text-2xl md:text-4xl text-center bg-[#21209c] md:p-4 p-2 font-bold rounded-t-lg font-serif text-white">Events</h2>
          <div v-if="currentEvent" class="flex justify-between items-center md:pt-4 md:pb-8 md:px-6 pt-2 pb-4 px-0 bg-[#21209c] rounded-b-lg">
            <button @click="showPreviousEvent" class="md:p-2 p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div class="bg-white shadow-md rounded-lg overflow-hidden flex-grow mx-3">
              <div class="md:p-10 p-2">
                <h3 class="text-sm md:text-lg font-semibold">{{ currentEvent.name }}</h3>
                <p class="text-sm text-gray-700">{{ currentEvent.description }}</p>
                <p class="text-sm text-gray-700">Date: {{ currentEvent.date }}</p>
              </div>
            </div>
            <button @click="showNextEvent" class="md:p-2 p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div v-else>
            <p class="text-lg text-gray-700">No more events to show.</p>
          </div>
          </div>
        </div>
  <!--    <div id="training-and-placements" class="bg-gray-100 py-12">
            <div class="container mx-auto flex lg:w-4/6 ">
              <div class="w-full  mb-8 lg:mb-0">
                <div class="  ">
                  <h2 class="text-2xl font-bold mb-4">Training and Placements</h2>
                  <div class="flex flex-wrap gap-4">
                    <div class="w-full lg:w-1/3">
                      <div class="p-4 flex flex-col items-center justify-center">
                        <p class="text-lg font-bold mb-2">Average Salary</p>
                        <p class="text-xl">{{ department.placements.average_salary }} </p>
                      </div>
                    </div>
                    <div class="w-full lg:w-1/3">
                      <div class="p-4 flex flex-col items-center justify-center">
                        <p class="text-lg font-bold mb-2">Highest Salary</p>
                        <p class="text-xl">{{ department.placements.highest_salary }} </p>
                      </div>
                    </div>
                    <div class="w-full lg:w-1/3">
                      <div class=" p-4 flex items-center justify-center">
                        <p class="text-lg font-bold ml-3">Placement Percentage</p>
                        <p class="text-xl ml-2">{{ department.placements.placement_percentage }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:pl-4">  
                <div class="bg-white rounded-lg p-6">
                  <h2 class="text-2xl font-bold mb-4">Company vsited</h2>
                  <div class="grid grid-cols-3 gap-4 items-center justify-center"><a href="https://www.tcs.com"
                          class="h-[12vh] p-4 flex flex-col items-center justify-center"
                      >
                    <figure><img alt="TCS" src="../assets/tcs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.avasoft.com"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Avasoft" src="../assets/avasoft.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.guvi.in"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Guvi" src="../assets/guvi.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.gighz.net"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Saptang Labs" src="../assets/saptan-labs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://home.barclays/"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="e-con Systems" src="../assets/e-con.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.azentio.com"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Azentio" src="../assets/azentio.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>     -->
          <div id="achievements" class="pb-8 bg-blue-100 mx-auto">
            <div class="border-4 md:border-6 border-[#21209c] mx-8 rounded-lg">
            <h2 class="text-2xl md:text-4xl  md:p-6 p-3 text-center font-serif font-bold md:mb-2 mb-0 text-[#21209c]">Achievements</h2>
            <div class="list-disc md:pl-8 p-2 space-y-4 h-96 overflow-auto ">
              <div v-for="achievement in department.achievements" :key="achievement.name" class="bg-white p-3 md:p-4 border-2 border-gray-900 rounded-md">
                <div class="text-sm md:text-lg font-semibold text-gray-700">
                  {{ achievement.event }} ({{ achievement.date }}):
                </div>
                <div class="text-sm md:text-base text-gray-600">
                  {{ achievement.organized_by }} - <span class="font-medium">{{ achievement.name }}</span>
                </div>
                <div class="text-sm md:text-base font-semibold text-blue-600 mt-1">
                  {{ achievement.awards }}
                </div>
               </div>
            </div>
            </div>
          </div>
      <div id="facility" class=" mx-auto" >
        <h2 class="text-2xl md:text-4xl bg-[#0a0a34] text-center text-[#fdb827] font-serif font-bold md:p-8 p-4">Facility</h2>
        <div class="grid gap-8 bg-blue-100">
          <div 
            v-for="(facility, index) in department.facility" 
            :key="facility.name" 
            :class="index % 2 === 0 ? 'flex flex-col md:flex-row items-center' : 'flex flex-col md:flex-row-reverse items-center'"
          >
            <div class="md:w-1/2 p-4 flex justify-center items-center">
              <img :src="'http://localhost:5173/src/assets/' + facility.image" :alt="facility.name" class="w-full h-auto object-cover md:max-h-[300px] rounded-lg">
            </div>
            <div class="md:w-1/2 md:p-4 p-3">
              <h3 class="text-lg md:text-2xl text-center font-serif mb-2 font-semibold">{{ facility.name }}</h3>
              <ul class="list-disc ml-6 text-base md:text-xl text-gray-700">
                <li v-for="lab in facility.description" :key="lab">{{ lab }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

          <div id="faculty" class=" mx-auto relative ">
            <h2 class="text-2xl md:text-4xl bg-[#3c2813] text-center text-white font-serif font-bold p-4 md:p-8">Faculty</h2>
            <!-- HOD Desk -->
           <div class=" bg-yellow-100" >
              <h3 class="text-2xl md:text-3xl text-center font-semibold pt-5 md:pt-10">HOD Desk</h3>
              <div class="flex justify-center">
                <div 
                  v-for="staff in department.faculty.hod_desk" 
                  :key="staff.email" 
                  class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-10 sm:m-6 md:m-20 items-center border-4 border-black   cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                  @click="showDetails(staff)"
                >
                <div class="w-full flex justify-center px-5 md:px-12 pt-2 md:pt-2 ">
                  <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                    <img :src="'http://localhost:5173/src/assets/' + staff.image" :alt="staff.name" class="w-full h-full object-contain"/>
                  </div>
                </div>
                  <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-gray-100 text-center w-full">
                    <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ staff.name }}</h2>
                    <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.position }}</p>
                    <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.email }}</p>
                  </div>
                </div>
            </div>
          </div>


            <!-- Assistant Professors -->
           <div>
              <h3 class="text-2xl md:text-3xl text-center font-semibold  pt-4 bg-yellow-100">Assistant Professors</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 bg-yellow-100">
                <div 
                  v-for="staff in department.faculty.assistant_professors" 
                  :key="staff.email" 
                  class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col mx-20 sm:mx-6 md:mx-20 my-10 sm:my-3 md:my-10 items-center border-4 border-black cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1" 
                  @click="showDetails(staff)"
                >
                  <div class="w-full flex justify-center  pt-2 md:pt-4">
                    <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                      <img :src="'http://localhost:5173/src/assets/' + staff.image" :alt="staff.name" class="h-full w-full object-contain "/>
                    </div>
                  </div>
                  <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-gray-100 text-center w-full">
                    <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ staff.name }}</h2>
                    <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.position }}</p>
                    <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.email }}</p>
                  </div>
                </div>
              </div>
            </div>


            <div v-if="showPopover" class="modal modal-open">
              <div class="modal-box relative rounded-lg flex flex-col max-w-4xl p-6">
                <!-- Close Button -->
                <button @click="showPopover = false" class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                <!-- Heading -->
                <h1 class="font-bold text-xl md:text-3xl md:mb-10 mb-6 text-center w-full">FACULTY DETAILS</h1>
                <div class="flex flex-col md:flex-row">
                  <!-- Fixed Image -->
                  <div class="flex-shrink-0 text-center md:my-auto md:mr-8 mr-0" >
                    <img :src="'http://localhost:5173/src/assets/' + selectedStaff.image" alt="Profile Picture" class="md:h-96 md:w-72 h-46 w-44 md:ml-0 ml-16 rounded-lg shadow-lg object-cover">
                    <h2 class="text-lg font-semibold mt-4 md:mb-0 mb-4 ">{{ selectedStaff.name }}</h2>
                  </div>
                  <!-- Scrollable Details -->
                  <div class="flex-grow max-h-[50vh] pr-6  shadow-inner">
                    <h3 class="text-base md:text-xl font-semibold"><strong>Position:</strong> {{ selectedStaff.position }}</h3>
                    <h3 class="text-base md:text-xl font-semibold"><strong>Email:</strong> {{ selectedStaff.email }}</h3>
                    <!-- Education -->
                    <template v-if="selectedStaff.education">
                      <h3 class="text-md font-semibold mt-4"><strong>Education</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="edu in selectedStaff.education" :key="edu.degree">{{ edu.degree }}, {{ edu.institution }} ({{ edu.year }})</li>
                      </ul>
                    </template>
                    <!-- Professional Experience -->
                    <template v-if="selectedStaff.professional_experience">
                      <h3 class="text-md font-semibold mt-4"><strong>Professional Experience</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="exp in selectedStaff.professional_experience" :key="exp.position">{{ exp.position }}, {{ exp.institution }} ({{ exp.duration }})</li>
                      </ul>
                    </template>
                    <!-- Research Interests -->
                    <template v-if="selectedStaff.research_interests">
                      <h3 class="text-md font-semibold mt-4"><strong>Research Interests</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="interest in selectedStaff.research_interests" :key="interest">{{ interest }}</li>
                      </ul>
                    </template>
                    <!-- Achievements -->
                    <template v-if="selectedStaff.achievements">
                      <h3 class="text-md font-semibold mt-4"><strong>Achievements</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="achievement in selectedStaff.achievements" :key="achievement">{{ achievement }}</li>
                      </ul>
                    </template>
                    <!-- Links -->
                    <template v-if="selectedStaff.links">
                      <h3 class="text-md font-semibold mt-4"><strong>Links</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="(link, title) in selectedStaff.links" :key="title"><a :href="link" target="_blank" class="text-violet-600 hover:underline">{{ title }}</a></li>
                      </ul>
                    </template>
                    <!-- Additional Details -->
                    <template v-if="selectedStaff.additional_details">
                      <h3 class="text-md font-semibold mt-4">Additional Details</h3>
                      <p>{{ selectedStaff.additional_details }}</p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="administration-and-technical-staff" class=" mx-auto pb-8 bg-yellow-100">
            <h2 class="text-2xl md:text-3xl text-center font-semibold pt-4 ">Administration and Technical Staff</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 bg-yellow-100">
              <div
                v-for="staff in department.admin_staff"
                :key="staff.email"
                class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col mx-20 sm:mx-6 md:mx-20 my-10 sm:my-3 md:my-10 items-center border-2 border-black"
              >
                <div class="w-full flex justify-center pt-2 md:pt-4">
                  <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                    <img :src="'http://localhost:5173/src/assets/' + staff.image" :alt="staff.name" class="w-full h-full object-contain" />
                  </div>
                </div>
                <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-gray-100 text-center w-full">
                  <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ staff.name }}</h2>
                  <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.position }}</p>
                  <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.email }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div id="proud-alumni" class="lg:w-4/6 mx-auto">
            <h2 class="text-2xl font-bold mb-4">Proud Alumni</h2>
            <ul class="list-disc pl-4">
              {{ department.proud_alumni }}
            </ul>
          </div> -->
        </div>
        <div id="research-and-publications" class=" mx-auto">
          <h2 class="text-2xl md:text-4xl bg-indigo-900 text-center text-white font-serif font-bold md:p-8 p-4">Research and Publications</h2>
          <div class="list-disc md:p-6 p-4 md:space-y-4 space-y-2 h-96 overflow-auto bg-indigo-100">
            <div v-for="research in department.research_and_publications" :key="research.title" class="bg-white p-4 border-2 border-gray-200 rounded-lg">
              <div class="text-sm md:text-lg font-semibold text-gray-700">
                {{ research.title }} ({{ research.year }}):
              </div>
              <div class="text-sm md:text-lg text-gray-600">
                {{ research.authors }}
              </div>
              <div class="text-sm md:text-lg font-bold ">
                {{ research.journal }}
              </div>
            </div>
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
      department: null,
      sections: [
        'About Department',
        'Events',
        'Achievements',
        'Facility',
        'Faculty',
        'Administration and Technical Staff',
        'Research and Publications',
      ],
      events: null,
      currentIndex: 0,
      currentSection: null,
      sectionOffsets: [],
      showPopover: false,
      selectedStaff: null
    };
  },
  async created() {
    await this.loadDepartment();
    this.currentSection = this.sections[0];
    this.$nextTick(() => {
      this.updateSectionOffsets();
    });
  },
  methods: {
    async loadDepartment() {
      try {
        const response = await fetch('http://localhost:5173/src/assets/departments.json');
        const departmentsData = await response.json();
        this.department = departmentsData.find(dept => dept.address === this.$route.params.departmentName);
        this.events = this.department.events.reverse()
      } catch (error) {
        console.error('Error loading department:', error);
      }
    },
    scrollToSection(section) {
      const sectionId = section.toLowerCase().replace(/\s+/g, '-');
      const sectionElement = document.getElementById(sectionId);
      const tabHeight = document.querySelector('.sticky').offsetHeight; // Get height of sticky tabs
      if (sectionElement) {
        const offset = sectionElement.offsetTop - tabHeight - 20; // Adjusted offset
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
        this.currentSection = section;
      }
    },
    updateSectionOffsets() {
      this.sectionOffsets = this.sections.map(section => {
        const sectionId = section.toLowerCase().replace(/\s+/g, '-');
        const sectionElement = document.getElementById(sectionId);
        return sectionElement ? sectionElement.offsetTop : 0;
      });
    },
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      for (let i = 0; i < this.sectionOffsets.length; i++) {
        const sectionOffset = this.sectionOffsets[i];
        const nextSectionOffset = this.sectionOffsets[i + 1] || Infinity; // Next section's offset or infinity if last section
        const tabHeight = document.querySelector('.sticky').offsetHeight; // Height of the sticky tabs
        if (scrollPosition >= sectionOffset - tabHeight - 20 && scrollPosition < nextSectionOffset - tabHeight - 20) {
          this.currentSection = this.sections[i];
          break;
        }
      }
    },
    showDetails(staff) {
      this.selectedStaff = staff;
      console.log(staff)
      this.showPopover = true;
    },
    showPreviousEvent() {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    },
    showNextEvent() {
      this.currentIndex = Math.min(this.events.length - 1, this.currentIndex + 1);
    }
  },
  computed: {
    currentEvent() {
      return this.events[this.currentIndex];
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<!-- Add this to your CSS -->
<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
</style>