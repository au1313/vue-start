export default {
    template: `
    <div class="form-check">
        <li>
            <label class="form-check-label inline-block text-gray-800">{{ assignment.name }}
                <input class="checked:before:content-['&#10003;'] before:text-white before:relative before:bottom-1 before:left-.5 form-check-input h-4 w-4 border-2 border-gray-300 rounded bg-white checked:bg-[#4fc08d] appearance-none checked:border-[#4fc08d] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    </div>
    `,
    props:{
        assignment: Object
    }
}