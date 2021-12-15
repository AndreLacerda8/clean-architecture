import { MissingParamError } from '../../erros'
import { badRequest } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller } from '../../protocols'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return badRequest(new MissingParamError('email'))
  }
}
