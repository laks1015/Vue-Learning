<template>
    <teleport to="body">
            <div>
        <div class="backdrop" @click="$emit('close')"></div>
        <dialog open>

            <!-- add a slot so any information can go here -->
            <header :class="status">
                <slot name="heading">
                    <!-- default heading if no heading is suppied in slot -->
                    <h2>{{ title }}</h2>
                </slot>
            </header>

            <!-- main content -->
            <section>
                <slot name="main-content"></slot>
            </section>

            <!-- buttons -->
             <menu>
                <slot name="actions">
                    <!-- fallback content is no content is provided for actions slot-->
                     <base-button @click="$emit('close')">Close</base-button>
                </slot>
             </menu>


        </dialog>
    </div>
    </teleport>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: '',
      validator: value => ['error', 'success', 'warning', ''].includes(value)
    }
  },
    emits: ['close']
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

.error{
  background-color: #a90810;

}

.success{
    background-color: #006110;
}
header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>