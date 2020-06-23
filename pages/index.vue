<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="item in events" :key="item.id" :event="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/Eventcard'

export default {
  components: {
    EventCard,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Unable to fetch events at this moment',
      })
    }
  },
  computed: mapState({
    events: (state) => state.events.events,
  }),
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>

<style></style>
