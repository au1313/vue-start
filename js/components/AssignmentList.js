import Assignment from "./Assignment.js"
import AppButton from "./AppButton.js"
export default {
    components:{
        Assignment, 
        AppButton
    },
    template: `
    <section v-show="assignments.length">
        <div class="flex gap-2 mb-10">
            <app-button @click="currentTag = tag" :class="{
                '!bg-[#4fc08d] bevel': tag === currentTag
            }" class="w-30 text-xs" v-for="tag in tags" type="secondary">{{tag}}</app-button>
        </div>
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
        tags() {
            return ['All', ...new Set(this.assignments.map(a => a.tag))];
        },
        filteredAssignments() {
            if(this.currentTag === 'All'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}