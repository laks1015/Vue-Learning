<template>
    <ul>
        <li  v-for="goal in goals" :key="goal">
        <!-- scoped slots allow you to pass data defined in the slot file (this file) to the component where a slot is being used (app.vue) -->
        <slot :item="goal" anotherProp="this is another prop..."></slot>
            <!-- now this item goal prop will be accessible in the file where the slot component is used (app.vue) -->
        </li>
    </ul>
</template>

<script>

export default ({
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue', 'Become a Vue master!'],
        }
    },
})
</script>
