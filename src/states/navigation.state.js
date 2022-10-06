import { atom } from 'recoil'

const navigationState = atom({
    key: 'navigation',
    default: { menuOpen: false },
})

export default navigationState
