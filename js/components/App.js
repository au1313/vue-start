import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";
export default {
    components: {
        'app-button': AppButton, 
        Assignments
      },
    template: `
          <div class="flex justify-center mt-10">
            <img class="float-none order-first w-20" src="./img/logo.png" alt="logo" />
            <h2 class="drop-shadow mt-5 order-last text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">Vue<span class="accent">Start</span></h2>
          </div>
       <!--<div class="flex justify-center button-container">
         <app-button :processing="true">Submit</app-button>
       </div> -->
       <assignments></assignments>
`,
};