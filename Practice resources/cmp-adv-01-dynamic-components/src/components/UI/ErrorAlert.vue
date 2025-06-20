<template>
    <div>
        <dialog open>
            <slot></slot>
        </dialog>
    </div>
</template>

<script>

</script>


<style scoped>
dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin:0;
    background-color: white;
    border: 1px solid #ccc;
    padding: 1rem;
    width: 450px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>