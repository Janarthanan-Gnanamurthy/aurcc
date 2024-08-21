<template>
  <main class="flex-grow">
    <!-- Hero Section -->
    <section 
      class="hero-section bg-cover bg-center relative -z-10" 
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center relative z-10 px-4 md:px-0">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg font-serif text-white">Library</h1>
        <p class="text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg font-sans text-white">Explore our extensive library resources and services, including books, e-journals, and more.</p>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="container mx-auto py-8 px-4">
      <div class="relative flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 md:w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden mb-4 md:mb-0">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4 text-center md:text-left">
            <h2 class="text-xl md:text-2xl text-white font-bold">Sections</h2>
          </div>
          <div class="space-y-4">
            <button v-for="(section, index) in sections" :key="index" @click="scrollToSection(section)" :class="{'bg-gray-200': activeSection === section}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">{{ section }}</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow md:ml-8 p-4">
          <div v-if="activeSection === 'About Library'" ref="AboutLibrary" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">About Library</h3>
            <p class="text-xl">{{ libraryData.description }}</p>
          </div>

          <div v-if="activeSection === 'E-journals'" ref="EJournals" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">E-journals</h3>
            <p class="text-xl mb-4">{{ libraryData.e_journals.description }}</p>
            <ul class="list-disc pl-6 mb-4">
              <li v-for="feature in libraryData.e_journals.library_salient_features" :key="feature">{{ feature }}</li>
            </ul>
            <p class="text-xl font-semibold mb-2">Library Services:</p>
            <ul class="list-disc pl-6">
              <li v-for="service in libraryData.e_journals.library_services" :key="service">{{ service }}</li>
            </ul>
          </div>

          <div v-if="activeSection === 'Library Resources'" ref="LibraryResources" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Library Resources</h3>
            <p class="text-xl mb-4">{{ libraryData.library_resources.description }}</p>
            <table class="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th class="px-4 py-2 border-b">Books</th>
                  <th class="px-4 py-2 border-b">Reference Books</th>
                  <th class="px-4 py-2 border-b">CDs</th>
                  <th class="px-4 py-2 border-b">Donation Books</th>
                  <th class="px-4 py-2 border-b">Bound Volumes</th>
                  <th class="px-4 py-2 border-b">Project Reports</th>
                  <th class="px-4 py-2 border-b">Subscription to Journals</th>
                  <th class="px-4 py-2 border-b">Journal Binding Volumes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.books }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.reference_books }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.cds }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.donation_books_collection }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.bound_volumes_of_journals }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.project_reports }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.subscription_to_journals }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.journal_binding.volumes }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="activeSection === 'Digital Library'" ref="DigitalLibrary" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Digital Library</h3>
            <p class="text-xl mb-4">{{ libraryData.digital_library.description }}</p>
            <ul class="list-disc pl-6">
              <li>{{ libraryData.digital_library.e_resources }}</li>
              <li>{{ libraryData.digital_library.multimedia }}</li>
            </ul>
          </div>

          <div v-if="activeSection === 'Open Access Resources'" ref="OpenAccessResources" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Open Access Resources</h3>
            <ul class="list-disc pl-6">
              <li v-for="resource in libraryData.open_access_resources" :key="resource">{{ resource }}</li>
            </ul>
          </div>

          <div v-if="activeSection === 'Library Sections'" ref="LibrarySections" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Library Sections</h3>
            <h4 class="text-lg font-semibold mb-2">Reading Hall</h4>
            <p>{{ libraryData.library_section.reading_hall }}</p>
            <h4 class="text-lg font-semibold mb-2">Reference Section</h4>
            <p>{{ libraryData.library_section.reference_section }}</p>
            <h4 class="text-lg font-semibold mb-2">Circulation Section</h4>
            <p>{{ libraryData.library_section.circulation_section }}</p>
            <h4 class="text-lg font-semibold mb-2">Periodical Section</h4>
            <p>{{ libraryData.library_section.periodical_section }}</p>
          </div>

          <div v-if="activeSection === 'Faculty'" ref="Faculty" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 mb-16">
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Faculty</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="faculty in libraryData.faculty" :key="faculty.name" class="bg-white shadow-md rounded-md p-4">
                <h4 class="text-lg font-semibold">{{ faculty.name }}</h4>
                <p>{{ faculty.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
import backgroundImage from '@/assets/library.webp';
import libraryData from '../assets/library.json';

export default {
  data() {
    return {
      backgroundImage,
      libraryData: libraryData,
      sections: [
        'About Library',
        'E-journals',
        'Library Resources',
        'Digital Library',
        'Open Access Resources',
        'Library Sections',
        'Faculty'
      ],
      activeSection: 'About Library'
    };
  },
  methods: {
    scrollToSection(section) {
      const element = this.$refs[section.replace(/ /g, '')];
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 60, // Adjust offset as needed
          behavior: 'smooth'
        });
      }
      this.activeSection = section;
    }
  }
};
</script>

<style scoped>
.hero-section {
  height: 60vh;
  background-size: cover;
  background-position: center;
}
</style>
