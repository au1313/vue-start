 import AppButton from './AppButton.js';

export default{
   
    template:`
            <form @submit.prevent="add" class="">
            <div class=" mt-10 rounded relative left-[-10%]  lg:left-[-60%] md:left-[-30%] sm:left-[-10%] bg-[#4fc08d] lg:w-[600px] sm:w-[300px] w-[300px] md:w-[400px]  bevel hover:drop-shadow-lg p-3 ">
                <input v-model="newAssignment" class="mr-3 add-assignment lg:w-[490px] md:w-[290px] sm:w-[190px] w-[190px]  text-black shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" placeholder="New Assignment" />
                <app-button type="secondary">Add</app-button>
            </div>
        </form>`,
    components: {
        AppButton
    },
    props: {
        assignments: Array
    },
    data(){
        return{
            newAssignment: ''
        }
    },
    methods: {
          add(){
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments + 1,
            });
            this.newAssignment = '';
        }
    }
}