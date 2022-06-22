import Assignment from "./Assignment.js"
import AppButton from "./AppButton.js"
import AssignmentTags from "./AssignmentTags.js"
export default {
    components:{
        Assignment, 
        AppButton,
        AssignmentTags
    },
    template: `
    <section v-show="assignments.length">
        <assignment-tags 
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
        />
        <h2 class="font-bold mb-2 drop-shadow">
        {{ title }}
        <span>
            ({{ assignments.length }})
        </span>

        </h2>
        <ul>
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>

        </ul>
      </section>
    `,
    props: {
        assignments: Array,
        title: String,
    },
    data() {
        return {
            currentTag: 'All'
        }
    },
    computed:{
        filteredAssignments() {
            if(this.currentTag === 'All'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}