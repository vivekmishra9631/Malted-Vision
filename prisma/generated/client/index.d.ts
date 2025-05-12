
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model CampusInfluencer
 * 
 */
export type CampusInfluencer = $Result.DefaultSelection<Prisma.$CampusInfluencerPayload>
/**
 * Model NewsletterSubscriber
 * 
 */
export type NewsletterSubscriber = $Result.DefaultSelection<Prisma.$NewsletterSubscriberPayload>
/**
 * Model ContactUs
 * 
 */
export type ContactUs = $Result.DefaultSelection<Prisma.$ContactUsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campusInfluencer`: Exposes CRUD operations for the **CampusInfluencer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampusInfluencers
    * const campusInfluencers = await prisma.campusInfluencer.findMany()
    * ```
    */
  get campusInfluencer(): Prisma.CampusInfluencerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterSubscriber`: Exposes CRUD operations for the **NewsletterSubscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterSubscribers
    * const newsletterSubscribers = await prisma.newsletterSubscriber.findMany()
    * ```
    */
  get newsletterSubscriber(): Prisma.NewsletterSubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactUs`: Exposes CRUD operations for the **ContactUs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactuses
    * const contactuses = await prisma.contactUs.findMany()
    * ```
    */
  get contactUs(): Prisma.ContactUsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Campaign: 'Campaign',
    CampusInfluencer: 'CampusInfluencer',
    NewsletterSubscriber: 'NewsletterSubscriber',
    ContactUs: 'ContactUs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign" | "campusInfluencer" | "newsletterSubscriber" | "contactUs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      CampusInfluencer: {
        payload: Prisma.$CampusInfluencerPayload<ExtArgs>
        fields: Prisma.CampusInfluencerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampusInfluencerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampusInfluencerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>
          }
          findFirst: {
            args: Prisma.CampusInfluencerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampusInfluencerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>
          }
          findMany: {
            args: Prisma.CampusInfluencerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>[]
          }
          create: {
            args: Prisma.CampusInfluencerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>
          }
          createMany: {
            args: Prisma.CampusInfluencerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampusInfluencerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>[]
          }
          delete: {
            args: Prisma.CampusInfluencerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>
          }
          update: {
            args: Prisma.CampusInfluencerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>
          }
          deleteMany: {
            args: Prisma.CampusInfluencerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampusInfluencerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampusInfluencerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>[]
          }
          upsert: {
            args: Prisma.CampusInfluencerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusInfluencerPayload>
          }
          aggregate: {
            args: Prisma.CampusInfluencerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampusInfluencer>
          }
          groupBy: {
            args: Prisma.CampusInfluencerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampusInfluencerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampusInfluencerCountArgs<ExtArgs>
            result: $Utils.Optional<CampusInfluencerCountAggregateOutputType> | number
          }
        }
      }
      NewsletterSubscriber: {
        payload: Prisma.$NewsletterSubscriberPayload<ExtArgs>
        fields: Prisma.NewsletterSubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterSubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterSubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          findFirst: {
            args: Prisma.NewsletterSubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterSubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          findMany: {
            args: Prisma.NewsletterSubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>[]
          }
          create: {
            args: Prisma.NewsletterSubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          createMany: {
            args: Prisma.NewsletterSubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterSubscriberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>[]
          }
          delete: {
            args: Prisma.NewsletterSubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          update: {
            args: Prisma.NewsletterSubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterSubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterSubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterSubscriberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterSubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          aggregate: {
            args: Prisma.NewsletterSubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterSubscriber>
          }
          groupBy: {
            args: Prisma.NewsletterSubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterSubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriberCountAggregateOutputType> | number
          }
        }
      }
      ContactUs: {
        payload: Prisma.$ContactUsPayload<ExtArgs>
        fields: Prisma.ContactUsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactUsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactUsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          findFirst: {
            args: Prisma.ContactUsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactUsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          findMany: {
            args: Prisma.ContactUsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          create: {
            args: Prisma.ContactUsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          createMany: {
            args: Prisma.ContactUsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactUsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          delete: {
            args: Prisma.ContactUsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          update: {
            args: Prisma.ContactUsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          deleteMany: {
            args: Prisma.ContactUsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          upsert: {
            args: Prisma.ContactUsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          aggregate: {
            args: Prisma.ContactUsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactUs>
          }
          groupBy: {
            args: Prisma.ContactUsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactUsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactUsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactUsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    campaign?: CampaignOmit
    campusInfluencer?: CampusInfluencerOmit
    newsletterSubscriber?: NewsletterSubscriberOmit
    contactUs?: ContactUsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    brandName: string | null
    email: string | null
    campaignBudget: string | null
    cityCountry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    brandName: string | null
    email: string | null
    campaignBudget: string | null
    cityCountry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    fullName: number
    brandName: number
    email: number
    campaignBudget: number
    cityCountry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    fullName?: true
    brandName?: true
    email?: true
    campaignBudget?: true
    cityCountry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    fullName?: true
    brandName?: true
    email?: true
    campaignBudget?: true
    cityCountry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    fullName?: true
    brandName?: true
    email?: true
    campaignBudget?: true
    cityCountry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    fullName: string
    brandName: string
    email: string
    campaignBudget: string
    cityCountry: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    brandName?: boolean
    email?: boolean
    campaignBudget?: boolean
    cityCountry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    brandName?: boolean
    email?: boolean
    campaignBudget?: boolean
    cityCountry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    brandName?: boolean
    email?: boolean
    campaignBudget?: boolean
    cityCountry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    fullName?: boolean
    brandName?: boolean
    email?: boolean
    campaignBudget?: boolean
    cityCountry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "brandName" | "email" | "campaignBudget" | "cityCountry" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      brandName: string
      email: string
      campaignBudget: string
      cityCountry: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly fullName: FieldRef<"Campaign", 'String'>
    readonly brandName: FieldRef<"Campaign", 'String'>
    readonly email: FieldRef<"Campaign", 'String'>
    readonly campaignBudget: FieldRef<"Campaign", 'String'>
    readonly cityCountry: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
  }


  /**
   * Model CampusInfluencer
   */

  export type AggregateCampusInfluencer = {
    _count: CampusInfluencerCountAggregateOutputType | null
    _min: CampusInfluencerMinAggregateOutputType | null
    _max: CampusInfluencerMaxAggregateOutputType | null
  }

  export type CampusInfluencerMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    collegeName: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampusInfluencerMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    collegeName: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampusInfluencerCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    collegeName: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampusInfluencerMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    collegeName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampusInfluencerMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    collegeName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampusInfluencerCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    collegeName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampusInfluencerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampusInfluencer to aggregate.
     */
    where?: CampusInfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampusInfluencers to fetch.
     */
    orderBy?: CampusInfluencerOrderByWithRelationInput | CampusInfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampusInfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampusInfluencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampusInfluencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampusInfluencers
    **/
    _count?: true | CampusInfluencerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampusInfluencerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampusInfluencerMaxAggregateInputType
  }

  export type GetCampusInfluencerAggregateType<T extends CampusInfluencerAggregateArgs> = {
        [P in keyof T & keyof AggregateCampusInfluencer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampusInfluencer[P]>
      : GetScalarType<T[P], AggregateCampusInfluencer[P]>
  }




  export type CampusInfluencerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampusInfluencerWhereInput
    orderBy?: CampusInfluencerOrderByWithAggregationInput | CampusInfluencerOrderByWithAggregationInput[]
    by: CampusInfluencerScalarFieldEnum[] | CampusInfluencerScalarFieldEnum
    having?: CampusInfluencerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampusInfluencerCountAggregateInputType | true
    _min?: CampusInfluencerMinAggregateInputType
    _max?: CampusInfluencerMaxAggregateInputType
  }

  export type CampusInfluencerGroupByOutputType = {
    id: string
    fullName: string
    email: string
    collegeName: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    _count: CampusInfluencerCountAggregateOutputType | null
    _min: CampusInfluencerMinAggregateOutputType | null
    _max: CampusInfluencerMaxAggregateOutputType | null
  }

  type GetCampusInfluencerGroupByPayload<T extends CampusInfluencerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampusInfluencerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampusInfluencerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampusInfluencerGroupByOutputType[P]>
            : GetScalarType<T[P], CampusInfluencerGroupByOutputType[P]>
        }
      >
    >


  export type CampusInfluencerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    collegeName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campusInfluencer"]>

  export type CampusInfluencerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    collegeName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campusInfluencer"]>

  export type CampusInfluencerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    collegeName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campusInfluencer"]>

  export type CampusInfluencerSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    collegeName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampusInfluencerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "collegeName" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["campusInfluencer"]>

  export type $CampusInfluencerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampusInfluencer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      collegeName: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campusInfluencer"]>
    composites: {}
  }

  type CampusInfluencerGetPayload<S extends boolean | null | undefined | CampusInfluencerDefaultArgs> = $Result.GetResult<Prisma.$CampusInfluencerPayload, S>

  type CampusInfluencerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampusInfluencerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampusInfluencerCountAggregateInputType | true
    }

  export interface CampusInfluencerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampusInfluencer'], meta: { name: 'CampusInfluencer' } }
    /**
     * Find zero or one CampusInfluencer that matches the filter.
     * @param {CampusInfluencerFindUniqueArgs} args - Arguments to find a CampusInfluencer
     * @example
     * // Get one CampusInfluencer
     * const campusInfluencer = await prisma.campusInfluencer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampusInfluencerFindUniqueArgs>(args: SelectSubset<T, CampusInfluencerFindUniqueArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampusInfluencer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampusInfluencerFindUniqueOrThrowArgs} args - Arguments to find a CampusInfluencer
     * @example
     * // Get one CampusInfluencer
     * const campusInfluencer = await prisma.campusInfluencer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampusInfluencerFindUniqueOrThrowArgs>(args: SelectSubset<T, CampusInfluencerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampusInfluencer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerFindFirstArgs} args - Arguments to find a CampusInfluencer
     * @example
     * // Get one CampusInfluencer
     * const campusInfluencer = await prisma.campusInfluencer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampusInfluencerFindFirstArgs>(args?: SelectSubset<T, CampusInfluencerFindFirstArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampusInfluencer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerFindFirstOrThrowArgs} args - Arguments to find a CampusInfluencer
     * @example
     * // Get one CampusInfluencer
     * const campusInfluencer = await prisma.campusInfluencer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampusInfluencerFindFirstOrThrowArgs>(args?: SelectSubset<T, CampusInfluencerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampusInfluencers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampusInfluencers
     * const campusInfluencers = await prisma.campusInfluencer.findMany()
     * 
     * // Get first 10 CampusInfluencers
     * const campusInfluencers = await prisma.campusInfluencer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campusInfluencerWithIdOnly = await prisma.campusInfluencer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampusInfluencerFindManyArgs>(args?: SelectSubset<T, CampusInfluencerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampusInfluencer.
     * @param {CampusInfluencerCreateArgs} args - Arguments to create a CampusInfluencer.
     * @example
     * // Create one CampusInfluencer
     * const CampusInfluencer = await prisma.campusInfluencer.create({
     *   data: {
     *     // ... data to create a CampusInfluencer
     *   }
     * })
     * 
     */
    create<T extends CampusInfluencerCreateArgs>(args: SelectSubset<T, CampusInfluencerCreateArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampusInfluencers.
     * @param {CampusInfluencerCreateManyArgs} args - Arguments to create many CampusInfluencers.
     * @example
     * // Create many CampusInfluencers
     * const campusInfluencer = await prisma.campusInfluencer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampusInfluencerCreateManyArgs>(args?: SelectSubset<T, CampusInfluencerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampusInfluencers and returns the data saved in the database.
     * @param {CampusInfluencerCreateManyAndReturnArgs} args - Arguments to create many CampusInfluencers.
     * @example
     * // Create many CampusInfluencers
     * const campusInfluencer = await prisma.campusInfluencer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampusInfluencers and only return the `id`
     * const campusInfluencerWithIdOnly = await prisma.campusInfluencer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampusInfluencerCreateManyAndReturnArgs>(args?: SelectSubset<T, CampusInfluencerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampusInfluencer.
     * @param {CampusInfluencerDeleteArgs} args - Arguments to delete one CampusInfluencer.
     * @example
     * // Delete one CampusInfluencer
     * const CampusInfluencer = await prisma.campusInfluencer.delete({
     *   where: {
     *     // ... filter to delete one CampusInfluencer
     *   }
     * })
     * 
     */
    delete<T extends CampusInfluencerDeleteArgs>(args: SelectSubset<T, CampusInfluencerDeleteArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampusInfluencer.
     * @param {CampusInfluencerUpdateArgs} args - Arguments to update one CampusInfluencer.
     * @example
     * // Update one CampusInfluencer
     * const campusInfluencer = await prisma.campusInfluencer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampusInfluencerUpdateArgs>(args: SelectSubset<T, CampusInfluencerUpdateArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampusInfluencers.
     * @param {CampusInfluencerDeleteManyArgs} args - Arguments to filter CampusInfluencers to delete.
     * @example
     * // Delete a few CampusInfluencers
     * const { count } = await prisma.campusInfluencer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampusInfluencerDeleteManyArgs>(args?: SelectSubset<T, CampusInfluencerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampusInfluencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampusInfluencers
     * const campusInfluencer = await prisma.campusInfluencer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampusInfluencerUpdateManyArgs>(args: SelectSubset<T, CampusInfluencerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampusInfluencers and returns the data updated in the database.
     * @param {CampusInfluencerUpdateManyAndReturnArgs} args - Arguments to update many CampusInfluencers.
     * @example
     * // Update many CampusInfluencers
     * const campusInfluencer = await prisma.campusInfluencer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampusInfluencers and only return the `id`
     * const campusInfluencerWithIdOnly = await prisma.campusInfluencer.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CampusInfluencerUpdateManyAndReturnArgs>(args: SelectSubset<T, CampusInfluencerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampusInfluencer.
     * @param {CampusInfluencerUpsertArgs} args - Arguments to update or create a CampusInfluencer.
     * @example
     * // Update or create a CampusInfluencer
     * const campusInfluencer = await prisma.campusInfluencer.upsert({
     *   create: {
     *     // ... data to create a CampusInfluencer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampusInfluencer we want to update
     *   }
     * })
     */
    upsert<T extends CampusInfluencerUpsertArgs>(args: SelectSubset<T, CampusInfluencerUpsertArgs<ExtArgs>>): Prisma__CampusInfluencerClient<$Result.GetResult<Prisma.$CampusInfluencerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampusInfluencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerCountArgs} args - Arguments to filter CampusInfluencers to count.
     * @example
     * // Count the number of CampusInfluencers
     * const count = await prisma.campusInfluencer.count({
     *   where: {
     *     // ... the filter for the CampusInfluencers we want to count
     *   }
     * })
    **/
    count<T extends CampusInfluencerCountArgs>(
      args?: Subset<T, CampusInfluencerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampusInfluencerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampusInfluencer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampusInfluencerAggregateArgs>(args: Subset<T, CampusInfluencerAggregateArgs>): Prisma.PrismaPromise<GetCampusInfluencerAggregateType<T>>

    /**
     * Group by CampusInfluencer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusInfluencerGroupByArgs} args - Group by arguments.
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
      T extends CampusInfluencerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampusInfluencerGroupByArgs['orderBy'] }
        : { orderBy?: CampusInfluencerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampusInfluencerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampusInfluencerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampusInfluencer model
   */
  readonly fields: CampusInfluencerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampusInfluencer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampusInfluencerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CampusInfluencer model
   */
  interface CampusInfluencerFieldRefs {
    readonly id: FieldRef<"CampusInfluencer", 'String'>
    readonly fullName: FieldRef<"CampusInfluencer", 'String'>
    readonly email: FieldRef<"CampusInfluencer", 'String'>
    readonly collegeName: FieldRef<"CampusInfluencer", 'String'>
    readonly phoneNumber: FieldRef<"CampusInfluencer", 'String'>
    readonly createdAt: FieldRef<"CampusInfluencer", 'DateTime'>
    readonly updatedAt: FieldRef<"CampusInfluencer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampusInfluencer findUnique
   */
  export type CampusInfluencerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * Filter, which CampusInfluencer to fetch.
     */
    where: CampusInfluencerWhereUniqueInput
  }

  /**
   * CampusInfluencer findUniqueOrThrow
   */
  export type CampusInfluencerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * Filter, which CampusInfluencer to fetch.
     */
    where: CampusInfluencerWhereUniqueInput
  }

  /**
   * CampusInfluencer findFirst
   */
  export type CampusInfluencerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * Filter, which CampusInfluencer to fetch.
     */
    where?: CampusInfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampusInfluencers to fetch.
     */
    orderBy?: CampusInfluencerOrderByWithRelationInput | CampusInfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampusInfluencers.
     */
    cursor?: CampusInfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampusInfluencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampusInfluencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampusInfluencers.
     */
    distinct?: CampusInfluencerScalarFieldEnum | CampusInfluencerScalarFieldEnum[]
  }

  /**
   * CampusInfluencer findFirstOrThrow
   */
  export type CampusInfluencerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * Filter, which CampusInfluencer to fetch.
     */
    where?: CampusInfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampusInfluencers to fetch.
     */
    orderBy?: CampusInfluencerOrderByWithRelationInput | CampusInfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampusInfluencers.
     */
    cursor?: CampusInfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampusInfluencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampusInfluencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampusInfluencers.
     */
    distinct?: CampusInfluencerScalarFieldEnum | CampusInfluencerScalarFieldEnum[]
  }

  /**
   * CampusInfluencer findMany
   */
  export type CampusInfluencerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * Filter, which CampusInfluencers to fetch.
     */
    where?: CampusInfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampusInfluencers to fetch.
     */
    orderBy?: CampusInfluencerOrderByWithRelationInput | CampusInfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampusInfluencers.
     */
    cursor?: CampusInfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampusInfluencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampusInfluencers.
     */
    skip?: number
    distinct?: CampusInfluencerScalarFieldEnum | CampusInfluencerScalarFieldEnum[]
  }

  /**
   * CampusInfluencer create
   */
  export type CampusInfluencerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * The data needed to create a CampusInfluencer.
     */
    data: XOR<CampusInfluencerCreateInput, CampusInfluencerUncheckedCreateInput>
  }

  /**
   * CampusInfluencer createMany
   */
  export type CampusInfluencerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampusInfluencers.
     */
    data: CampusInfluencerCreateManyInput | CampusInfluencerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampusInfluencer createManyAndReturn
   */
  export type CampusInfluencerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * The data used to create many CampusInfluencers.
     */
    data: CampusInfluencerCreateManyInput | CampusInfluencerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampusInfluencer update
   */
  export type CampusInfluencerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * The data needed to update a CampusInfluencer.
     */
    data: XOR<CampusInfluencerUpdateInput, CampusInfluencerUncheckedUpdateInput>
    /**
     * Choose, which CampusInfluencer to update.
     */
    where: CampusInfluencerWhereUniqueInput
  }

  /**
   * CampusInfluencer updateMany
   */
  export type CampusInfluencerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampusInfluencers.
     */
    data: XOR<CampusInfluencerUpdateManyMutationInput, CampusInfluencerUncheckedUpdateManyInput>
    /**
     * Filter which CampusInfluencers to update
     */
    where?: CampusInfluencerWhereInput
    /**
     * Limit how many CampusInfluencers to update.
     */
    limit?: number
  }

  /**
   * CampusInfluencer updateManyAndReturn
   */
  export type CampusInfluencerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * The data used to update CampusInfluencers.
     */
    data: XOR<CampusInfluencerUpdateManyMutationInput, CampusInfluencerUncheckedUpdateManyInput>
    /**
     * Filter which CampusInfluencers to update
     */
    where?: CampusInfluencerWhereInput
    /**
     * Limit how many CampusInfluencers to update.
     */
    limit?: number
  }

  /**
   * CampusInfluencer upsert
   */
  export type CampusInfluencerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * The filter to search for the CampusInfluencer to update in case it exists.
     */
    where: CampusInfluencerWhereUniqueInput
    /**
     * In case the CampusInfluencer found by the `where` argument doesn't exist, create a new CampusInfluencer with this data.
     */
    create: XOR<CampusInfluencerCreateInput, CampusInfluencerUncheckedCreateInput>
    /**
     * In case the CampusInfluencer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampusInfluencerUpdateInput, CampusInfluencerUncheckedUpdateInput>
  }

  /**
   * CampusInfluencer delete
   */
  export type CampusInfluencerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
    /**
     * Filter which CampusInfluencer to delete.
     */
    where: CampusInfluencerWhereUniqueInput
  }

  /**
   * CampusInfluencer deleteMany
   */
  export type CampusInfluencerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampusInfluencers to delete
     */
    where?: CampusInfluencerWhereInput
    /**
     * Limit how many CampusInfluencers to delete.
     */
    limit?: number
  }

  /**
   * CampusInfluencer without action
   */
  export type CampusInfluencerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusInfluencer
     */
    select?: CampusInfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampusInfluencer
     */
    omit?: CampusInfluencerOmit<ExtArgs> | null
  }


  /**
   * Model NewsletterSubscriber
   */

  export type AggregateNewsletterSubscriber = {
    _count: NewsletterSubscriberCountAggregateOutputType | null
    _min: NewsletterSubscriberMinAggregateOutputType | null
    _max: NewsletterSubscriberMaxAggregateOutputType | null
  }

  export type NewsletterSubscriberMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type NewsletterSubscriberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type NewsletterSubscriberCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type NewsletterSubscriberMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type NewsletterSubscriberMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type NewsletterSubscriberCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type NewsletterSubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscriber to aggregate.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterSubscribers
    **/
    _count?: true | NewsletterSubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterSubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterSubscriberMaxAggregateInputType
  }

  export type GetNewsletterSubscriberAggregateType<T extends NewsletterSubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterSubscriber[P]>
      : GetScalarType<T[P], AggregateNewsletterSubscriber[P]>
  }




  export type NewsletterSubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterSubscriberWhereInput
    orderBy?: NewsletterSubscriberOrderByWithAggregationInput | NewsletterSubscriberOrderByWithAggregationInput[]
    by: NewsletterSubscriberScalarFieldEnum[] | NewsletterSubscriberScalarFieldEnum
    having?: NewsletterSubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterSubscriberCountAggregateInputType | true
    _min?: NewsletterSubscriberMinAggregateInputType
    _max?: NewsletterSubscriberMaxAggregateInputType
  }

  export type NewsletterSubscriberGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    _count: NewsletterSubscriberCountAggregateOutputType | null
    _min: NewsletterSubscriberMinAggregateOutputType | null
    _max: NewsletterSubscriberMaxAggregateOutputType | null
  }

  type GetNewsletterSubscriberGroupByPayload<T extends NewsletterSubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterSubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterSubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterSubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterSubscriberGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletterSubscriber"]>

  export type NewsletterSubscriberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletterSubscriber"]>

  export type NewsletterSubscriberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletterSubscriber"]>

  export type NewsletterSubscriberSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type NewsletterSubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt", ExtArgs["result"]["newsletterSubscriber"]>

  export type $NewsletterSubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterSubscriber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["newsletterSubscriber"]>
    composites: {}
  }

  type NewsletterSubscriberGetPayload<S extends boolean | null | undefined | NewsletterSubscriberDefaultArgs> = $Result.GetResult<Prisma.$NewsletterSubscriberPayload, S>

  type NewsletterSubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterSubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterSubscriberCountAggregateInputType | true
    }

  export interface NewsletterSubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterSubscriber'], meta: { name: 'NewsletterSubscriber' } }
    /**
     * Find zero or one NewsletterSubscriber that matches the filter.
     * @param {NewsletterSubscriberFindUniqueArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterSubscriberFindUniqueArgs>(args: SelectSubset<T, NewsletterSubscriberFindUniqueArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterSubscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterSubscriberFindUniqueOrThrowArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterSubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterSubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberFindFirstArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterSubscriberFindFirstArgs>(args?: SelectSubset<T, NewsletterSubscriberFindFirstArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberFindFirstOrThrowArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterSubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterSubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterSubscribers
     * const newsletterSubscribers = await prisma.newsletterSubscriber.findMany()
     * 
     * // Get first 10 NewsletterSubscribers
     * const newsletterSubscribers = await prisma.newsletterSubscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterSubscriberWithIdOnly = await prisma.newsletterSubscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterSubscriberFindManyArgs>(args?: SelectSubset<T, NewsletterSubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterSubscriber.
     * @param {NewsletterSubscriberCreateArgs} args - Arguments to create a NewsletterSubscriber.
     * @example
     * // Create one NewsletterSubscriber
     * const NewsletterSubscriber = await prisma.newsletterSubscriber.create({
     *   data: {
     *     // ... data to create a NewsletterSubscriber
     *   }
     * })
     * 
     */
    create<T extends NewsletterSubscriberCreateArgs>(args: SelectSubset<T, NewsletterSubscriberCreateArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterSubscribers.
     * @param {NewsletterSubscriberCreateManyArgs} args - Arguments to create many NewsletterSubscribers.
     * @example
     * // Create many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterSubscriberCreateManyArgs>(args?: SelectSubset<T, NewsletterSubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsletterSubscribers and returns the data saved in the database.
     * @param {NewsletterSubscriberCreateManyAndReturnArgs} args - Arguments to create many NewsletterSubscribers.
     * @example
     * // Create many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsletterSubscribers and only return the `id`
     * const newsletterSubscriberWithIdOnly = await prisma.newsletterSubscriber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterSubscriberCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterSubscriberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsletterSubscriber.
     * @param {NewsletterSubscriberDeleteArgs} args - Arguments to delete one NewsletterSubscriber.
     * @example
     * // Delete one NewsletterSubscriber
     * const NewsletterSubscriber = await prisma.newsletterSubscriber.delete({
     *   where: {
     *     // ... filter to delete one NewsletterSubscriber
     *   }
     * })
     * 
     */
    delete<T extends NewsletterSubscriberDeleteArgs>(args: SelectSubset<T, NewsletterSubscriberDeleteArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterSubscriber.
     * @param {NewsletterSubscriberUpdateArgs} args - Arguments to update one NewsletterSubscriber.
     * @example
     * // Update one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterSubscriberUpdateArgs>(args: SelectSubset<T, NewsletterSubscriberUpdateArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterSubscribers.
     * @param {NewsletterSubscriberDeleteManyArgs} args - Arguments to filter NewsletterSubscribers to delete.
     * @example
     * // Delete a few NewsletterSubscribers
     * const { count } = await prisma.newsletterSubscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterSubscriberDeleteManyArgs>(args?: SelectSubset<T, NewsletterSubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterSubscriberUpdateManyArgs>(args: SelectSubset<T, NewsletterSubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscribers and returns the data updated in the database.
     * @param {NewsletterSubscriberUpdateManyAndReturnArgs} args - Arguments to update many NewsletterSubscribers.
     * @example
     * // Update many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsletterSubscribers and only return the `id`
     * const newsletterSubscriberWithIdOnly = await prisma.newsletterSubscriber.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends NewsletterSubscriberUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterSubscriberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsletterSubscriber.
     * @param {NewsletterSubscriberUpsertArgs} args - Arguments to update or create a NewsletterSubscriber.
     * @example
     * // Update or create a NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.upsert({
     *   create: {
     *     // ... data to create a NewsletterSubscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterSubscriber we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterSubscriberUpsertArgs>(args: SelectSubset<T, NewsletterSubscriberUpsertArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberCountArgs} args - Arguments to filter NewsletterSubscribers to count.
     * @example
     * // Count the number of NewsletterSubscribers
     * const count = await prisma.newsletterSubscriber.count({
     *   where: {
     *     // ... the filter for the NewsletterSubscribers we want to count
     *   }
     * })
    **/
    count<T extends NewsletterSubscriberCountArgs>(
      args?: Subset<T, NewsletterSubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterSubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterSubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsletterSubscriberAggregateArgs>(args: Subset<T, NewsletterSubscriberAggregateArgs>): Prisma.PrismaPromise<GetNewsletterSubscriberAggregateType<T>>

    /**
     * Group by NewsletterSubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberGroupByArgs} args - Group by arguments.
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
      T extends NewsletterSubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterSubscriberGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterSubscriberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsletterSubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterSubscriber model
   */
  readonly fields: NewsletterSubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterSubscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterSubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NewsletterSubscriber model
   */
  interface NewsletterSubscriberFieldRefs {
    readonly id: FieldRef<"NewsletterSubscriber", 'String'>
    readonly email: FieldRef<"NewsletterSubscriber", 'String'>
    readonly createdAt: FieldRef<"NewsletterSubscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterSubscriber findUnique
   */
  export type NewsletterSubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber findUniqueOrThrow
   */
  export type NewsletterSubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber findFirst
   */
  export type NewsletterSubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscribers.
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscribers.
     */
    distinct?: NewsletterSubscriberScalarFieldEnum | NewsletterSubscriberScalarFieldEnum[]
  }

  /**
   * NewsletterSubscriber findFirstOrThrow
   */
  export type NewsletterSubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscribers.
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscribers.
     */
    distinct?: NewsletterSubscriberScalarFieldEnum | NewsletterSubscriberScalarFieldEnum[]
  }

  /**
   * NewsletterSubscriber findMany
   */
  export type NewsletterSubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscribers to fetch.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterSubscribers.
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    distinct?: NewsletterSubscriberScalarFieldEnum | NewsletterSubscriberScalarFieldEnum[]
  }

  /**
   * NewsletterSubscriber create
   */
  export type NewsletterSubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsletterSubscriber.
     */
    data: XOR<NewsletterSubscriberCreateInput, NewsletterSubscriberUncheckedCreateInput>
  }

  /**
   * NewsletterSubscriber createMany
   */
  export type NewsletterSubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterSubscribers.
     */
    data: NewsletterSubscriberCreateManyInput | NewsletterSubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscriber createManyAndReturn
   */
  export type NewsletterSubscriberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data used to create many NewsletterSubscribers.
     */
    data: NewsletterSubscriberCreateManyInput | NewsletterSubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscriber update
   */
  export type NewsletterSubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsletterSubscriber.
     */
    data: XOR<NewsletterSubscriberUpdateInput, NewsletterSubscriberUncheckedUpdateInput>
    /**
     * Choose, which NewsletterSubscriber to update.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber updateMany
   */
  export type NewsletterSubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterSubscribers.
     */
    data: XOR<NewsletterSubscriberUpdateManyMutationInput, NewsletterSubscriberUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscribers to update
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * Limit how many NewsletterSubscribers to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscriber updateManyAndReturn
   */
  export type NewsletterSubscriberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data used to update NewsletterSubscribers.
     */
    data: XOR<NewsletterSubscriberUpdateManyMutationInput, NewsletterSubscriberUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscribers to update
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * Limit how many NewsletterSubscribers to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscriber upsert
   */
  export type NewsletterSubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsletterSubscriber to update in case it exists.
     */
    where: NewsletterSubscriberWhereUniqueInput
    /**
     * In case the NewsletterSubscriber found by the `where` argument doesn't exist, create a new NewsletterSubscriber with this data.
     */
    create: XOR<NewsletterSubscriberCreateInput, NewsletterSubscriberUncheckedCreateInput>
    /**
     * In case the NewsletterSubscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterSubscriberUpdateInput, NewsletterSubscriberUncheckedUpdateInput>
  }

  /**
   * NewsletterSubscriber delete
   */
  export type NewsletterSubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter which NewsletterSubscriber to delete.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber deleteMany
   */
  export type NewsletterSubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscribers to delete
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * Limit how many NewsletterSubscribers to delete.
     */
    limit?: number
  }

  /**
   * NewsletterSubscriber without action
   */
  export type NewsletterSubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
  }


  /**
   * Model ContactUs
   */

  export type AggregateContactUs = {
    _count: ContactUsCountAggregateOutputType | null
    _min: ContactUsMinAggregateOutputType | null
    _max: ContactUsMaxAggregateOutputType | null
  }

  export type ContactUsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactUsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactUsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactUsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactUsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactUsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactUsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUs to aggregate.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactuses
    **/
    _count?: true | ContactUsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactUsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactUsMaxAggregateInputType
  }

  export type GetContactUsAggregateType<T extends ContactUsAggregateArgs> = {
        [P in keyof T & keyof AggregateContactUs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactUs[P]>
      : GetScalarType<T[P], AggregateContactUs[P]>
  }




  export type ContactUsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUsWhereInput
    orderBy?: ContactUsOrderByWithAggregationInput | ContactUsOrderByWithAggregationInput[]
    by: ContactUsScalarFieldEnum[] | ContactUsScalarFieldEnum
    having?: ContactUsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactUsCountAggregateInputType | true
    _min?: ContactUsMinAggregateInputType
    _max?: ContactUsMaxAggregateInputType
  }

  export type ContactUsGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ContactUsCountAggregateOutputType | null
    _min: ContactUsMinAggregateOutputType | null
    _max: ContactUsMaxAggregateOutputType | null
  }

  type GetContactUsGroupByPayload<T extends ContactUsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactUsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactUsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactUsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactUsGroupByOutputType[P]>
        }
      >
    >


  export type ContactUsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactUsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["contactUs"]>

  export type $ContactUsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactUs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactUs"]>
    composites: {}
  }

  type ContactUsGetPayload<S extends boolean | null | undefined | ContactUsDefaultArgs> = $Result.GetResult<Prisma.$ContactUsPayload, S>

  type ContactUsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactUsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactUsCountAggregateInputType | true
    }

  export interface ContactUsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactUs'], meta: { name: 'ContactUs' } }
    /**
     * Find zero or one ContactUs that matches the filter.
     * @param {ContactUsFindUniqueArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactUsFindUniqueArgs>(args: SelectSubset<T, ContactUsFindUniqueArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactUs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactUsFindUniqueOrThrowArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactUsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactUsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindFirstArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactUsFindFirstArgs>(args?: SelectSubset<T, ContactUsFindFirstArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindFirstOrThrowArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactUsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactUsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactuses
     * const contactuses = await prisma.contactUs.findMany()
     * 
     * // Get first 10 Contactuses
     * const contactuses = await prisma.contactUs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactUsFindManyArgs>(args?: SelectSubset<T, ContactUsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactUs.
     * @param {ContactUsCreateArgs} args - Arguments to create a ContactUs.
     * @example
     * // Create one ContactUs
     * const ContactUs = await prisma.contactUs.create({
     *   data: {
     *     // ... data to create a ContactUs
     *   }
     * })
     * 
     */
    create<T extends ContactUsCreateArgs>(args: SelectSubset<T, ContactUsCreateArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactuses.
     * @param {ContactUsCreateManyArgs} args - Arguments to create many Contactuses.
     * @example
     * // Create many Contactuses
     * const contactUs = await prisma.contactUs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactUsCreateManyArgs>(args?: SelectSubset<T, ContactUsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactuses and returns the data saved in the database.
     * @param {ContactUsCreateManyAndReturnArgs} args - Arguments to create many Contactuses.
     * @example
     * // Create many Contactuses
     * const contactUs = await prisma.contactUs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactuses and only return the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactUsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactUsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactUs.
     * @param {ContactUsDeleteArgs} args - Arguments to delete one ContactUs.
     * @example
     * // Delete one ContactUs
     * const ContactUs = await prisma.contactUs.delete({
     *   where: {
     *     // ... filter to delete one ContactUs
     *   }
     * })
     * 
     */
    delete<T extends ContactUsDeleteArgs>(args: SelectSubset<T, ContactUsDeleteArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactUs.
     * @param {ContactUsUpdateArgs} args - Arguments to update one ContactUs.
     * @example
     * // Update one ContactUs
     * const contactUs = await prisma.contactUs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUsUpdateArgs>(args: SelectSubset<T, ContactUsUpdateArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactuses.
     * @param {ContactUsDeleteManyArgs} args - Arguments to filter Contactuses to delete.
     * @example
     * // Delete a few Contactuses
     * const { count } = await prisma.contactUs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactUsDeleteManyArgs>(args?: SelectSubset<T, ContactUsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactuses
     * const contactUs = await prisma.contactUs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUsUpdateManyArgs>(args: SelectSubset<T, ContactUsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactuses and returns the data updated in the database.
     * @param {ContactUsUpdateManyAndReturnArgs} args - Arguments to update many Contactuses.
     * @example
     * // Update many Contactuses
     * const contactUs = await prisma.contactUs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactuses and only return the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ContactUsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactUs.
     * @param {ContactUsUpsertArgs} args - Arguments to update or create a ContactUs.
     * @example
     * // Update or create a ContactUs
     * const contactUs = await prisma.contactUs.upsert({
     *   create: {
     *     // ... data to create a ContactUs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactUs we want to update
     *   }
     * })
     */
    upsert<T extends ContactUsUpsertArgs>(args: SelectSubset<T, ContactUsUpsertArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsCountArgs} args - Arguments to filter Contactuses to count.
     * @example
     * // Count the number of Contactuses
     * const count = await prisma.contactUs.count({
     *   where: {
     *     // ... the filter for the Contactuses we want to count
     *   }
     * })
    **/
    count<T extends ContactUsCountArgs>(
      args?: Subset<T, ContactUsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactUsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactUsAggregateArgs>(args: Subset<T, ContactUsAggregateArgs>): Prisma.PrismaPromise<GetContactUsAggregateType<T>>

    /**
     * Group by ContactUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsGroupByArgs} args - Group by arguments.
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
      T extends ContactUsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactUsGroupByArgs['orderBy'] }
        : { orderBy?: ContactUsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactUsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactUsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactUs model
   */
  readonly fields: ContactUsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactUs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactUsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactUs model
   */
  interface ContactUsFieldRefs {
    readonly id: FieldRef<"ContactUs", 'String'>
    readonly name: FieldRef<"ContactUs", 'String'>
    readonly email: FieldRef<"ContactUs", 'String'>
    readonly message: FieldRef<"ContactUs", 'String'>
    readonly createdAt: FieldRef<"ContactUs", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactUs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactUs findUnique
   */
  export type ContactUsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs findUniqueOrThrow
   */
  export type ContactUsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs findFirst
   */
  export type ContactUsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactuses.
     */
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }

  /**
   * ContactUs findFirstOrThrow
   */
  export type ContactUsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactuses.
     */
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }

  /**
   * ContactUs findMany
   */
  export type ContactUsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which Contactuses to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }

  /**
   * ContactUs create
   */
  export type ContactUsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactUs.
     */
    data: XOR<ContactUsCreateInput, ContactUsUncheckedCreateInput>
  }

  /**
   * ContactUs createMany
   */
  export type ContactUsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactuses.
     */
    data: ContactUsCreateManyInput | ContactUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactUs createManyAndReturn
   */
  export type ContactUsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data used to create many Contactuses.
     */
    data: ContactUsCreateManyInput | ContactUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactUs update
   */
  export type ContactUsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactUs.
     */
    data: XOR<ContactUsUpdateInput, ContactUsUncheckedUpdateInput>
    /**
     * Choose, which ContactUs to update.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs updateMany
   */
  export type ContactUsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactuses.
     */
    data: XOR<ContactUsUpdateManyMutationInput, ContactUsUncheckedUpdateManyInput>
    /**
     * Filter which Contactuses to update
     */
    where?: ContactUsWhereInput
    /**
     * Limit how many Contactuses to update.
     */
    limit?: number
  }

  /**
   * ContactUs updateManyAndReturn
   */
  export type ContactUsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data used to update Contactuses.
     */
    data: XOR<ContactUsUpdateManyMutationInput, ContactUsUncheckedUpdateManyInput>
    /**
     * Filter which Contactuses to update
     */
    where?: ContactUsWhereInput
    /**
     * Limit how many Contactuses to update.
     */
    limit?: number
  }

  /**
   * ContactUs upsert
   */
  export type ContactUsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactUs to update in case it exists.
     */
    where: ContactUsWhereUniqueInput
    /**
     * In case the ContactUs found by the `where` argument doesn't exist, create a new ContactUs with this data.
     */
    create: XOR<ContactUsCreateInput, ContactUsUncheckedCreateInput>
    /**
     * In case the ContactUs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUsUpdateInput, ContactUsUncheckedUpdateInput>
  }

  /**
   * ContactUs delete
   */
  export type ContactUsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter which ContactUs to delete.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs deleteMany
   */
  export type ContactUsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactuses to delete
     */
    where?: ContactUsWhereInput
    /**
     * Limit how many Contactuses to delete.
     */
    limit?: number
  }

  /**
   * ContactUs without action
   */
  export type ContactUsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
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


  export const CampaignScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    brandName: 'brandName',
    email: 'email',
    campaignBudget: 'campaignBudget',
    cityCountry: 'cityCountry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const CampusInfluencerScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    collegeName: 'collegeName',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampusInfluencerScalarFieldEnum = (typeof CampusInfluencerScalarFieldEnum)[keyof typeof CampusInfluencerScalarFieldEnum]


  export const NewsletterSubscriberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type NewsletterSubscriberScalarFieldEnum = (typeof NewsletterSubscriberScalarFieldEnum)[keyof typeof NewsletterSubscriberScalarFieldEnum]


  export const ContactUsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactUsScalarFieldEnum = (typeof ContactUsScalarFieldEnum)[keyof typeof ContactUsScalarFieldEnum]


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


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    fullName?: StringFilter<"Campaign"> | string
    brandName?: StringFilter<"Campaign"> | string
    email?: StringFilter<"Campaign"> | string
    campaignBudget?: StringFilter<"Campaign"> | string
    cityCountry?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    brandName?: SortOrder
    email?: SortOrder
    campaignBudget?: SortOrder
    cityCountry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    fullName?: StringFilter<"Campaign"> | string
    brandName?: StringFilter<"Campaign"> | string
    email?: StringFilter<"Campaign"> | string
    campaignBudget?: StringFilter<"Campaign"> | string
    cityCountry?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    brandName?: SortOrder
    email?: SortOrder
    campaignBudget?: SortOrder
    cityCountry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    fullName?: StringWithAggregatesFilter<"Campaign"> | string
    brandName?: StringWithAggregatesFilter<"Campaign"> | string
    email?: StringWithAggregatesFilter<"Campaign"> | string
    campaignBudget?: StringWithAggregatesFilter<"Campaign"> | string
    cityCountry?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type CampusInfluencerWhereInput = {
    AND?: CampusInfluencerWhereInput | CampusInfluencerWhereInput[]
    OR?: CampusInfluencerWhereInput[]
    NOT?: CampusInfluencerWhereInput | CampusInfluencerWhereInput[]
    id?: StringFilter<"CampusInfluencer"> | string
    fullName?: StringFilter<"CampusInfluencer"> | string
    email?: StringFilter<"CampusInfluencer"> | string
    collegeName?: StringFilter<"CampusInfluencer"> | string
    phoneNumber?: StringFilter<"CampusInfluencer"> | string
    createdAt?: DateTimeFilter<"CampusInfluencer"> | Date | string
    updatedAt?: DateTimeFilter<"CampusInfluencer"> | Date | string
  }

  export type CampusInfluencerOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    collegeName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampusInfluencerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CampusInfluencerWhereInput | CampusInfluencerWhereInput[]
    OR?: CampusInfluencerWhereInput[]
    NOT?: CampusInfluencerWhereInput | CampusInfluencerWhereInput[]
    fullName?: StringFilter<"CampusInfluencer"> | string
    collegeName?: StringFilter<"CampusInfluencer"> | string
    phoneNumber?: StringFilter<"CampusInfluencer"> | string
    createdAt?: DateTimeFilter<"CampusInfluencer"> | Date | string
    updatedAt?: DateTimeFilter<"CampusInfluencer"> | Date | string
  }, "id" | "email">

  export type CampusInfluencerOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    collegeName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampusInfluencerCountOrderByAggregateInput
    _max?: CampusInfluencerMaxOrderByAggregateInput
    _min?: CampusInfluencerMinOrderByAggregateInput
  }

  export type CampusInfluencerScalarWhereWithAggregatesInput = {
    AND?: CampusInfluencerScalarWhereWithAggregatesInput | CampusInfluencerScalarWhereWithAggregatesInput[]
    OR?: CampusInfluencerScalarWhereWithAggregatesInput[]
    NOT?: CampusInfluencerScalarWhereWithAggregatesInput | CampusInfluencerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampusInfluencer"> | string
    fullName?: StringWithAggregatesFilter<"CampusInfluencer"> | string
    email?: StringWithAggregatesFilter<"CampusInfluencer"> | string
    collegeName?: StringWithAggregatesFilter<"CampusInfluencer"> | string
    phoneNumber?: StringWithAggregatesFilter<"CampusInfluencer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampusInfluencer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampusInfluencer"> | Date | string
  }

  export type NewsletterSubscriberWhereInput = {
    AND?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    OR?: NewsletterSubscriberWhereInput[]
    NOT?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    id?: StringFilter<"NewsletterSubscriber"> | string
    email?: StringFilter<"NewsletterSubscriber"> | string
    createdAt?: DateTimeFilter<"NewsletterSubscriber"> | Date | string
  }

  export type NewsletterSubscriberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    OR?: NewsletterSubscriberWhereInput[]
    NOT?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    createdAt?: DateTimeFilter<"NewsletterSubscriber"> | Date | string
  }, "id" | "email">

  export type NewsletterSubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: NewsletterSubscriberCountOrderByAggregateInput
    _max?: NewsletterSubscriberMaxOrderByAggregateInput
    _min?: NewsletterSubscriberMinOrderByAggregateInput
  }

  export type NewsletterSubscriberScalarWhereWithAggregatesInput = {
    AND?: NewsletterSubscriberScalarWhereWithAggregatesInput | NewsletterSubscriberScalarWhereWithAggregatesInput[]
    OR?: NewsletterSubscriberScalarWhereWithAggregatesInput[]
    NOT?: NewsletterSubscriberScalarWhereWithAggregatesInput | NewsletterSubscriberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterSubscriber"> | string
    email?: StringWithAggregatesFilter<"NewsletterSubscriber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsletterSubscriber"> | Date | string
  }

  export type ContactUsWhereInput = {
    AND?: ContactUsWhereInput | ContactUsWhereInput[]
    OR?: ContactUsWhereInput[]
    NOT?: ContactUsWhereInput | ContactUsWhereInput[]
    id?: StringFilter<"ContactUs"> | string
    name?: StringFilter<"ContactUs"> | string
    email?: StringFilter<"ContactUs"> | string
    message?: StringFilter<"ContactUs"> | string
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
  }

  export type ContactUsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactUsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactUsWhereInput | ContactUsWhereInput[]
    OR?: ContactUsWhereInput[]
    NOT?: ContactUsWhereInput | ContactUsWhereInput[]
    name?: StringFilter<"ContactUs"> | string
    email?: StringFilter<"ContactUs"> | string
    message?: StringFilter<"ContactUs"> | string
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
  }, "id">

  export type ContactUsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactUsCountOrderByAggregateInput
    _max?: ContactUsMaxOrderByAggregateInput
    _min?: ContactUsMinOrderByAggregateInput
  }

  export type ContactUsScalarWhereWithAggregatesInput = {
    AND?: ContactUsScalarWhereWithAggregatesInput | ContactUsScalarWhereWithAggregatesInput[]
    OR?: ContactUsScalarWhereWithAggregatesInput[]
    NOT?: ContactUsScalarWhereWithAggregatesInput | ContactUsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactUs"> | string
    name?: StringWithAggregatesFilter<"ContactUs"> | string
    email?: StringWithAggregatesFilter<"ContactUs"> | string
    message?: StringWithAggregatesFilter<"ContactUs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactUs"> | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    fullName: string
    brandName: string
    email: string
    campaignBudget: string
    cityCountry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    fullName: string
    brandName: string
    email: string
    campaignBudget: string
    cityCountry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campaignBudget?: StringFieldUpdateOperationsInput | string
    cityCountry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campaignBudget?: StringFieldUpdateOperationsInput | string
    cityCountry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    fullName: string
    brandName: string
    email: string
    campaignBudget: string
    cityCountry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campaignBudget?: StringFieldUpdateOperationsInput | string
    cityCountry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    campaignBudget?: StringFieldUpdateOperationsInput | string
    cityCountry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampusInfluencerCreateInput = {
    id?: string
    fullName: string
    email: string
    collegeName: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampusInfluencerUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    collegeName: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampusInfluencerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampusInfluencerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampusInfluencerCreateManyInput = {
    id?: string
    fullName: string
    email: string
    collegeName: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampusInfluencerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampusInfluencerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type NewsletterSubscriberUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type NewsletterSubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type NewsletterSubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    brandName?: SortOrder
    email?: SortOrder
    campaignBudget?: SortOrder
    cityCountry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    brandName?: SortOrder
    email?: SortOrder
    campaignBudget?: SortOrder
    cityCountry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    brandName?: SortOrder
    email?: SortOrder
    campaignBudget?: SortOrder
    cityCountry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CampusInfluencerCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    collegeName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampusInfluencerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    collegeName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampusInfluencerMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    collegeName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactUsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactUsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactUsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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