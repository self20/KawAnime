/**
 * Created by Kylart on 26/07/2017.
 */

import moment from 'moment'

export default {
  NODE_ENV: '',
  platform: '',
  isUpdateAvailable: false,
  isConnected: false,
  drawer: false,
  autoRefreshReleases: true,
  fansubList: [
    'HorribleSubs',
    'Erai-raws',
    'PuyaSubs!',
    'Fuyu',
    'DurandalSubs',
    'DefinitelyNotMe'
  ],
  releaseFansub: '',
  releaseQuality: '',
  releases: [],
  releasesUpdateTime: moment(),
  releaseParams: {
    fansub: '',
    quality: '',
    choice: 'si'
  },
  infoSnackbar: {
    show: false,
    text: ''
  },
  downloaderForm: {
    name: '',
    fromEp: '',
    untilEp: '',
    quality: '',
    loading: false
  },
  downloaderModal: {
    show: false,
    title: '',
    text: ''
  },
  localFiles: [],
  resettingLocal: false,
  refreshingLocal: false,
  watchLists: {
    watchList: [],
    watching: [],
    seen: [],
    onHold: [],
    dropped: []
  },
  history: {},
  historyModal: false,
  infoModal: false,
  info: {
    info: {},
    error: '',
    loading: true,
    show: false,
    term: ''
  },
  addToChoice: false
}
