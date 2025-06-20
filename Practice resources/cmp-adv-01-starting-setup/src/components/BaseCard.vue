<template>
    <div>
        <!-- we want to use this component as a wrapper so we need to be able to receive components from the outside using props
         so we set this up in the export script -->
         <!-- slots allow us to use dynamic html content within a compoennt without worrying about props. because props are used to pass data between compoenents, slots act as a cusotm dynamic wrapper for content instead -->
        <header>
            <!-- if nothing is slotted into this slot in the compoennt then it is not rendered because of the if statement -->
            <slot name="header-slot">
                <!-- empty slots can also render default content if this base-card compoennt is used but this slot is not filled-->
                 <!-- <h2>The Default heading if no slot is populated here</h2> -->
            </slot>
        </header>
        <!-- no name slot = default slot -->
            <slot></slot>

    </div>
</template>

<script>
export default {
    mounted() {
        // call this when the component is mounted to the DOM aka when the slots component is being used 
        console.log('BaseCard component mounted!', this.$slots.headerSlot);
    },
};
</script>

<style scoped>

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blue; */
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

</style>