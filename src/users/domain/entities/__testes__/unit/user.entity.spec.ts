import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity
  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: faker.date.recent(),
    }
    sut = new UserEntity(props)
  })

  it('Constructor method should create a new UserEntity instance', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toEqual(props.createdAt)
  })
})
