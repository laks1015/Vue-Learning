<template>
    <!-- this component acts as a wrapper to other components and doesn't really contain any logic-->
     <div>
        <!-- slot in any html markup here so that it can be wrapped by this div -->
        <slot></slot>
     </div>
</template>

<style scoped>
    div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
    }
</style>