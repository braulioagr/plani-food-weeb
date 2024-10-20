import { environment } from "@core/environments/environment";

const baseUrl = `${environment.api.baseUrl}/api`;


export const ApiEndPoints = {
  Auth: `${baseUrl}/auth`,
}