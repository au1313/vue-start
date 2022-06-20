import AssignmentList from "./AssignmentList.js";
import AppButton from "./AppButton.js";
export default {
    template: `
    <section class="space-y-6">
        <form>
            <div class="rounded bg-[#4fc08d] bevel hover:drop-shadow-lg p-3 ">
                <input class="mr-1 add-assignment text-black shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" placeholder="New Assignment" />
                <app-button type="secondary" >Add</app-button>
            </div>
        </form>
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>
    `,
    components:{
        AssignmentList,
        AppButton
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