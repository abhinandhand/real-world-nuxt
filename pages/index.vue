<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="item in events" :key="item.id" :event="item" />
  </div>
</template>

<script>
import EventCard from '@/components/Eventcard'
export default {
  components: {
    EventCard,
  },
  async asyncData({ $axios, error }) {
    try {
      const response = await $axios.get('http://localhost:4000/events')
      return { events: response.data }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Unable to fetch events at this moment',
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>

<style></style>
