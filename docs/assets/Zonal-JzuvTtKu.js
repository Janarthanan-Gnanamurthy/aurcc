import{_ as x,c as s,a as e,F as r,r as d,d as l,t as a,f as c,o as i}from"./index-CxTS1dY1.js";const m=[{description:[" To act as a Liaison Office between the University and the Affiliated Colleges, with regard to conduct of examinations and Central Valuation."," Distribution of answer books and sheets, question papers and other records of the University to the Colleges."," Monitoring the conduct of Practical and Theory Examinations."," Collection of Answer book and other related documents after the Examinations are over."," Arranging for the Central Valuation for the Affiliated Colleges as directed by the Controller of Examinations."],"zone list of colleges":"chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://www.aurcc.ac.in/zonal-list.pdf","Office bearers":[{name:"Dr.S.Chandrakumarmangalam",image:"",designation:"Zonal Coordinator"},{name:"Dr.S.V.Manisekaran",image:"",designation:"Zonal officer"}]}],h="/assets/zonal-list-DSP8Jx5N.pdf",p={data(){return{data:m[0],zonalListPDF:h,activeTab:"description"}},computed:{currentYear(){return new Date().getFullYear()}}},u={class:"flex-grow"},b=c('<section class="bg-cover bg-center relative -z-10" style=""><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div><div class="container mx-auto py-16 text-center relative z-10 flex flex-col items-center text-white"><h1 class="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg font-serif text-black">Zonal Office</h1><p class="text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg font-sans text-black"> Ensuring the seamless coordination between the University and Affiliated Colleges </p></div></section>',1),v={class:"container mx-auto py-8 px-4"},w={class:"relative flex flex-col sm:flex-row"},_={class:"flex-shrink-0 sm:w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden"},y=c('<div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4"><svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="url(#gradient)"></circle><defs><linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)"></stop><stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)"></stop></linearGradient></defs></svg><h2 class="text-xl sm:text-2xl text-white font-bold">Tabs</h2></div>',1),k={class:"space-y-4"},C={class:"flex-grow sm:ml-8 p-4"},D={key:0,class:"bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-lg shadow-lg p-6"},T=e("h3",{class:"text-2xl sm:text-3xl text-white font-bold mb-4"},"Description",-1),z={class:"text-lg sm:text-xl font-medium text-gray-900 list-disc pl-6"},B={key:1,class:"bg-gradient-to-r from-gray-500 to-gray-300 rounded-lg shadow-lg p-6"},L=e("h3",{class:"text-2xl sm:text-3xl text-white font-bold mb-4"},"Zone List of Colleges",-1),O=["src"],Z={key:2,class:"bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg shadow-lg p-6"},A=e("h3",{class:"text-2xl sm:text-3xl text-white font-bold mb-4"},"Office Bearers",-1),V={class:"grid grid-cols-1 md:grid-cols-2 gap-8"},E={class:"text-lg font-semibold"},F={class:"bg-gray-800 text-white py-4"},S={class:"container mx-auto text-center"};function N(P,n,U,Y,t,f){return i(),s("main",u,[b,e("section",v,[e("div",w,[e("div",_,[y,e("div",k,[e("button",{onClick:n[0]||(n[0]=o=>t.activeTab="description"),class:"w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200"},"Description"),e("button",{onClick:n[1]||(n[1]=o=>t.activeTab="zoneList"),class:"w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200"},"Zone List of Colleges"),e("button",{onClick:n[2]||(n[2]=o=>t.activeTab="officeBearers"),class:"w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200"},"Office Bearers")])]),e("div",C,[t.activeTab==="description"?(i(),s("div",D,[T,e("ul",z,[(i(!0),s(r,null,d(t.data.description,(o,g)=>(i(),s("li",{key:g},a(o),1))),128))])])):l("",!0),t.activeTab==="zoneList"?(i(),s("div",B,[L,e("iframe",{src:t.zonalListPDF,class:"w-full h-[500px] sm:h-[700px]",frameborder:"0"},null,8,O)])):l("",!0),t.activeTab==="officeBearers"?(i(),s("div",Z,[A,e("div",V,[(i(!0),s(r,null,d(t.data["Office bearers"],o=>(i(),s("div",{key:o.name,class:"p-6 rounded-lg bg-white shadow-md"},[e("h4",E,a(o.name),1),e("p",null,a(o.designation),1)]))),128))])])):l("",!0)])])]),e("footer",F,[e("div",S,[e("p",null,"© "+a(f.currentYear)+" Zonal Office. All rights reserved.",1)])])])}const G=x(p,[["render",N]]);export{G as default};