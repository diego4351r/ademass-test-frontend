import { defineStore } from 'pinia'
import { User } from '../models/User'

export const useAuthStore = defineStore(
  'auth-store',
  {
    state: () => ({
      user: null as User | null
    }),
    actions: {
      setUser(user: User) {
        this.user = user
      }
    },
    persist: true
  }
)
