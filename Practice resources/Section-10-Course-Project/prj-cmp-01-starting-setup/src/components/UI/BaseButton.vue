<template>
    <!-- this is going to be a wrapper for the button styling -->
    <button :class="mode">
        <!-- content inside the button gets passed into this slot -->
        <slot></slot>
    </button>
</template>

<script>

export default {
    // let's configure what this button does through props
    props: ['mode'],

}
</script>


<style scoped>
    button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    color: white;
    cursor: pointer;
    }

    button:hover,
    button:active {
    background-color: #270041;
    border-color: #270041;
    }

    .flat {
    background-color: transparent;
    color: #3a0061;
    border: none;
    }

    .flat:hover,
    .flat:active {
    background-color: #edd2ff;
    }
</style>