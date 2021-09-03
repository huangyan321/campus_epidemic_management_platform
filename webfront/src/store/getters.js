import {
  getDomain
} from '@/utils/usual'
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => getDomain() + "/imgs/" + state.user.avatar,
  name: state => state.user.name,
  classes: state => state.user.classes
}
export default getters
