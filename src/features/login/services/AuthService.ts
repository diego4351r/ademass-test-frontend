import { AUTH_URL } from "../constants/api";
import { type UserDto } from "../dtos/User";
import { NETWORK_OR_SERVER_ERROR } from "../errors/erorMessages";
import { useAuthStore } from "../stores/auth.store";

export class AuthService {
  async login(userDto: UserDto){


    try {
      const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDto)
      })

      if(!response.ok) throw new Error(NETWORK_OR_SERVER_ERROR)

      const {setUser} = useAuthStore()
      const user = await response.json()
      setUser(user);


    } catch (error) {
      console.error(error)
    }
  }
}