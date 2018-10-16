<template>
  <div>
    post_id: {{ id }}
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    console.log(params)
    return {
      id: params.id
    }
  }
}
</script>
