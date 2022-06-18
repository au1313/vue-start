export default {
    template: `
                <button 
                    :class="{
                        'w-72 rounded px-5 py-2  text-white font-bold mt-10 drop-shadow-[0_10px_50px_#435466] disabled:cursor-not-allowed m-auto': true,
                        'hover:bg-[#43a679] bg-[#4fc08d]': type === 'primary',
                        'bg-[#435466] hover:bg-[#3a4959]': type === 'secondary',
                        'bg-gray-200 hover:bg-gray-400 text-black font-normal': type === 'muted',
                        'is-loading': processing
                    }" 
                    :disabled="processing"
                >
                    <slot />
                </button>
    `,
    props: {
        type:{
            type: String,
            default: 'primary'
        },
        processing: {
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
        processing: true,
        };
    },
};