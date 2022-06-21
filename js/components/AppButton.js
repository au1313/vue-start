export default {
    template: `
                <button 
                    type="submit"
                    :class="{
                        'rounded px-5 py-2  text-white font-bold drop-shadow-[0_10px_50px_#435466] disabled:cursor-not-allowed m-auto': true,
                        'hover:bg-[#43a679] bg-[#4fc08d] disabled:cursor-not-allowed': type === 'primary',
                        'bg-[#35495e] hover:bg-[#293949]disabled:cursor-not-allowed': type === 'secondary',
                        'bg-gray-200 hover:bg-gray-400 text-black font-normal disabled:cursor-not-allowed': type === 'muted',
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
        };
    },
};