import{_ as f,c as o,a as e,F as b,r as u,n as p,f as m,o as r,e as g,t,d as c,p as v,g as w}from"./index-Q_euvix9.js";const k="University Library",x="The University Library, which has been established in the year 2007 in school of management studies. It is located at the south wing of the new campus building. The total area of the Library building is about 4700 sq.ft. Central Library is a true reflection of Anna University, Regional Centre, Coimbatore culture of excellence which is known in India. Central Library during the year continued to march its mission of facilitating the creation of new knowledge through the collection, organization and dissemination of Information. It offered many knowledge-based services like that of Reference services, Resource sharing, Online journal service, Online Data Base, CD-ROM Databases, Internet browsing and e-services are provided by the library for its users.",S={description:"Resources building is one of the important functions of the library that supports academic and research work of the students, faculty, staff and other users. Library collection comprising of books, journals, thesis, reports, standards, pamphlets and other reading material in science, engineering, technology, humanities, social sciences and management is considered the best asset.",collection:{books:22196,reference_books:2291,cds:250,donation_books_collection:128,bound_volumes_of_journals:202,project_reports:4015,subscription_to_journals:355},journal_binding:{volumes:2751},members_details:[{sino:1,members_details:"Professors, Associate Professors & Assistant Professors",no_of_books:10,validity:"90 days"},{sino:2,members_details:"Teaching Fellow",no_of_books:3,validity:"30 days"},{sino:3,members_details:"Research Scholars",no_of_books:3,validity:"30 days"},{sino:4,members_details:"Non-Teaching Staff",no_of_books:2,validity:"30 days"},{sino:5,members_details:"Students",no_of_books:3,validity:"15 days"}]},D={description:"Digital Library has 32 no of computers systems with high speed internet facility, Central Library is a member of AICTE Consortium, New Delhi. So that it has provides web-based access like IEEE. The library is a part of the institute-wide network and has adequate computing infrastructure to cater to the needs of the users. Library provides over, 10,000 electronic journals (e-journals, Magazines, Conference proceedings) for access to the users with free of cost.",e_resources:"The Central Library provides web-based access to over 10,000 full text journals on institute wide network.",multimedia:"CDs received along with books, internet browsing, PPT, Mini Projects, etc are accessible in the digital Library."},L={description:"Central Library membership with 1. IEEE, 2. DELNET.",library_salient_features:["E-granthalaya Automation Software","Biometric Gate Attendance","Circulation Services","CCTV Security System","Digital Library","Special Collection of books for Competitive Exams and GATE","Interesting Tamizhi Collection of good writers"],library_services:["Circulation Service","Reference Service","Current Awareness Service","Online Journal Services","Reference and information services","Question Bank","Scanning and Print out"]},T=["American Chemical Society","American Institute of Physics","American Physical Society","Annual Review","Cambridge University Press","DOAJ","IAS","Institute of Physics","NTLTD","OAISTER","Oxford University Press","Wiley Online Library","Annual Reviews","Popular Pdf Books in English"],A={reading_hall:"The reading hall has covers 1150 sqft of vast area with good ventilation, lighting facility, 80 no's of users can read at a time in the reading hall. It is very near to the stack section for the user's convenience. It has beautiful chairs & Reading tables with glass partition.",reference_section:"Reference service helps users to make full use of library resources and services. It provides necessary assistance to users in locating information or document of their choice. Reference section consists of valuable books & rare books. There are ready reference books and Long range reference books. Total no of reference section books are 2291.",circulation_section:"The Library issued 7248 books and other documents to its members during the year. In addition to members, 694 visitors including students, research scholars, engineers and faculty members used the library. It is open from 09.00 am to 5.30 pm on all working days.",periodical_section:"Prints as well as e-Journals are subscribed by the Central Library on the recommendations received from the academic departments. Print journals are displayed in the wooden display racks kept on displayed in periodical section. All back volumes have been arranged in pigeon rack hole. Periodical section has received 202 journals both National & International regularly."},C="Users education is an important regular activity of the library to inform, alert, educate and train users about various resources and services of the library. In addition to orientation programmes organized for new students, the library conducted short duration training programmes on 'How to Use the library resources for our faculty and students so that they are able to use these resources more effectively. For users desiring to learn more about any service, online journals access, ready reference, books search or any resource, the library provides one-on-one training. The library also organized interactive sessions on 'Enhancing User Awareness' for new faculty and research scholars to familiarize them with various resources and services. The library makes good use of various mailing lists, and news groups to interact and communicate with the user community, to inform them about the new activities and services, and to obtain their comments and suggestions. A books exhibition was also organized along with the workshop so that the participants as well as AURC, CBE community could browse and select the latest publications for the personal collection or for their libraries.",P=[{name:"Dr. JAYARAMAN",designation:"University Assistant Librarian"},{name:"Dr. P. BASKARAN",designation:"Assistant Librarian"}],j={name:k,description:x,library_resources:S,digital_library:D,e_journals:L,open_access_resources:T,library_section:A,user_education:C,faculty:P},R={data(){return{libraryData:j,sections:["About Library","E-journals","Library Resources","Digital Library","Open Access Resources","Library Sections","Faculty"],activeSection:"About Library",tabWidth:0,tabOffset:0}},mounted(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.updateTabPosition),this.updateTabPosition()},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.updateTabPosition)},methods:{scrollToSection(a){const l=this.$refs[a][0];if(l){const d=l.offsetTop-80;window.scrollTo({top:d,behavior:"smooth"}),this.activeSection=a,this.updateTabPosition()}},handleScroll(){const a=window.scrollY+150;for(let l of this.sections){const d=this.$refs[l][0];if(d){const y=d.offsetTop,s=y+d.offsetHeight;if(a>=y&&a<s){this.activeSection=l,this.updateTabPosition();break}}}},updateTabPosition(){this.$nextTick(()=>{const a=this.$el.querySelector("button.bg-[#006994]");if(a){const l=this.$el.querySelector(".tabs");this.tabWidth=a.offsetWidth,this.tabOffset=a.offsetLeft-l.scrollLeft}})}}},h=a=>(v("data-v-ebbac1ed"),a=a(),w(),a),E={class:"min-h-screen flex flex-col"},I=m('<section class="bg-cover bg-center relative h-64" style="" data-v-ebbac1ed><div class="absolute top-0 left-0 w-full h-full bg-black opacity-50" data-v-ebbac1ed></div><div class="container mx-auto py-16 text-white p-9 relative z-10" data-v-ebbac1ed><h1 class="text-4xl font-bold mb-4" data-v-ebbac1ed>Library</h1><p class="text-xl mb-8" data-v-ebbac1ed>Explore our extensive library resources and services, including books, e-journals, and more.</p></div></section>',1),B={class:"sticky top-0 bg-white shadow-md z-10"},z={class:"relative"},O={class:"flex overflow-x-auto whitespace-nowrap tabs"},N=["onClick"],U={class:"container mx-auto py-8 p-4"},F={class:"text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300"},J={key:0},V={class:"text-xl mb-8"},q={key:1},W={class:"list-disc pl-4"},M=h(()=>e("p",null,"Library Services:",-1)),H={class:"list-disc pl-4"},G={key:2},Y={class:"min-w-full bg-white border border-gray-200"},K=h(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2 border-b"},"Books"),e("th",{class:"px-4 py-2 border-b"},"Reference Books"),e("th",{class:"px-4 py-2 border-b"},"CDs"),e("th",{class:"px-4 py-2 border-b"},"Donation Books"),e("th",{class:"px-4 py-2 border-b"},"Bound Volumes"),e("th",{class:"px-4 py-2 border-b"},"Project Reports"),e("th",{class:"px-4 py-2 border-b"},"Subscription to Journals"),e("th",{class:"px-4 py-2 border-b"},"Journal Binding Volumes")])],-1)),Q={class:"px-4 py-2 border-b"},X={class:"px-4 py-2 border-b"},Z={class:"px-4 py-2 border-b"},$={class:"px-4 py-2 border-b"},ee={class:"px-4 py-2 border-b"},se={class:"px-4 py-2 border-b"},te={class:"px-4 py-2 border-b"},oe={class:"px-4 py-2 border-b"},re={key:3},ie={class:"list-disc pl-4"},ae={key:4},ne={class:"list-disc pl-4"},le={key:5},ce=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Reading Hall",-1)),de=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Reference Section",-1)),be=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Circulation Section",-1)),ue=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Periodical Section",-1)),he={key:6},ye={class:"grid grid-cols-1 md:grid-cols-2 gap-8"},_e={class:"text-lg font-semibold"};function fe(a,l,d,y,s,_){return r(),o("div",E,[I,e("div",B,[e("div",z,[e("div",O,[(r(!0),o(b,null,u(s.sections,(i,n)=>(r(),o("button",{key:n,onClick:pe=>_.scrollToSection(i),class:g([{"bg-[#006994] text-white":s.activeSection===i,"text-black bg-white hover:bg-[#006994] hover:text-white":s.activeSection!==i},"font-semibold p-4 text-xl transition duration-300 ease-in-out relative"])},t(i),11,N))),128))]),e("div",{class:"absolute bottom-0 left-0 h-1 bg-[#006994] transition-all duration-300 ease-in-out",style:p({width:s.tabWidth+"px",transform:`translateX(${s.tabOffset}px)`})},null,4)])]),e("section",U,[(r(!0),o(b,null,u(s.sections,i=>(r(),o("div",{key:i,ref_for:!0,ref:i,class:"mb-16"},[e("h2",F,t(i),1),i==="About Library"?(r(),o("div",J,[e("p",V,t(s.libraryData.description),1)])):c("",!0),i==="E-journals"?(r(),o("div",q,[e("p",null,t(s.libraryData.e_journals.description),1),e("ul",W,[(r(!0),o(b,null,u(s.libraryData.e_journals.library_salient_features,n=>(r(),o("li",{key:n},t(n),1))),128))]),M,e("ul",H,[(r(!0),o(b,null,u(s.libraryData.e_journals.library_services,n=>(r(),o("li",{key:n},t(n),1))),128))])])):c("",!0),i==="Library Resources"?(r(),o("div",G,[e("p",null,t(s.libraryData.library_resources.description),1),e("table",Y,[K,e("tbody",null,[e("tr",null,[e("td",Q,t(s.libraryData.library_resources.collection.books),1),e("td",X,t(s.libraryData.library_resources.collection.reference_books),1),e("td",Z,t(s.libraryData.library_resources.collection.cds),1),e("td",$,t(s.libraryData.library_resources.collection.donation_books_collection),1),e("td",ee,t(s.libraryData.library_resources.collection.bound_volumes_of_journals),1),e("td",se,t(s.libraryData.library_resources.collection.project_reports),1),e("td",te,t(s.libraryData.library_resources.collection.subscription_to_journals),1),e("td",oe,t(s.libraryData.library_resources.journal_binding.volumes),1)])])])])):c("",!0),i==="Digital Library"?(r(),o("div",re,[e("p",null,t(s.libraryData.digital_library.description),1),e("ul",ie,[e("li",null,t(s.libraryData.digital_library.e_resources),1),e("li",null,t(s.libraryData.digital_library.multimedia),1)])])):c("",!0),i==="Open Access Resources"?(r(),o("div",ae,[e("ul",ne,[(r(!0),o(b,null,u(s.libraryData.open_access_resources,n=>(r(),o("li",{key:n},t(n),1))),128))])])):c("",!0),i==="Library Sections"?(r(),o("div",le,[ce,e("p",null,t(s.libraryData.library_section.reading_hall),1),de,e("p",null,t(s.libraryData.library_section.reference_section),1),be,e("p",null,t(s.libraryData.library_section.circulation_section),1),ue,e("p",null,t(s.libraryData.library_section.periodical_section),1)])):c("",!0),i==="Faculty"?(r(),o("div",he,[e("div",ye,[(r(!0),o(b,null,u(s.libraryData.faculty,n=>(r(),o("div",{key:n.name,class:"bg-white shadow-md rounded-md p-4"},[e("h3",_e,t(n.name),1),e("p",null,t(n.designation),1)]))),128))])])):c("",!0)]))),128))])])}const ge=f(R,[["render",fe],["__scopeId","data-v-ebbac1ed"]]);export{ge as default};