import {
  getDomain
} from '@/utils/usual'
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user && state.user.avatar ? getDomain() + "/imgs/" + state.user.avatar : "",
  name: state => state.user.name,
  classes: state => state.user.classes,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}
export default getters
