<template>
    <a :href="link" target="_blank" rel="noopener" :title="name" class="icon-link">
        <component :is="icon" :size="30" style="vertical-align: middle;"/>
    </a>
</template>

<script>
export default {
    name: 'SocialIcon',
    props: {
        link: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.icon-link {
    padding: 7px;
    line-height: 7px;
    color: #535353;
}

.icon-link:hover {
    color: #0d0d0d;
    background-color: whitesmoke;
}
</style>
