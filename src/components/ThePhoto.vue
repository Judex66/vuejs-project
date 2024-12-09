<template>
  <div>
    {{ photo.title }}
</div>
</template>

<script>
export default{
    props:{
        photo:{
            type: Object,
            required:true
        }
    }
}
</script>
<style></style>