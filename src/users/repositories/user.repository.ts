import { UserEntity } from '../domain/entities/user.entity'
import { SearchableRepositoryInterface } from '@/shared/domain/repositories/searchable-respository-contracts'

export interface UserRepository
  extends SearchableRepositoryInterface<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity>
  emailExists(email: string): Promise<void>
}
