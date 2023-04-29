<template>
    <div class="icon-container">
        <a :href="link" target="_blank" rel="noopener" :title="name">
            <img :src="iconUrl" :alt="name">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        iconUrl: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.icon-container {
    padding: 0 10px;
}
</style>