import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    template: `
    <section class="space-y-10">
        <assignment-create @add="add"></assignment-create>
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>
    `,
    components:{
        AssignmentList,
        AssignmentCreate
        
    },
    data() {
        return {
          assignments: [
            { name: "Finish Project", complete: false, id:1, tag:'Math'},
            { name: "Another task", complete: false, id:2, tag: 'Science'},
            { name: "Something else", complete: false, id:3, tag: 'Reading'},
          ],

        }
      },
      computed: {


        filters(){
            return{
               inProgress: this.assignments.filter(assignment => ! assignment.complete),
               completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
      },
      methods: {
        add(name){
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments + 1,
            });
      }
    }
}