import { Entity } from '../entities/entity'
import { RepositoryInterface } from './respository-contracts'

export interface SearchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchInput): Promise<SearchOutput>
}
