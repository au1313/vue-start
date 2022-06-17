export default {
    template: `
                <button class="hover:bg-[#43a679]  rounded px-5 py-2 bg-[#4fc08d] text-white font-bold drop-shadow-[0_10px_25px_#435466] disabled:cursor-not-allowed" :disabled="processing">
                    <slot />
                </button>
    `,
    data() {
        return {
        processing: true,
        };
    },
};