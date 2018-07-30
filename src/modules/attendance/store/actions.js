import { API_ROOT } from './constants'
import { $GET, $POST } from '@/store/lib/helpers'
import { FILTER_ACTIONS, PAGINATION_ACTIONS } from '@/store/lib/mixins'

// // // //

// Attendance module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,

  // Fetches the attendance records for a semester collection for the current user
  fetchSemesterAttendance: ({ commit, rootGetters }) => {
    commit('fetching', true)
    $GET(API_ROOT, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },

  // Fetches the attendance collection for a single user by ID
  fetchUserAttendance: ({ commit, rootGetters }, userId = 'me') => {
    commit('fetching', true)

    let api = API_ROOT + '/present/' + userId

    $GET(api, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },

  // Submits Attendance code
  create ({ commit, rootGetters }, dayCode) {
    $POST(API_ROOT + '/attend', { token: rootGetters['auth/token'], body: { dayCode } })
    .then((json) => {
      console.log(json)
      // commit('collection', json)
      // commit('fetching', false)
    })
    .catch((err) => {
      // commit('fetching', false)
      throw err
    })
  }
}
