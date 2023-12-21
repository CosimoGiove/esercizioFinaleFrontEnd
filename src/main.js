import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter} from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faCircleRight} from '@fortawesome/free-regular-svg-icons'
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import { faBookmark} from '@fortawesome/free-regular-svg-icons'
import { faHeart} from '@fortawesome/free-regular-svg-icons'



/* add icons to the library */
library.add(faUserSecret,faSquareFacebook,faSquareTwitter,faSquareInstagram,faCirclePlay,faYoutube,faLocationDot,faPhone,faCircleRight,faCopyright,faHeart)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
