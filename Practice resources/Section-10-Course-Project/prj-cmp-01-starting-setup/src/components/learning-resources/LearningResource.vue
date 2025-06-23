<template>
    <!-- we need external data to use this component so we need to make this compoennt reuable and configaruable by pasing data down into it using props-->
    <li>
        <div>
            <header>
                <h3>{{title}}</h3>
                <button>Delete</button>
            </header>
            <p>{{Description}}</p>
            <nav>
                <a v-bind:href="link">View resource</a>
            </nav>
        </div>
    </li>
</template>

<script>
export default{
    props: { 
        // props are used to pass data from parent to child component
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
}
</script>
