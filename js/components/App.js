import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";
export default {
    components: {
        'app-button': AppButton, 
        Assignments
      },
    template: `

          <img class="float-none" src="./img/logo.png" alt="logo" />
       <!--<div class="flex justify-center button-container">
         <app-button :processing="true">Submit</app-button>
       </div> -->
       <assignments></assignments>
`,
};