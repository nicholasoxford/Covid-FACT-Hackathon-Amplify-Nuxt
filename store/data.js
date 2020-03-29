import Vuex from 'vuex';
import Vue from 'vue';

const dataStore = {
    namespaced: true,
    state: {
        form1:
        {
        state: '',
        gender: '',
        pregnant: null,
        age: null,
        testing: null,
        fever: null,
        hospital: null,
        length_stay: null,
        ventilator: null,
        icu: null,
        heart: null,
        diabetes: null,
        asthma: null,
        }
    },
    actions:{
    async send_data(context, data) {
        context.commit('set_is_loading', true);
        return instructorService
          .getFilteredInstructors(filter)
          .then((result) => {
            context.commit('set_filtered_users', result.data);
            context.commit('set_is_loading', false);
            return result;
          })
          .catch(() => {
            context.commit('set_is_loading', false);
          });
      },
    }
  }