import AssignmentList from "./AssignmentList.js";

export default {
    template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>
    `,
    components:{
        AssignmentList
    },
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


        filters(){
            return{
               inProgress: this.assignments.filter(assignment => ! assignment.complete),
               completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
      },
}