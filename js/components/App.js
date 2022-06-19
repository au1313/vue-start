import AppButton from "./AppButton.js";
export default {
    components: {
        'app-button': AppButton
      },
    template: `

          <img class="float-none" src="./img/logo.png" alt="logo" />
       <!--<div class="flex justify-center button-container">
         <app-button :processing="true">Submit</app-button>
       </div> -->
       <section v-show="inProgressAssignments.length">
        <h2 class="font-bold mb-2">In Progress</h2>
        <ul>
          <li 
              v-for="assignment in inProgressAssignments"
              :key="assignment.id"
          >
            <label>{{ assignment.name }}</label>
              <input type="checkbox" v-model="assignment.complete">
        </li>

        </ul>
      </section>
      <section class="mt-8"  v-show="completedAssignments.length">
        <h2 class="font-bold mb-2">Completed</h2>
        <ul>
          <li v-for="assignment in completedAssignments" :key="assignment.id">
            <label>{{ assignment.name }}</label>
              <input type="checkbox" v-model="assignment.complete">
            </li>
             
        </ul>
      </section>`,
    data() {
        return {
          assignments: [
            { name: "Finish Project", complete: false, id:1},
            { name: "Another task", complete: false, id:2 },
            { name: "Something else", complete: false, id:3 },
          ],
        }
      },
      computed: {
        completedAssignments(){
          return this.assignments.filter(assignment => assignment.complete);
        },
        inProgressAssignments(){
          return this.assignments.filter(assignment => !assignment.complete)
        }
      },
};