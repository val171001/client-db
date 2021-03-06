import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QCard,
  QCardSection,
  QCardActions,
  QForm,
  QInput,
  QTable,
  QTh,
  QTr,
  QTd,
  QDialog,
  ClosePopup,
  QSelect,
  QCheckbox,
  QStepper,
  QStep,
  QStepperNavigation,
  QSeparator,
  QDate,
  Loading,
  Notify,
} from 'quasar'

import router from './router'
import Api from '@/Api'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QCard,
    QCardSection,
    QCardActions,
    QForm,
    QInput,
    QTable,
    QTh,
    QTr,
    QTd,
    QDialog,
    QSelect,
    QCheckbox,
    QStepper,
    QStep,
    QStepperNavigation,
    QSeparator,
    QDate,
  },
  directives: {
    ClosePopup
  },
  plugins: {
    Loading,
    Notify
  }
 })

Vue.config.productionTip = false
Vue.prototype.$http  = Api()
Vue.prototype.$admin = false
Vue.prototype.$logged = {
  userId: 1,
  logged: false
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
