<template>
    <ul>

        <!-- type="button" means that it will overwrite the default button = submit finctionality -->
        <li><button type="button" @click="setActive('bad')" :class="{active: modelValue ==='bad'}">Bad</button></li>
        <li><button type="button" @click="setActive('good')" :class="{active: modelValue ==='good'}">Good</button></li>
        <li><button type="button" @click="setActive('great')" :class="{active: modelValue ==='great'}">Great</button></li>

    </ul>
</template>

<script>

export default {

    // using v-model on a custom component requires the following:
    props:[
        'modelValue'
    ],
    emits:[
        'update:modelValue'
    ],
// uaing :modelValue is the prop name, and update:modelValue is the event name and this is the default for v-model
// so using v-model on the component (on the form) will automatically bind the modelValue prop to the component and update it when the event is emitted

    // data(){
    //     return{
    //         isActive: this.modelValue
    //     };
    // },
    // computed:{
    //     // react to changes outside of component
    //     isActive() {
    //         return this.modelValue; 
    // }

    // },

    methods:{
        setActive(option) {
            this.$emit('update:modelValue', option); // Emit the event to update the modelValue prop
        }
    }
}
</script>


<style scoped>
 ul{
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
 }

    li {
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
    }

    button {
        width: 100%;
        font: inherit;
        background-color: #747474;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
    }

    button.active{
        background-color: #0076bb;
    }

</style>