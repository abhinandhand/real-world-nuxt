import EventService from '@/services/EventService'

export const state = () => ({
  events: [],
  event: {},
})
export const mutations = {
  SET_EVENTS(state, value) {
    state.events = value
  },
  SET_EVENT(state, value) {
    state.event = value
  },
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((res) => {
      commit('SET_EVENTS', res.data)
    })
  },
  fetchEvent({ commit }, value) {
    return EventService.getEvent(value).then((res) => {
      commit('SET_EVENT', res.data)
    })
  },
}
