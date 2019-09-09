import api from '../instances/gitHub'

export default {

  getRepos: async (payload) => {
    try {
        return await api.get(`search/repositories?q=${payload}`)
    } catch (e) {
        console.warn('catch :: repos :: getRepos', e)
    }
  }

}
