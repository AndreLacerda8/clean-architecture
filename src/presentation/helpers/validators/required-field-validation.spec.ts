import { MissingParamError } from '../../erros'
import { RequiredFieldValidation } from './required-field-validation'

describe('Required Field Validation', () => {
  it('Should return a MissingParamError if validation fails ', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
