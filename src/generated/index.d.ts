
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Halaqah
 * 
 */
export type Halaqah = $Result.DefaultSelection<Prisma.$HalaqahPayload>
/**
 * Model Santri
 * 
 */
export type Santri = $Result.DefaultSelection<Prisma.$SantriPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KategoriTarget: {
  RINGAN: 'RINGAN',
  SEDANG: 'SEDANG',
  INTENSE: 'INTENSE',
  KHUSUS: 'KHUSUS'
};

export type KategoriTarget = (typeof KategoriTarget)[keyof typeof KategoriTarget]

}

export type KategoriTarget = $Enums.KategoriTarget

export const KategoriTarget: typeof $Enums.KategoriTarget

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Halaqahs
 * const halaqahs = await prisma.halaqah.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Halaqahs
   * const halaqahs = await prisma.halaqah.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.halaqah`: Exposes CRUD operations for the **Halaqah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Halaqahs
    * const halaqahs = await prisma.halaqah.findMany()
    * ```
    */
  get halaqah(): Prisma.HalaqahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.santri`: Exposes CRUD operations for the **Santri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Santris
    * const santris = await prisma.santri.findMany()
    * ```
    */
  get santri(): Prisma.SantriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Halaqah: 'Halaqah',
    Santri: 'Santri',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "halaqah" | "santri" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Halaqah: {
        payload: Prisma.$HalaqahPayload<ExtArgs>
        fields: Prisma.HalaqahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HalaqahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HalaqahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>
          }
          findFirst: {
            args: Prisma.HalaqahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HalaqahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>
          }
          findMany: {
            args: Prisma.HalaqahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>[]
          }
          create: {
            args: Prisma.HalaqahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>
          }
          createMany: {
            args: Prisma.HalaqahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HalaqahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>[]
          }
          delete: {
            args: Prisma.HalaqahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>
          }
          update: {
            args: Prisma.HalaqahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>
          }
          deleteMany: {
            args: Prisma.HalaqahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HalaqahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HalaqahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>[]
          }
          upsert: {
            args: Prisma.HalaqahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HalaqahPayload>
          }
          aggregate: {
            args: Prisma.HalaqahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHalaqah>
          }
          groupBy: {
            args: Prisma.HalaqahGroupByArgs<ExtArgs>
            result: $Utils.Optional<HalaqahGroupByOutputType>[]
          }
          count: {
            args: Prisma.HalaqahCountArgs<ExtArgs>
            result: $Utils.Optional<HalaqahCountAggregateOutputType> | number
          }
        }
      }
      Santri: {
        payload: Prisma.$SantriPayload<ExtArgs>
        fields: Prisma.SantriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SantriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SantriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          findFirst: {
            args: Prisma.SantriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SantriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          findMany: {
            args: Prisma.SantriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>[]
          }
          create: {
            args: Prisma.SantriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          createMany: {
            args: Prisma.SantriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SantriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>[]
          }
          delete: {
            args: Prisma.SantriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          update: {
            args: Prisma.SantriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          deleteMany: {
            args: Prisma.SantriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SantriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SantriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>[]
          }
          upsert: {
            args: Prisma.SantriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          aggregate: {
            args: Prisma.SantriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSantri>
          }
          groupBy: {
            args: Prisma.SantriGroupByArgs<ExtArgs>
            result: $Utils.Optional<SantriGroupByOutputType>[]
          }
          count: {
            args: Prisma.SantriCountArgs<ExtArgs>
            result: $Utils.Optional<SantriCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    halaqah?: HalaqahOmit
    santri?: SantriOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HalaqahCountOutputType
   */

  export type HalaqahCountOutputType = {
    santri: number
  }

  export type HalaqahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | HalaqahCountOutputTypeCountSantriArgs
  }

  // Custom InputTypes
  /**
   * HalaqahCountOutputType without action
   */
  export type HalaqahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HalaqahCountOutputType
     */
    select?: HalaqahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HalaqahCountOutputType without action
   */
  export type HalaqahCountOutputTypeCountSantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Halaqah
   */

  export type AggregateHalaqah = {
    _count: HalaqahCountAggregateOutputType | null
    _avg: HalaqahAvgAggregateOutputType | null
    _sum: HalaqahSumAggregateOutputType | null
    _min: HalaqahMinAggregateOutputType | null
    _max: HalaqahMaxAggregateOutputType | null
  }

  export type HalaqahAvgAggregateOutputType = {
    id_halaqah: number | null
    muhafiz_id: number | null
  }

  export type HalaqahSumAggregateOutputType = {
    id_halaqah: number | null
    muhafiz_id: number | null
  }

  export type HalaqahMinAggregateOutputType = {
    id_halaqah: number | null
    name_halaqah: string | null
    muhafiz_id: number | null
    deleted_at: Date | null
  }

  export type HalaqahMaxAggregateOutputType = {
    id_halaqah: number | null
    name_halaqah: string | null
    muhafiz_id: number | null
    deleted_at: Date | null
  }

  export type HalaqahCountAggregateOutputType = {
    id_halaqah: number
    name_halaqah: number
    muhafiz_id: number
    deleted_at: number
    _all: number
  }


  export type HalaqahAvgAggregateInputType = {
    id_halaqah?: true
    muhafiz_id?: true
  }

  export type HalaqahSumAggregateInputType = {
    id_halaqah?: true
    muhafiz_id?: true
  }

  export type HalaqahMinAggregateInputType = {
    id_halaqah?: true
    name_halaqah?: true
    muhafiz_id?: true
    deleted_at?: true
  }

  export type HalaqahMaxAggregateInputType = {
    id_halaqah?: true
    name_halaqah?: true
    muhafiz_id?: true
    deleted_at?: true
  }

  export type HalaqahCountAggregateInputType = {
    id_halaqah?: true
    name_halaqah?: true
    muhafiz_id?: true
    deleted_at?: true
    _all?: true
  }

  export type HalaqahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Halaqah to aggregate.
     */
    where?: HalaqahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halaqahs to fetch.
     */
    orderBy?: HalaqahOrderByWithRelationInput | HalaqahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HalaqahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halaqahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halaqahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Halaqahs
    **/
    _count?: true | HalaqahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HalaqahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HalaqahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HalaqahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HalaqahMaxAggregateInputType
  }

  export type GetHalaqahAggregateType<T extends HalaqahAggregateArgs> = {
        [P in keyof T & keyof AggregateHalaqah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHalaqah[P]>
      : GetScalarType<T[P], AggregateHalaqah[P]>
  }




  export type HalaqahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HalaqahWhereInput
    orderBy?: HalaqahOrderByWithAggregationInput | HalaqahOrderByWithAggregationInput[]
    by: HalaqahScalarFieldEnum[] | HalaqahScalarFieldEnum
    having?: HalaqahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HalaqahCountAggregateInputType | true
    _avg?: HalaqahAvgAggregateInputType
    _sum?: HalaqahSumAggregateInputType
    _min?: HalaqahMinAggregateInputType
    _max?: HalaqahMaxAggregateInputType
  }

  export type HalaqahGroupByOutputType = {
    id_halaqah: number
    name_halaqah: string
    muhafiz_id: number
    deleted_at: Date | null
    _count: HalaqahCountAggregateOutputType | null
    _avg: HalaqahAvgAggregateOutputType | null
    _sum: HalaqahSumAggregateOutputType | null
    _min: HalaqahMinAggregateOutputType | null
    _max: HalaqahMaxAggregateOutputType | null
  }

  type GetHalaqahGroupByPayload<T extends HalaqahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HalaqahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HalaqahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HalaqahGroupByOutputType[P]>
            : GetScalarType<T[P], HalaqahGroupByOutputType[P]>
        }
      >
    >


  export type HalaqahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_halaqah?: boolean
    name_halaqah?: boolean
    muhafiz_id?: boolean
    deleted_at?: boolean
    muhafiz?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | Halaqah$santriArgs<ExtArgs>
    _count?: boolean | HalaqahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["halaqah"]>

  export type HalaqahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_halaqah?: boolean
    name_halaqah?: boolean
    muhafiz_id?: boolean
    deleted_at?: boolean
    muhafiz?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["halaqah"]>

  export type HalaqahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_halaqah?: boolean
    name_halaqah?: boolean
    muhafiz_id?: boolean
    deleted_at?: boolean
    muhafiz?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["halaqah"]>

  export type HalaqahSelectScalar = {
    id_halaqah?: boolean
    name_halaqah?: boolean
    muhafiz_id?: boolean
    deleted_at?: boolean
  }

  export type HalaqahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_halaqah" | "name_halaqah" | "muhafiz_id" | "deleted_at", ExtArgs["result"]["halaqah"]>
  export type HalaqahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muhafiz?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | Halaqah$santriArgs<ExtArgs>
    _count?: boolean | HalaqahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HalaqahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muhafiz?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HalaqahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muhafiz?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HalaqahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Halaqah"
    objects: {
      muhafiz: Prisma.$UserPayload<ExtArgs>
      santri: Prisma.$SantriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_halaqah: number
      name_halaqah: string
      muhafiz_id: number
      deleted_at: Date | null
    }, ExtArgs["result"]["halaqah"]>
    composites: {}
  }

  type HalaqahGetPayload<S extends boolean | null | undefined | HalaqahDefaultArgs> = $Result.GetResult<Prisma.$HalaqahPayload, S>

  type HalaqahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HalaqahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HalaqahCountAggregateInputType | true
    }

  export interface HalaqahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Halaqah'], meta: { name: 'Halaqah' } }
    /**
     * Find zero or one Halaqah that matches the filter.
     * @param {HalaqahFindUniqueArgs} args - Arguments to find a Halaqah
     * @example
     * // Get one Halaqah
     * const halaqah = await prisma.halaqah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HalaqahFindUniqueArgs>(args: SelectSubset<T, HalaqahFindUniqueArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Halaqah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HalaqahFindUniqueOrThrowArgs} args - Arguments to find a Halaqah
     * @example
     * // Get one Halaqah
     * const halaqah = await prisma.halaqah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HalaqahFindUniqueOrThrowArgs>(args: SelectSubset<T, HalaqahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Halaqah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahFindFirstArgs} args - Arguments to find a Halaqah
     * @example
     * // Get one Halaqah
     * const halaqah = await prisma.halaqah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HalaqahFindFirstArgs>(args?: SelectSubset<T, HalaqahFindFirstArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Halaqah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahFindFirstOrThrowArgs} args - Arguments to find a Halaqah
     * @example
     * // Get one Halaqah
     * const halaqah = await prisma.halaqah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HalaqahFindFirstOrThrowArgs>(args?: SelectSubset<T, HalaqahFindFirstOrThrowArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Halaqahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Halaqahs
     * const halaqahs = await prisma.halaqah.findMany()
     * 
     * // Get first 10 Halaqahs
     * const halaqahs = await prisma.halaqah.findMany({ take: 10 })
     * 
     * // Only select the `id_halaqah`
     * const halaqahWithId_halaqahOnly = await prisma.halaqah.findMany({ select: { id_halaqah: true } })
     * 
     */
    findMany<T extends HalaqahFindManyArgs>(args?: SelectSubset<T, HalaqahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Halaqah.
     * @param {HalaqahCreateArgs} args - Arguments to create a Halaqah.
     * @example
     * // Create one Halaqah
     * const Halaqah = await prisma.halaqah.create({
     *   data: {
     *     // ... data to create a Halaqah
     *   }
     * })
     * 
     */
    create<T extends HalaqahCreateArgs>(args: SelectSubset<T, HalaqahCreateArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Halaqahs.
     * @param {HalaqahCreateManyArgs} args - Arguments to create many Halaqahs.
     * @example
     * // Create many Halaqahs
     * const halaqah = await prisma.halaqah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HalaqahCreateManyArgs>(args?: SelectSubset<T, HalaqahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Halaqahs and returns the data saved in the database.
     * @param {HalaqahCreateManyAndReturnArgs} args - Arguments to create many Halaqahs.
     * @example
     * // Create many Halaqahs
     * const halaqah = await prisma.halaqah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Halaqahs and only return the `id_halaqah`
     * const halaqahWithId_halaqahOnly = await prisma.halaqah.createManyAndReturn({
     *   select: { id_halaqah: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HalaqahCreateManyAndReturnArgs>(args?: SelectSubset<T, HalaqahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Halaqah.
     * @param {HalaqahDeleteArgs} args - Arguments to delete one Halaqah.
     * @example
     * // Delete one Halaqah
     * const Halaqah = await prisma.halaqah.delete({
     *   where: {
     *     // ... filter to delete one Halaqah
     *   }
     * })
     * 
     */
    delete<T extends HalaqahDeleteArgs>(args: SelectSubset<T, HalaqahDeleteArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Halaqah.
     * @param {HalaqahUpdateArgs} args - Arguments to update one Halaqah.
     * @example
     * // Update one Halaqah
     * const halaqah = await prisma.halaqah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HalaqahUpdateArgs>(args: SelectSubset<T, HalaqahUpdateArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Halaqahs.
     * @param {HalaqahDeleteManyArgs} args - Arguments to filter Halaqahs to delete.
     * @example
     * // Delete a few Halaqahs
     * const { count } = await prisma.halaqah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HalaqahDeleteManyArgs>(args?: SelectSubset<T, HalaqahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Halaqahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Halaqahs
     * const halaqah = await prisma.halaqah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HalaqahUpdateManyArgs>(args: SelectSubset<T, HalaqahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Halaqahs and returns the data updated in the database.
     * @param {HalaqahUpdateManyAndReturnArgs} args - Arguments to update many Halaqahs.
     * @example
     * // Update many Halaqahs
     * const halaqah = await prisma.halaqah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Halaqahs and only return the `id_halaqah`
     * const halaqahWithId_halaqahOnly = await prisma.halaqah.updateManyAndReturn({
     *   select: { id_halaqah: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HalaqahUpdateManyAndReturnArgs>(args: SelectSubset<T, HalaqahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Halaqah.
     * @param {HalaqahUpsertArgs} args - Arguments to update or create a Halaqah.
     * @example
     * // Update or create a Halaqah
     * const halaqah = await prisma.halaqah.upsert({
     *   create: {
     *     // ... data to create a Halaqah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Halaqah we want to update
     *   }
     * })
     */
    upsert<T extends HalaqahUpsertArgs>(args: SelectSubset<T, HalaqahUpsertArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Halaqahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahCountArgs} args - Arguments to filter Halaqahs to count.
     * @example
     * // Count the number of Halaqahs
     * const count = await prisma.halaqah.count({
     *   where: {
     *     // ... the filter for the Halaqahs we want to count
     *   }
     * })
    **/
    count<T extends HalaqahCountArgs>(
      args?: Subset<T, HalaqahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HalaqahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Halaqah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HalaqahAggregateArgs>(args: Subset<T, HalaqahAggregateArgs>): Prisma.PrismaPromise<GetHalaqahAggregateType<T>>

    /**
     * Group by Halaqah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HalaqahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HalaqahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HalaqahGroupByArgs['orderBy'] }
        : { orderBy?: HalaqahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HalaqahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHalaqahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Halaqah model
   */
  readonly fields: HalaqahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Halaqah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HalaqahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muhafiz<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends Halaqah$santriArgs<ExtArgs> = {}>(args?: Subset<T, Halaqah$santriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Halaqah model
   */
  interface HalaqahFieldRefs {
    readonly id_halaqah: FieldRef<"Halaqah", 'Int'>
    readonly name_halaqah: FieldRef<"Halaqah", 'String'>
    readonly muhafiz_id: FieldRef<"Halaqah", 'Int'>
    readonly deleted_at: FieldRef<"Halaqah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Halaqah findUnique
   */
  export type HalaqahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * Filter, which Halaqah to fetch.
     */
    where: HalaqahWhereUniqueInput
  }

  /**
   * Halaqah findUniqueOrThrow
   */
  export type HalaqahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * Filter, which Halaqah to fetch.
     */
    where: HalaqahWhereUniqueInput
  }

  /**
   * Halaqah findFirst
   */
  export type HalaqahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * Filter, which Halaqah to fetch.
     */
    where?: HalaqahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halaqahs to fetch.
     */
    orderBy?: HalaqahOrderByWithRelationInput | HalaqahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Halaqahs.
     */
    cursor?: HalaqahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halaqahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halaqahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Halaqahs.
     */
    distinct?: HalaqahScalarFieldEnum | HalaqahScalarFieldEnum[]
  }

  /**
   * Halaqah findFirstOrThrow
   */
  export type HalaqahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * Filter, which Halaqah to fetch.
     */
    where?: HalaqahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halaqahs to fetch.
     */
    orderBy?: HalaqahOrderByWithRelationInput | HalaqahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Halaqahs.
     */
    cursor?: HalaqahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halaqahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halaqahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Halaqahs.
     */
    distinct?: HalaqahScalarFieldEnum | HalaqahScalarFieldEnum[]
  }

  /**
   * Halaqah findMany
   */
  export type HalaqahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * Filter, which Halaqahs to fetch.
     */
    where?: HalaqahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halaqahs to fetch.
     */
    orderBy?: HalaqahOrderByWithRelationInput | HalaqahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Halaqahs.
     */
    cursor?: HalaqahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halaqahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halaqahs.
     */
    skip?: number
    distinct?: HalaqahScalarFieldEnum | HalaqahScalarFieldEnum[]
  }

  /**
   * Halaqah create
   */
  export type HalaqahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * The data needed to create a Halaqah.
     */
    data: XOR<HalaqahCreateInput, HalaqahUncheckedCreateInput>
  }

  /**
   * Halaqah createMany
   */
  export type HalaqahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Halaqahs.
     */
    data: HalaqahCreateManyInput | HalaqahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Halaqah createManyAndReturn
   */
  export type HalaqahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * The data used to create many Halaqahs.
     */
    data: HalaqahCreateManyInput | HalaqahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Halaqah update
   */
  export type HalaqahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * The data needed to update a Halaqah.
     */
    data: XOR<HalaqahUpdateInput, HalaqahUncheckedUpdateInput>
    /**
     * Choose, which Halaqah to update.
     */
    where: HalaqahWhereUniqueInput
  }

  /**
   * Halaqah updateMany
   */
  export type HalaqahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Halaqahs.
     */
    data: XOR<HalaqahUpdateManyMutationInput, HalaqahUncheckedUpdateManyInput>
    /**
     * Filter which Halaqahs to update
     */
    where?: HalaqahWhereInput
    /**
     * Limit how many Halaqahs to update.
     */
    limit?: number
  }

  /**
   * Halaqah updateManyAndReturn
   */
  export type HalaqahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * The data used to update Halaqahs.
     */
    data: XOR<HalaqahUpdateManyMutationInput, HalaqahUncheckedUpdateManyInput>
    /**
     * Filter which Halaqahs to update
     */
    where?: HalaqahWhereInput
    /**
     * Limit how many Halaqahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Halaqah upsert
   */
  export type HalaqahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * The filter to search for the Halaqah to update in case it exists.
     */
    where: HalaqahWhereUniqueInput
    /**
     * In case the Halaqah found by the `where` argument doesn't exist, create a new Halaqah with this data.
     */
    create: XOR<HalaqahCreateInput, HalaqahUncheckedCreateInput>
    /**
     * In case the Halaqah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HalaqahUpdateInput, HalaqahUncheckedUpdateInput>
  }

  /**
   * Halaqah delete
   */
  export type HalaqahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    /**
     * Filter which Halaqah to delete.
     */
    where: HalaqahWhereUniqueInput
  }

  /**
   * Halaqah deleteMany
   */
  export type HalaqahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Halaqahs to delete
     */
    where?: HalaqahWhereInput
    /**
     * Limit how many Halaqahs to delete.
     */
    limit?: number
  }

  /**
   * Halaqah.santri
   */
  export type Halaqah$santriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    where?: SantriWhereInput
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    cursor?: SantriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Halaqah without action
   */
  export type HalaqahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
  }


  /**
   * Model Santri
   */

  export type AggregateSantri = {
    _count: SantriCountAggregateOutputType | null
    _avg: SantriAvgAggregateOutputType | null
    _sum: SantriSumAggregateOutputType | null
    _min: SantriMinAggregateOutputType | null
    _max: SantriMaxAggregateOutputType | null
  }

  export type SantriAvgAggregateOutputType = {
    id_santri: number | null
    halaqah_id: number | null
  }

  export type SantriSumAggregateOutputType = {
    id_santri: number | null
    halaqah_id: number | null
  }

  export type SantriMinAggregateOutputType = {
    id_santri: number | null
    nama_santri: string | null
    target: $Enums.KategoriTarget | null
    halaqah_id: number | null
  }

  export type SantriMaxAggregateOutputType = {
    id_santri: number | null
    nama_santri: string | null
    target: $Enums.KategoriTarget | null
    halaqah_id: number | null
  }

  export type SantriCountAggregateOutputType = {
    id_santri: number
    nama_santri: number
    target: number
    halaqah_id: number
    _all: number
  }


  export type SantriAvgAggregateInputType = {
    id_santri?: true
    halaqah_id?: true
  }

  export type SantriSumAggregateInputType = {
    id_santri?: true
    halaqah_id?: true
  }

  export type SantriMinAggregateInputType = {
    id_santri?: true
    nama_santri?: true
    target?: true
    halaqah_id?: true
  }

  export type SantriMaxAggregateInputType = {
    id_santri?: true
    nama_santri?: true
    target?: true
    halaqah_id?: true
  }

  export type SantriCountAggregateInputType = {
    id_santri?: true
    nama_santri?: true
    target?: true
    halaqah_id?: true
    _all?: true
  }

  export type SantriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Santri to aggregate.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Santris
    **/
    _count?: true | SantriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SantriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SantriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SantriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SantriMaxAggregateInputType
  }

  export type GetSantriAggregateType<T extends SantriAggregateArgs> = {
        [P in keyof T & keyof AggregateSantri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSantri[P]>
      : GetScalarType<T[P], AggregateSantri[P]>
  }




  export type SantriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriWhereInput
    orderBy?: SantriOrderByWithAggregationInput | SantriOrderByWithAggregationInput[]
    by: SantriScalarFieldEnum[] | SantriScalarFieldEnum
    having?: SantriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SantriCountAggregateInputType | true
    _avg?: SantriAvgAggregateInputType
    _sum?: SantriSumAggregateInputType
    _min?: SantriMinAggregateInputType
    _max?: SantriMaxAggregateInputType
  }

  export type SantriGroupByOutputType = {
    id_santri: number
    nama_santri: string
    target: $Enums.KategoriTarget
    halaqah_id: number
    _count: SantriCountAggregateOutputType | null
    _avg: SantriAvgAggregateOutputType | null
    _sum: SantriSumAggregateOutputType | null
    _min: SantriMinAggregateOutputType | null
    _max: SantriMaxAggregateOutputType | null
  }

  type GetSantriGroupByPayload<T extends SantriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SantriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SantriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SantriGroupByOutputType[P]>
            : GetScalarType<T[P], SantriGroupByOutputType[P]>
        }
      >
    >


  export type SantriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_santri?: boolean
    nama_santri?: boolean
    target?: boolean
    halaqah_id?: boolean
    halaqah?: boolean | HalaqahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type SantriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_santri?: boolean
    nama_santri?: boolean
    target?: boolean
    halaqah_id?: boolean
    halaqah?: boolean | HalaqahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type SantriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_santri?: boolean
    nama_santri?: boolean
    target?: boolean
    halaqah_id?: boolean
    halaqah?: boolean | HalaqahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type SantriSelectScalar = {
    id_santri?: boolean
    nama_santri?: boolean
    target?: boolean
    halaqah_id?: boolean
  }

  export type SantriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_santri" | "nama_santri" | "target" | "halaqah_id", ExtArgs["result"]["santri"]>
  export type SantriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    halaqah?: boolean | HalaqahDefaultArgs<ExtArgs>
  }
  export type SantriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    halaqah?: boolean | HalaqahDefaultArgs<ExtArgs>
  }
  export type SantriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    halaqah?: boolean | HalaqahDefaultArgs<ExtArgs>
  }

  export type $SantriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Santri"
    objects: {
      halaqah: Prisma.$HalaqahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_santri: number
      nama_santri: string
      target: $Enums.KategoriTarget
      halaqah_id: number
    }, ExtArgs["result"]["santri"]>
    composites: {}
  }

  type SantriGetPayload<S extends boolean | null | undefined | SantriDefaultArgs> = $Result.GetResult<Prisma.$SantriPayload, S>

  type SantriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SantriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SantriCountAggregateInputType | true
    }

  export interface SantriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Santri'], meta: { name: 'Santri' } }
    /**
     * Find zero or one Santri that matches the filter.
     * @param {SantriFindUniqueArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SantriFindUniqueArgs>(args: SelectSubset<T, SantriFindUniqueArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Santri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SantriFindUniqueOrThrowArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SantriFindUniqueOrThrowArgs>(args: SelectSubset<T, SantriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Santri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriFindFirstArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SantriFindFirstArgs>(args?: SelectSubset<T, SantriFindFirstArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Santri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriFindFirstOrThrowArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SantriFindFirstOrThrowArgs>(args?: SelectSubset<T, SantriFindFirstOrThrowArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Santris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Santris
     * const santris = await prisma.santri.findMany()
     * 
     * // Get first 10 Santris
     * const santris = await prisma.santri.findMany({ take: 10 })
     * 
     * // Only select the `id_santri`
     * const santriWithId_santriOnly = await prisma.santri.findMany({ select: { id_santri: true } })
     * 
     */
    findMany<T extends SantriFindManyArgs>(args?: SelectSubset<T, SantriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Santri.
     * @param {SantriCreateArgs} args - Arguments to create a Santri.
     * @example
     * // Create one Santri
     * const Santri = await prisma.santri.create({
     *   data: {
     *     // ... data to create a Santri
     *   }
     * })
     * 
     */
    create<T extends SantriCreateArgs>(args: SelectSubset<T, SantriCreateArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Santris.
     * @param {SantriCreateManyArgs} args - Arguments to create many Santris.
     * @example
     * // Create many Santris
     * const santri = await prisma.santri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SantriCreateManyArgs>(args?: SelectSubset<T, SantriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Santris and returns the data saved in the database.
     * @param {SantriCreateManyAndReturnArgs} args - Arguments to create many Santris.
     * @example
     * // Create many Santris
     * const santri = await prisma.santri.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Santris and only return the `id_santri`
     * const santriWithId_santriOnly = await prisma.santri.createManyAndReturn({
     *   select: { id_santri: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SantriCreateManyAndReturnArgs>(args?: SelectSubset<T, SantriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Santri.
     * @param {SantriDeleteArgs} args - Arguments to delete one Santri.
     * @example
     * // Delete one Santri
     * const Santri = await prisma.santri.delete({
     *   where: {
     *     // ... filter to delete one Santri
     *   }
     * })
     * 
     */
    delete<T extends SantriDeleteArgs>(args: SelectSubset<T, SantriDeleteArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Santri.
     * @param {SantriUpdateArgs} args - Arguments to update one Santri.
     * @example
     * // Update one Santri
     * const santri = await prisma.santri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SantriUpdateArgs>(args: SelectSubset<T, SantriUpdateArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Santris.
     * @param {SantriDeleteManyArgs} args - Arguments to filter Santris to delete.
     * @example
     * // Delete a few Santris
     * const { count } = await prisma.santri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SantriDeleteManyArgs>(args?: SelectSubset<T, SantriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Santris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Santris
     * const santri = await prisma.santri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SantriUpdateManyArgs>(args: SelectSubset<T, SantriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Santris and returns the data updated in the database.
     * @param {SantriUpdateManyAndReturnArgs} args - Arguments to update many Santris.
     * @example
     * // Update many Santris
     * const santri = await prisma.santri.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Santris and only return the `id_santri`
     * const santriWithId_santriOnly = await prisma.santri.updateManyAndReturn({
     *   select: { id_santri: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SantriUpdateManyAndReturnArgs>(args: SelectSubset<T, SantriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Santri.
     * @param {SantriUpsertArgs} args - Arguments to update or create a Santri.
     * @example
     * // Update or create a Santri
     * const santri = await prisma.santri.upsert({
     *   create: {
     *     // ... data to create a Santri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Santri we want to update
     *   }
     * })
     */
    upsert<T extends SantriUpsertArgs>(args: SelectSubset<T, SantriUpsertArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Santris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriCountArgs} args - Arguments to filter Santris to count.
     * @example
     * // Count the number of Santris
     * const count = await prisma.santri.count({
     *   where: {
     *     // ... the filter for the Santris we want to count
     *   }
     * })
    **/
    count<T extends SantriCountArgs>(
      args?: Subset<T, SantriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SantriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Santri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SantriAggregateArgs>(args: Subset<T, SantriAggregateArgs>): Prisma.PrismaPromise<GetSantriAggregateType<T>>

    /**
     * Group by Santri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SantriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SantriGroupByArgs['orderBy'] }
        : { orderBy?: SantriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SantriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSantriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Santri model
   */
  readonly fields: SantriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Santri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SantriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    halaqah<T extends HalaqahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HalaqahDefaultArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Santri model
   */
  interface SantriFieldRefs {
    readonly id_santri: FieldRef<"Santri", 'Int'>
    readonly nama_santri: FieldRef<"Santri", 'String'>
    readonly target: FieldRef<"Santri", 'KategoriTarget'>
    readonly halaqah_id: FieldRef<"Santri", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Santri findUnique
   */
  export type SantriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri findUniqueOrThrow
   */
  export type SantriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri findFirst
   */
  export type SantriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Santris.
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Santris.
     */
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Santri findFirstOrThrow
   */
  export type SantriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Santris.
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Santris.
     */
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Santri findMany
   */
  export type SantriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santris to fetch.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Santris.
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Santri create
   */
  export type SantriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * The data needed to create a Santri.
     */
    data: XOR<SantriCreateInput, SantriUncheckedCreateInput>
  }

  /**
   * Santri createMany
   */
  export type SantriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Santris.
     */
    data: SantriCreateManyInput | SantriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Santri createManyAndReturn
   */
  export type SantriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * The data used to create many Santris.
     */
    data: SantriCreateManyInput | SantriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Santri update
   */
  export type SantriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * The data needed to update a Santri.
     */
    data: XOR<SantriUpdateInput, SantriUncheckedUpdateInput>
    /**
     * Choose, which Santri to update.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri updateMany
   */
  export type SantriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Santris.
     */
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyInput>
    /**
     * Filter which Santris to update
     */
    where?: SantriWhereInput
    /**
     * Limit how many Santris to update.
     */
    limit?: number
  }

  /**
   * Santri updateManyAndReturn
   */
  export type SantriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * The data used to update Santris.
     */
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyInput>
    /**
     * Filter which Santris to update
     */
    where?: SantriWhereInput
    /**
     * Limit how many Santris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Santri upsert
   */
  export type SantriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * The filter to search for the Santri to update in case it exists.
     */
    where: SantriWhereUniqueInput
    /**
     * In case the Santri found by the `where` argument doesn't exist, create a new Santri with this data.
     */
    create: XOR<SantriCreateInput, SantriUncheckedCreateInput>
    /**
     * In case the Santri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SantriUpdateInput, SantriUncheckedUpdateInput>
  }

  /**
   * Santri delete
   */
  export type SantriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter which Santri to delete.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri deleteMany
   */
  export type SantriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Santris to delete
     */
    where?: SantriWhereInput
    /**
     * Limit how many Santris to delete.
     */
    limit?: number
  }

  /**
   * Santri without action
   */
  export type SantriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UserSumAggregateOutputType = {
    id_user: number | null
  }

  export type UserMinAggregateOutputType = {
    id_user: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id_user: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id_user: number
    username: number
    email: number
    password: number
    role: number
    deleted_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_user?: true
  }

  export type UserSumAggregateInputType = {
    id_user?: true
  }

  export type UserMinAggregateInputType = {
    id_user?: true
    username?: true
    email?: true
    password?: true
    role?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id_user?: true
    username?: true
    email?: true
    password?: true
    role?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id_user?: true
    username?: true
    email?: true
    password?: true
    role?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id_user: number
    username: string
    email: string
    password: string
    role: string
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
    halaqah?: boolean | User$halaqahArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id_user?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "username" | "email" | "password" | "role" | "deleted_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    halaqah?: boolean | User$halaqahArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      halaqah: Prisma.$HalaqahPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      username: string
      email: string
      password: string
      role: string
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userWithId_userOnly = await prisma.user.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_user`
     * const userWithId_userOnly = await prisma.user.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_user`
     * const userWithId_userOnly = await prisma.user.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    halaqah<T extends User$halaqahArgs<ExtArgs> = {}>(args?: Subset<T, User$halaqahArgs<ExtArgs>>): Prisma__HalaqahClient<$Result.GetResult<Prisma.$HalaqahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id_user: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.halaqah
   */
  export type User$halaqahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Halaqah
     */
    select?: HalaqahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Halaqah
     */
    omit?: HalaqahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HalaqahInclude<ExtArgs> | null
    where?: HalaqahWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HalaqahScalarFieldEnum: {
    id_halaqah: 'id_halaqah',
    name_halaqah: 'name_halaqah',
    muhafiz_id: 'muhafiz_id',
    deleted_at: 'deleted_at'
  };

  export type HalaqahScalarFieldEnum = (typeof HalaqahScalarFieldEnum)[keyof typeof HalaqahScalarFieldEnum]


  export const SantriScalarFieldEnum: {
    id_santri: 'id_santri',
    nama_santri: 'nama_santri',
    target: 'target',
    halaqah_id: 'halaqah_id'
  };

  export type SantriScalarFieldEnum = (typeof SantriScalarFieldEnum)[keyof typeof SantriScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id_user: 'id_user',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'KategoriTarget'
   */
  export type EnumKategoriTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KategoriTarget'>
    


  /**
   * Reference to a field of type 'KategoriTarget[]'
   */
  export type ListEnumKategoriTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KategoriTarget[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HalaqahWhereInput = {
    AND?: HalaqahWhereInput | HalaqahWhereInput[]
    OR?: HalaqahWhereInput[]
    NOT?: HalaqahWhereInput | HalaqahWhereInput[]
    id_halaqah?: IntFilter<"Halaqah"> | number
    name_halaqah?: StringFilter<"Halaqah"> | string
    muhafiz_id?: IntFilter<"Halaqah"> | number
    deleted_at?: DateTimeNullableFilter<"Halaqah"> | Date | string | null
    muhafiz?: XOR<UserScalarRelationFilter, UserWhereInput>
    santri?: SantriListRelationFilter
  }

  export type HalaqahOrderByWithRelationInput = {
    id_halaqah?: SortOrder
    name_halaqah?: SortOrder
    muhafiz_id?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    muhafiz?: UserOrderByWithRelationInput
    santri?: SantriOrderByRelationAggregateInput
  }

  export type HalaqahWhereUniqueInput = Prisma.AtLeast<{
    id_halaqah?: number
    muhafiz_id?: number
    AND?: HalaqahWhereInput | HalaqahWhereInput[]
    OR?: HalaqahWhereInput[]
    NOT?: HalaqahWhereInput | HalaqahWhereInput[]
    name_halaqah?: StringFilter<"Halaqah"> | string
    deleted_at?: DateTimeNullableFilter<"Halaqah"> | Date | string | null
    muhafiz?: XOR<UserScalarRelationFilter, UserWhereInput>
    santri?: SantriListRelationFilter
  }, "id_halaqah" | "muhafiz_id">

  export type HalaqahOrderByWithAggregationInput = {
    id_halaqah?: SortOrder
    name_halaqah?: SortOrder
    muhafiz_id?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: HalaqahCountOrderByAggregateInput
    _avg?: HalaqahAvgOrderByAggregateInput
    _max?: HalaqahMaxOrderByAggregateInput
    _min?: HalaqahMinOrderByAggregateInput
    _sum?: HalaqahSumOrderByAggregateInput
  }

  export type HalaqahScalarWhereWithAggregatesInput = {
    AND?: HalaqahScalarWhereWithAggregatesInput | HalaqahScalarWhereWithAggregatesInput[]
    OR?: HalaqahScalarWhereWithAggregatesInput[]
    NOT?: HalaqahScalarWhereWithAggregatesInput | HalaqahScalarWhereWithAggregatesInput[]
    id_halaqah?: IntWithAggregatesFilter<"Halaqah"> | number
    name_halaqah?: StringWithAggregatesFilter<"Halaqah"> | string
    muhafiz_id?: IntWithAggregatesFilter<"Halaqah"> | number
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Halaqah"> | Date | string | null
  }

  export type SantriWhereInput = {
    AND?: SantriWhereInput | SantriWhereInput[]
    OR?: SantriWhereInput[]
    NOT?: SantriWhereInput | SantriWhereInput[]
    id_santri?: IntFilter<"Santri"> | number
    nama_santri?: StringFilter<"Santri"> | string
    target?: EnumKategoriTargetFilter<"Santri"> | $Enums.KategoriTarget
    halaqah_id?: IntFilter<"Santri"> | number
    halaqah?: XOR<HalaqahScalarRelationFilter, HalaqahWhereInput>
  }

  export type SantriOrderByWithRelationInput = {
    id_santri?: SortOrder
    nama_santri?: SortOrder
    target?: SortOrder
    halaqah_id?: SortOrder
    halaqah?: HalaqahOrderByWithRelationInput
  }

  export type SantriWhereUniqueInput = Prisma.AtLeast<{
    id_santri?: number
    AND?: SantriWhereInput | SantriWhereInput[]
    OR?: SantriWhereInput[]
    NOT?: SantriWhereInput | SantriWhereInput[]
    nama_santri?: StringFilter<"Santri"> | string
    target?: EnumKategoriTargetFilter<"Santri"> | $Enums.KategoriTarget
    halaqah_id?: IntFilter<"Santri"> | number
    halaqah?: XOR<HalaqahScalarRelationFilter, HalaqahWhereInput>
  }, "id_santri">

  export type SantriOrderByWithAggregationInput = {
    id_santri?: SortOrder
    nama_santri?: SortOrder
    target?: SortOrder
    halaqah_id?: SortOrder
    _count?: SantriCountOrderByAggregateInput
    _avg?: SantriAvgOrderByAggregateInput
    _max?: SantriMaxOrderByAggregateInput
    _min?: SantriMinOrderByAggregateInput
    _sum?: SantriSumOrderByAggregateInput
  }

  export type SantriScalarWhereWithAggregatesInput = {
    AND?: SantriScalarWhereWithAggregatesInput | SantriScalarWhereWithAggregatesInput[]
    OR?: SantriScalarWhereWithAggregatesInput[]
    NOT?: SantriScalarWhereWithAggregatesInput | SantriScalarWhereWithAggregatesInput[]
    id_santri?: IntWithAggregatesFilter<"Santri"> | number
    nama_santri?: StringWithAggregatesFilter<"Santri"> | string
    target?: EnumKategoriTargetWithAggregatesFilter<"Santri"> | $Enums.KategoriTarget
    halaqah_id?: IntWithAggregatesFilter<"Santri"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id_user?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    halaqah?: XOR<HalaqahNullableScalarRelationFilter, HalaqahWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    halaqah?: HalaqahOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    halaqah?: XOR<HalaqahNullableScalarRelationFilter, HalaqahWhereInput> | null
  }, "id_user" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type HalaqahCreateInput = {
    name_halaqah: string
    deleted_at?: Date | string | null
    muhafiz: UserCreateNestedOneWithoutHalaqahInput
    santri?: SantriCreateNestedManyWithoutHalaqahInput
  }

  export type HalaqahUncheckedCreateInput = {
    id_halaqah?: number
    name_halaqah: string
    muhafiz_id: number
    deleted_at?: Date | string | null
    santri?: SantriUncheckedCreateNestedManyWithoutHalaqahInput
  }

  export type HalaqahUpdateInput = {
    name_halaqah?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    muhafiz?: UserUpdateOneRequiredWithoutHalaqahNestedInput
    santri?: SantriUpdateManyWithoutHalaqahNestedInput
  }

  export type HalaqahUncheckedUpdateInput = {
    id_halaqah?: IntFieldUpdateOperationsInput | number
    name_halaqah?: StringFieldUpdateOperationsInput | string
    muhafiz_id?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    santri?: SantriUncheckedUpdateManyWithoutHalaqahNestedInput
  }

  export type HalaqahCreateManyInput = {
    id_halaqah?: number
    name_halaqah: string
    muhafiz_id: number
    deleted_at?: Date | string | null
  }

  export type HalaqahUpdateManyMutationInput = {
    name_halaqah?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HalaqahUncheckedUpdateManyInput = {
    id_halaqah?: IntFieldUpdateOperationsInput | number
    name_halaqah?: StringFieldUpdateOperationsInput | string
    muhafiz_id?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SantriCreateInput = {
    nama_santri: string
    target?: $Enums.KategoriTarget
    halaqah: HalaqahCreateNestedOneWithoutSantriInput
  }

  export type SantriUncheckedCreateInput = {
    id_santri?: number
    nama_santri: string
    target?: $Enums.KategoriTarget
    halaqah_id: number
  }

  export type SantriUpdateInput = {
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
    halaqah?: HalaqahUpdateOneRequiredWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateInput = {
    id_santri?: IntFieldUpdateOperationsInput | number
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
    halaqah_id?: IntFieldUpdateOperationsInput | number
  }

  export type SantriCreateManyInput = {
    id_santri?: number
    nama_santri: string
    target?: $Enums.KategoriTarget
    halaqah_id: number
  }

  export type SantriUpdateManyMutationInput = {
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
  }

  export type SantriUncheckedUpdateManyInput = {
    id_santri?: IntFieldUpdateOperationsInput | number
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
    halaqah_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role?: string
    deleted_at?: Date | string | null
    halaqah?: HalaqahCreateNestedOneWithoutMuhafizInput
  }

  export type UserUncheckedCreateInput = {
    id_user?: number
    username: string
    email: string
    password: string
    role?: string
    deleted_at?: Date | string | null
    halaqah?: HalaqahUncheckedCreateNestedOneWithoutMuhafizInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    halaqah?: HalaqahUpdateOneWithoutMuhafizNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    halaqah?: HalaqahUncheckedUpdateOneWithoutMuhafizNestedInput
  }

  export type UserCreateManyInput = {
    id_user?: number
    username: string
    email: string
    password: string
    role?: string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SantriListRelationFilter = {
    every?: SantriWhereInput
    some?: SantriWhereInput
    none?: SantriWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SantriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HalaqahCountOrderByAggregateInput = {
    id_halaqah?: SortOrder
    name_halaqah?: SortOrder
    muhafiz_id?: SortOrder
    deleted_at?: SortOrder
  }

  export type HalaqahAvgOrderByAggregateInput = {
    id_halaqah?: SortOrder
    muhafiz_id?: SortOrder
  }

  export type HalaqahMaxOrderByAggregateInput = {
    id_halaqah?: SortOrder
    name_halaqah?: SortOrder
    muhafiz_id?: SortOrder
    deleted_at?: SortOrder
  }

  export type HalaqahMinOrderByAggregateInput = {
    id_halaqah?: SortOrder
    name_halaqah?: SortOrder
    muhafiz_id?: SortOrder
    deleted_at?: SortOrder
  }

  export type HalaqahSumOrderByAggregateInput = {
    id_halaqah?: SortOrder
    muhafiz_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumKategoriTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriTarget | EnumKategoriTargetFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriTargetFilter<$PrismaModel> | $Enums.KategoriTarget
  }

  export type HalaqahScalarRelationFilter = {
    is?: HalaqahWhereInput
    isNot?: HalaqahWhereInput
  }

  export type SantriCountOrderByAggregateInput = {
    id_santri?: SortOrder
    nama_santri?: SortOrder
    target?: SortOrder
    halaqah_id?: SortOrder
  }

  export type SantriAvgOrderByAggregateInput = {
    id_santri?: SortOrder
    halaqah_id?: SortOrder
  }

  export type SantriMaxOrderByAggregateInput = {
    id_santri?: SortOrder
    nama_santri?: SortOrder
    target?: SortOrder
    halaqah_id?: SortOrder
  }

  export type SantriMinOrderByAggregateInput = {
    id_santri?: SortOrder
    nama_santri?: SortOrder
    target?: SortOrder
    halaqah_id?: SortOrder
  }

  export type SantriSumOrderByAggregateInput = {
    id_santri?: SortOrder
    halaqah_id?: SortOrder
  }

  export type EnumKategoriTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriTarget | EnumKategoriTargetFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriTargetWithAggregatesFilter<$PrismaModel> | $Enums.KategoriTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriTargetFilter<$PrismaModel>
    _max?: NestedEnumKategoriTargetFilter<$PrismaModel>
  }

  export type HalaqahNullableScalarRelationFilter = {
    is?: HalaqahWhereInput | null
    isNot?: HalaqahWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type UserCreateNestedOneWithoutHalaqahInput = {
    create?: XOR<UserCreateWithoutHalaqahInput, UserUncheckedCreateWithoutHalaqahInput>
    connectOrCreate?: UserCreateOrConnectWithoutHalaqahInput
    connect?: UserWhereUniqueInput
  }

  export type SantriCreateNestedManyWithoutHalaqahInput = {
    create?: XOR<SantriCreateWithoutHalaqahInput, SantriUncheckedCreateWithoutHalaqahInput> | SantriCreateWithoutHalaqahInput[] | SantriUncheckedCreateWithoutHalaqahInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutHalaqahInput | SantriCreateOrConnectWithoutHalaqahInput[]
    createMany?: SantriCreateManyHalaqahInputEnvelope
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
  }

  export type SantriUncheckedCreateNestedManyWithoutHalaqahInput = {
    create?: XOR<SantriCreateWithoutHalaqahInput, SantriUncheckedCreateWithoutHalaqahInput> | SantriCreateWithoutHalaqahInput[] | SantriUncheckedCreateWithoutHalaqahInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutHalaqahInput | SantriCreateOrConnectWithoutHalaqahInput[]
    createMany?: SantriCreateManyHalaqahInputEnvelope
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutHalaqahNestedInput = {
    create?: XOR<UserCreateWithoutHalaqahInput, UserUncheckedCreateWithoutHalaqahInput>
    connectOrCreate?: UserCreateOrConnectWithoutHalaqahInput
    upsert?: UserUpsertWithoutHalaqahInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHalaqahInput, UserUpdateWithoutHalaqahInput>, UserUncheckedUpdateWithoutHalaqahInput>
  }

  export type SantriUpdateManyWithoutHalaqahNestedInput = {
    create?: XOR<SantriCreateWithoutHalaqahInput, SantriUncheckedCreateWithoutHalaqahInput> | SantriCreateWithoutHalaqahInput[] | SantriUncheckedCreateWithoutHalaqahInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutHalaqahInput | SantriCreateOrConnectWithoutHalaqahInput[]
    upsert?: SantriUpsertWithWhereUniqueWithoutHalaqahInput | SantriUpsertWithWhereUniqueWithoutHalaqahInput[]
    createMany?: SantriCreateManyHalaqahInputEnvelope
    set?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    disconnect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    delete?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    update?: SantriUpdateWithWhereUniqueWithoutHalaqahInput | SantriUpdateWithWhereUniqueWithoutHalaqahInput[]
    updateMany?: SantriUpdateManyWithWhereWithoutHalaqahInput | SantriUpdateManyWithWhereWithoutHalaqahInput[]
    deleteMany?: SantriScalarWhereInput | SantriScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SantriUncheckedUpdateManyWithoutHalaqahNestedInput = {
    create?: XOR<SantriCreateWithoutHalaqahInput, SantriUncheckedCreateWithoutHalaqahInput> | SantriCreateWithoutHalaqahInput[] | SantriUncheckedCreateWithoutHalaqahInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutHalaqahInput | SantriCreateOrConnectWithoutHalaqahInput[]
    upsert?: SantriUpsertWithWhereUniqueWithoutHalaqahInput | SantriUpsertWithWhereUniqueWithoutHalaqahInput[]
    createMany?: SantriCreateManyHalaqahInputEnvelope
    set?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    disconnect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    delete?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    update?: SantriUpdateWithWhereUniqueWithoutHalaqahInput | SantriUpdateWithWhereUniqueWithoutHalaqahInput[]
    updateMany?: SantriUpdateManyWithWhereWithoutHalaqahInput | SantriUpdateManyWithWhereWithoutHalaqahInput[]
    deleteMany?: SantriScalarWhereInput | SantriScalarWhereInput[]
  }

  export type HalaqahCreateNestedOneWithoutSantriInput = {
    create?: XOR<HalaqahCreateWithoutSantriInput, HalaqahUncheckedCreateWithoutSantriInput>
    connectOrCreate?: HalaqahCreateOrConnectWithoutSantriInput
    connect?: HalaqahWhereUniqueInput
  }

  export type EnumKategoriTargetFieldUpdateOperationsInput = {
    set?: $Enums.KategoriTarget
  }

  export type HalaqahUpdateOneRequiredWithoutSantriNestedInput = {
    create?: XOR<HalaqahCreateWithoutSantriInput, HalaqahUncheckedCreateWithoutSantriInput>
    connectOrCreate?: HalaqahCreateOrConnectWithoutSantriInput
    upsert?: HalaqahUpsertWithoutSantriInput
    connect?: HalaqahWhereUniqueInput
    update?: XOR<XOR<HalaqahUpdateToOneWithWhereWithoutSantriInput, HalaqahUpdateWithoutSantriInput>, HalaqahUncheckedUpdateWithoutSantriInput>
  }

  export type HalaqahCreateNestedOneWithoutMuhafizInput = {
    create?: XOR<HalaqahCreateWithoutMuhafizInput, HalaqahUncheckedCreateWithoutMuhafizInput>
    connectOrCreate?: HalaqahCreateOrConnectWithoutMuhafizInput
    connect?: HalaqahWhereUniqueInput
  }

  export type HalaqahUncheckedCreateNestedOneWithoutMuhafizInput = {
    create?: XOR<HalaqahCreateWithoutMuhafizInput, HalaqahUncheckedCreateWithoutMuhafizInput>
    connectOrCreate?: HalaqahCreateOrConnectWithoutMuhafizInput
    connect?: HalaqahWhereUniqueInput
  }

  export type HalaqahUpdateOneWithoutMuhafizNestedInput = {
    create?: XOR<HalaqahCreateWithoutMuhafizInput, HalaqahUncheckedCreateWithoutMuhafizInput>
    connectOrCreate?: HalaqahCreateOrConnectWithoutMuhafizInput
    upsert?: HalaqahUpsertWithoutMuhafizInput
    disconnect?: HalaqahWhereInput | boolean
    delete?: HalaqahWhereInput | boolean
    connect?: HalaqahWhereUniqueInput
    update?: XOR<XOR<HalaqahUpdateToOneWithWhereWithoutMuhafizInput, HalaqahUpdateWithoutMuhafizInput>, HalaqahUncheckedUpdateWithoutMuhafizInput>
  }

  export type HalaqahUncheckedUpdateOneWithoutMuhafizNestedInput = {
    create?: XOR<HalaqahCreateWithoutMuhafizInput, HalaqahUncheckedCreateWithoutMuhafizInput>
    connectOrCreate?: HalaqahCreateOrConnectWithoutMuhafizInput
    upsert?: HalaqahUpsertWithoutMuhafizInput
    disconnect?: HalaqahWhereInput | boolean
    delete?: HalaqahWhereInput | boolean
    connect?: HalaqahWhereUniqueInput
    update?: XOR<XOR<HalaqahUpdateToOneWithWhereWithoutMuhafizInput, HalaqahUpdateWithoutMuhafizInput>, HalaqahUncheckedUpdateWithoutMuhafizInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumKategoriTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriTarget | EnumKategoriTargetFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriTargetFilter<$PrismaModel> | $Enums.KategoriTarget
  }

  export type NestedEnumKategoriTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriTarget | EnumKategoriTargetFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriTarget[] | ListEnumKategoriTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriTargetWithAggregatesFilter<$PrismaModel> | $Enums.KategoriTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriTargetFilter<$PrismaModel>
    _max?: NestedEnumKategoriTargetFilter<$PrismaModel>
  }

  export type UserCreateWithoutHalaqahInput = {
    username: string
    email: string
    password: string
    role?: string
    deleted_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutHalaqahInput = {
    id_user?: number
    username: string
    email: string
    password: string
    role?: string
    deleted_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutHalaqahInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHalaqahInput, UserUncheckedCreateWithoutHalaqahInput>
  }

  export type SantriCreateWithoutHalaqahInput = {
    nama_santri: string
    target?: $Enums.KategoriTarget
  }

  export type SantriUncheckedCreateWithoutHalaqahInput = {
    id_santri?: number
    nama_santri: string
    target?: $Enums.KategoriTarget
  }

  export type SantriCreateOrConnectWithoutHalaqahInput = {
    where: SantriWhereUniqueInput
    create: XOR<SantriCreateWithoutHalaqahInput, SantriUncheckedCreateWithoutHalaqahInput>
  }

  export type SantriCreateManyHalaqahInputEnvelope = {
    data: SantriCreateManyHalaqahInput | SantriCreateManyHalaqahInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHalaqahInput = {
    update: XOR<UserUpdateWithoutHalaqahInput, UserUncheckedUpdateWithoutHalaqahInput>
    create: XOR<UserCreateWithoutHalaqahInput, UserUncheckedCreateWithoutHalaqahInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHalaqahInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHalaqahInput, UserUncheckedUpdateWithoutHalaqahInput>
  }

  export type UserUpdateWithoutHalaqahInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutHalaqahInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SantriUpsertWithWhereUniqueWithoutHalaqahInput = {
    where: SantriWhereUniqueInput
    update: XOR<SantriUpdateWithoutHalaqahInput, SantriUncheckedUpdateWithoutHalaqahInput>
    create: XOR<SantriCreateWithoutHalaqahInput, SantriUncheckedCreateWithoutHalaqahInput>
  }

  export type SantriUpdateWithWhereUniqueWithoutHalaqahInput = {
    where: SantriWhereUniqueInput
    data: XOR<SantriUpdateWithoutHalaqahInput, SantriUncheckedUpdateWithoutHalaqahInput>
  }

  export type SantriUpdateManyWithWhereWithoutHalaqahInput = {
    where: SantriScalarWhereInput
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyWithoutHalaqahInput>
  }

  export type SantriScalarWhereInput = {
    AND?: SantriScalarWhereInput | SantriScalarWhereInput[]
    OR?: SantriScalarWhereInput[]
    NOT?: SantriScalarWhereInput | SantriScalarWhereInput[]
    id_santri?: IntFilter<"Santri"> | number
    nama_santri?: StringFilter<"Santri"> | string
    target?: EnumKategoriTargetFilter<"Santri"> | $Enums.KategoriTarget
    halaqah_id?: IntFilter<"Santri"> | number
  }

  export type HalaqahCreateWithoutSantriInput = {
    name_halaqah: string
    deleted_at?: Date | string | null
    muhafiz: UserCreateNestedOneWithoutHalaqahInput
  }

  export type HalaqahUncheckedCreateWithoutSantriInput = {
    id_halaqah?: number
    name_halaqah: string
    muhafiz_id: number
    deleted_at?: Date | string | null
  }

  export type HalaqahCreateOrConnectWithoutSantriInput = {
    where: HalaqahWhereUniqueInput
    create: XOR<HalaqahCreateWithoutSantriInput, HalaqahUncheckedCreateWithoutSantriInput>
  }

  export type HalaqahUpsertWithoutSantriInput = {
    update: XOR<HalaqahUpdateWithoutSantriInput, HalaqahUncheckedUpdateWithoutSantriInput>
    create: XOR<HalaqahCreateWithoutSantriInput, HalaqahUncheckedCreateWithoutSantriInput>
    where?: HalaqahWhereInput
  }

  export type HalaqahUpdateToOneWithWhereWithoutSantriInput = {
    where?: HalaqahWhereInput
    data: XOR<HalaqahUpdateWithoutSantriInput, HalaqahUncheckedUpdateWithoutSantriInput>
  }

  export type HalaqahUpdateWithoutSantriInput = {
    name_halaqah?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    muhafiz?: UserUpdateOneRequiredWithoutHalaqahNestedInput
  }

  export type HalaqahUncheckedUpdateWithoutSantriInput = {
    id_halaqah?: IntFieldUpdateOperationsInput | number
    name_halaqah?: StringFieldUpdateOperationsInput | string
    muhafiz_id?: IntFieldUpdateOperationsInput | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HalaqahCreateWithoutMuhafizInput = {
    name_halaqah: string
    deleted_at?: Date | string | null
    santri?: SantriCreateNestedManyWithoutHalaqahInput
  }

  export type HalaqahUncheckedCreateWithoutMuhafizInput = {
    id_halaqah?: number
    name_halaqah: string
    deleted_at?: Date | string | null
    santri?: SantriUncheckedCreateNestedManyWithoutHalaqahInput
  }

  export type HalaqahCreateOrConnectWithoutMuhafizInput = {
    where: HalaqahWhereUniqueInput
    create: XOR<HalaqahCreateWithoutMuhafizInput, HalaqahUncheckedCreateWithoutMuhafizInput>
  }

  export type HalaqahUpsertWithoutMuhafizInput = {
    update: XOR<HalaqahUpdateWithoutMuhafizInput, HalaqahUncheckedUpdateWithoutMuhafizInput>
    create: XOR<HalaqahCreateWithoutMuhafizInput, HalaqahUncheckedCreateWithoutMuhafizInput>
    where?: HalaqahWhereInput
  }

  export type HalaqahUpdateToOneWithWhereWithoutMuhafizInput = {
    where?: HalaqahWhereInput
    data: XOR<HalaqahUpdateWithoutMuhafizInput, HalaqahUncheckedUpdateWithoutMuhafizInput>
  }

  export type HalaqahUpdateWithoutMuhafizInput = {
    name_halaqah?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    santri?: SantriUpdateManyWithoutHalaqahNestedInput
  }

  export type HalaqahUncheckedUpdateWithoutMuhafizInput = {
    id_halaqah?: IntFieldUpdateOperationsInput | number
    name_halaqah?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    santri?: SantriUncheckedUpdateManyWithoutHalaqahNestedInput
  }

  export type SantriCreateManyHalaqahInput = {
    id_santri?: number
    nama_santri: string
    target?: $Enums.KategoriTarget
  }

  export type SantriUpdateWithoutHalaqahInput = {
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
  }

  export type SantriUncheckedUpdateWithoutHalaqahInput = {
    id_santri?: IntFieldUpdateOperationsInput | number
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
  }

  export type SantriUncheckedUpdateManyWithoutHalaqahInput = {
    id_santri?: IntFieldUpdateOperationsInput | number
    nama_santri?: StringFieldUpdateOperationsInput | string
    target?: EnumKategoriTargetFieldUpdateOperationsInput | $Enums.KategoriTarget
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}