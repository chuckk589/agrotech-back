import { Collection } from '@mikro-orm/postgresql';

type UnboxCollection<T> = T extends Collection<infer U, object> ? U : T;

export type NestedKeys<T, Depth extends number = 3> = [Depth] extends [never]
  ? never
  : {
      [K in keyof T]: UnboxCollection<T[K]> extends object
        ? UnboxCollection<T[K]> extends object
          ? `${K & string}` | `${K & string}.${NestedKeys<UnboxCollection<T[K]>, Prev[Depth]>}`
          : never
        : never;
    }[keyof T];

type Prev = [never, 0, 1, 2, 3, ...0[]];
