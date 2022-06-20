export default {
    template: `
    <div class="form-check">
        <li class="rounded bg-[#4fc08d] bevel hover:drop-shadow-lg p-3 mt-2">
            <label class="cursor-pointer form-check-label font-bold inline-block text-white">{{ assignment.name }}
                <input class="cursor-pointer checked:before:content-['&#10003;'] before:text-white before:relative before:bottom-1 before:left-.5 form-check-input h-4 w-4 border-2 border-gray-300 rounded bg-white checked:bg-[#35495e] appearance-none checked:border-[#35495e] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    </div>
    `,
    props:{
        assignment: Object
    }
}