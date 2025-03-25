import { EntityManager, EntityName, FilterQuery, FindOneOrFailOptions, FindOptions, RequiredEntityData } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { NestedKeys } from '../types/populate';

@Injectable()
export abstract class BaseRepo<T extends object> {
  constructor(protected readonly _em: EntityManager) {}

  abstract get entityName(): EntityName<T>;
  abstract get populateKeys(): NestedKeys<T>[];

  /**
   * @deprecated
   */
  create(entity: RequiredEntityData<T>): T {
    return this._em.create(this.entityName, entity);
  }

  async save(entities: T | T[]): Promise<void> {
    await this._em.persistAndFlush(entities);
  }

  async delete(entities: T | T[]): Promise<void> {
    await this._em.removeAndFlush(entities);
  }

  async findAll(populate: boolean) {
    const options: FindOptions<T> = {};

    if (populate) {
      options.populate = this.populateKeys as any;
    }

    const promise: Promise<T[]> = this._em.find(this.entityName, {}, options);
    return promise;
  }

  async findById(id: number, populate: boolean): Promise<T> {
    const options: FindOneOrFailOptions<T> = {};

    if (populate) {
      options.populate = this.populateKeys as any;
    }

    const promise: Promise<T> = this._em.findOneOrFail(this.entityName, id as FilterQuery<T>, options);
    return promise;
  }
  async findByIds(ids: number[], populate: boolean): Promise<T[]> {
    const options: FindOptions<T> = {};

    if (populate) {
      options.populate = this.populateKeys as any;
    }

    const promise: Promise<T[]> = this._em.find(this.entityName, { id: { $in: ids } } as unknown as FilterQuery<T>, options);
    return promise;
  }
}
