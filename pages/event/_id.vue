<template>
  <h1>{{ event.title }}</h1>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const response = await $axios.get(
        'http://localhost:4000/events/' + params.id
      )
      return { event: response.data }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Unable to fetch event at this moment',
      })
    }
  },
  head() {
    return {
      titleTemplate: 'Event #' + this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What do you wanna know about the event ' + this.event.title,
        },
      ],
    }
  },
}
</script>

<style></style>
