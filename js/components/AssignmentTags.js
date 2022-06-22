import AppButton from "./AppButton.js";

export default{
    components:{
        AppButton
    },
    template:`
        <div class="flex gap-2 mb-10 ml-[-30px]">
            <app-button @click="$emit('update:currentTag', tag)" :class="{
                '!bg-[#4fc08d] bevel': tag === modelValue
            }" class="w-30 text-xs" v-for="tag in tags" type="secondary">{{tag}}</app-button>
        </div>
    `,
    props:{
        initialTags: Array,
        currentTag: String,
    },

    computed:{
        tags() {
            return ['All', ...new Set(this.initialTags)];
        },
    }
}