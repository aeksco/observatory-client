import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/modules/auth/store'
import project from '@/modules/project/store'
import user from '@/modules/user/store'
import smallgroup from '@/modules/smallgroup/store'
import notification from './notification'
import attendance from '@/modules/attendance/store'
import classyear from '@/modules/classyear/store'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    project,
    user,
    smallgroup,
    notification,
    attendance,
    classyear
  }
})
