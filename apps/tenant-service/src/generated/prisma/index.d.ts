
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model TenantSettings
 * 
 */
export type TenantSettings = $Result.DefaultSelection<Prisma.$TenantSettingsPayload>
/**
 * Model UsageMetrics
 * 
 */
export type UsageMetrics = $Result.DefaultSelection<Prisma.$UsageMetricsPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model ReminderLog
 * 
 */
export type ReminderLog = $Result.DefaultSelection<Prisma.$ReminderLogPayload>
/**
 * Model NotificationLog
 * 
 */
export type NotificationLog = $Result.DefaultSelection<Prisma.$NotificationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionPlan: {
  FREE: 'FREE',
  STARTER: 'STARTER',
  PRO: 'PRO',
  ENTERPRISE: 'ENTERPRISE'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const TenantRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER'
};

export type TenantRole = (typeof TenantRole)[keyof typeof TenantRole]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELLED: 'CANCELLED',
  TRIAL: 'TRIAL',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const InvoiceStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED',
  PARTIAL: 'PARTIAL'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const PaymentProvider: {
  RAZORPAY: 'RAZORPAY',
  STRIPE: 'STRIPE',
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  PARTIAL: 'PARTIAL'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

export type TenantRole = $Enums.TenantRole

export const TenantRole: typeof $Enums.TenantRole

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type PaymentProvider = $Enums.PaymentProvider

export const PaymentProvider: typeof $Enums.PaymentProvider

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.tenantSettings`: Exposes CRUD operations for the **TenantSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantSettings
    * const tenantSettings = await prisma.tenantSettings.findMany()
    * ```
    */
  get tenantSettings(): Prisma.TenantSettingsDelegate<ExtArgs>;

  /**
   * `prisma.usageMetrics`: Exposes CRUD operations for the **UsageMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageMetrics
    * const usageMetrics = await prisma.usageMetrics.findMany()
    * ```
    */
  get usageMetrics(): Prisma.UsageMetricsDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.reminderLog`: Exposes CRUD operations for the **ReminderLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReminderLogs
    * const reminderLogs = await prisma.reminderLog.findMany()
    * ```
    */
  get reminderLog(): Prisma.ReminderLogDelegate<ExtArgs>;

  /**
   * `prisma.notificationLog`: Exposes CRUD operations for the **NotificationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationLogs
    * const notificationLogs = await prisma.notificationLog.findMany()
    * ```
    */
  get notificationLog(): Prisma.NotificationLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Tenant: 'Tenant',
    Membership: 'Membership',
    Subscription: 'Subscription',
    TenantSettings: 'TenantSettings',
    UsageMetrics: 'UsageMetrics',
    Client: 'Client',
    Invoice: 'Invoice',
    Payment: 'Payment',
    ReminderLog: 'ReminderLog',
    NotificationLog: 'NotificationLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tenant" | "membership" | "subscription" | "tenantSettings" | "usageMetrics" | "client" | "invoice" | "payment" | "reminderLog" | "notificationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      TenantSettings: {
        payload: Prisma.$TenantSettingsPayload<ExtArgs>
        fields: Prisma.TenantSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>
          }
          findFirst: {
            args: Prisma.TenantSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>
          }
          findMany: {
            args: Prisma.TenantSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>[]
          }
          create: {
            args: Prisma.TenantSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>
          }
          createMany: {
            args: Prisma.TenantSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>[]
          }
          delete: {
            args: Prisma.TenantSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>
          }
          update: {
            args: Prisma.TenantSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>
          }
          deleteMany: {
            args: Prisma.TenantSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantSettingsPayload>
          }
          aggregate: {
            args: Prisma.TenantSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantSettings>
          }
          groupBy: {
            args: Prisma.TenantSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantSettingsCountAggregateOutputType> | number
          }
        }
      }
      UsageMetrics: {
        payload: Prisma.$UsageMetricsPayload<ExtArgs>
        fields: Prisma.UsageMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>
          }
          findFirst: {
            args: Prisma.UsageMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>
          }
          findMany: {
            args: Prisma.UsageMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>[]
          }
          create: {
            args: Prisma.UsageMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>
          }
          createMany: {
            args: Prisma.UsageMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>[]
          }
          delete: {
            args: Prisma.UsageMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>
          }
          update: {
            args: Prisma.UsageMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>
          }
          deleteMany: {
            args: Prisma.UsageMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsageMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMetricsPayload>
          }
          aggregate: {
            args: Prisma.UsageMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageMetrics>
          }
          groupBy: {
            args: Prisma.UsageMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<UsageMetricsCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      ReminderLog: {
        payload: Prisma.$ReminderLogPayload<ExtArgs>
        fields: Prisma.ReminderLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>
          }
          findFirst: {
            args: Prisma.ReminderLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>
          }
          findMany: {
            args: Prisma.ReminderLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>[]
          }
          create: {
            args: Prisma.ReminderLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>
          }
          createMany: {
            args: Prisma.ReminderLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>[]
          }
          delete: {
            args: Prisma.ReminderLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>
          }
          update: {
            args: Prisma.ReminderLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>
          }
          deleteMany: {
            args: Prisma.ReminderLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderLogPayload>
          }
          aggregate: {
            args: Prisma.ReminderLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminderLog>
          }
          groupBy: {
            args: Prisma.ReminderLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderLogCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderLogCountAggregateOutputType> | number
          }
        }
      }
      NotificationLog: {
        payload: Prisma.$NotificationLogPayload<ExtArgs>
        fields: Prisma.NotificationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          findFirst: {
            args: Prisma.NotificationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          findMany: {
            args: Prisma.NotificationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[]
          }
          create: {
            args: Prisma.NotificationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          createMany: {
            args: Prisma.NotificationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[]
          }
          delete: {
            args: Prisma.NotificationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          update: {
            args: Prisma.NotificationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          deleteMany: {
            args: Prisma.NotificationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          aggregate: {
            args: Prisma.NotificationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationLog>
          }
          groupBy: {
            args: Prisma.NotificationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationLogCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationLogCountAggregateOutputType> | number
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    memberships: number
    usageMetrics: number
    clients: number
    invoices: number
    payments: number
    reminderLogs: number
    notificationLogs: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | TenantCountOutputTypeCountMembershipsArgs
    usageMetrics?: boolean | TenantCountOutputTypeCountUsageMetricsArgs
    clients?: boolean | TenantCountOutputTypeCountClientsArgs
    invoices?: boolean | TenantCountOutputTypeCountInvoicesArgs
    payments?: boolean | TenantCountOutputTypeCountPaymentsArgs
    reminderLogs?: boolean | TenantCountOutputTypeCountReminderLogsArgs
    notificationLogs?: boolean | TenantCountOutputTypeCountNotificationLogsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsageMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageMetricsWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountReminderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderLogWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountNotificationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationLogWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    invoices: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ClientCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payments: number
    reminderLogs: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
    reminderLogs?: boolean | InvoiceCountOutputTypeCountReminderLogsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountReminderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.SubscriptionPlan | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.SubscriptionPlan | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    plan: $Enums.SubscriptionPlan
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | Tenant$membershipsArgs<ExtArgs>
    subscription?: boolean | Tenant$subscriptionArgs<ExtArgs>
    settings?: boolean | Tenant$settingsArgs<ExtArgs>
    usageMetrics?: boolean | Tenant$usageMetricsArgs<ExtArgs>
    clients?: boolean | Tenant$clientsArgs<ExtArgs>
    invoices?: boolean | Tenant$invoicesArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    reminderLogs?: boolean | Tenant$reminderLogsArgs<ExtArgs>
    notificationLogs?: boolean | Tenant$notificationLogsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Tenant$membershipsArgs<ExtArgs>
    subscription?: boolean | Tenant$subscriptionArgs<ExtArgs>
    settings?: boolean | Tenant$settingsArgs<ExtArgs>
    usageMetrics?: boolean | Tenant$usageMetricsArgs<ExtArgs>
    clients?: boolean | Tenant$clientsArgs<ExtArgs>
    invoices?: boolean | Tenant$invoicesArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    reminderLogs?: boolean | Tenant$reminderLogsArgs<ExtArgs>
    notificationLogs?: boolean | Tenant$notificationLogsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      settings: Prisma.$TenantSettingsPayload<ExtArgs> | null
      usageMetrics: Prisma.$UsageMetricsPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      reminderLogs: Prisma.$ReminderLogPayload<ExtArgs>[]
      notificationLogs: Prisma.$NotificationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      plan: $Enums.SubscriptionPlan
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends Tenant$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany"> | Null>
    subscription<T extends Tenant$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    settings<T extends Tenant$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$settingsArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    usageMetrics<T extends Tenant$usageMetricsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usageMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "findMany"> | Null>
    clients<T extends Tenant$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends Tenant$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Tenant$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    reminderLogs<T extends Tenant$reminderLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$reminderLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findMany"> | Null>
    notificationLogs<T extends Tenant$notificationLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$notificationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly plan: FieldRef<"Tenant", 'SubscriptionPlan'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.memberships
   */
  export type Tenant$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Tenant.subscription
   */
  export type Tenant$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Tenant.settings
   */
  export type Tenant$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    where?: TenantSettingsWhereInput
  }

  /**
   * Tenant.usageMetrics
   */
  export type Tenant$usageMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    where?: UsageMetricsWhereInput
    orderBy?: UsageMetricsOrderByWithRelationInput | UsageMetricsOrderByWithRelationInput[]
    cursor?: UsageMetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageMetricsScalarFieldEnum | UsageMetricsScalarFieldEnum[]
  }

  /**
   * Tenant.clients
   */
  export type Tenant$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Tenant.invoices
   */
  export type Tenant$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Tenant.payments
   */
  export type Tenant$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Tenant.reminderLogs
   */
  export type Tenant$reminderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    where?: ReminderLogWhereInput
    orderBy?: ReminderLogOrderByWithRelationInput | ReminderLogOrderByWithRelationInput[]
    cursor?: ReminderLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderLogScalarFieldEnum | ReminderLogScalarFieldEnum[]
  }

  /**
   * Tenant.notificationLogs
   */
  export type Tenant$notificationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    where?: NotificationLogWhereInput
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    cursor?: NotificationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    role: $Enums.TenantRole | null
    invitedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    role: $Enums.TenantRole | null
    invitedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    userId: number
    tenantId: number
    role: number
    invitedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    role?: true
    invitedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    role?: true
    invitedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    role?: true
    invitedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    userId: string
    tenantId: string
    role: $Enums.TenantRole
    invitedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    role?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    role?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    role?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tenantId: string
      role: $Enums.TenantRole
      invitedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
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
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Membership model
   */ 
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly userId: FieldRef<"Membership", 'String'>
    readonly tenantId: FieldRef<"Membership", 'String'>
    readonly role: FieldRef<"Membership", 'TenantRole'>
    readonly invitedBy: FieldRef<"Membership", 'String'>
    readonly createdAt: FieldRef<"Membership", 'DateTime'>
    readonly updatedAt: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    razorpaySubscriptionId: string | null
    razorpayCustomerId: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    trialEndsAt: Date | null
    cancelledAt: Date | null
    cancellationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    razorpaySubscriptionId: string | null
    razorpayCustomerId: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    trialEndsAt: Date | null
    cancelledAt: Date | null
    cancellationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    tenantId: number
    plan: number
    status: number
    razorpaySubscriptionId: number
    razorpayCustomerId: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    trialEndsAt: number
    cancelledAt: number
    cancellationReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    tenantId?: true
    plan?: true
    status?: true
    razorpaySubscriptionId?: true
    razorpayCustomerId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    trialEndsAt?: true
    cancelledAt?: true
    cancellationReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    tenantId?: true
    plan?: true
    status?: true
    razorpaySubscriptionId?: true
    razorpayCustomerId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    trialEndsAt?: true
    cancelledAt?: true
    cancellationReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    tenantId?: true
    plan?: true
    status?: true
    razorpaySubscriptionId?: true
    razorpayCustomerId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    trialEndsAt?: true
    cancelledAt?: true
    cancellationReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    tenantId: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    razorpaySubscriptionId: string | null
    razorpayCustomerId: string | null
    currentPeriodStart: Date
    currentPeriodEnd: Date
    cancelAtPeriodEnd: boolean
    trialEndsAt: Date | null
    cancelledAt: Date | null
    cancellationReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubscriptionId?: boolean
    razorpayCustomerId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubscriptionId?: boolean
    razorpayCustomerId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    tenantId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubscriptionId?: boolean
    razorpayCustomerId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      plan: $Enums.SubscriptionPlan
      status: $Enums.SubscriptionStatus
      razorpaySubscriptionId: string | null
      razorpayCustomerId: string | null
      currentPeriodStart: Date
      currentPeriodEnd: Date
      cancelAtPeriodEnd: boolean
      trialEndsAt: Date | null
      cancelledAt: Date | null
      cancellationReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly tenantId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'SubscriptionPlan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly razorpaySubscriptionId: FieldRef<"Subscription", 'String'>
    readonly razorpayCustomerId: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly trialEndsAt: FieldRef<"Subscription", 'DateTime'>
    readonly cancelledAt: FieldRef<"Subscription", 'DateTime'>
    readonly cancellationReason: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model TenantSettings
   */

  export type AggregateTenantSettings = {
    _count: TenantSettingsCountAggregateOutputType | null
    _avg: TenantSettingsAvgAggregateOutputType | null
    _sum: TenantSettingsSumAggregateOutputType | null
    _min: TenantSettingsMinAggregateOutputType | null
    _max: TenantSettingsMaxAggregateOutputType | null
  }

  export type TenantSettingsAvgAggregateOutputType = {
    businessStartHour: number | null
    businessEndHour: number | null
    defaultPaymentTerms: number | null
    lateFeePercentage: number | null
    nextInvoiceNumber: number | null
    defaultTaxRate: number | null
  }

  export type TenantSettingsSumAggregateOutputType = {
    businessStartHour: number | null
    businessEndHour: number | null
    defaultPaymentTerms: number | null
    lateFeePercentage: number | null
    nextInvoiceNumber: number | null
    defaultTaxRate: number | null
  }

  export type TenantSettingsMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    reminderIntervals: string | null
    defaultReminderMethod: string | null
    whatsappTemplate: string | null
    emailTemplate: string | null
    smsTemplate: string | null
    businessHoursOnly: boolean | null
    skipWeekends: boolean | null
    businessStartHour: number | null
    businessEndHour: number | null
    companyLogoUrl: string | null
    primaryColor: string | null
    accentColor: string | null
    customDomain: string | null
    defaultPaymentTerms: number | null
    lateFeePercentage: number | null
    invoicePrefix: string | null
    nextInvoiceNumber: number | null
    defaultTaxRate: number | null
    notifyOnPayment: boolean | null
    notifyOnOverdue: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantSettingsMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    reminderIntervals: string | null
    defaultReminderMethod: string | null
    whatsappTemplate: string | null
    emailTemplate: string | null
    smsTemplate: string | null
    businessHoursOnly: boolean | null
    skipWeekends: boolean | null
    businessStartHour: number | null
    businessEndHour: number | null
    companyLogoUrl: string | null
    primaryColor: string | null
    accentColor: string | null
    customDomain: string | null
    defaultPaymentTerms: number | null
    lateFeePercentage: number | null
    invoicePrefix: string | null
    nextInvoiceNumber: number | null
    defaultTaxRate: number | null
    notifyOnPayment: boolean | null
    notifyOnOverdue: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantSettingsCountAggregateOutputType = {
    id: number
    tenantId: number
    reminderIntervals: number
    defaultReminderMethod: number
    whatsappTemplate: number
    emailTemplate: number
    smsTemplate: number
    businessHoursOnly: number
    skipWeekends: number
    businessStartHour: number
    businessEndHour: number
    companyLogoUrl: number
    primaryColor: number
    accentColor: number
    customDomain: number
    defaultPaymentTerms: number
    lateFeePercentage: number
    invoicePrefix: number
    nextInvoiceNumber: number
    defaultTaxRate: number
    notifyOnPayment: number
    notifyOnOverdue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantSettingsAvgAggregateInputType = {
    businessStartHour?: true
    businessEndHour?: true
    defaultPaymentTerms?: true
    lateFeePercentage?: true
    nextInvoiceNumber?: true
    defaultTaxRate?: true
  }

  export type TenantSettingsSumAggregateInputType = {
    businessStartHour?: true
    businessEndHour?: true
    defaultPaymentTerms?: true
    lateFeePercentage?: true
    nextInvoiceNumber?: true
    defaultTaxRate?: true
  }

  export type TenantSettingsMinAggregateInputType = {
    id?: true
    tenantId?: true
    reminderIntervals?: true
    defaultReminderMethod?: true
    whatsappTemplate?: true
    emailTemplate?: true
    smsTemplate?: true
    businessHoursOnly?: true
    skipWeekends?: true
    businessStartHour?: true
    businessEndHour?: true
    companyLogoUrl?: true
    primaryColor?: true
    accentColor?: true
    customDomain?: true
    defaultPaymentTerms?: true
    lateFeePercentage?: true
    invoicePrefix?: true
    nextInvoiceNumber?: true
    defaultTaxRate?: true
    notifyOnPayment?: true
    notifyOnOverdue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantSettingsMaxAggregateInputType = {
    id?: true
    tenantId?: true
    reminderIntervals?: true
    defaultReminderMethod?: true
    whatsappTemplate?: true
    emailTemplate?: true
    smsTemplate?: true
    businessHoursOnly?: true
    skipWeekends?: true
    businessStartHour?: true
    businessEndHour?: true
    companyLogoUrl?: true
    primaryColor?: true
    accentColor?: true
    customDomain?: true
    defaultPaymentTerms?: true
    lateFeePercentage?: true
    invoicePrefix?: true
    nextInvoiceNumber?: true
    defaultTaxRate?: true
    notifyOnPayment?: true
    notifyOnOverdue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantSettingsCountAggregateInputType = {
    id?: true
    tenantId?: true
    reminderIntervals?: true
    defaultReminderMethod?: true
    whatsappTemplate?: true
    emailTemplate?: true
    smsTemplate?: true
    businessHoursOnly?: true
    skipWeekends?: true
    businessStartHour?: true
    businessEndHour?: true
    companyLogoUrl?: true
    primaryColor?: true
    accentColor?: true
    customDomain?: true
    defaultPaymentTerms?: true
    lateFeePercentage?: true
    invoicePrefix?: true
    nextInvoiceNumber?: true
    defaultTaxRate?: true
    notifyOnPayment?: true
    notifyOnOverdue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantSettings to aggregate.
     */
    where?: TenantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantSettings to fetch.
     */
    orderBy?: TenantSettingsOrderByWithRelationInput | TenantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantSettings
    **/
    _count?: true | TenantSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantSettingsMaxAggregateInputType
  }

  export type GetTenantSettingsAggregateType<T extends TenantSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantSettings[P]>
      : GetScalarType<T[P], AggregateTenantSettings[P]>
  }




  export type TenantSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantSettingsWhereInput
    orderBy?: TenantSettingsOrderByWithAggregationInput | TenantSettingsOrderByWithAggregationInput[]
    by: TenantSettingsScalarFieldEnum[] | TenantSettingsScalarFieldEnum
    having?: TenantSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantSettingsCountAggregateInputType | true
    _avg?: TenantSettingsAvgAggregateInputType
    _sum?: TenantSettingsSumAggregateInputType
    _min?: TenantSettingsMinAggregateInputType
    _max?: TenantSettingsMaxAggregateInputType
  }

  export type TenantSettingsGroupByOutputType = {
    id: string
    tenantId: string
    reminderIntervals: string
    defaultReminderMethod: string
    whatsappTemplate: string | null
    emailTemplate: string | null
    smsTemplate: string | null
    businessHoursOnly: boolean
    skipWeekends: boolean
    businessStartHour: number
    businessEndHour: number
    companyLogoUrl: string | null
    primaryColor: string | null
    accentColor: string | null
    customDomain: string | null
    defaultPaymentTerms: number
    lateFeePercentage: number | null
    invoicePrefix: string
    nextInvoiceNumber: number
    defaultTaxRate: number | null
    notifyOnPayment: boolean
    notifyOnOverdue: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantSettingsCountAggregateOutputType | null
    _avg: TenantSettingsAvgAggregateOutputType | null
    _sum: TenantSettingsSumAggregateOutputType | null
    _min: TenantSettingsMinAggregateOutputType | null
    _max: TenantSettingsMaxAggregateOutputType | null
  }

  type GetTenantSettingsGroupByPayload<T extends TenantSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantSettingsGroupByOutputType[P]>
        }
      >
    >


  export type TenantSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    reminderIntervals?: boolean
    defaultReminderMethod?: boolean
    whatsappTemplate?: boolean
    emailTemplate?: boolean
    smsTemplate?: boolean
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: boolean
    businessEndHour?: boolean
    companyLogoUrl?: boolean
    primaryColor?: boolean
    accentColor?: boolean
    customDomain?: boolean
    defaultPaymentTerms?: boolean
    lateFeePercentage?: boolean
    invoicePrefix?: boolean
    nextInvoiceNumber?: boolean
    defaultTaxRate?: boolean
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantSettings"]>

  export type TenantSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    reminderIntervals?: boolean
    defaultReminderMethod?: boolean
    whatsappTemplate?: boolean
    emailTemplate?: boolean
    smsTemplate?: boolean
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: boolean
    businessEndHour?: boolean
    companyLogoUrl?: boolean
    primaryColor?: boolean
    accentColor?: boolean
    customDomain?: boolean
    defaultPaymentTerms?: boolean
    lateFeePercentage?: boolean
    invoicePrefix?: boolean
    nextInvoiceNumber?: boolean
    defaultTaxRate?: boolean
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantSettings"]>

  export type TenantSettingsSelectScalar = {
    id?: boolean
    tenantId?: boolean
    reminderIntervals?: boolean
    defaultReminderMethod?: boolean
    whatsappTemplate?: boolean
    emailTemplate?: boolean
    smsTemplate?: boolean
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: boolean
    businessEndHour?: boolean
    companyLogoUrl?: boolean
    primaryColor?: boolean
    accentColor?: boolean
    customDomain?: boolean
    defaultPaymentTerms?: boolean
    lateFeePercentage?: boolean
    invoicePrefix?: boolean
    nextInvoiceNumber?: boolean
    defaultTaxRate?: boolean
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TenantSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantSettings"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      reminderIntervals: string
      defaultReminderMethod: string
      whatsappTemplate: string | null
      emailTemplate: string | null
      smsTemplate: string | null
      businessHoursOnly: boolean
      skipWeekends: boolean
      businessStartHour: number
      businessEndHour: number
      companyLogoUrl: string | null
      primaryColor: string | null
      accentColor: string | null
      customDomain: string | null
      defaultPaymentTerms: number
      lateFeePercentage: number | null
      invoicePrefix: string
      nextInvoiceNumber: number
      defaultTaxRate: number | null
      notifyOnPayment: boolean
      notifyOnOverdue: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenantSettings"]>
    composites: {}
  }

  type TenantSettingsGetPayload<S extends boolean | null | undefined | TenantSettingsDefaultArgs> = $Result.GetResult<Prisma.$TenantSettingsPayload, S>

  type TenantSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantSettingsCountAggregateInputType | true
    }

  export interface TenantSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantSettings'], meta: { name: 'TenantSettings' } }
    /**
     * Find zero or one TenantSettings that matches the filter.
     * @param {TenantSettingsFindUniqueArgs} args - Arguments to find a TenantSettings
     * @example
     * // Get one TenantSettings
     * const tenantSettings = await prisma.tenantSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantSettingsFindUniqueArgs>(args: SelectSubset<T, TenantSettingsFindUniqueArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TenantSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantSettingsFindUniqueOrThrowArgs} args - Arguments to find a TenantSettings
     * @example
     * // Get one TenantSettings
     * const tenantSettings = await prisma.tenantSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TenantSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsFindFirstArgs} args - Arguments to find a TenantSettings
     * @example
     * // Get one TenantSettings
     * const tenantSettings = await prisma.tenantSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantSettingsFindFirstArgs>(args?: SelectSubset<T, TenantSettingsFindFirstArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TenantSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsFindFirstOrThrowArgs} args - Arguments to find a TenantSettings
     * @example
     * // Get one TenantSettings
     * const tenantSettings = await prisma.tenantSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TenantSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantSettings
     * const tenantSettings = await prisma.tenantSettings.findMany()
     * 
     * // Get first 10 TenantSettings
     * const tenantSettings = await prisma.tenantSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantSettingsWithIdOnly = await prisma.tenantSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantSettingsFindManyArgs>(args?: SelectSubset<T, TenantSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TenantSettings.
     * @param {TenantSettingsCreateArgs} args - Arguments to create a TenantSettings.
     * @example
     * // Create one TenantSettings
     * const TenantSettings = await prisma.tenantSettings.create({
     *   data: {
     *     // ... data to create a TenantSettings
     *   }
     * })
     * 
     */
    create<T extends TenantSettingsCreateArgs>(args: SelectSubset<T, TenantSettingsCreateArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TenantSettings.
     * @param {TenantSettingsCreateManyArgs} args - Arguments to create many TenantSettings.
     * @example
     * // Create many TenantSettings
     * const tenantSettings = await prisma.tenantSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantSettingsCreateManyArgs>(args?: SelectSubset<T, TenantSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantSettings and returns the data saved in the database.
     * @param {TenantSettingsCreateManyAndReturnArgs} args - Arguments to create many TenantSettings.
     * @example
     * // Create many TenantSettings
     * const tenantSettings = await prisma.tenantSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantSettings and only return the `id`
     * const tenantSettingsWithIdOnly = await prisma.tenantSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TenantSettings.
     * @param {TenantSettingsDeleteArgs} args - Arguments to delete one TenantSettings.
     * @example
     * // Delete one TenantSettings
     * const TenantSettings = await prisma.tenantSettings.delete({
     *   where: {
     *     // ... filter to delete one TenantSettings
     *   }
     * })
     * 
     */
    delete<T extends TenantSettingsDeleteArgs>(args: SelectSubset<T, TenantSettingsDeleteArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TenantSettings.
     * @param {TenantSettingsUpdateArgs} args - Arguments to update one TenantSettings.
     * @example
     * // Update one TenantSettings
     * const tenantSettings = await prisma.tenantSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantSettingsUpdateArgs>(args: SelectSubset<T, TenantSettingsUpdateArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TenantSettings.
     * @param {TenantSettingsDeleteManyArgs} args - Arguments to filter TenantSettings to delete.
     * @example
     * // Delete a few TenantSettings
     * const { count } = await prisma.tenantSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantSettingsDeleteManyArgs>(args?: SelectSubset<T, TenantSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantSettings
     * const tenantSettings = await prisma.tenantSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantSettingsUpdateManyArgs>(args: SelectSubset<T, TenantSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TenantSettings.
     * @param {TenantSettingsUpsertArgs} args - Arguments to update or create a TenantSettings.
     * @example
     * // Update or create a TenantSettings
     * const tenantSettings = await prisma.tenantSettings.upsert({
     *   create: {
     *     // ... data to create a TenantSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantSettings we want to update
     *   }
     * })
     */
    upsert<T extends TenantSettingsUpsertArgs>(args: SelectSubset<T, TenantSettingsUpsertArgs<ExtArgs>>): Prisma__TenantSettingsClient<$Result.GetResult<Prisma.$TenantSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TenantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsCountArgs} args - Arguments to filter TenantSettings to count.
     * @example
     * // Count the number of TenantSettings
     * const count = await prisma.tenantSettings.count({
     *   where: {
     *     // ... the filter for the TenantSettings we want to count
     *   }
     * })
    **/
    count<T extends TenantSettingsCountArgs>(
      args?: Subset<T, TenantSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantSettingsAggregateArgs>(args: Subset<T, TenantSettingsAggregateArgs>): Prisma.PrismaPromise<GetTenantSettingsAggregateType<T>>

    /**
     * Group by TenantSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantSettingsGroupByArgs} args - Group by arguments.
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
      T extends TenantSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantSettingsGroupByArgs['orderBy'] }
        : { orderBy?: TenantSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantSettings model
   */
  readonly fields: TenantSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TenantSettings model
   */ 
  interface TenantSettingsFieldRefs {
    readonly id: FieldRef<"TenantSettings", 'String'>
    readonly tenantId: FieldRef<"TenantSettings", 'String'>
    readonly reminderIntervals: FieldRef<"TenantSettings", 'String'>
    readonly defaultReminderMethod: FieldRef<"TenantSettings", 'String'>
    readonly whatsappTemplate: FieldRef<"TenantSettings", 'String'>
    readonly emailTemplate: FieldRef<"TenantSettings", 'String'>
    readonly smsTemplate: FieldRef<"TenantSettings", 'String'>
    readonly businessHoursOnly: FieldRef<"TenantSettings", 'Boolean'>
    readonly skipWeekends: FieldRef<"TenantSettings", 'Boolean'>
    readonly businessStartHour: FieldRef<"TenantSettings", 'Int'>
    readonly businessEndHour: FieldRef<"TenantSettings", 'Int'>
    readonly companyLogoUrl: FieldRef<"TenantSettings", 'String'>
    readonly primaryColor: FieldRef<"TenantSettings", 'String'>
    readonly accentColor: FieldRef<"TenantSettings", 'String'>
    readonly customDomain: FieldRef<"TenantSettings", 'String'>
    readonly defaultPaymentTerms: FieldRef<"TenantSettings", 'Int'>
    readonly lateFeePercentage: FieldRef<"TenantSettings", 'Float'>
    readonly invoicePrefix: FieldRef<"TenantSettings", 'String'>
    readonly nextInvoiceNumber: FieldRef<"TenantSettings", 'Int'>
    readonly defaultTaxRate: FieldRef<"TenantSettings", 'Float'>
    readonly notifyOnPayment: FieldRef<"TenantSettings", 'Boolean'>
    readonly notifyOnOverdue: FieldRef<"TenantSettings", 'Boolean'>
    readonly createdAt: FieldRef<"TenantSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"TenantSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantSettings findUnique
   */
  export type TenantSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TenantSettings to fetch.
     */
    where: TenantSettingsWhereUniqueInput
  }

  /**
   * TenantSettings findUniqueOrThrow
   */
  export type TenantSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TenantSettings to fetch.
     */
    where: TenantSettingsWhereUniqueInput
  }

  /**
   * TenantSettings findFirst
   */
  export type TenantSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TenantSettings to fetch.
     */
    where?: TenantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantSettings to fetch.
     */
    orderBy?: TenantSettingsOrderByWithRelationInput | TenantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantSettings.
     */
    cursor?: TenantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantSettings.
     */
    distinct?: TenantSettingsScalarFieldEnum | TenantSettingsScalarFieldEnum[]
  }

  /**
   * TenantSettings findFirstOrThrow
   */
  export type TenantSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TenantSettings to fetch.
     */
    where?: TenantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantSettings to fetch.
     */
    orderBy?: TenantSettingsOrderByWithRelationInput | TenantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantSettings.
     */
    cursor?: TenantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantSettings.
     */
    distinct?: TenantSettingsScalarFieldEnum | TenantSettingsScalarFieldEnum[]
  }

  /**
   * TenantSettings findMany
   */
  export type TenantSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TenantSettings to fetch.
     */
    where?: TenantSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantSettings to fetch.
     */
    orderBy?: TenantSettingsOrderByWithRelationInput | TenantSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantSettings.
     */
    cursor?: TenantSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantSettings.
     */
    skip?: number
    distinct?: TenantSettingsScalarFieldEnum | TenantSettingsScalarFieldEnum[]
  }

  /**
   * TenantSettings create
   */
  export type TenantSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantSettings.
     */
    data: XOR<TenantSettingsCreateInput, TenantSettingsUncheckedCreateInput>
  }

  /**
   * TenantSettings createMany
   */
  export type TenantSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantSettings.
     */
    data: TenantSettingsCreateManyInput | TenantSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantSettings createManyAndReturn
   */
  export type TenantSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TenantSettings.
     */
    data: TenantSettingsCreateManyInput | TenantSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantSettings update
   */
  export type TenantSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantSettings.
     */
    data: XOR<TenantSettingsUpdateInput, TenantSettingsUncheckedUpdateInput>
    /**
     * Choose, which TenantSettings to update.
     */
    where: TenantSettingsWhereUniqueInput
  }

  /**
   * TenantSettings updateMany
   */
  export type TenantSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantSettings.
     */
    data: XOR<TenantSettingsUpdateManyMutationInput, TenantSettingsUncheckedUpdateManyInput>
    /**
     * Filter which TenantSettings to update
     */
    where?: TenantSettingsWhereInput
  }

  /**
   * TenantSettings upsert
   */
  export type TenantSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantSettings to update in case it exists.
     */
    where: TenantSettingsWhereUniqueInput
    /**
     * In case the TenantSettings found by the `where` argument doesn't exist, create a new TenantSettings with this data.
     */
    create: XOR<TenantSettingsCreateInput, TenantSettingsUncheckedCreateInput>
    /**
     * In case the TenantSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantSettingsUpdateInput, TenantSettingsUncheckedUpdateInput>
  }

  /**
   * TenantSettings delete
   */
  export type TenantSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
    /**
     * Filter which TenantSettings to delete.
     */
    where: TenantSettingsWhereUniqueInput
  }

  /**
   * TenantSettings deleteMany
   */
  export type TenantSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantSettings to delete
     */
    where?: TenantSettingsWhereInput
  }

  /**
   * TenantSettings without action
   */
  export type TenantSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantSettings
     */
    select?: TenantSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantSettingsInclude<ExtArgs> | null
  }


  /**
   * Model UsageMetrics
   */

  export type AggregateUsageMetrics = {
    _count: UsageMetricsCountAggregateOutputType | null
    _avg: UsageMetricsAvgAggregateOutputType | null
    _sum: UsageMetricsSumAggregateOutputType | null
    _min: UsageMetricsMinAggregateOutputType | null
    _max: UsageMetricsMaxAggregateOutputType | null
  }

  export type UsageMetricsAvgAggregateOutputType = {
    invoicesCreated: number | null
    remindersSent: number | null
    clientsAdded: number | null
    paymentsReceived: number | null
    month: number | null
    year: number | null
  }

  export type UsageMetricsSumAggregateOutputType = {
    invoicesCreated: number | null
    remindersSent: number | null
    clientsAdded: number | null
    paymentsReceived: number | null
    month: number | null
    year: number | null
  }

  export type UsageMetricsMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    invoicesCreated: number | null
    remindersSent: number | null
    clientsAdded: number | null
    paymentsReceived: number | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageMetricsMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    invoicesCreated: number | null
    remindersSent: number | null
    clientsAdded: number | null
    paymentsReceived: number | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageMetricsCountAggregateOutputType = {
    id: number
    tenantId: number
    invoicesCreated: number
    remindersSent: number
    clientsAdded: number
    paymentsReceived: number
    month: number
    year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsageMetricsAvgAggregateInputType = {
    invoicesCreated?: true
    remindersSent?: true
    clientsAdded?: true
    paymentsReceived?: true
    month?: true
    year?: true
  }

  export type UsageMetricsSumAggregateInputType = {
    invoicesCreated?: true
    remindersSent?: true
    clientsAdded?: true
    paymentsReceived?: true
    month?: true
    year?: true
  }

  export type UsageMetricsMinAggregateInputType = {
    id?: true
    tenantId?: true
    invoicesCreated?: true
    remindersSent?: true
    clientsAdded?: true
    paymentsReceived?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageMetricsMaxAggregateInputType = {
    id?: true
    tenantId?: true
    invoicesCreated?: true
    remindersSent?: true
    clientsAdded?: true
    paymentsReceived?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageMetricsCountAggregateInputType = {
    id?: true
    tenantId?: true
    invoicesCreated?: true
    remindersSent?: true
    clientsAdded?: true
    paymentsReceived?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsageMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageMetrics to aggregate.
     */
    where?: UsageMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMetrics to fetch.
     */
    orderBy?: UsageMetricsOrderByWithRelationInput | UsageMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageMetrics
    **/
    _count?: true | UsageMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageMetricsMaxAggregateInputType
  }

  export type GetUsageMetricsAggregateType<T extends UsageMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageMetrics[P]>
      : GetScalarType<T[P], AggregateUsageMetrics[P]>
  }




  export type UsageMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageMetricsWhereInput
    orderBy?: UsageMetricsOrderByWithAggregationInput | UsageMetricsOrderByWithAggregationInput[]
    by: UsageMetricsScalarFieldEnum[] | UsageMetricsScalarFieldEnum
    having?: UsageMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageMetricsCountAggregateInputType | true
    _avg?: UsageMetricsAvgAggregateInputType
    _sum?: UsageMetricsSumAggregateInputType
    _min?: UsageMetricsMinAggregateInputType
    _max?: UsageMetricsMaxAggregateInputType
  }

  export type UsageMetricsGroupByOutputType = {
    id: string
    tenantId: string
    invoicesCreated: number
    remindersSent: number
    clientsAdded: number
    paymentsReceived: number
    month: number
    year: number
    createdAt: Date
    updatedAt: Date
    _count: UsageMetricsCountAggregateOutputType | null
    _avg: UsageMetricsAvgAggregateOutputType | null
    _sum: UsageMetricsSumAggregateOutputType | null
    _min: UsageMetricsMinAggregateOutputType | null
    _max: UsageMetricsMaxAggregateOutputType | null
  }

  type GetUsageMetricsGroupByPayload<T extends UsageMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], UsageMetricsGroupByOutputType[P]>
        }
      >
    >


  export type UsageMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    invoicesCreated?: boolean
    remindersSent?: boolean
    clientsAdded?: boolean
    paymentsReceived?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMetrics"]>

  export type UsageMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    invoicesCreated?: boolean
    remindersSent?: boolean
    clientsAdded?: boolean
    paymentsReceived?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMetrics"]>

  export type UsageMetricsSelectScalar = {
    id?: boolean
    tenantId?: boolean
    invoicesCreated?: boolean
    remindersSent?: boolean
    clientsAdded?: boolean
    paymentsReceived?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsageMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UsageMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UsageMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageMetrics"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      invoicesCreated: number
      remindersSent: number
      clientsAdded: number
      paymentsReceived: number
      month: number
      year: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usageMetrics"]>
    composites: {}
  }

  type UsageMetricsGetPayload<S extends boolean | null | undefined | UsageMetricsDefaultArgs> = $Result.GetResult<Prisma.$UsageMetricsPayload, S>

  type UsageMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsageMetricsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsageMetricsCountAggregateInputType | true
    }

  export interface UsageMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageMetrics'], meta: { name: 'UsageMetrics' } }
    /**
     * Find zero or one UsageMetrics that matches the filter.
     * @param {UsageMetricsFindUniqueArgs} args - Arguments to find a UsageMetrics
     * @example
     * // Get one UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageMetricsFindUniqueArgs>(args: SelectSubset<T, UsageMetricsFindUniqueArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsageMetrics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsageMetricsFindUniqueOrThrowArgs} args - Arguments to find a UsageMetrics
     * @example
     * // Get one UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsageMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsFindFirstArgs} args - Arguments to find a UsageMetrics
     * @example
     * // Get one UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageMetricsFindFirstArgs>(args?: SelectSubset<T, UsageMetricsFindFirstArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsageMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsFindFirstOrThrowArgs} args - Arguments to find a UsageMetrics
     * @example
     * // Get one UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsageMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.findMany()
     * 
     * // Get first 10 UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageMetricsWithIdOnly = await prisma.usageMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageMetricsFindManyArgs>(args?: SelectSubset<T, UsageMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsageMetrics.
     * @param {UsageMetricsCreateArgs} args - Arguments to create a UsageMetrics.
     * @example
     * // Create one UsageMetrics
     * const UsageMetrics = await prisma.usageMetrics.create({
     *   data: {
     *     // ... data to create a UsageMetrics
     *   }
     * })
     * 
     */
    create<T extends UsageMetricsCreateArgs>(args: SelectSubset<T, UsageMetricsCreateArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsageMetrics.
     * @param {UsageMetricsCreateManyArgs} args - Arguments to create many UsageMetrics.
     * @example
     * // Create many UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageMetricsCreateManyArgs>(args?: SelectSubset<T, UsageMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageMetrics and returns the data saved in the database.
     * @param {UsageMetricsCreateManyAndReturnArgs} args - Arguments to create many UsageMetrics.
     * @example
     * // Create many UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageMetrics and only return the `id`
     * const usageMetricsWithIdOnly = await prisma.usageMetrics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UsageMetrics.
     * @param {UsageMetricsDeleteArgs} args - Arguments to delete one UsageMetrics.
     * @example
     * // Delete one UsageMetrics
     * const UsageMetrics = await prisma.usageMetrics.delete({
     *   where: {
     *     // ... filter to delete one UsageMetrics
     *   }
     * })
     * 
     */
    delete<T extends UsageMetricsDeleteArgs>(args: SelectSubset<T, UsageMetricsDeleteArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsageMetrics.
     * @param {UsageMetricsUpdateArgs} args - Arguments to update one UsageMetrics.
     * @example
     * // Update one UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageMetricsUpdateArgs>(args: SelectSubset<T, UsageMetricsUpdateArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsageMetrics.
     * @param {UsageMetricsDeleteManyArgs} args - Arguments to filter UsageMetrics to delete.
     * @example
     * // Delete a few UsageMetrics
     * const { count } = await prisma.usageMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageMetricsDeleteManyArgs>(args?: SelectSubset<T, UsageMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageMetricsUpdateManyArgs>(args: SelectSubset<T, UsageMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsageMetrics.
     * @param {UsageMetricsUpsertArgs} args - Arguments to update or create a UsageMetrics.
     * @example
     * // Update or create a UsageMetrics
     * const usageMetrics = await prisma.usageMetrics.upsert({
     *   create: {
     *     // ... data to create a UsageMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageMetrics we want to update
     *   }
     * })
     */
    upsert<T extends UsageMetricsUpsertArgs>(args: SelectSubset<T, UsageMetricsUpsertArgs<ExtArgs>>): Prisma__UsageMetricsClient<$Result.GetResult<Prisma.$UsageMetricsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsageMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsCountArgs} args - Arguments to filter UsageMetrics to count.
     * @example
     * // Count the number of UsageMetrics
     * const count = await prisma.usageMetrics.count({
     *   where: {
     *     // ... the filter for the UsageMetrics we want to count
     *   }
     * })
    **/
    count<T extends UsageMetricsCountArgs>(
      args?: Subset<T, UsageMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsageMetricsAggregateArgs>(args: Subset<T, UsageMetricsAggregateArgs>): Prisma.PrismaPromise<GetUsageMetricsAggregateType<T>>

    /**
     * Group by UsageMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMetricsGroupByArgs} args - Group by arguments.
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
      T extends UsageMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageMetricsGroupByArgs['orderBy'] }
        : { orderBy?: UsageMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsageMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageMetrics model
   */
  readonly fields: UsageMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UsageMetrics model
   */ 
  interface UsageMetricsFieldRefs {
    readonly id: FieldRef<"UsageMetrics", 'String'>
    readonly tenantId: FieldRef<"UsageMetrics", 'String'>
    readonly invoicesCreated: FieldRef<"UsageMetrics", 'Int'>
    readonly remindersSent: FieldRef<"UsageMetrics", 'Int'>
    readonly clientsAdded: FieldRef<"UsageMetrics", 'Int'>
    readonly paymentsReceived: FieldRef<"UsageMetrics", 'Int'>
    readonly month: FieldRef<"UsageMetrics", 'Int'>
    readonly year: FieldRef<"UsageMetrics", 'Int'>
    readonly createdAt: FieldRef<"UsageMetrics", 'DateTime'>
    readonly updatedAt: FieldRef<"UsageMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageMetrics findUnique
   */
  export type UsageMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * Filter, which UsageMetrics to fetch.
     */
    where: UsageMetricsWhereUniqueInput
  }

  /**
   * UsageMetrics findUniqueOrThrow
   */
  export type UsageMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * Filter, which UsageMetrics to fetch.
     */
    where: UsageMetricsWhereUniqueInput
  }

  /**
   * UsageMetrics findFirst
   */
  export type UsageMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * Filter, which UsageMetrics to fetch.
     */
    where?: UsageMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMetrics to fetch.
     */
    orderBy?: UsageMetricsOrderByWithRelationInput | UsageMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageMetrics.
     */
    cursor?: UsageMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMetrics.
     */
    distinct?: UsageMetricsScalarFieldEnum | UsageMetricsScalarFieldEnum[]
  }

  /**
   * UsageMetrics findFirstOrThrow
   */
  export type UsageMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * Filter, which UsageMetrics to fetch.
     */
    where?: UsageMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMetrics to fetch.
     */
    orderBy?: UsageMetricsOrderByWithRelationInput | UsageMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageMetrics.
     */
    cursor?: UsageMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMetrics.
     */
    distinct?: UsageMetricsScalarFieldEnum | UsageMetricsScalarFieldEnum[]
  }

  /**
   * UsageMetrics findMany
   */
  export type UsageMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * Filter, which UsageMetrics to fetch.
     */
    where?: UsageMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMetrics to fetch.
     */
    orderBy?: UsageMetricsOrderByWithRelationInput | UsageMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageMetrics.
     */
    cursor?: UsageMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMetrics.
     */
    skip?: number
    distinct?: UsageMetricsScalarFieldEnum | UsageMetricsScalarFieldEnum[]
  }

  /**
   * UsageMetrics create
   */
  export type UsageMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageMetrics.
     */
    data: XOR<UsageMetricsCreateInput, UsageMetricsUncheckedCreateInput>
  }

  /**
   * UsageMetrics createMany
   */
  export type UsageMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageMetrics.
     */
    data: UsageMetricsCreateManyInput | UsageMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageMetrics createManyAndReturn
   */
  export type UsageMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UsageMetrics.
     */
    data: UsageMetricsCreateManyInput | UsageMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageMetrics update
   */
  export type UsageMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageMetrics.
     */
    data: XOR<UsageMetricsUpdateInput, UsageMetricsUncheckedUpdateInput>
    /**
     * Choose, which UsageMetrics to update.
     */
    where: UsageMetricsWhereUniqueInput
  }

  /**
   * UsageMetrics updateMany
   */
  export type UsageMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageMetrics.
     */
    data: XOR<UsageMetricsUpdateManyMutationInput, UsageMetricsUncheckedUpdateManyInput>
    /**
     * Filter which UsageMetrics to update
     */
    where?: UsageMetricsWhereInput
  }

  /**
   * UsageMetrics upsert
   */
  export type UsageMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageMetrics to update in case it exists.
     */
    where: UsageMetricsWhereUniqueInput
    /**
     * In case the UsageMetrics found by the `where` argument doesn't exist, create a new UsageMetrics with this data.
     */
    create: XOR<UsageMetricsCreateInput, UsageMetricsUncheckedCreateInput>
    /**
     * In case the UsageMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageMetricsUpdateInput, UsageMetricsUncheckedUpdateInput>
  }

  /**
   * UsageMetrics delete
   */
  export type UsageMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
    /**
     * Filter which UsageMetrics to delete.
     */
    where: UsageMetricsWhereUniqueInput
  }

  /**
   * UsageMetrics deleteMany
   */
  export type UsageMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageMetrics to delete
     */
    where?: UsageMetricsWhereInput
  }

  /**
   * UsageMetrics without action
   */
  export type UsageMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMetrics
     */
    select?: UsageMetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMetricsInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    paymentTerms: number | null
  }

  export type ClientSumAggregateOutputType = {
    paymentTerms: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    email: string | null
    phone: string | null
    gstin: string | null
    pan: string | null
    billingStreet: string | null
    billingCity: string | null
    billingState: string | null
    billingCountry: string | null
    billingPostalCode: string | null
    shippingStreet: string | null
    shippingCity: string | null
    shippingState: string | null
    shippingCountry: string | null
    shippingPostalCode: string | null
    notes: string | null
    paymentTerms: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    email: string | null
    phone: string | null
    gstin: string | null
    pan: string | null
    billingStreet: string | null
    billingCity: string | null
    billingState: string | null
    billingCountry: string | null
    billingPostalCode: string | null
    shippingStreet: string | null
    shippingCity: string | null
    shippingState: string | null
    shippingCountry: string | null
    shippingPostalCode: string | null
    notes: string | null
    paymentTerms: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    email: number
    phone: number
    gstin: number
    pan: number
    billingStreet: number
    billingCity: number
    billingState: number
    billingCountry: number
    billingPostalCode: number
    shippingStreet: number
    shippingCity: number
    shippingState: number
    shippingCountry: number
    shippingPostalCode: number
    notes: number
    tags: number
    paymentTerms: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    paymentTerms?: true
  }

  export type ClientSumAggregateInputType = {
    paymentTerms?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    phone?: true
    gstin?: true
    pan?: true
    billingStreet?: true
    billingCity?: true
    billingState?: true
    billingCountry?: true
    billingPostalCode?: true
    shippingStreet?: true
    shippingCity?: true
    shippingState?: true
    shippingCountry?: true
    shippingPostalCode?: true
    notes?: true
    paymentTerms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    phone?: true
    gstin?: true
    pan?: true
    billingStreet?: true
    billingCity?: true
    billingState?: true
    billingCountry?: true
    billingPostalCode?: true
    shippingStreet?: true
    shippingCity?: true
    shippingState?: true
    shippingCountry?: true
    shippingPostalCode?: true
    notes?: true
    paymentTerms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    phone?: true
    gstin?: true
    pan?: true
    billingStreet?: true
    billingCity?: true
    billingState?: true
    billingCountry?: true
    billingPostalCode?: true
    shippingStreet?: true
    shippingCity?: true
    shippingState?: true
    shippingCountry?: true
    shippingPostalCode?: true
    notes?: true
    tags?: true
    paymentTerms?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    email: string | null
    phone: string | null
    gstin: string | null
    pan: string | null
    billingStreet: string | null
    billingCity: string | null
    billingState: string | null
    billingCountry: string | null
    billingPostalCode: string | null
    shippingStreet: string | null
    shippingCity: string | null
    shippingState: string | null
    shippingCountry: string | null
    shippingPostalCode: string | null
    notes: string | null
    tags: string[]
    paymentTerms: number
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    gstin?: boolean
    pan?: boolean
    billingStreet?: boolean
    billingCity?: boolean
    billingState?: boolean
    billingCountry?: boolean
    billingPostalCode?: boolean
    shippingStreet?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingPostalCode?: boolean
    notes?: boolean
    tags?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    gstin?: boolean
    pan?: boolean
    billingStreet?: boolean
    billingCity?: boolean
    billingState?: boolean
    billingCountry?: boolean
    billingPostalCode?: boolean
    shippingStreet?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingPostalCode?: boolean
    notes?: boolean
    tags?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    gstin?: boolean
    pan?: boolean
    billingStreet?: boolean
    billingCity?: boolean
    billingState?: boolean
    billingCountry?: boolean
    billingPostalCode?: boolean
    shippingStreet?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingPostalCode?: boolean
    notes?: boolean
    tags?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      email: string | null
      phone: string | null
      gstin: string | null
      pan: string | null
      billingStreet: string | null
      billingCity: string | null
      billingState: string | null
      billingCountry: string | null
      billingPostalCode: string | null
      shippingStreet: string | null
      shippingCity: string | null
      shippingState: string | null
      shippingCountry: string | null
      shippingPostalCode: string | null
      notes: string | null
      tags: string[]
      paymentTerms: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invoices<T extends Client$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly tenantId: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly gstin: FieldRef<"Client", 'String'>
    readonly pan: FieldRef<"Client", 'String'>
    readonly billingStreet: FieldRef<"Client", 'String'>
    readonly billingCity: FieldRef<"Client", 'String'>
    readonly billingState: FieldRef<"Client", 'String'>
    readonly billingCountry: FieldRef<"Client", 'String'>
    readonly billingPostalCode: FieldRef<"Client", 'String'>
    readonly shippingStreet: FieldRef<"Client", 'String'>
    readonly shippingCity: FieldRef<"Client", 'String'>
    readonly shippingState: FieldRef<"Client", 'String'>
    readonly shippingCountry: FieldRef<"Client", 'String'>
    readonly shippingPostalCode: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly tags: FieldRef<"Client", 'String[]'>
    readonly paymentTerms: FieldRef<"Client", 'Int'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.invoices
   */
  export type Client$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
    subtotal: number | null
    taxAmount: number | null
    discountAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
    subtotal: number | null
    taxAmount: number | null
    discountAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    clientId: string | null
    createdById: string | null
    invoiceNumber: string | null
    amount: number | null
    currency: string | null
    dueDate: Date | null
    issuedDate: Date | null
    status: $Enums.InvoiceStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    paymentLink: string | null
    paymentLinkExpiry: Date | null
    pdfUrl: string | null
    notes: string | null
    termsAndConditions: string | null
    lineItems: string | null
    subtotal: number | null
    taxAmount: number | null
    discountAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    clientId: string | null
    createdById: string | null
    invoiceNumber: string | null
    amount: number | null
    currency: string | null
    dueDate: Date | null
    issuedDate: Date | null
    status: $Enums.InvoiceStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    paymentLink: string | null
    paymentLinkExpiry: Date | null
    pdfUrl: string | null
    notes: string | null
    termsAndConditions: string | null
    lineItems: string | null
    subtotal: number | null
    taxAmount: number | null
    discountAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    tenantId: number
    clientId: number
    createdById: number
    invoiceNumber: number
    amount: number
    currency: number
    dueDate: number
    issuedDate: number
    status: number
    razorpayOrderId: number
    razorpayPaymentId: number
    paymentLink: number
    paymentLinkExpiry: number
    pdfUrl: number
    notes: number
    termsAndConditions: number
    lineItems: number
    subtotal: number
    taxAmount: number
    discountAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
    subtotal?: true
    taxAmount?: true
    discountAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
    subtotal?: true
    taxAmount?: true
    discountAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    createdById?: true
    invoiceNumber?: true
    amount?: true
    currency?: true
    dueDate?: true
    issuedDate?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    paymentLink?: true
    paymentLinkExpiry?: true
    pdfUrl?: true
    notes?: true
    termsAndConditions?: true
    lineItems?: true
    subtotal?: true
    taxAmount?: true
    discountAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    createdById?: true
    invoiceNumber?: true
    amount?: true
    currency?: true
    dueDate?: true
    issuedDate?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    paymentLink?: true
    paymentLinkExpiry?: true
    pdfUrl?: true
    notes?: true
    termsAndConditions?: true
    lineItems?: true
    subtotal?: true
    taxAmount?: true
    discountAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    createdById?: true
    invoiceNumber?: true
    amount?: true
    currency?: true
    dueDate?: true
    issuedDate?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    paymentLink?: true
    paymentLinkExpiry?: true
    pdfUrl?: true
    notes?: true
    termsAndConditions?: true
    lineItems?: true
    subtotal?: true
    taxAmount?: true
    discountAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    tenantId: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency: string
    dueDate: Date
    issuedDate: Date
    status: $Enums.InvoiceStatus
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    paymentLink: string | null
    paymentLinkExpiry: Date | null
    pdfUrl: string | null
    notes: string | null
    termsAndConditions: string | null
    lineItems: string | null
    subtotal: number | null
    taxAmount: number | null
    discountAmount: number | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    createdById?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    dueDate?: boolean
    issuedDate?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    paymentLink?: boolean
    paymentLinkExpiry?: boolean
    pdfUrl?: boolean
    notes?: boolean
    termsAndConditions?: boolean
    lineItems?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    reminderLogs?: boolean | Invoice$reminderLogsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    createdById?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    dueDate?: boolean
    issuedDate?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    paymentLink?: boolean
    paymentLinkExpiry?: boolean
    pdfUrl?: boolean
    notes?: boolean
    termsAndConditions?: boolean
    lineItems?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    createdById?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    dueDate?: boolean
    issuedDate?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    paymentLink?: boolean
    paymentLinkExpiry?: boolean
    pdfUrl?: boolean
    notes?: boolean
    termsAndConditions?: boolean
    lineItems?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    reminderLogs?: boolean | Invoice$reminderLogsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      reminderLogs: Prisma.$ReminderLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      clientId: string
      createdById: string
      invoiceNumber: string
      amount: number
      currency: string
      dueDate: Date
      issuedDate: Date
      status: $Enums.InvoiceStatus
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      paymentLink: string | null
      paymentLinkExpiry: Date | null
      pdfUrl: string | null
      notes: string | null
      termsAndConditions: string | null
      lineItems: string | null
      subtotal: number | null
      taxAmount: number | null
      discountAmount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    reminderLogs<T extends Invoice$reminderLogsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$reminderLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly tenantId: FieldRef<"Invoice", 'String'>
    readonly clientId: FieldRef<"Invoice", 'String'>
    readonly createdById: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly issuedDate: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly razorpayOrderId: FieldRef<"Invoice", 'String'>
    readonly razorpayPaymentId: FieldRef<"Invoice", 'String'>
    readonly paymentLink: FieldRef<"Invoice", 'String'>
    readonly paymentLinkExpiry: FieldRef<"Invoice", 'DateTime'>
    readonly pdfUrl: FieldRef<"Invoice", 'String'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly termsAndConditions: FieldRef<"Invoice", 'String'>
    readonly lineItems: FieldRef<"Invoice", 'String'>
    readonly subtotal: FieldRef<"Invoice", 'Float'>
    readonly taxAmount: FieldRef<"Invoice", 'Float'>
    readonly discountAmount: FieldRef<"Invoice", 'Float'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice.reminderLogs
   */
  export type Invoice$reminderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    where?: ReminderLogWhereInput
    orderBy?: ReminderLogOrderByWithRelationInput | ReminderLogOrderByWithRelationInput[]
    cursor?: ReminderLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderLogScalarFieldEnum | ReminderLogScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
    refundAmount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
    refundAmount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    tenantId: string | null
    amount: number | null
    currency: string | null
    provider: $Enums.PaymentProvider | null
    providerPaymentId: string | null
    providerOrderId: string | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    paymentMethod: string | null
    failureReason: string | null
    metadata: string | null
    refundAmount: number | null
    refundedAt: Date | null
    refundReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    tenantId: string | null
    amount: number | null
    currency: string | null
    provider: $Enums.PaymentProvider | null
    providerPaymentId: string | null
    providerOrderId: string | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    paymentMethod: string | null
    failureReason: string | null
    metadata: string | null
    refundAmount: number | null
    refundedAt: Date | null
    refundReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    invoiceId: number
    tenantId: number
    amount: number
    currency: number
    provider: number
    providerPaymentId: number
    providerOrderId: number
    status: number
    paidAt: number
    paymentMethod: number
    failureReason: number
    metadata: number
    refundAmount: number
    refundedAt: number
    refundReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    refundAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    refundAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    amount?: true
    currency?: true
    provider?: true
    providerPaymentId?: true
    providerOrderId?: true
    status?: true
    paidAt?: true
    paymentMethod?: true
    failureReason?: true
    metadata?: true
    refundAmount?: true
    refundedAt?: true
    refundReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    amount?: true
    currency?: true
    provider?: true
    providerPaymentId?: true
    providerOrderId?: true
    status?: true
    paidAt?: true
    paymentMethod?: true
    failureReason?: true
    metadata?: true
    refundAmount?: true
    refundedAt?: true
    refundReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    amount?: true
    currency?: true
    provider?: true
    providerPaymentId?: true
    providerOrderId?: true
    status?: true
    paidAt?: true
    paymentMethod?: true
    failureReason?: true
    metadata?: true
    refundAmount?: true
    refundedAt?: true
    refundReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    invoiceId: string
    tenantId: string
    amount: number
    currency: string
    provider: $Enums.PaymentProvider
    providerPaymentId: string | null
    providerOrderId: string | null
    status: $Enums.PaymentStatus
    paidAt: Date | null
    paymentMethod: string | null
    failureReason: string | null
    metadata: string | null
    refundAmount: number | null
    refundedAt: Date | null
    refundReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerOrderId?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    failureReason?: boolean
    metadata?: boolean
    refundAmount?: boolean
    refundedAt?: boolean
    refundReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerOrderId?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    failureReason?: boolean
    metadata?: boolean
    refundAmount?: boolean
    refundedAt?: boolean
    refundReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerOrderId?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    failureReason?: boolean
    metadata?: boolean
    refundAmount?: boolean
    refundedAt?: boolean
    refundReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      tenantId: string
      amount: number
      currency: string
      provider: $Enums.PaymentProvider
      providerPaymentId: string | null
      providerOrderId: string | null
      status: $Enums.PaymentStatus
      paidAt: Date | null
      paymentMethod: string | null
      failureReason: string | null
      metadata: string | null
      refundAmount: number | null
      refundedAt: Date | null
      refundReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly invoiceId: FieldRef<"Payment", 'String'>
    readonly tenantId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly provider: FieldRef<"Payment", 'PaymentProvider'>
    readonly providerPaymentId: FieldRef<"Payment", 'String'>
    readonly providerOrderId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly failureReason: FieldRef<"Payment", 'String'>
    readonly metadata: FieldRef<"Payment", 'String'>
    readonly refundAmount: FieldRef<"Payment", 'Float'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly refundReason: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model ReminderLog
   */

  export type AggregateReminderLog = {
    _count: ReminderLogCountAggregateOutputType | null
    _avg: ReminderLogAvgAggregateOutputType | null
    _sum: ReminderLogSumAggregateOutputType | null
    _min: ReminderLogMinAggregateOutputType | null
    _max: ReminderLogMaxAggregateOutputType | null
  }

  export type ReminderLogAvgAggregateOutputType = {
    attempt: number | null
    maxAttempts: number | null
  }

  export type ReminderLogSumAggregateOutputType = {
    attempt: number | null
    maxAttempts: number | null
  }

  export type ReminderLogMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    tenantId: string | null
    type: string | null
    method: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    status: string | null
    attempt: number | null
    maxAttempts: number | null
    errorMessage: string | null
    providerResponse: string | null
    recipient: string | null
    createdAt: Date | null
  }

  export type ReminderLogMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    tenantId: string | null
    type: string | null
    method: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    status: string | null
    attempt: number | null
    maxAttempts: number | null
    errorMessage: string | null
    providerResponse: string | null
    recipient: string | null
    createdAt: Date | null
  }

  export type ReminderLogCountAggregateOutputType = {
    id: number
    invoiceId: number
    tenantId: number
    type: number
    method: number
    scheduledAt: number
    sentAt: number
    status: number
    attempt: number
    maxAttempts: number
    errorMessage: number
    providerResponse: number
    recipient: number
    createdAt: number
    _all: number
  }


  export type ReminderLogAvgAggregateInputType = {
    attempt?: true
    maxAttempts?: true
  }

  export type ReminderLogSumAggregateInputType = {
    attempt?: true
    maxAttempts?: true
  }

  export type ReminderLogMinAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    type?: true
    method?: true
    scheduledAt?: true
    sentAt?: true
    status?: true
    attempt?: true
    maxAttempts?: true
    errorMessage?: true
    providerResponse?: true
    recipient?: true
    createdAt?: true
  }

  export type ReminderLogMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    type?: true
    method?: true
    scheduledAt?: true
    sentAt?: true
    status?: true
    attempt?: true
    maxAttempts?: true
    errorMessage?: true
    providerResponse?: true
    recipient?: true
    createdAt?: true
  }

  export type ReminderLogCountAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    type?: true
    method?: true
    scheduledAt?: true
    sentAt?: true
    status?: true
    attempt?: true
    maxAttempts?: true
    errorMessage?: true
    providerResponse?: true
    recipient?: true
    createdAt?: true
    _all?: true
  }

  export type ReminderLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderLog to aggregate.
     */
    where?: ReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderLogs to fetch.
     */
    orderBy?: ReminderLogOrderByWithRelationInput | ReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReminderLogs
    **/
    _count?: true | ReminderLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderLogMaxAggregateInputType
  }

  export type GetReminderLogAggregateType<T extends ReminderLogAggregateArgs> = {
        [P in keyof T & keyof AggregateReminderLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminderLog[P]>
      : GetScalarType<T[P], AggregateReminderLog[P]>
  }




  export type ReminderLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderLogWhereInput
    orderBy?: ReminderLogOrderByWithAggregationInput | ReminderLogOrderByWithAggregationInput[]
    by: ReminderLogScalarFieldEnum[] | ReminderLogScalarFieldEnum
    having?: ReminderLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderLogCountAggregateInputType | true
    _avg?: ReminderLogAvgAggregateInputType
    _sum?: ReminderLogSumAggregateInputType
    _min?: ReminderLogMinAggregateInputType
    _max?: ReminderLogMaxAggregateInputType
  }

  export type ReminderLogGroupByOutputType = {
    id: string
    invoiceId: string
    tenantId: string
    type: string
    method: string
    scheduledAt: Date
    sentAt: Date | null
    status: string
    attempt: number
    maxAttempts: number
    errorMessage: string | null
    providerResponse: string | null
    recipient: string | null
    createdAt: Date
    _count: ReminderLogCountAggregateOutputType | null
    _avg: ReminderLogAvgAggregateOutputType | null
    _sum: ReminderLogSumAggregateOutputType | null
    _min: ReminderLogMinAggregateOutputType | null
    _max: ReminderLogMaxAggregateOutputType | null
  }

  type GetReminderLogGroupByPayload<T extends ReminderLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderLogGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderLogGroupByOutputType[P]>
        }
      >
    >


  export type ReminderLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    type?: boolean
    method?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    status?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    errorMessage?: boolean
    providerResponse?: boolean
    recipient?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminderLog"]>

  export type ReminderLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    type?: boolean
    method?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    status?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    errorMessage?: boolean
    providerResponse?: boolean
    recipient?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminderLog"]>

  export type ReminderLogSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    type?: boolean
    method?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    status?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    errorMessage?: boolean
    providerResponse?: boolean
    recipient?: boolean
    createdAt?: boolean
  }

  export type ReminderLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ReminderLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ReminderLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReminderLog"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      tenantId: string
      type: string
      method: string
      scheduledAt: Date
      sentAt: Date | null
      status: string
      attempt: number
      maxAttempts: number
      errorMessage: string | null
      providerResponse: string | null
      recipient: string | null
      createdAt: Date
    }, ExtArgs["result"]["reminderLog"]>
    composites: {}
  }

  type ReminderLogGetPayload<S extends boolean | null | undefined | ReminderLogDefaultArgs> = $Result.GetResult<Prisma.$ReminderLogPayload, S>

  type ReminderLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderLogCountAggregateInputType | true
    }

  export interface ReminderLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReminderLog'], meta: { name: 'ReminderLog' } }
    /**
     * Find zero or one ReminderLog that matches the filter.
     * @param {ReminderLogFindUniqueArgs} args - Arguments to find a ReminderLog
     * @example
     * // Get one ReminderLog
     * const reminderLog = await prisma.reminderLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderLogFindUniqueArgs>(args: SelectSubset<T, ReminderLogFindUniqueArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReminderLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderLogFindUniqueOrThrowArgs} args - Arguments to find a ReminderLog
     * @example
     * // Get one ReminderLog
     * const reminderLog = await prisma.reminderLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReminderLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogFindFirstArgs} args - Arguments to find a ReminderLog
     * @example
     * // Get one ReminderLog
     * const reminderLog = await prisma.reminderLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderLogFindFirstArgs>(args?: SelectSubset<T, ReminderLogFindFirstArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReminderLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogFindFirstOrThrowArgs} args - Arguments to find a ReminderLog
     * @example
     * // Get one ReminderLog
     * const reminderLog = await prisma.reminderLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReminderLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReminderLogs
     * const reminderLogs = await prisma.reminderLog.findMany()
     * 
     * // Get first 10 ReminderLogs
     * const reminderLogs = await prisma.reminderLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderLogWithIdOnly = await prisma.reminderLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderLogFindManyArgs>(args?: SelectSubset<T, ReminderLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReminderLog.
     * @param {ReminderLogCreateArgs} args - Arguments to create a ReminderLog.
     * @example
     * // Create one ReminderLog
     * const ReminderLog = await prisma.reminderLog.create({
     *   data: {
     *     // ... data to create a ReminderLog
     *   }
     * })
     * 
     */
    create<T extends ReminderLogCreateArgs>(args: SelectSubset<T, ReminderLogCreateArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReminderLogs.
     * @param {ReminderLogCreateManyArgs} args - Arguments to create many ReminderLogs.
     * @example
     * // Create many ReminderLogs
     * const reminderLog = await prisma.reminderLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderLogCreateManyArgs>(args?: SelectSubset<T, ReminderLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReminderLogs and returns the data saved in the database.
     * @param {ReminderLogCreateManyAndReturnArgs} args - Arguments to create many ReminderLogs.
     * @example
     * // Create many ReminderLogs
     * const reminderLog = await prisma.reminderLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReminderLogs and only return the `id`
     * const reminderLogWithIdOnly = await prisma.reminderLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReminderLog.
     * @param {ReminderLogDeleteArgs} args - Arguments to delete one ReminderLog.
     * @example
     * // Delete one ReminderLog
     * const ReminderLog = await prisma.reminderLog.delete({
     *   where: {
     *     // ... filter to delete one ReminderLog
     *   }
     * })
     * 
     */
    delete<T extends ReminderLogDeleteArgs>(args: SelectSubset<T, ReminderLogDeleteArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReminderLog.
     * @param {ReminderLogUpdateArgs} args - Arguments to update one ReminderLog.
     * @example
     * // Update one ReminderLog
     * const reminderLog = await prisma.reminderLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderLogUpdateArgs>(args: SelectSubset<T, ReminderLogUpdateArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReminderLogs.
     * @param {ReminderLogDeleteManyArgs} args - Arguments to filter ReminderLogs to delete.
     * @example
     * // Delete a few ReminderLogs
     * const { count } = await prisma.reminderLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderLogDeleteManyArgs>(args?: SelectSubset<T, ReminderLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReminderLogs
     * const reminderLog = await prisma.reminderLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderLogUpdateManyArgs>(args: SelectSubset<T, ReminderLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReminderLog.
     * @param {ReminderLogUpsertArgs} args - Arguments to update or create a ReminderLog.
     * @example
     * // Update or create a ReminderLog
     * const reminderLog = await prisma.reminderLog.upsert({
     *   create: {
     *     // ... data to create a ReminderLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReminderLog we want to update
     *   }
     * })
     */
    upsert<T extends ReminderLogUpsertArgs>(args: SelectSubset<T, ReminderLogUpsertArgs<ExtArgs>>): Prisma__ReminderLogClient<$Result.GetResult<Prisma.$ReminderLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReminderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogCountArgs} args - Arguments to filter ReminderLogs to count.
     * @example
     * // Count the number of ReminderLogs
     * const count = await prisma.reminderLog.count({
     *   where: {
     *     // ... the filter for the ReminderLogs we want to count
     *   }
     * })
    **/
    count<T extends ReminderLogCountArgs>(
      args?: Subset<T, ReminderLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReminderLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderLogAggregateArgs>(args: Subset<T, ReminderLogAggregateArgs>): Prisma.PrismaPromise<GetReminderLogAggregateType<T>>

    /**
     * Group by ReminderLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderLogGroupByArgs} args - Group by arguments.
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
      T extends ReminderLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderLogGroupByArgs['orderBy'] }
        : { orderBy?: ReminderLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReminderLog model
   */
  readonly fields: ReminderLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReminderLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ReminderLog model
   */ 
  interface ReminderLogFieldRefs {
    readonly id: FieldRef<"ReminderLog", 'String'>
    readonly invoiceId: FieldRef<"ReminderLog", 'String'>
    readonly tenantId: FieldRef<"ReminderLog", 'String'>
    readonly type: FieldRef<"ReminderLog", 'String'>
    readonly method: FieldRef<"ReminderLog", 'String'>
    readonly scheduledAt: FieldRef<"ReminderLog", 'DateTime'>
    readonly sentAt: FieldRef<"ReminderLog", 'DateTime'>
    readonly status: FieldRef<"ReminderLog", 'String'>
    readonly attempt: FieldRef<"ReminderLog", 'Int'>
    readonly maxAttempts: FieldRef<"ReminderLog", 'Int'>
    readonly errorMessage: FieldRef<"ReminderLog", 'String'>
    readonly providerResponse: FieldRef<"ReminderLog", 'String'>
    readonly recipient: FieldRef<"ReminderLog", 'String'>
    readonly createdAt: FieldRef<"ReminderLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReminderLog findUnique
   */
  export type ReminderLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ReminderLog to fetch.
     */
    where: ReminderLogWhereUniqueInput
  }

  /**
   * ReminderLog findUniqueOrThrow
   */
  export type ReminderLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ReminderLog to fetch.
     */
    where: ReminderLogWhereUniqueInput
  }

  /**
   * ReminderLog findFirst
   */
  export type ReminderLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ReminderLog to fetch.
     */
    where?: ReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderLogs to fetch.
     */
    orderBy?: ReminderLogOrderByWithRelationInput | ReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderLogs.
     */
    cursor?: ReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderLogs.
     */
    distinct?: ReminderLogScalarFieldEnum | ReminderLogScalarFieldEnum[]
  }

  /**
   * ReminderLog findFirstOrThrow
   */
  export type ReminderLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ReminderLog to fetch.
     */
    where?: ReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderLogs to fetch.
     */
    orderBy?: ReminderLogOrderByWithRelationInput | ReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderLogs.
     */
    cursor?: ReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderLogs.
     */
    distinct?: ReminderLogScalarFieldEnum | ReminderLogScalarFieldEnum[]
  }

  /**
   * ReminderLog findMany
   */
  export type ReminderLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ReminderLogs to fetch.
     */
    where?: ReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderLogs to fetch.
     */
    orderBy?: ReminderLogOrderByWithRelationInput | ReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReminderLogs.
     */
    cursor?: ReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderLogs.
     */
    skip?: number
    distinct?: ReminderLogScalarFieldEnum | ReminderLogScalarFieldEnum[]
  }

  /**
   * ReminderLog create
   */
  export type ReminderLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ReminderLog.
     */
    data: XOR<ReminderLogCreateInput, ReminderLogUncheckedCreateInput>
  }

  /**
   * ReminderLog createMany
   */
  export type ReminderLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReminderLogs.
     */
    data: ReminderLogCreateManyInput | ReminderLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReminderLog createManyAndReturn
   */
  export type ReminderLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReminderLogs.
     */
    data: ReminderLogCreateManyInput | ReminderLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReminderLog update
   */
  export type ReminderLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ReminderLog.
     */
    data: XOR<ReminderLogUpdateInput, ReminderLogUncheckedUpdateInput>
    /**
     * Choose, which ReminderLog to update.
     */
    where: ReminderLogWhereUniqueInput
  }

  /**
   * ReminderLog updateMany
   */
  export type ReminderLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReminderLogs.
     */
    data: XOR<ReminderLogUpdateManyMutationInput, ReminderLogUncheckedUpdateManyInput>
    /**
     * Filter which ReminderLogs to update
     */
    where?: ReminderLogWhereInput
  }

  /**
   * ReminderLog upsert
   */
  export type ReminderLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ReminderLog to update in case it exists.
     */
    where: ReminderLogWhereUniqueInput
    /**
     * In case the ReminderLog found by the `where` argument doesn't exist, create a new ReminderLog with this data.
     */
    create: XOR<ReminderLogCreateInput, ReminderLogUncheckedCreateInput>
    /**
     * In case the ReminderLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderLogUpdateInput, ReminderLogUncheckedUpdateInput>
  }

  /**
   * ReminderLog delete
   */
  export type ReminderLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
    /**
     * Filter which ReminderLog to delete.
     */
    where: ReminderLogWhereUniqueInput
  }

  /**
   * ReminderLog deleteMany
   */
  export type ReminderLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderLogs to delete
     */
    where?: ReminderLogWhereInput
  }

  /**
   * ReminderLog without action
   */
  export type ReminderLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderLog
     */
    select?: ReminderLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderLogInclude<ExtArgs> | null
  }


  /**
   * Model NotificationLog
   */

  export type AggregateNotificationLog = {
    _count: NotificationLogCountAggregateOutputType | null
    _min: NotificationLogMinAggregateOutputType | null
    _max: NotificationLogMaxAggregateOutputType | null
  }

  export type NotificationLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    type: string | null
    channel: string | null
    recipient: string | null
    subject: string | null
    content: string | null
    templateId: string | null
    templateData: string | null
    status: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    openedAt: Date | null
    errorMessage: string | null
    providerResponse: string | null
    createdAt: Date | null
  }

  export type NotificationLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    type: string | null
    channel: string | null
    recipient: string | null
    subject: string | null
    content: string | null
    templateId: string | null
    templateData: string | null
    status: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    openedAt: Date | null
    errorMessage: string | null
    providerResponse: string | null
    createdAt: Date | null
  }

  export type NotificationLogCountAggregateOutputType = {
    id: number
    tenantId: number
    type: number
    channel: number
    recipient: number
    subject: number
    content: number
    templateId: number
    templateData: number
    status: number
    sentAt: number
    deliveredAt: number
    openedAt: number
    errorMessage: number
    providerResponse: number
    createdAt: number
    _all: number
  }


  export type NotificationLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    type?: true
    channel?: true
    recipient?: true
    subject?: true
    content?: true
    templateId?: true
    templateData?: true
    status?: true
    sentAt?: true
    deliveredAt?: true
    openedAt?: true
    errorMessage?: true
    providerResponse?: true
    createdAt?: true
  }

  export type NotificationLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    type?: true
    channel?: true
    recipient?: true
    subject?: true
    content?: true
    templateId?: true
    templateData?: true
    status?: true
    sentAt?: true
    deliveredAt?: true
    openedAt?: true
    errorMessage?: true
    providerResponse?: true
    createdAt?: true
  }

  export type NotificationLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    type?: true
    channel?: true
    recipient?: true
    subject?: true
    content?: true
    templateId?: true
    templateData?: true
    status?: true
    sentAt?: true
    deliveredAt?: true
    openedAt?: true
    errorMessage?: true
    providerResponse?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationLog to aggregate.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationLogs
    **/
    _count?: true | NotificationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationLogMaxAggregateInputType
  }

  export type GetNotificationLogAggregateType<T extends NotificationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationLog[P]>
      : GetScalarType<T[P], AggregateNotificationLog[P]>
  }




  export type NotificationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationLogWhereInput
    orderBy?: NotificationLogOrderByWithAggregationInput | NotificationLogOrderByWithAggregationInput[]
    by: NotificationLogScalarFieldEnum[] | NotificationLogScalarFieldEnum
    having?: NotificationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationLogCountAggregateInputType | true
    _min?: NotificationLogMinAggregateInputType
    _max?: NotificationLogMaxAggregateInputType
  }

  export type NotificationLogGroupByOutputType = {
    id: string
    tenantId: string
    type: string
    channel: string
    recipient: string
    subject: string | null
    content: string | null
    templateId: string | null
    templateData: string | null
    status: string
    sentAt: Date | null
    deliveredAt: Date | null
    openedAt: Date | null
    errorMessage: string | null
    providerResponse: string | null
    createdAt: Date
    _count: NotificationLogCountAggregateOutputType | null
    _min: NotificationLogMinAggregateOutputType | null
    _max: NotificationLogMaxAggregateOutputType | null
  }

  type GetNotificationLogGroupByPayload<T extends NotificationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationLogGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationLogGroupByOutputType[P]>
        }
      >
    >


  export type NotificationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    type?: boolean
    channel?: boolean
    recipient?: boolean
    subject?: boolean
    content?: boolean
    templateId?: boolean
    templateData?: boolean
    status?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    errorMessage?: boolean
    providerResponse?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationLog"]>

  export type NotificationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    type?: boolean
    channel?: boolean
    recipient?: boolean
    subject?: boolean
    content?: boolean
    templateId?: boolean
    templateData?: boolean
    status?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    errorMessage?: boolean
    providerResponse?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationLog"]>

  export type NotificationLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    type?: boolean
    channel?: boolean
    recipient?: boolean
    subject?: boolean
    content?: boolean
    templateId?: boolean
    templateData?: boolean
    status?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    errorMessage?: boolean
    providerResponse?: boolean
    createdAt?: boolean
  }

  export type NotificationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type NotificationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $NotificationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationLog"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      type: string
      channel: string
      recipient: string
      subject: string | null
      content: string | null
      templateId: string | null
      templateData: string | null
      status: string
      sentAt: Date | null
      deliveredAt: Date | null
      openedAt: Date | null
      errorMessage: string | null
      providerResponse: string | null
      createdAt: Date
    }, ExtArgs["result"]["notificationLog"]>
    composites: {}
  }

  type NotificationLogGetPayload<S extends boolean | null | undefined | NotificationLogDefaultArgs> = $Result.GetResult<Prisma.$NotificationLogPayload, S>

  type NotificationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationLogCountAggregateInputType | true
    }

  export interface NotificationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationLog'], meta: { name: 'NotificationLog' } }
    /**
     * Find zero or one NotificationLog that matches the filter.
     * @param {NotificationLogFindUniqueArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationLogFindUniqueArgs>(args: SelectSubset<T, NotificationLogFindUniqueArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationLogFindUniqueOrThrowArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindFirstArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationLogFindFirstArgs>(args?: SelectSubset<T, NotificationLogFindFirstArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindFirstOrThrowArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationLogs
     * const notificationLogs = await prisma.notificationLog.findMany()
     * 
     * // Get first 10 NotificationLogs
     * const notificationLogs = await prisma.notificationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationLogFindManyArgs>(args?: SelectSubset<T, NotificationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationLog.
     * @param {NotificationLogCreateArgs} args - Arguments to create a NotificationLog.
     * @example
     * // Create one NotificationLog
     * const NotificationLog = await prisma.notificationLog.create({
     *   data: {
     *     // ... data to create a NotificationLog
     *   }
     * })
     * 
     */
    create<T extends NotificationLogCreateArgs>(args: SelectSubset<T, NotificationLogCreateArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationLogs.
     * @param {NotificationLogCreateManyArgs} args - Arguments to create many NotificationLogs.
     * @example
     * // Create many NotificationLogs
     * const notificationLog = await prisma.notificationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationLogCreateManyArgs>(args?: SelectSubset<T, NotificationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationLogs and returns the data saved in the database.
     * @param {NotificationLogCreateManyAndReturnArgs} args - Arguments to create many NotificationLogs.
     * @example
     * // Create many NotificationLogs
     * const notificationLog = await prisma.notificationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationLogs and only return the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationLog.
     * @param {NotificationLogDeleteArgs} args - Arguments to delete one NotificationLog.
     * @example
     * // Delete one NotificationLog
     * const NotificationLog = await prisma.notificationLog.delete({
     *   where: {
     *     // ... filter to delete one NotificationLog
     *   }
     * })
     * 
     */
    delete<T extends NotificationLogDeleteArgs>(args: SelectSubset<T, NotificationLogDeleteArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationLog.
     * @param {NotificationLogUpdateArgs} args - Arguments to update one NotificationLog.
     * @example
     * // Update one NotificationLog
     * const notificationLog = await prisma.notificationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationLogUpdateArgs>(args: SelectSubset<T, NotificationLogUpdateArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationLogs.
     * @param {NotificationLogDeleteManyArgs} args - Arguments to filter NotificationLogs to delete.
     * @example
     * // Delete a few NotificationLogs
     * const { count } = await prisma.notificationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationLogDeleteManyArgs>(args?: SelectSubset<T, NotificationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationLogs
     * const notificationLog = await prisma.notificationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationLogUpdateManyArgs>(args: SelectSubset<T, NotificationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationLog.
     * @param {NotificationLogUpsertArgs} args - Arguments to update or create a NotificationLog.
     * @example
     * // Update or create a NotificationLog
     * const notificationLog = await prisma.notificationLog.upsert({
     *   create: {
     *     // ... data to create a NotificationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationLog we want to update
     *   }
     * })
     */
    upsert<T extends NotificationLogUpsertArgs>(args: SelectSubset<T, NotificationLogUpsertArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogCountArgs} args - Arguments to filter NotificationLogs to count.
     * @example
     * // Count the number of NotificationLogs
     * const count = await prisma.notificationLog.count({
     *   where: {
     *     // ... the filter for the NotificationLogs we want to count
     *   }
     * })
    **/
    count<T extends NotificationLogCountArgs>(
      args?: Subset<T, NotificationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationLogAggregateArgs>(args: Subset<T, NotificationLogAggregateArgs>): Prisma.PrismaPromise<GetNotificationLogAggregateType<T>>

    /**
     * Group by NotificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogGroupByArgs} args - Group by arguments.
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
      T extends NotificationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationLogGroupByArgs['orderBy'] }
        : { orderBy?: NotificationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationLog model
   */
  readonly fields: NotificationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the NotificationLog model
   */ 
  interface NotificationLogFieldRefs {
    readonly id: FieldRef<"NotificationLog", 'String'>
    readonly tenantId: FieldRef<"NotificationLog", 'String'>
    readonly type: FieldRef<"NotificationLog", 'String'>
    readonly channel: FieldRef<"NotificationLog", 'String'>
    readonly recipient: FieldRef<"NotificationLog", 'String'>
    readonly subject: FieldRef<"NotificationLog", 'String'>
    readonly content: FieldRef<"NotificationLog", 'String'>
    readonly templateId: FieldRef<"NotificationLog", 'String'>
    readonly templateData: FieldRef<"NotificationLog", 'String'>
    readonly status: FieldRef<"NotificationLog", 'String'>
    readonly sentAt: FieldRef<"NotificationLog", 'DateTime'>
    readonly deliveredAt: FieldRef<"NotificationLog", 'DateTime'>
    readonly openedAt: FieldRef<"NotificationLog", 'DateTime'>
    readonly errorMessage: FieldRef<"NotificationLog", 'String'>
    readonly providerResponse: FieldRef<"NotificationLog", 'String'>
    readonly createdAt: FieldRef<"NotificationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationLog findUnique
   */
  export type NotificationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog findUniqueOrThrow
   */
  export type NotificationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog findFirst
   */
  export type NotificationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationLogs.
     */
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * NotificationLog findFirstOrThrow
   */
  export type NotificationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationLogs.
     */
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * NotificationLog findMany
   */
  export type NotificationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLogs to fetch.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * NotificationLog create
   */
  export type NotificationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationLog.
     */
    data: XOR<NotificationLogCreateInput, NotificationLogUncheckedCreateInput>
  }

  /**
   * NotificationLog createMany
   */
  export type NotificationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationLogs.
     */
    data: NotificationLogCreateManyInput | NotificationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationLog createManyAndReturn
   */
  export type NotificationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationLogs.
     */
    data: NotificationLogCreateManyInput | NotificationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationLog update
   */
  export type NotificationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationLog.
     */
    data: XOR<NotificationLogUpdateInput, NotificationLogUncheckedUpdateInput>
    /**
     * Choose, which NotificationLog to update.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog updateMany
   */
  export type NotificationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationLogs.
     */
    data: XOR<NotificationLogUpdateManyMutationInput, NotificationLogUncheckedUpdateManyInput>
    /**
     * Filter which NotificationLogs to update
     */
    where?: NotificationLogWhereInput
  }

  /**
   * NotificationLog upsert
   */
  export type NotificationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationLog to update in case it exists.
     */
    where: NotificationLogWhereUniqueInput
    /**
     * In case the NotificationLog found by the `where` argument doesn't exist, create a new NotificationLog with this data.
     */
    create: XOR<NotificationLogCreateInput, NotificationLogUncheckedCreateInput>
    /**
     * In case the NotificationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationLogUpdateInput, NotificationLogUncheckedUpdateInput>
  }

  /**
   * NotificationLog delete
   */
  export type NotificationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter which NotificationLog to delete.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog deleteMany
   */
  export type NotificationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationLogs to delete
     */
    where?: NotificationLogWhereInput
  }

  /**
   * NotificationLog without action
   */
  export type NotificationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tenantId: 'tenantId',
    role: 'role',
    invitedBy: 'invitedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    plan: 'plan',
    status: 'status',
    razorpaySubscriptionId: 'razorpaySubscriptionId',
    razorpayCustomerId: 'razorpayCustomerId',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    trialEndsAt: 'trialEndsAt',
    cancelledAt: 'cancelledAt',
    cancellationReason: 'cancellationReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const TenantSettingsScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    reminderIntervals: 'reminderIntervals',
    defaultReminderMethod: 'defaultReminderMethod',
    whatsappTemplate: 'whatsappTemplate',
    emailTemplate: 'emailTemplate',
    smsTemplate: 'smsTemplate',
    businessHoursOnly: 'businessHoursOnly',
    skipWeekends: 'skipWeekends',
    businessStartHour: 'businessStartHour',
    businessEndHour: 'businessEndHour',
    companyLogoUrl: 'companyLogoUrl',
    primaryColor: 'primaryColor',
    accentColor: 'accentColor',
    customDomain: 'customDomain',
    defaultPaymentTerms: 'defaultPaymentTerms',
    lateFeePercentage: 'lateFeePercentage',
    invoicePrefix: 'invoicePrefix',
    nextInvoiceNumber: 'nextInvoiceNumber',
    defaultTaxRate: 'defaultTaxRate',
    notifyOnPayment: 'notifyOnPayment',
    notifyOnOverdue: 'notifyOnOverdue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantSettingsScalarFieldEnum = (typeof TenantSettingsScalarFieldEnum)[keyof typeof TenantSettingsScalarFieldEnum]


  export const UsageMetricsScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    invoicesCreated: 'invoicesCreated',
    remindersSent: 'remindersSent',
    clientsAdded: 'clientsAdded',
    paymentsReceived: 'paymentsReceived',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsageMetricsScalarFieldEnum = (typeof UsageMetricsScalarFieldEnum)[keyof typeof UsageMetricsScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    gstin: 'gstin',
    pan: 'pan',
    billingStreet: 'billingStreet',
    billingCity: 'billingCity',
    billingState: 'billingState',
    billingCountry: 'billingCountry',
    billingPostalCode: 'billingPostalCode',
    shippingStreet: 'shippingStreet',
    shippingCity: 'shippingCity',
    shippingState: 'shippingState',
    shippingCountry: 'shippingCountry',
    shippingPostalCode: 'shippingPostalCode',
    notes: 'notes',
    tags: 'tags',
    paymentTerms: 'paymentTerms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    clientId: 'clientId',
    createdById: 'createdById',
    invoiceNumber: 'invoiceNumber',
    amount: 'amount',
    currency: 'currency',
    dueDate: 'dueDate',
    issuedDate: 'issuedDate',
    status: 'status',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    paymentLink: 'paymentLink',
    paymentLinkExpiry: 'paymentLinkExpiry',
    pdfUrl: 'pdfUrl',
    notes: 'notes',
    termsAndConditions: 'termsAndConditions',
    lineItems: 'lineItems',
    subtotal: 'subtotal',
    taxAmount: 'taxAmount',
    discountAmount: 'discountAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    tenantId: 'tenantId',
    amount: 'amount',
    currency: 'currency',
    provider: 'provider',
    providerPaymentId: 'providerPaymentId',
    providerOrderId: 'providerOrderId',
    status: 'status',
    paidAt: 'paidAt',
    paymentMethod: 'paymentMethod',
    failureReason: 'failureReason',
    metadata: 'metadata',
    refundAmount: 'refundAmount',
    refundedAt: 'refundedAt',
    refundReason: 'refundReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReminderLogScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    tenantId: 'tenantId',
    type: 'type',
    method: 'method',
    scheduledAt: 'scheduledAt',
    sentAt: 'sentAt',
    status: 'status',
    attempt: 'attempt',
    maxAttempts: 'maxAttempts',
    errorMessage: 'errorMessage',
    providerResponse: 'providerResponse',
    recipient: 'recipient',
    createdAt: 'createdAt'
  };

  export type ReminderLogScalarFieldEnum = (typeof ReminderLogScalarFieldEnum)[keyof typeof ReminderLogScalarFieldEnum]


  export const NotificationLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    type: 'type',
    channel: 'channel',
    recipient: 'recipient',
    subject: 'subject',
    content: 'content',
    templateId: 'templateId',
    templateData: 'templateData',
    status: 'status',
    sentAt: 'sentAt',
    deliveredAt: 'deliveredAt',
    openedAt: 'openedAt',
    errorMessage: 'errorMessage',
    providerResponse: 'providerResponse',
    createdAt: 'createdAt'
  };

  export type NotificationLogScalarFieldEnum = (typeof NotificationLogScalarFieldEnum)[keyof typeof NotificationLogScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TenantRole'
   */
  export type EnumTenantRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantRole'>
    


  /**
   * Reference to a field of type 'TenantRole[]'
   */
  export type ListEnumTenantRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantRole[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentProvider'
   */
  export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>
    


  /**
   * Reference to a field of type 'PaymentProvider[]'
   */
  export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    plan?: EnumSubscriptionPlanFilter<"Tenant"> | $Enums.SubscriptionPlan
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    memberships?: MembershipListRelationFilter
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
    settings?: XOR<TenantSettingsNullableRelationFilter, TenantSettingsWhereInput> | null
    usageMetrics?: UsageMetricsListRelationFilter
    clients?: ClientListRelationFilter
    invoices?: InvoiceListRelationFilter
    payments?: PaymentListRelationFilter
    reminderLogs?: ReminderLogListRelationFilter
    notificationLogs?: NotificationLogListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    settings?: TenantSettingsOrderByWithRelationInput
    usageMetrics?: UsageMetricsOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    reminderLogs?: ReminderLogOrderByRelationAggregateInput
    notificationLogs?: NotificationLogOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    plan?: EnumSubscriptionPlanFilter<"Tenant"> | $Enums.SubscriptionPlan
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    memberships?: MembershipListRelationFilter
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
    settings?: XOR<TenantSettingsNullableRelationFilter, TenantSettingsWhereInput> | null
    usageMetrics?: UsageMetricsListRelationFilter
    clients?: ClientListRelationFilter
    invoices?: InvoiceListRelationFilter
    payments?: PaymentListRelationFilter
    reminderLogs?: ReminderLogListRelationFilter
    notificationLogs?: NotificationLogListRelationFilter
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Tenant"> | $Enums.SubscriptionPlan
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    tenantId?: StringFilter<"Membership"> | string
    role?: EnumTenantRoleFilter<"Membership"> | $Enums.TenantRole
    invitedBy?: StringNullableFilter<"Membership"> | string | null
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tenantId?: MembershipUserIdTenantIdCompoundUniqueInput
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    userId?: StringFilter<"Membership"> | string
    tenantId?: StringFilter<"Membership"> | string
    role?: EnumTenantRoleFilter<"Membership"> | $Enums.TenantRole
    invitedBy?: StringNullableFilter<"Membership"> | string | null
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "userId_tenantId">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    userId?: StringWithAggregatesFilter<"Membership"> | string
    tenantId?: StringWithAggregatesFilter<"Membership"> | string
    role?: EnumTenantRoleWithAggregatesFilter<"Membership"> | $Enums.TenantRole
    invitedBy?: StringNullableWithAggregatesFilter<"Membership"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    tenantId?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    razorpayCustomerId?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancellationReason?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubscriptionId?: SortOrderInput | SortOrder
    razorpayCustomerId?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    razorpayCustomerId?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancellationReason?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenantId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubscriptionId?: SortOrderInput | SortOrder
    razorpayCustomerId?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    tenantId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    razorpayCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancellationReason?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type TenantSettingsWhereInput = {
    AND?: TenantSettingsWhereInput | TenantSettingsWhereInput[]
    OR?: TenantSettingsWhereInput[]
    NOT?: TenantSettingsWhereInput | TenantSettingsWhereInput[]
    id?: StringFilter<"TenantSettings"> | string
    tenantId?: StringFilter<"TenantSettings"> | string
    reminderIntervals?: StringFilter<"TenantSettings"> | string
    defaultReminderMethod?: StringFilter<"TenantSettings"> | string
    whatsappTemplate?: StringNullableFilter<"TenantSettings"> | string | null
    emailTemplate?: StringNullableFilter<"TenantSettings"> | string | null
    smsTemplate?: StringNullableFilter<"TenantSettings"> | string | null
    businessHoursOnly?: BoolFilter<"TenantSettings"> | boolean
    skipWeekends?: BoolFilter<"TenantSettings"> | boolean
    businessStartHour?: IntFilter<"TenantSettings"> | number
    businessEndHour?: IntFilter<"TenantSettings"> | number
    companyLogoUrl?: StringNullableFilter<"TenantSettings"> | string | null
    primaryColor?: StringNullableFilter<"TenantSettings"> | string | null
    accentColor?: StringNullableFilter<"TenantSettings"> | string | null
    customDomain?: StringNullableFilter<"TenantSettings"> | string | null
    defaultPaymentTerms?: IntFilter<"TenantSettings"> | number
    lateFeePercentage?: FloatNullableFilter<"TenantSettings"> | number | null
    invoicePrefix?: StringFilter<"TenantSettings"> | string
    nextInvoiceNumber?: IntFilter<"TenantSettings"> | number
    defaultTaxRate?: FloatNullableFilter<"TenantSettings"> | number | null
    notifyOnPayment?: BoolFilter<"TenantSettings"> | boolean
    notifyOnOverdue?: BoolFilter<"TenantSettings"> | boolean
    createdAt?: DateTimeFilter<"TenantSettings"> | Date | string
    updatedAt?: DateTimeFilter<"TenantSettings"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type TenantSettingsOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    reminderIntervals?: SortOrder
    defaultReminderMethod?: SortOrder
    whatsappTemplate?: SortOrderInput | SortOrder
    emailTemplate?: SortOrderInput | SortOrder
    smsTemplate?: SortOrderInput | SortOrder
    businessHoursOnly?: SortOrder
    skipWeekends?: SortOrder
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    companyLogoUrl?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    accentColor?: SortOrderInput | SortOrder
    customDomain?: SortOrderInput | SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrderInput | SortOrder
    invoicePrefix?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrderInput | SortOrder
    notifyOnPayment?: SortOrder
    notifyOnOverdue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type TenantSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: TenantSettingsWhereInput | TenantSettingsWhereInput[]
    OR?: TenantSettingsWhereInput[]
    NOT?: TenantSettingsWhereInput | TenantSettingsWhereInput[]
    reminderIntervals?: StringFilter<"TenantSettings"> | string
    defaultReminderMethod?: StringFilter<"TenantSettings"> | string
    whatsappTemplate?: StringNullableFilter<"TenantSettings"> | string | null
    emailTemplate?: StringNullableFilter<"TenantSettings"> | string | null
    smsTemplate?: StringNullableFilter<"TenantSettings"> | string | null
    businessHoursOnly?: BoolFilter<"TenantSettings"> | boolean
    skipWeekends?: BoolFilter<"TenantSettings"> | boolean
    businessStartHour?: IntFilter<"TenantSettings"> | number
    businessEndHour?: IntFilter<"TenantSettings"> | number
    companyLogoUrl?: StringNullableFilter<"TenantSettings"> | string | null
    primaryColor?: StringNullableFilter<"TenantSettings"> | string | null
    accentColor?: StringNullableFilter<"TenantSettings"> | string | null
    customDomain?: StringNullableFilter<"TenantSettings"> | string | null
    defaultPaymentTerms?: IntFilter<"TenantSettings"> | number
    lateFeePercentage?: FloatNullableFilter<"TenantSettings"> | number | null
    invoicePrefix?: StringFilter<"TenantSettings"> | string
    nextInvoiceNumber?: IntFilter<"TenantSettings"> | number
    defaultTaxRate?: FloatNullableFilter<"TenantSettings"> | number | null
    notifyOnPayment?: BoolFilter<"TenantSettings"> | boolean
    notifyOnOverdue?: BoolFilter<"TenantSettings"> | boolean
    createdAt?: DateTimeFilter<"TenantSettings"> | Date | string
    updatedAt?: DateTimeFilter<"TenantSettings"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenantId">

  export type TenantSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    reminderIntervals?: SortOrder
    defaultReminderMethod?: SortOrder
    whatsappTemplate?: SortOrderInput | SortOrder
    emailTemplate?: SortOrderInput | SortOrder
    smsTemplate?: SortOrderInput | SortOrder
    businessHoursOnly?: SortOrder
    skipWeekends?: SortOrder
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    companyLogoUrl?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    accentColor?: SortOrderInput | SortOrder
    customDomain?: SortOrderInput | SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrderInput | SortOrder
    invoicePrefix?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrderInput | SortOrder
    notifyOnPayment?: SortOrder
    notifyOnOverdue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantSettingsCountOrderByAggregateInput
    _avg?: TenantSettingsAvgOrderByAggregateInput
    _max?: TenantSettingsMaxOrderByAggregateInput
    _min?: TenantSettingsMinOrderByAggregateInput
    _sum?: TenantSettingsSumOrderByAggregateInput
  }

  export type TenantSettingsScalarWhereWithAggregatesInput = {
    AND?: TenantSettingsScalarWhereWithAggregatesInput | TenantSettingsScalarWhereWithAggregatesInput[]
    OR?: TenantSettingsScalarWhereWithAggregatesInput[]
    NOT?: TenantSettingsScalarWhereWithAggregatesInput | TenantSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantSettings"> | string
    tenantId?: StringWithAggregatesFilter<"TenantSettings"> | string
    reminderIntervals?: StringWithAggregatesFilter<"TenantSettings"> | string
    defaultReminderMethod?: StringWithAggregatesFilter<"TenantSettings"> | string
    whatsappTemplate?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    emailTemplate?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    smsTemplate?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    businessHoursOnly?: BoolWithAggregatesFilter<"TenantSettings"> | boolean
    skipWeekends?: BoolWithAggregatesFilter<"TenantSettings"> | boolean
    businessStartHour?: IntWithAggregatesFilter<"TenantSettings"> | number
    businessEndHour?: IntWithAggregatesFilter<"TenantSettings"> | number
    companyLogoUrl?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    primaryColor?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    accentColor?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    customDomain?: StringNullableWithAggregatesFilter<"TenantSettings"> | string | null
    defaultPaymentTerms?: IntWithAggregatesFilter<"TenantSettings"> | number
    lateFeePercentage?: FloatNullableWithAggregatesFilter<"TenantSettings"> | number | null
    invoicePrefix?: StringWithAggregatesFilter<"TenantSettings"> | string
    nextInvoiceNumber?: IntWithAggregatesFilter<"TenantSettings"> | number
    defaultTaxRate?: FloatNullableWithAggregatesFilter<"TenantSettings"> | number | null
    notifyOnPayment?: BoolWithAggregatesFilter<"TenantSettings"> | boolean
    notifyOnOverdue?: BoolWithAggregatesFilter<"TenantSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TenantSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenantSettings"> | Date | string
  }

  export type UsageMetricsWhereInput = {
    AND?: UsageMetricsWhereInput | UsageMetricsWhereInput[]
    OR?: UsageMetricsWhereInput[]
    NOT?: UsageMetricsWhereInput | UsageMetricsWhereInput[]
    id?: StringFilter<"UsageMetrics"> | string
    tenantId?: StringFilter<"UsageMetrics"> | string
    invoicesCreated?: IntFilter<"UsageMetrics"> | number
    remindersSent?: IntFilter<"UsageMetrics"> | number
    clientsAdded?: IntFilter<"UsageMetrics"> | number
    paymentsReceived?: IntFilter<"UsageMetrics"> | number
    month?: IntFilter<"UsageMetrics"> | number
    year?: IntFilter<"UsageMetrics"> | number
    createdAt?: DateTimeFilter<"UsageMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"UsageMetrics"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type UsageMetricsOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type UsageMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_month_year?: UsageMetricsTenantIdMonthYearCompoundUniqueInput
    AND?: UsageMetricsWhereInput | UsageMetricsWhereInput[]
    OR?: UsageMetricsWhereInput[]
    NOT?: UsageMetricsWhereInput | UsageMetricsWhereInput[]
    tenantId?: StringFilter<"UsageMetrics"> | string
    invoicesCreated?: IntFilter<"UsageMetrics"> | number
    remindersSent?: IntFilter<"UsageMetrics"> | number
    clientsAdded?: IntFilter<"UsageMetrics"> | number
    paymentsReceived?: IntFilter<"UsageMetrics"> | number
    month?: IntFilter<"UsageMetrics"> | number
    year?: IntFilter<"UsageMetrics"> | number
    createdAt?: DateTimeFilter<"UsageMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"UsageMetrics"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenantId_month_year">

  export type UsageMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsageMetricsCountOrderByAggregateInput
    _avg?: UsageMetricsAvgOrderByAggregateInput
    _max?: UsageMetricsMaxOrderByAggregateInput
    _min?: UsageMetricsMinOrderByAggregateInput
    _sum?: UsageMetricsSumOrderByAggregateInput
  }

  export type UsageMetricsScalarWhereWithAggregatesInput = {
    AND?: UsageMetricsScalarWhereWithAggregatesInput | UsageMetricsScalarWhereWithAggregatesInput[]
    OR?: UsageMetricsScalarWhereWithAggregatesInput[]
    NOT?: UsageMetricsScalarWhereWithAggregatesInput | UsageMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageMetrics"> | string
    tenantId?: StringWithAggregatesFilter<"UsageMetrics"> | string
    invoicesCreated?: IntWithAggregatesFilter<"UsageMetrics"> | number
    remindersSent?: IntWithAggregatesFilter<"UsageMetrics"> | number
    clientsAdded?: IntWithAggregatesFilter<"UsageMetrics"> | number
    paymentsReceived?: IntWithAggregatesFilter<"UsageMetrics"> | number
    month?: IntWithAggregatesFilter<"UsageMetrics"> | number
    year?: IntWithAggregatesFilter<"UsageMetrics"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsageMetrics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsageMetrics"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    tenantId?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    gstin?: StringNullableFilter<"Client"> | string | null
    pan?: StringNullableFilter<"Client"> | string | null
    billingStreet?: StringNullableFilter<"Client"> | string | null
    billingCity?: StringNullableFilter<"Client"> | string | null
    billingState?: StringNullableFilter<"Client"> | string | null
    billingCountry?: StringNullableFilter<"Client"> | string | null
    billingPostalCode?: StringNullableFilter<"Client"> | string | null
    shippingStreet?: StringNullableFilter<"Client"> | string | null
    shippingCity?: StringNullableFilter<"Client"> | string | null
    shippingState?: StringNullableFilter<"Client"> | string | null
    shippingCountry?: StringNullableFilter<"Client"> | string | null
    shippingPostalCode?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    tags?: StringNullableListFilter<"Client">
    paymentTerms?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    invoices?: InvoiceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    gstin?: SortOrderInput | SortOrder
    pan?: SortOrderInput | SortOrder
    billingStreet?: SortOrderInput | SortOrder
    billingCity?: SortOrderInput | SortOrder
    billingState?: SortOrderInput | SortOrder
    billingCountry?: SortOrderInput | SortOrder
    billingPostalCode?: SortOrderInput | SortOrder
    shippingStreet?: SortOrderInput | SortOrder
    shippingCity?: SortOrderInput | SortOrder
    shippingState?: SortOrderInput | SortOrder
    shippingCountry?: SortOrderInput | SortOrder
    shippingPostalCode?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    tenantId?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    gstin?: StringNullableFilter<"Client"> | string | null
    pan?: StringNullableFilter<"Client"> | string | null
    billingStreet?: StringNullableFilter<"Client"> | string | null
    billingCity?: StringNullableFilter<"Client"> | string | null
    billingState?: StringNullableFilter<"Client"> | string | null
    billingCountry?: StringNullableFilter<"Client"> | string | null
    billingPostalCode?: StringNullableFilter<"Client"> | string | null
    shippingStreet?: StringNullableFilter<"Client"> | string | null
    shippingCity?: StringNullableFilter<"Client"> | string | null
    shippingState?: StringNullableFilter<"Client"> | string | null
    shippingCountry?: StringNullableFilter<"Client"> | string | null
    shippingPostalCode?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    tags?: StringNullableListFilter<"Client">
    paymentTerms?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    invoices?: InvoiceListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    gstin?: SortOrderInput | SortOrder
    pan?: SortOrderInput | SortOrder
    billingStreet?: SortOrderInput | SortOrder
    billingCity?: SortOrderInput | SortOrder
    billingState?: SortOrderInput | SortOrder
    billingCountry?: SortOrderInput | SortOrder
    billingPostalCode?: SortOrderInput | SortOrder
    shippingStreet?: SortOrderInput | SortOrder
    shippingCity?: SortOrderInput | SortOrder
    shippingState?: SortOrderInput | SortOrder
    shippingCountry?: SortOrderInput | SortOrder
    shippingPostalCode?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    tenantId?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    gstin?: StringNullableWithAggregatesFilter<"Client"> | string | null
    pan?: StringNullableWithAggregatesFilter<"Client"> | string | null
    billingStreet?: StringNullableWithAggregatesFilter<"Client"> | string | null
    billingCity?: StringNullableWithAggregatesFilter<"Client"> | string | null
    billingState?: StringNullableWithAggregatesFilter<"Client"> | string | null
    billingCountry?: StringNullableWithAggregatesFilter<"Client"> | string | null
    billingPostalCode?: StringNullableWithAggregatesFilter<"Client"> | string | null
    shippingStreet?: StringNullableWithAggregatesFilter<"Client"> | string | null
    shippingCity?: StringNullableWithAggregatesFilter<"Client"> | string | null
    shippingState?: StringNullableWithAggregatesFilter<"Client"> | string | null
    shippingCountry?: StringNullableWithAggregatesFilter<"Client"> | string | null
    shippingPostalCode?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    tags?: StringNullableListFilter<"Client">
    paymentTerms?: IntWithAggregatesFilter<"Client"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    tenantId?: StringFilter<"Invoice"> | string
    clientId?: StringFilter<"Invoice"> | string
    createdById?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    issuedDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    razorpayOrderId?: StringNullableFilter<"Invoice"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Invoice"> | string | null
    paymentLink?: StringNullableFilter<"Invoice"> | string | null
    paymentLinkExpiry?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    notes?: StringNullableFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableFilter<"Invoice"> | string | null
    lineItems?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatNullableFilter<"Invoice"> | number | null
    taxAmount?: FloatNullableFilter<"Invoice"> | number | null
    discountAmount?: FloatNullableFilter<"Invoice"> | number | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    payments?: PaymentListRelationFilter
    reminderLogs?: ReminderLogListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    issuedDate?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    paymentLink?: SortOrderInput | SortOrder
    paymentLinkExpiry?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    termsAndConditions?: SortOrderInput | SortOrder
    lineItems?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    taxAmount?: SortOrderInput | SortOrder
    discountAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    reminderLogs?: ReminderLogOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_invoiceNumber?: InvoiceTenantIdInvoiceNumberCompoundUniqueInput
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    tenantId?: StringFilter<"Invoice"> | string
    clientId?: StringFilter<"Invoice"> | string
    createdById?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    issuedDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    razorpayOrderId?: StringNullableFilter<"Invoice"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Invoice"> | string | null
    paymentLink?: StringNullableFilter<"Invoice"> | string | null
    paymentLinkExpiry?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    notes?: StringNullableFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableFilter<"Invoice"> | string | null
    lineItems?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatNullableFilter<"Invoice"> | number | null
    taxAmount?: FloatNullableFilter<"Invoice"> | number | null
    discountAmount?: FloatNullableFilter<"Invoice"> | number | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    payments?: PaymentListRelationFilter
    reminderLogs?: ReminderLogListRelationFilter
  }, "id" | "tenantId_invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    issuedDate?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    paymentLink?: SortOrderInput | SortOrder
    paymentLinkExpiry?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    termsAndConditions?: SortOrderInput | SortOrder
    lineItems?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    taxAmount?: SortOrderInput | SortOrder
    discountAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    tenantId?: StringWithAggregatesFilter<"Invoice"> | string
    clientId?: StringWithAggregatesFilter<"Invoice"> | string
    createdById?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    issuedDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    paymentLink?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    paymentLinkExpiry?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    lineItems?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    subtotal?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    taxAmount?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    discountAmount?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    provider?: EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableFilter<"Payment"> | string | null
    providerOrderId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    metadata?: StringNullableFilter<"Payment"> | string | null
    refundAmount?: FloatNullableFilter<"Payment"> | number | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrderInput | SortOrder
    providerOrderId?: SortOrderInput | SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    refundAmount?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    refundReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    invoiceId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    provider?: EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableFilter<"Payment"> | string | null
    providerOrderId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    metadata?: StringNullableFilter<"Payment"> | string | null
    refundAmount?: FloatNullableFilter<"Payment"> | number | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrderInput | SortOrder
    providerOrderId?: SortOrderInput | SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    refundAmount?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    refundReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    invoiceId?: StringWithAggregatesFilter<"Payment"> | string
    tenantId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    provider?: EnumPaymentProviderWithAggregatesFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    providerOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundAmount?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ReminderLogWhereInput = {
    AND?: ReminderLogWhereInput | ReminderLogWhereInput[]
    OR?: ReminderLogWhereInput[]
    NOT?: ReminderLogWhereInput | ReminderLogWhereInput[]
    id?: StringFilter<"ReminderLog"> | string
    invoiceId?: StringFilter<"ReminderLog"> | string
    tenantId?: StringFilter<"ReminderLog"> | string
    type?: StringFilter<"ReminderLog"> | string
    method?: StringFilter<"ReminderLog"> | string
    scheduledAt?: DateTimeFilter<"ReminderLog"> | Date | string
    sentAt?: DateTimeNullableFilter<"ReminderLog"> | Date | string | null
    status?: StringFilter<"ReminderLog"> | string
    attempt?: IntFilter<"ReminderLog"> | number
    maxAttempts?: IntFilter<"ReminderLog"> | number
    errorMessage?: StringNullableFilter<"ReminderLog"> | string | null
    providerResponse?: StringNullableFilter<"ReminderLog"> | string | null
    recipient?: StringNullableFilter<"ReminderLog"> | string | null
    createdAt?: DateTimeFilter<"ReminderLog"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type ReminderLogOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    status?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    recipient?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type ReminderLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderLogWhereInput | ReminderLogWhereInput[]
    OR?: ReminderLogWhereInput[]
    NOT?: ReminderLogWhereInput | ReminderLogWhereInput[]
    invoiceId?: StringFilter<"ReminderLog"> | string
    tenantId?: StringFilter<"ReminderLog"> | string
    type?: StringFilter<"ReminderLog"> | string
    method?: StringFilter<"ReminderLog"> | string
    scheduledAt?: DateTimeFilter<"ReminderLog"> | Date | string
    sentAt?: DateTimeNullableFilter<"ReminderLog"> | Date | string | null
    status?: StringFilter<"ReminderLog"> | string
    attempt?: IntFilter<"ReminderLog"> | number
    maxAttempts?: IntFilter<"ReminderLog"> | number
    errorMessage?: StringNullableFilter<"ReminderLog"> | string | null
    providerResponse?: StringNullableFilter<"ReminderLog"> | string | null
    recipient?: StringNullableFilter<"ReminderLog"> | string | null
    createdAt?: DateTimeFilter<"ReminderLog"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type ReminderLogOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    status?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    recipient?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReminderLogCountOrderByAggregateInput
    _avg?: ReminderLogAvgOrderByAggregateInput
    _max?: ReminderLogMaxOrderByAggregateInput
    _min?: ReminderLogMinOrderByAggregateInput
    _sum?: ReminderLogSumOrderByAggregateInput
  }

  export type ReminderLogScalarWhereWithAggregatesInput = {
    AND?: ReminderLogScalarWhereWithAggregatesInput | ReminderLogScalarWhereWithAggregatesInput[]
    OR?: ReminderLogScalarWhereWithAggregatesInput[]
    NOT?: ReminderLogScalarWhereWithAggregatesInput | ReminderLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReminderLog"> | string
    invoiceId?: StringWithAggregatesFilter<"ReminderLog"> | string
    tenantId?: StringWithAggregatesFilter<"ReminderLog"> | string
    type?: StringWithAggregatesFilter<"ReminderLog"> | string
    method?: StringWithAggregatesFilter<"ReminderLog"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"ReminderLog"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"ReminderLog"> | Date | string | null
    status?: StringWithAggregatesFilter<"ReminderLog"> | string
    attempt?: IntWithAggregatesFilter<"ReminderLog"> | number
    maxAttempts?: IntWithAggregatesFilter<"ReminderLog"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"ReminderLog"> | string | null
    providerResponse?: StringNullableWithAggregatesFilter<"ReminderLog"> | string | null
    recipient?: StringNullableWithAggregatesFilter<"ReminderLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReminderLog"> | Date | string
  }

  export type NotificationLogWhereInput = {
    AND?: NotificationLogWhereInput | NotificationLogWhereInput[]
    OR?: NotificationLogWhereInput[]
    NOT?: NotificationLogWhereInput | NotificationLogWhereInput[]
    id?: StringFilter<"NotificationLog"> | string
    tenantId?: StringFilter<"NotificationLog"> | string
    type?: StringFilter<"NotificationLog"> | string
    channel?: StringFilter<"NotificationLog"> | string
    recipient?: StringFilter<"NotificationLog"> | string
    subject?: StringNullableFilter<"NotificationLog"> | string | null
    content?: StringNullableFilter<"NotificationLog"> | string | null
    templateId?: StringNullableFilter<"NotificationLog"> | string | null
    templateData?: StringNullableFilter<"NotificationLog"> | string | null
    status?: StringFilter<"NotificationLog"> | string
    sentAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"NotificationLog"> | string | null
    providerResponse?: StringNullableFilter<"NotificationLog"> | string | null
    createdAt?: DateTimeFilter<"NotificationLog"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type NotificationLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    recipient?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    templateData?: SortOrderInput | SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type NotificationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationLogWhereInput | NotificationLogWhereInput[]
    OR?: NotificationLogWhereInput[]
    NOT?: NotificationLogWhereInput | NotificationLogWhereInput[]
    tenantId?: StringFilter<"NotificationLog"> | string
    type?: StringFilter<"NotificationLog"> | string
    channel?: StringFilter<"NotificationLog"> | string
    recipient?: StringFilter<"NotificationLog"> | string
    subject?: StringNullableFilter<"NotificationLog"> | string | null
    content?: StringNullableFilter<"NotificationLog"> | string | null
    templateId?: StringNullableFilter<"NotificationLog"> | string | null
    templateData?: StringNullableFilter<"NotificationLog"> | string | null
    status?: StringFilter<"NotificationLog"> | string
    sentAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"NotificationLog"> | string | null
    providerResponse?: StringNullableFilter<"NotificationLog"> | string | null
    createdAt?: DateTimeFilter<"NotificationLog"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type NotificationLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    recipient?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    templateData?: SortOrderInput | SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationLogCountOrderByAggregateInput
    _max?: NotificationLogMaxOrderByAggregateInput
    _min?: NotificationLogMinOrderByAggregateInput
  }

  export type NotificationLogScalarWhereWithAggregatesInput = {
    AND?: NotificationLogScalarWhereWithAggregatesInput | NotificationLogScalarWhereWithAggregatesInput[]
    OR?: NotificationLogScalarWhereWithAggregatesInput[]
    NOT?: NotificationLogScalarWhereWithAggregatesInput | NotificationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationLog"> | string
    tenantId?: StringWithAggregatesFilter<"NotificationLog"> | string
    type?: StringWithAggregatesFilter<"NotificationLog"> | string
    channel?: StringWithAggregatesFilter<"NotificationLog"> | string
    recipient?: StringWithAggregatesFilter<"NotificationLog"> | string
    subject?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    content?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    templateId?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    templateData?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    status?: StringWithAggregatesFilter<"NotificationLog"> | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"NotificationLog"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"NotificationLog"> | Date | string | null
    openedAt?: DateTimeNullableWithAggregatesFilter<"NotificationLog"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    providerResponse?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationLog"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    id?: string
    userId: string
    role?: $Enums.TenantRole
    invitedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    userId: string
    tenantId: string
    role?: $Enums.TenantRole
    invitedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyInput = {
    id?: string
    userId: string
    tenantId: string
    role?: $Enums.TenantRole
    invitedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    razorpaySubscriptionId?: string | null
    razorpayCustomerId?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    tenantId: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    razorpaySubscriptionId?: string | null
    razorpayCustomerId?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    tenantId: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    razorpaySubscriptionId?: string | null
    razorpayCustomerId?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantSettingsCreateInput = {
    id?: string
    reminderIntervals?: string
    defaultReminderMethod?: string
    whatsappTemplate?: string | null
    emailTemplate?: string | null
    smsTemplate?: string | null
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: number
    businessEndHour?: number
    companyLogoUrl?: string | null
    primaryColor?: string | null
    accentColor?: string | null
    customDomain?: string | null
    defaultPaymentTerms?: number
    lateFeePercentage?: number | null
    invoicePrefix?: string
    nextInvoiceNumber?: number
    defaultTaxRate?: number | null
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutSettingsInput
  }

  export type TenantSettingsUncheckedCreateInput = {
    id?: string
    tenantId: string
    reminderIntervals?: string
    defaultReminderMethod?: string
    whatsappTemplate?: string | null
    emailTemplate?: string | null
    smsTemplate?: string | null
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: number
    businessEndHour?: number
    companyLogoUrl?: string | null
    primaryColor?: string | null
    accentColor?: string | null
    customDomain?: string | null
    defaultPaymentTerms?: number
    lateFeePercentage?: number | null
    invoicePrefix?: string
    nextInvoiceNumber?: number
    defaultTaxRate?: number | null
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderIntervals?: StringFieldUpdateOperationsInput | string
    defaultReminderMethod?: StringFieldUpdateOperationsInput | string
    whatsappTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    emailTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    smsTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    businessHoursOnly?: BoolFieldUpdateOperationsInput | boolean
    skipWeekends?: BoolFieldUpdateOperationsInput | boolean
    businessStartHour?: IntFieldUpdateOperationsInput | number
    businessEndHour?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentTerms?: IntFieldUpdateOperationsInput | number
    lateFeePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    nextInvoiceNumber?: IntFieldUpdateOperationsInput | number
    defaultTaxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    notifyOnPayment?: BoolFieldUpdateOperationsInput | boolean
    notifyOnOverdue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type TenantSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    reminderIntervals?: StringFieldUpdateOperationsInput | string
    defaultReminderMethod?: StringFieldUpdateOperationsInput | string
    whatsappTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    emailTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    smsTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    businessHoursOnly?: BoolFieldUpdateOperationsInput | boolean
    skipWeekends?: BoolFieldUpdateOperationsInput | boolean
    businessStartHour?: IntFieldUpdateOperationsInput | number
    businessEndHour?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentTerms?: IntFieldUpdateOperationsInput | number
    lateFeePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    nextInvoiceNumber?: IntFieldUpdateOperationsInput | number
    defaultTaxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    notifyOnPayment?: BoolFieldUpdateOperationsInput | boolean
    notifyOnOverdue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantSettingsCreateManyInput = {
    id?: string
    tenantId: string
    reminderIntervals?: string
    defaultReminderMethod?: string
    whatsappTemplate?: string | null
    emailTemplate?: string | null
    smsTemplate?: string | null
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: number
    businessEndHour?: number
    companyLogoUrl?: string | null
    primaryColor?: string | null
    accentColor?: string | null
    customDomain?: string | null
    defaultPaymentTerms?: number
    lateFeePercentage?: number | null
    invoicePrefix?: string
    nextInvoiceNumber?: number
    defaultTaxRate?: number | null
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderIntervals?: StringFieldUpdateOperationsInput | string
    defaultReminderMethod?: StringFieldUpdateOperationsInput | string
    whatsappTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    emailTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    smsTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    businessHoursOnly?: BoolFieldUpdateOperationsInput | boolean
    skipWeekends?: BoolFieldUpdateOperationsInput | boolean
    businessStartHour?: IntFieldUpdateOperationsInput | number
    businessEndHour?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentTerms?: IntFieldUpdateOperationsInput | number
    lateFeePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    nextInvoiceNumber?: IntFieldUpdateOperationsInput | number
    defaultTaxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    notifyOnPayment?: BoolFieldUpdateOperationsInput | boolean
    notifyOnOverdue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    reminderIntervals?: StringFieldUpdateOperationsInput | string
    defaultReminderMethod?: StringFieldUpdateOperationsInput | string
    whatsappTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    emailTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    smsTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    businessHoursOnly?: BoolFieldUpdateOperationsInput | boolean
    skipWeekends?: BoolFieldUpdateOperationsInput | boolean
    businessStartHour?: IntFieldUpdateOperationsInput | number
    businessEndHour?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentTerms?: IntFieldUpdateOperationsInput | number
    lateFeePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    nextInvoiceNumber?: IntFieldUpdateOperationsInput | number
    defaultTaxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    notifyOnPayment?: BoolFieldUpdateOperationsInput | boolean
    notifyOnOverdue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsCreateInput = {
    id?: string
    invoicesCreated?: number
    remindersSent?: number
    clientsAdded?: number
    paymentsReceived?: number
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsageMetricsInput
  }

  export type UsageMetricsUncheckedCreateInput = {
    id?: string
    tenantId: string
    invoicesCreated?: number
    remindersSent?: number
    clientsAdded?: number
    paymentsReceived?: number
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsageMetricsNestedInput
  }

  export type UsageMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsCreateManyInput = {
    id?: string
    tenantId: string
    invoicesCreated?: number
    remindersSent?: number
    clientsAdded?: number
    paymentsReceived?: number
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClientsInput
    invoices?: InvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClientsNestedInput
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    client: ClientCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    tenantId: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    tenantId: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    invoiceId: string
    tenantId: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    invoiceId: string
    tenantId: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogCreateInput = {
    id?: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutReminderLogsInput
    tenant: TenantCreateNestedOneWithoutReminderLogsInput
  }

  export type ReminderLogUncheckedCreateInput = {
    id?: string
    invoiceId: string
    tenantId: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
  }

  export type ReminderLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutReminderLogsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutReminderLogsNestedInput
  }

  export type ReminderLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogCreateManyInput = {
    id?: string
    invoiceId: string
    tenantId: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
  }

  export type ReminderLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogCreateInput = {
    id?: string
    type: string
    channel: string
    recipient: string
    subject?: string | null
    content?: string | null
    templateId?: string | null
    templateData?: string | null
    status?: string
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    errorMessage?: string | null
    providerResponse?: string | null
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutNotificationLogsInput
  }

  export type NotificationLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    type: string
    channel: string
    recipient: string
    subject?: string | null
    content?: string | null
    templateId?: string | null
    templateData?: string | null
    status?: string
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    errorMessage?: string | null
    providerResponse?: string | null
    createdAt?: Date | string
  }

  export type NotificationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutNotificationLogsNestedInput
  }

  export type NotificationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogCreateManyInput = {
    id?: string
    tenantId: string
    type: string
    channel: string
    recipient: string
    subject?: string | null
    content?: string | null
    templateId?: string | null
    templateData?: string | null
    status?: string
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    errorMessage?: string | null
    providerResponse?: string | null
    createdAt?: Date | string
  }

  export type NotificationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type SubscriptionNullableRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type TenantSettingsNullableRelationFilter = {
    is?: TenantSettingsWhereInput | null
    isNot?: TenantSettingsWhereInput | null
  }

  export type UsageMetricsListRelationFilter = {
    every?: UsageMetricsWhereInput
    some?: UsageMetricsWhereInput
    none?: UsageMetricsWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ReminderLogListRelationFilter = {
    every?: ReminderLogWhereInput
    some?: ReminderLogWhereInput
    none?: ReminderLogWhereInput
  }

  export type NotificationLogListRelationFilter = {
    every?: NotificationLogWhereInput
    some?: NotificationLogWhereInput
    none?: NotificationLogWhereInput
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageMetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
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

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumTenantRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantRole | EnumTenantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantRoleFilter<$PrismaModel> | $Enums.TenantRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembershipUserIdTenantIdCompoundUniqueInput = {
    userId: string
    tenantId: string
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTenantRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantRole | EnumTenantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantRoleWithAggregatesFilter<$PrismaModel> | $Enums.TenantRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantRoleFilter<$PrismaModel>
    _max?: NestedEnumTenantRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubscriptionId?: SortOrder
    razorpayCustomerId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    cancelledAt?: SortOrder
    cancellationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubscriptionId?: SortOrder
    razorpayCustomerId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    cancelledAt?: SortOrder
    cancellationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubscriptionId?: SortOrder
    razorpayCustomerId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    cancelledAt?: SortOrder
    cancellationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TenantSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    reminderIntervals?: SortOrder
    defaultReminderMethod?: SortOrder
    whatsappTemplate?: SortOrder
    emailTemplate?: SortOrder
    smsTemplate?: SortOrder
    businessHoursOnly?: SortOrder
    skipWeekends?: SortOrder
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    companyLogoUrl?: SortOrder
    primaryColor?: SortOrder
    accentColor?: SortOrder
    customDomain?: SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrder
    invoicePrefix?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrder
    notifyOnPayment?: SortOrder
    notifyOnOverdue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSettingsAvgOrderByAggregateInput = {
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrder
  }

  export type TenantSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    reminderIntervals?: SortOrder
    defaultReminderMethod?: SortOrder
    whatsappTemplate?: SortOrder
    emailTemplate?: SortOrder
    smsTemplate?: SortOrder
    businessHoursOnly?: SortOrder
    skipWeekends?: SortOrder
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    companyLogoUrl?: SortOrder
    primaryColor?: SortOrder
    accentColor?: SortOrder
    customDomain?: SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrder
    invoicePrefix?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrder
    notifyOnPayment?: SortOrder
    notifyOnOverdue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    reminderIntervals?: SortOrder
    defaultReminderMethod?: SortOrder
    whatsappTemplate?: SortOrder
    emailTemplate?: SortOrder
    smsTemplate?: SortOrder
    businessHoursOnly?: SortOrder
    skipWeekends?: SortOrder
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    companyLogoUrl?: SortOrder
    primaryColor?: SortOrder
    accentColor?: SortOrder
    customDomain?: SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrder
    invoicePrefix?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrder
    notifyOnPayment?: SortOrder
    notifyOnOverdue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSettingsSumOrderByAggregateInput = {
    businessStartHour?: SortOrder
    businessEndHour?: SortOrder
    defaultPaymentTerms?: SortOrder
    lateFeePercentage?: SortOrder
    nextInvoiceNumber?: SortOrder
    defaultTaxRate?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UsageMetricsTenantIdMonthYearCompoundUniqueInput = {
    tenantId: string
    month: number
    year: number
  }

  export type UsageMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageMetricsAvgOrderByAggregateInput = {
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type UsageMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageMetricsSumOrderByAggregateInput = {
    invoicesCreated?: SortOrder
    remindersSent?: SortOrder
    clientsAdded?: SortOrder
    paymentsReceived?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gstin?: SortOrder
    pan?: SortOrder
    billingStreet?: SortOrder
    billingCity?: SortOrder
    billingState?: SortOrder
    billingCountry?: SortOrder
    billingPostalCode?: SortOrder
    shippingStreet?: SortOrder
    shippingCity?: SortOrder
    shippingState?: SortOrder
    shippingCountry?: SortOrder
    shippingPostalCode?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    paymentTerms?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gstin?: SortOrder
    pan?: SortOrder
    billingStreet?: SortOrder
    billingCity?: SortOrder
    billingState?: SortOrder
    billingCountry?: SortOrder
    billingPostalCode?: SortOrder
    shippingStreet?: SortOrder
    shippingCity?: SortOrder
    shippingState?: SortOrder
    shippingCountry?: SortOrder
    shippingPostalCode?: SortOrder
    notes?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gstin?: SortOrder
    pan?: SortOrder
    billingStreet?: SortOrder
    billingCity?: SortOrder
    billingState?: SortOrder
    billingCountry?: SortOrder
    billingPostalCode?: SortOrder
    shippingStreet?: SortOrder
    shippingCity?: SortOrder
    shippingState?: SortOrder
    shippingCountry?: SortOrder
    shippingPostalCode?: SortOrder
    notes?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    paymentTerms?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type InvoiceTenantIdInvoiceNumberCompoundUniqueInput = {
    tenantId: string
    invoiceNumber: string
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    issuedDate?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    paymentLink?: SortOrder
    paymentLinkExpiry?: SortOrder
    pdfUrl?: SortOrder
    notes?: SortOrder
    termsAndConditions?: SortOrder
    lineItems?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    issuedDate?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    paymentLink?: SortOrder
    paymentLinkExpiry?: SortOrder
    pdfUrl?: SortOrder
    notes?: SortOrder
    termsAndConditions?: SortOrder
    lineItems?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    issuedDate?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    paymentLink?: SortOrder
    paymentLinkExpiry?: SortOrder
    pdfUrl?: SortOrder
    notes?: SortOrder
    termsAndConditions?: SortOrder
    lineItems?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type EnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrder
    providerOrderId?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    failureReason?: SortOrder
    metadata?: SortOrder
    refundAmount?: SortOrder
    refundedAt?: SortOrder
    refundReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    refundAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrder
    providerOrderId?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    failureReason?: SortOrder
    metadata?: SortOrder
    refundAmount?: SortOrder
    refundedAt?: SortOrder
    refundReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrder
    providerOrderId?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    failureReason?: SortOrder
    metadata?: SortOrder
    refundAmount?: SortOrder
    refundedAt?: SortOrder
    refundReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    refundAmount?: SortOrder
  }

  export type EnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ReminderLogCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    errorMessage?: SortOrder
    providerResponse?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderLogAvgOrderByAggregateInput = {
    attempt?: SortOrder
    maxAttempts?: SortOrder
  }

  export type ReminderLogMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    errorMessage?: SortOrder
    providerResponse?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderLogMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    errorMessage?: SortOrder
    providerResponse?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderLogSumOrderByAggregateInput = {
    attempt?: SortOrder
    maxAttempts?: SortOrder
  }

  export type NotificationLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    templateId?: SortOrder
    templateData?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    openedAt?: SortOrder
    errorMessage?: SortOrder
    providerResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    templateId?: SortOrder
    templateData?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    openedAt?: SortOrder
    errorMessage?: SortOrder
    providerResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    templateId?: SortOrder
    templateData?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    openedAt?: SortOrder
    errorMessage?: SortOrder
    providerResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type MembershipCreateNestedManyWithoutTenantInput = {
    create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
    createMany?: MembershipCreateManyTenantInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutTenantInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type TenantSettingsCreateNestedOneWithoutTenantInput = {
    create?: XOR<TenantSettingsCreateWithoutTenantInput, TenantSettingsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantSettingsCreateOrConnectWithoutTenantInput
    connect?: TenantSettingsWhereUniqueInput
  }

  export type UsageMetricsCreateNestedManyWithoutTenantInput = {
    create?: XOR<UsageMetricsCreateWithoutTenantInput, UsageMetricsUncheckedCreateWithoutTenantInput> | UsageMetricsCreateWithoutTenantInput[] | UsageMetricsUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UsageMetricsCreateOrConnectWithoutTenantInput | UsageMetricsCreateOrConnectWithoutTenantInput[]
    createMany?: UsageMetricsCreateManyTenantInputEnvelope
    connect?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutTenantInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReminderLogCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReminderLogCreateWithoutTenantInput, ReminderLogUncheckedCreateWithoutTenantInput> | ReminderLogCreateWithoutTenantInput[] | ReminderLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutTenantInput | ReminderLogCreateOrConnectWithoutTenantInput[]
    createMany?: ReminderLogCreateManyTenantInputEnvelope
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
  }

  export type NotificationLogCreateNestedManyWithoutTenantInput = {
    create?: XOR<NotificationLogCreateWithoutTenantInput, NotificationLogUncheckedCreateWithoutTenantInput> | NotificationLogCreateWithoutTenantInput[] | NotificationLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutTenantInput | NotificationLogCreateOrConnectWithoutTenantInput[]
    createMany?: NotificationLogCreateManyTenantInputEnvelope
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
    createMany?: MembershipCreateManyTenantInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type TenantSettingsUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<TenantSettingsCreateWithoutTenantInput, TenantSettingsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantSettingsCreateOrConnectWithoutTenantInput
    connect?: TenantSettingsWhereUniqueInput
  }

  export type UsageMetricsUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UsageMetricsCreateWithoutTenantInput, UsageMetricsUncheckedCreateWithoutTenantInput> | UsageMetricsCreateWithoutTenantInput[] | UsageMetricsUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UsageMetricsCreateOrConnectWithoutTenantInput | UsageMetricsCreateOrConnectWithoutTenantInput[]
    createMany?: UsageMetricsCreateManyTenantInputEnvelope
    connect?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReminderLogUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReminderLogCreateWithoutTenantInput, ReminderLogUncheckedCreateWithoutTenantInput> | ReminderLogCreateWithoutTenantInput[] | ReminderLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutTenantInput | ReminderLogCreateOrConnectWithoutTenantInput[]
    createMany?: ReminderLogCreateManyTenantInputEnvelope
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
  }

  export type NotificationLogUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<NotificationLogCreateWithoutTenantInput, NotificationLogUncheckedCreateWithoutTenantInput> | NotificationLogCreateWithoutTenantInput[] | NotificationLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutTenantInput | NotificationLogCreateOrConnectWithoutTenantInput[]
    createMany?: NotificationLogCreateManyTenantInputEnvelope
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MembershipUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutTenantInput | MembershipUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MembershipCreateManyTenantInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutTenantInput | MembershipUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutTenantInput | MembershipUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutTenantNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    upsert?: SubscriptionUpsertWithoutTenantInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTenantInput, SubscriptionUpdateWithoutTenantInput>, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type TenantSettingsUpdateOneWithoutTenantNestedInput = {
    create?: XOR<TenantSettingsCreateWithoutTenantInput, TenantSettingsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantSettingsCreateOrConnectWithoutTenantInput
    upsert?: TenantSettingsUpsertWithoutTenantInput
    disconnect?: TenantSettingsWhereInput | boolean
    delete?: TenantSettingsWhereInput | boolean
    connect?: TenantSettingsWhereUniqueInput
    update?: XOR<XOR<TenantSettingsUpdateToOneWithWhereWithoutTenantInput, TenantSettingsUpdateWithoutTenantInput>, TenantSettingsUncheckedUpdateWithoutTenantInput>
  }

  export type UsageMetricsUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UsageMetricsCreateWithoutTenantInput, UsageMetricsUncheckedCreateWithoutTenantInput> | UsageMetricsCreateWithoutTenantInput[] | UsageMetricsUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UsageMetricsCreateOrConnectWithoutTenantInput | UsageMetricsCreateOrConnectWithoutTenantInput[]
    upsert?: UsageMetricsUpsertWithWhereUniqueWithoutTenantInput | UsageMetricsUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UsageMetricsCreateManyTenantInputEnvelope
    set?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    disconnect?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    delete?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    connect?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    update?: UsageMetricsUpdateWithWhereUniqueWithoutTenantInput | UsageMetricsUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UsageMetricsUpdateManyWithWhereWithoutTenantInput | UsageMetricsUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UsageMetricsScalarWhereInput | UsageMetricsScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTenantInput | ClientUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTenantInput | ClientUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTenantInput | ClientUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutTenantInput | InvoiceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutTenantInput | InvoiceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutTenantInput | InvoiceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReminderLogUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReminderLogCreateWithoutTenantInput, ReminderLogUncheckedCreateWithoutTenantInput> | ReminderLogCreateWithoutTenantInput[] | ReminderLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutTenantInput | ReminderLogCreateOrConnectWithoutTenantInput[]
    upsert?: ReminderLogUpsertWithWhereUniqueWithoutTenantInput | ReminderLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReminderLogCreateManyTenantInputEnvelope
    set?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    disconnect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    delete?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    update?: ReminderLogUpdateWithWhereUniqueWithoutTenantInput | ReminderLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReminderLogUpdateManyWithWhereWithoutTenantInput | ReminderLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReminderLogScalarWhereInput | ReminderLogScalarWhereInput[]
  }

  export type NotificationLogUpdateManyWithoutTenantNestedInput = {
    create?: XOR<NotificationLogCreateWithoutTenantInput, NotificationLogUncheckedCreateWithoutTenantInput> | NotificationLogCreateWithoutTenantInput[] | NotificationLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutTenantInput | NotificationLogCreateOrConnectWithoutTenantInput[]
    upsert?: NotificationLogUpsertWithWhereUniqueWithoutTenantInput | NotificationLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: NotificationLogCreateManyTenantInputEnvelope
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    disconnect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    delete?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    update?: NotificationLogUpdateWithWhereUniqueWithoutTenantInput | NotificationLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: NotificationLogUpdateManyWithWhereWithoutTenantInput | NotificationLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutTenantInput | MembershipUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MembershipCreateManyTenantInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutTenantInput | MembershipUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutTenantInput | MembershipUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    upsert?: SubscriptionUpsertWithoutTenantInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTenantInput, SubscriptionUpdateWithoutTenantInput>, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<TenantSettingsCreateWithoutTenantInput, TenantSettingsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantSettingsCreateOrConnectWithoutTenantInput
    upsert?: TenantSettingsUpsertWithoutTenantInput
    disconnect?: TenantSettingsWhereInput | boolean
    delete?: TenantSettingsWhereInput | boolean
    connect?: TenantSettingsWhereUniqueInput
    update?: XOR<XOR<TenantSettingsUpdateToOneWithWhereWithoutTenantInput, TenantSettingsUpdateWithoutTenantInput>, TenantSettingsUncheckedUpdateWithoutTenantInput>
  }

  export type UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UsageMetricsCreateWithoutTenantInput, UsageMetricsUncheckedCreateWithoutTenantInput> | UsageMetricsCreateWithoutTenantInput[] | UsageMetricsUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UsageMetricsCreateOrConnectWithoutTenantInput | UsageMetricsCreateOrConnectWithoutTenantInput[]
    upsert?: UsageMetricsUpsertWithWhereUniqueWithoutTenantInput | UsageMetricsUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UsageMetricsCreateManyTenantInputEnvelope
    set?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    disconnect?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    delete?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    connect?: UsageMetricsWhereUniqueInput | UsageMetricsWhereUniqueInput[]
    update?: UsageMetricsUpdateWithWhereUniqueWithoutTenantInput | UsageMetricsUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UsageMetricsUpdateManyWithWhereWithoutTenantInput | UsageMetricsUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UsageMetricsScalarWhereInput | UsageMetricsScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTenantInput | ClientUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTenantInput | ClientUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTenantInput | ClientUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutTenantInput | InvoiceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutTenantInput | InvoiceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutTenantInput | InvoiceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReminderLogUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReminderLogCreateWithoutTenantInput, ReminderLogUncheckedCreateWithoutTenantInput> | ReminderLogCreateWithoutTenantInput[] | ReminderLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutTenantInput | ReminderLogCreateOrConnectWithoutTenantInput[]
    upsert?: ReminderLogUpsertWithWhereUniqueWithoutTenantInput | ReminderLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReminderLogCreateManyTenantInputEnvelope
    set?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    disconnect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    delete?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    update?: ReminderLogUpdateWithWhereUniqueWithoutTenantInput | ReminderLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReminderLogUpdateManyWithWhereWithoutTenantInput | ReminderLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReminderLogScalarWhereInput | ReminderLogScalarWhereInput[]
  }

  export type NotificationLogUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<NotificationLogCreateWithoutTenantInput, NotificationLogUncheckedCreateWithoutTenantInput> | NotificationLogCreateWithoutTenantInput[] | NotificationLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutTenantInput | NotificationLogCreateOrConnectWithoutTenantInput[]
    upsert?: NotificationLogUpsertWithWhereUniqueWithoutTenantInput | NotificationLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: NotificationLogCreateManyTenantInputEnvelope
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    disconnect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    delete?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    update?: NotificationLogUpdateWithWhereUniqueWithoutTenantInput | NotificationLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: NotificationLogUpdateManyWithWhereWithoutTenantInput | NotificationLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembershipsInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumTenantRoleFieldUpdateOperationsInput = {
    set?: $Enums.TenantRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TenantUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembershipsInput
    upsert?: TenantUpsertWithoutMembershipsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMembershipsInput, TenantUpdateWithoutMembershipsInput>, TenantUncheckedUpdateWithoutMembershipsInput>
  }

  export type TenantCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput
    upsert?: TenantUpsertWithoutSubscriptionInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutSubscriptionInput, TenantUpdateWithoutSubscriptionInput>, TenantUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TenantCreateNestedOneWithoutSettingsInput = {
    create?: XOR<TenantCreateWithoutSettingsInput, TenantUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSettingsInput
    connect?: TenantWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<TenantCreateWithoutSettingsInput, TenantUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSettingsInput
    upsert?: TenantUpsertWithoutSettingsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutSettingsInput, TenantUpdateWithoutSettingsInput>, TenantUncheckedUpdateWithoutSettingsInput>
  }

  export type TenantCreateNestedOneWithoutUsageMetricsInput = {
    create?: XOR<TenantCreateWithoutUsageMetricsInput, TenantUncheckedCreateWithoutUsageMetricsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsageMetricsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutUsageMetricsNestedInput = {
    create?: XOR<TenantCreateWithoutUsageMetricsInput, TenantUncheckedCreateWithoutUsageMetricsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsageMetricsInput
    upsert?: TenantUpsertWithoutUsageMetricsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsageMetricsInput, TenantUpdateWithoutUsageMetricsInput>, TenantUncheckedUpdateWithoutUsageMetricsInput>
  }

  export type ClientCreatetagsInput = {
    set: string[]
  }

  export type TenantCreateNestedOneWithoutClientsInput = {
    create?: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientsInput
    connect?: TenantWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutClientInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ClientUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientsInput
    upsert?: TenantUpsertWithoutClientsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutClientsInput, TenantUpdateWithoutClientsInput>, TenantUncheckedUpdateWithoutClientsInput>
  }

  export type InvoiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutClientInput | InvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutClientInput | InvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutClientInput | InvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutClientInput | InvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutClientInput | InvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutClientInput | InvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInvoicesInput
    connect?: TenantWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReminderLogCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<ReminderLogCreateWithoutInvoiceInput, ReminderLogUncheckedCreateWithoutInvoiceInput> | ReminderLogCreateWithoutInvoiceInput[] | ReminderLogUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutInvoiceInput | ReminderLogCreateOrConnectWithoutInvoiceInput[]
    createMany?: ReminderLogCreateManyInvoiceInputEnvelope
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReminderLogUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<ReminderLogCreateWithoutInvoiceInput, ReminderLogUncheckedCreateWithoutInvoiceInput> | ReminderLogCreateWithoutInvoiceInput[] | ReminderLogUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutInvoiceInput | ReminderLogCreateOrConnectWithoutInvoiceInput[]
    createMany?: ReminderLogCreateManyInvoiceInputEnvelope
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type TenantUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInvoicesInput
    upsert?: TenantUpsertWithoutInvoicesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutInvoicesInput, TenantUpdateWithoutInvoicesInput>, TenantUncheckedUpdateWithoutInvoicesInput>
  }

  export type ClientUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    upsert?: ClientUpsertWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutInvoicesInput, ClientUpdateWithoutInvoicesInput>, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReminderLogUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<ReminderLogCreateWithoutInvoiceInput, ReminderLogUncheckedCreateWithoutInvoiceInput> | ReminderLogCreateWithoutInvoiceInput[] | ReminderLogUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutInvoiceInput | ReminderLogCreateOrConnectWithoutInvoiceInput[]
    upsert?: ReminderLogUpsertWithWhereUniqueWithoutInvoiceInput | ReminderLogUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: ReminderLogCreateManyInvoiceInputEnvelope
    set?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    disconnect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    delete?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    update?: ReminderLogUpdateWithWhereUniqueWithoutInvoiceInput | ReminderLogUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: ReminderLogUpdateManyWithWhereWithoutInvoiceInput | ReminderLogUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: ReminderLogScalarWhereInput | ReminderLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReminderLogUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<ReminderLogCreateWithoutInvoiceInput, ReminderLogUncheckedCreateWithoutInvoiceInput> | ReminderLogCreateWithoutInvoiceInput[] | ReminderLogUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: ReminderLogCreateOrConnectWithoutInvoiceInput | ReminderLogCreateOrConnectWithoutInvoiceInput[]
    upsert?: ReminderLogUpsertWithWhereUniqueWithoutInvoiceInput | ReminderLogUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: ReminderLogCreateManyInvoiceInputEnvelope
    set?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    disconnect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    delete?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    connect?: ReminderLogWhereUniqueInput | ReminderLogWhereUniqueInput[]
    update?: ReminderLogUpdateWithWhereUniqueWithoutInvoiceInput | ReminderLogUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: ReminderLogUpdateManyWithWhereWithoutInvoiceInput | ReminderLogUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: ReminderLogScalarWhereInput | ReminderLogScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    upsert?: TenantUpsertWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPaymentsInput, TenantUpdateWithoutPaymentsInput>, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceCreateNestedOneWithoutReminderLogsInput = {
    create?: XOR<InvoiceCreateWithoutReminderLogsInput, InvoiceUncheckedCreateWithoutReminderLogsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutReminderLogsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutReminderLogsInput = {
    create?: XOR<TenantCreateWithoutReminderLogsInput, TenantUncheckedCreateWithoutReminderLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReminderLogsInput
    connect?: TenantWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutReminderLogsNestedInput = {
    create?: XOR<InvoiceCreateWithoutReminderLogsInput, InvoiceUncheckedCreateWithoutReminderLogsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutReminderLogsInput
    upsert?: InvoiceUpsertWithoutReminderLogsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutReminderLogsInput, InvoiceUpdateWithoutReminderLogsInput>, InvoiceUncheckedUpdateWithoutReminderLogsInput>
  }

  export type TenantUpdateOneRequiredWithoutReminderLogsNestedInput = {
    create?: XOR<TenantCreateWithoutReminderLogsInput, TenantUncheckedCreateWithoutReminderLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReminderLogsInput
    upsert?: TenantUpsertWithoutReminderLogsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutReminderLogsInput, TenantUpdateWithoutReminderLogsInput>, TenantUncheckedUpdateWithoutReminderLogsInput>
  }

  export type TenantCreateNestedOneWithoutNotificationLogsInput = {
    create?: XOR<TenantCreateWithoutNotificationLogsInput, TenantUncheckedCreateWithoutNotificationLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutNotificationLogsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutNotificationLogsNestedInput = {
    create?: XOR<TenantCreateWithoutNotificationLogsInput, TenantUncheckedCreateWithoutNotificationLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutNotificationLogsInput
    upsert?: TenantUpsertWithoutNotificationLogsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutNotificationLogsInput, TenantUpdateWithoutNotificationLogsInput>, TenantUncheckedUpdateWithoutNotificationLogsInput>
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

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTenantRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantRole | EnumTenantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantRoleFilter<$PrismaModel> | $Enums.TenantRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTenantRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantRole | EnumTenantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantRole[] | ListEnumTenantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantRoleWithAggregatesFilter<$PrismaModel> | $Enums.TenantRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantRoleFilter<$PrismaModel>
    _max?: NestedEnumTenantRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type MembershipCreateWithoutTenantInput = {
    id?: string
    userId: string
    role?: $Enums.TenantRole
    invitedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    role?: $Enums.TenantRole
    invitedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutTenantInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput>
  }

  export type MembershipCreateManyTenantInputEnvelope = {
    data: MembershipCreateManyTenantInput | MembershipCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutTenantInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    razorpaySubscriptionId?: string | null
    razorpayCustomerId?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutTenantInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    razorpaySubscriptionId?: string | null
    razorpayCustomerId?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    trialEndsAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutTenantInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
  }

  export type TenantSettingsCreateWithoutTenantInput = {
    id?: string
    reminderIntervals?: string
    defaultReminderMethod?: string
    whatsappTemplate?: string | null
    emailTemplate?: string | null
    smsTemplate?: string | null
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: number
    businessEndHour?: number
    companyLogoUrl?: string | null
    primaryColor?: string | null
    accentColor?: string | null
    customDomain?: string | null
    defaultPaymentTerms?: number
    lateFeePercentage?: number | null
    invoicePrefix?: string
    nextInvoiceNumber?: number
    defaultTaxRate?: number | null
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantSettingsUncheckedCreateWithoutTenantInput = {
    id?: string
    reminderIntervals?: string
    defaultReminderMethod?: string
    whatsappTemplate?: string | null
    emailTemplate?: string | null
    smsTemplate?: string | null
    businessHoursOnly?: boolean
    skipWeekends?: boolean
    businessStartHour?: number
    businessEndHour?: number
    companyLogoUrl?: string | null
    primaryColor?: string | null
    accentColor?: string | null
    customDomain?: string | null
    defaultPaymentTerms?: number
    lateFeePercentage?: number | null
    invoicePrefix?: string
    nextInvoiceNumber?: number
    defaultTaxRate?: number | null
    notifyOnPayment?: boolean
    notifyOnOverdue?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantSettingsCreateOrConnectWithoutTenantInput = {
    where: TenantSettingsWhereUniqueInput
    create: XOR<TenantSettingsCreateWithoutTenantInput, TenantSettingsUncheckedCreateWithoutTenantInput>
  }

  export type UsageMetricsCreateWithoutTenantInput = {
    id?: string
    invoicesCreated?: number
    remindersSent?: number
    clientsAdded?: number
    paymentsReceived?: number
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMetricsUncheckedCreateWithoutTenantInput = {
    id?: string
    invoicesCreated?: number
    remindersSent?: number
    clientsAdded?: number
    paymentsReceived?: number
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMetricsCreateOrConnectWithoutTenantInput = {
    where: UsageMetricsWhereUniqueInput
    create: XOR<UsageMetricsCreateWithoutTenantInput, UsageMetricsUncheckedCreateWithoutTenantInput>
  }

  export type UsageMetricsCreateManyTenantInputEnvelope = {
    data: UsageMetricsCreateManyTenantInput | UsageMetricsCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutTenantInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTenantInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
  }

  export type ClientCreateManyTenantInputEnvelope = {
    data: ClientCreateManyTenantInput | ClientCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutTenantInput = {
    id?: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutTenantInput = {
    id?: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutTenantInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput>
  }

  export type InvoiceCreateManyTenantInputEnvelope = {
    data: InvoiceCreateManyTenantInput | InvoiceCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTenantInput = {
    id?: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTenantInput = {
    id?: string
    invoiceId: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentCreateManyTenantInputEnvelope = {
    data: PaymentCreateManyTenantInput | PaymentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ReminderLogCreateWithoutTenantInput = {
    id?: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutReminderLogsInput
  }

  export type ReminderLogUncheckedCreateWithoutTenantInput = {
    id?: string
    invoiceId: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
  }

  export type ReminderLogCreateOrConnectWithoutTenantInput = {
    where: ReminderLogWhereUniqueInput
    create: XOR<ReminderLogCreateWithoutTenantInput, ReminderLogUncheckedCreateWithoutTenantInput>
  }

  export type ReminderLogCreateManyTenantInputEnvelope = {
    data: ReminderLogCreateManyTenantInput | ReminderLogCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type NotificationLogCreateWithoutTenantInput = {
    id?: string
    type: string
    channel: string
    recipient: string
    subject?: string | null
    content?: string | null
    templateId?: string | null
    templateData?: string | null
    status?: string
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    errorMessage?: string | null
    providerResponse?: string | null
    createdAt?: Date | string
  }

  export type NotificationLogUncheckedCreateWithoutTenantInput = {
    id?: string
    type: string
    channel: string
    recipient: string
    subject?: string | null
    content?: string | null
    templateId?: string | null
    templateData?: string | null
    status?: string
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    errorMessage?: string | null
    providerResponse?: string | null
    createdAt?: Date | string
  }

  export type NotificationLogCreateOrConnectWithoutTenantInput = {
    where: NotificationLogWhereUniqueInput
    create: XOR<NotificationLogCreateWithoutTenantInput, NotificationLogUncheckedCreateWithoutTenantInput>
  }

  export type NotificationLogCreateManyTenantInputEnvelope = {
    data: NotificationLogCreateManyTenantInput | NotificationLogCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MembershipUpsertWithWhereUniqueWithoutTenantInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutTenantInput, MembershipUncheckedUpdateWithoutTenantInput>
    create: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutTenantInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutTenantInput, MembershipUncheckedUpdateWithoutTenantInput>
  }

  export type MembershipUpdateManyWithWhereWithoutTenantInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutTenantInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    tenantId?: StringFilter<"Membership"> | string
    role?: EnumTenantRoleFilter<"Membership"> | $Enums.TenantRole
    invitedBy?: StringNullableFilter<"Membership"> | string | null
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
  }

  export type SubscriptionUpsertWithoutTenantInput = {
    update: XOR<SubscriptionUpdateWithoutTenantInput, SubscriptionUncheckedUpdateWithoutTenantInput>
    create: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutTenantInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutTenantInput, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type SubscriptionUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantSettingsUpsertWithoutTenantInput = {
    update: XOR<TenantSettingsUpdateWithoutTenantInput, TenantSettingsUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantSettingsCreateWithoutTenantInput, TenantSettingsUncheckedCreateWithoutTenantInput>
    where?: TenantSettingsWhereInput
  }

  export type TenantSettingsUpdateToOneWithWhereWithoutTenantInput = {
    where?: TenantSettingsWhereInput
    data: XOR<TenantSettingsUpdateWithoutTenantInput, TenantSettingsUncheckedUpdateWithoutTenantInput>
  }

  export type TenantSettingsUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderIntervals?: StringFieldUpdateOperationsInput | string
    defaultReminderMethod?: StringFieldUpdateOperationsInput | string
    whatsappTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    emailTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    smsTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    businessHoursOnly?: BoolFieldUpdateOperationsInput | boolean
    skipWeekends?: BoolFieldUpdateOperationsInput | boolean
    businessStartHour?: IntFieldUpdateOperationsInput | number
    businessEndHour?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentTerms?: IntFieldUpdateOperationsInput | number
    lateFeePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    nextInvoiceNumber?: IntFieldUpdateOperationsInput | number
    defaultTaxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    notifyOnPayment?: BoolFieldUpdateOperationsInput | boolean
    notifyOnOverdue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantSettingsUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderIntervals?: StringFieldUpdateOperationsInput | string
    defaultReminderMethod?: StringFieldUpdateOperationsInput | string
    whatsappTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    emailTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    smsTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    businessHoursOnly?: BoolFieldUpdateOperationsInput | boolean
    skipWeekends?: BoolFieldUpdateOperationsInput | boolean
    businessStartHour?: IntFieldUpdateOperationsInput | number
    businessEndHour?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentTerms?: IntFieldUpdateOperationsInput | number
    lateFeePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    nextInvoiceNumber?: IntFieldUpdateOperationsInput | number
    defaultTaxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    notifyOnPayment?: BoolFieldUpdateOperationsInput | boolean
    notifyOnOverdue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsUpsertWithWhereUniqueWithoutTenantInput = {
    where: UsageMetricsWhereUniqueInput
    update: XOR<UsageMetricsUpdateWithoutTenantInput, UsageMetricsUncheckedUpdateWithoutTenantInput>
    create: XOR<UsageMetricsCreateWithoutTenantInput, UsageMetricsUncheckedCreateWithoutTenantInput>
  }

  export type UsageMetricsUpdateWithWhereUniqueWithoutTenantInput = {
    where: UsageMetricsWhereUniqueInput
    data: XOR<UsageMetricsUpdateWithoutTenantInput, UsageMetricsUncheckedUpdateWithoutTenantInput>
  }

  export type UsageMetricsUpdateManyWithWhereWithoutTenantInput = {
    where: UsageMetricsScalarWhereInput
    data: XOR<UsageMetricsUpdateManyMutationInput, UsageMetricsUncheckedUpdateManyWithoutTenantInput>
  }

  export type UsageMetricsScalarWhereInput = {
    AND?: UsageMetricsScalarWhereInput | UsageMetricsScalarWhereInput[]
    OR?: UsageMetricsScalarWhereInput[]
    NOT?: UsageMetricsScalarWhereInput | UsageMetricsScalarWhereInput[]
    id?: StringFilter<"UsageMetrics"> | string
    tenantId?: StringFilter<"UsageMetrics"> | string
    invoicesCreated?: IntFilter<"UsageMetrics"> | number
    remindersSent?: IntFilter<"UsageMetrics"> | number
    clientsAdded?: IntFilter<"UsageMetrics"> | number
    paymentsReceived?: IntFilter<"UsageMetrics"> | number
    month?: IntFilter<"UsageMetrics"> | number
    year?: IntFilter<"UsageMetrics"> | number
    createdAt?: DateTimeFilter<"UsageMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"UsageMetrics"> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutTenantInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutTenantInput, ClientUncheckedUpdateWithoutTenantInput>
    create: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutTenantInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutTenantInput, ClientUncheckedUpdateWithoutTenantInput>
  }

  export type ClientUpdateManyWithWhereWithoutTenantInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutTenantInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    tenantId?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    gstin?: StringNullableFilter<"Client"> | string | null
    pan?: StringNullableFilter<"Client"> | string | null
    billingStreet?: StringNullableFilter<"Client"> | string | null
    billingCity?: StringNullableFilter<"Client"> | string | null
    billingState?: StringNullableFilter<"Client"> | string | null
    billingCountry?: StringNullableFilter<"Client"> | string | null
    billingPostalCode?: StringNullableFilter<"Client"> | string | null
    shippingStreet?: StringNullableFilter<"Client"> | string | null
    shippingCity?: StringNullableFilter<"Client"> | string | null
    shippingState?: StringNullableFilter<"Client"> | string | null
    shippingCountry?: StringNullableFilter<"Client"> | string | null
    shippingPostalCode?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    tags?: StringNullableListFilter<"Client">
    paymentTerms?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutTenantInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutTenantInput, InvoiceUncheckedUpdateWithoutTenantInput>
    create: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutTenantInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutTenantInput, InvoiceUncheckedUpdateWithoutTenantInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutTenantInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutTenantInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    tenantId?: StringFilter<"Invoice"> | string
    clientId?: StringFilter<"Invoice"> | string
    createdById?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    issuedDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    razorpayOrderId?: StringNullableFilter<"Invoice"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Invoice"> | string | null
    paymentLink?: StringNullableFilter<"Invoice"> | string | null
    paymentLinkExpiry?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    notes?: StringNullableFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableFilter<"Invoice"> | string | null
    lineItems?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatNullableFilter<"Invoice"> | number | null
    taxAmount?: FloatNullableFilter<"Invoice"> | number | null
    discountAmount?: FloatNullableFilter<"Invoice"> | number | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTenantInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTenantInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    provider?: EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableFilter<"Payment"> | string | null
    providerOrderId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    metadata?: StringNullableFilter<"Payment"> | string | null
    refundAmount?: FloatNullableFilter<"Payment"> | number | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ReminderLogUpsertWithWhereUniqueWithoutTenantInput = {
    where: ReminderLogWhereUniqueInput
    update: XOR<ReminderLogUpdateWithoutTenantInput, ReminderLogUncheckedUpdateWithoutTenantInput>
    create: XOR<ReminderLogCreateWithoutTenantInput, ReminderLogUncheckedCreateWithoutTenantInput>
  }

  export type ReminderLogUpdateWithWhereUniqueWithoutTenantInput = {
    where: ReminderLogWhereUniqueInput
    data: XOR<ReminderLogUpdateWithoutTenantInput, ReminderLogUncheckedUpdateWithoutTenantInput>
  }

  export type ReminderLogUpdateManyWithWhereWithoutTenantInput = {
    where: ReminderLogScalarWhereInput
    data: XOR<ReminderLogUpdateManyMutationInput, ReminderLogUncheckedUpdateManyWithoutTenantInput>
  }

  export type ReminderLogScalarWhereInput = {
    AND?: ReminderLogScalarWhereInput | ReminderLogScalarWhereInput[]
    OR?: ReminderLogScalarWhereInput[]
    NOT?: ReminderLogScalarWhereInput | ReminderLogScalarWhereInput[]
    id?: StringFilter<"ReminderLog"> | string
    invoiceId?: StringFilter<"ReminderLog"> | string
    tenantId?: StringFilter<"ReminderLog"> | string
    type?: StringFilter<"ReminderLog"> | string
    method?: StringFilter<"ReminderLog"> | string
    scheduledAt?: DateTimeFilter<"ReminderLog"> | Date | string
    sentAt?: DateTimeNullableFilter<"ReminderLog"> | Date | string | null
    status?: StringFilter<"ReminderLog"> | string
    attempt?: IntFilter<"ReminderLog"> | number
    maxAttempts?: IntFilter<"ReminderLog"> | number
    errorMessage?: StringNullableFilter<"ReminderLog"> | string | null
    providerResponse?: StringNullableFilter<"ReminderLog"> | string | null
    recipient?: StringNullableFilter<"ReminderLog"> | string | null
    createdAt?: DateTimeFilter<"ReminderLog"> | Date | string
  }

  export type NotificationLogUpsertWithWhereUniqueWithoutTenantInput = {
    where: NotificationLogWhereUniqueInput
    update: XOR<NotificationLogUpdateWithoutTenantInput, NotificationLogUncheckedUpdateWithoutTenantInput>
    create: XOR<NotificationLogCreateWithoutTenantInput, NotificationLogUncheckedCreateWithoutTenantInput>
  }

  export type NotificationLogUpdateWithWhereUniqueWithoutTenantInput = {
    where: NotificationLogWhereUniqueInput
    data: XOR<NotificationLogUpdateWithoutTenantInput, NotificationLogUncheckedUpdateWithoutTenantInput>
  }

  export type NotificationLogUpdateManyWithWhereWithoutTenantInput = {
    where: NotificationLogScalarWhereInput
    data: XOR<NotificationLogUpdateManyMutationInput, NotificationLogUncheckedUpdateManyWithoutTenantInput>
  }

  export type NotificationLogScalarWhereInput = {
    AND?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
    OR?: NotificationLogScalarWhereInput[]
    NOT?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
    id?: StringFilter<"NotificationLog"> | string
    tenantId?: StringFilter<"NotificationLog"> | string
    type?: StringFilter<"NotificationLog"> | string
    channel?: StringFilter<"NotificationLog"> | string
    recipient?: StringFilter<"NotificationLog"> | string
    subject?: StringNullableFilter<"NotificationLog"> | string | null
    content?: StringNullableFilter<"NotificationLog"> | string | null
    templateId?: StringNullableFilter<"NotificationLog"> | string | null
    templateData?: StringNullableFilter<"NotificationLog"> | string | null
    status?: StringFilter<"NotificationLog"> | string
    sentAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"NotificationLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"NotificationLog"> | string | null
    providerResponse?: StringNullableFilter<"NotificationLog"> | string | null
    createdAt?: DateTimeFilter<"NotificationLog"> | Date | string
  }

  export type TenantCreateWithoutMembershipsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMembershipsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
  }

  export type TenantUpsertWithoutMembershipsInput = {
    update: XOR<TenantUpdateWithoutMembershipsInput, TenantUncheckedUpdateWithoutMembershipsInput>
    create: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMembershipsInput, TenantUncheckedUpdateWithoutMembershipsInput>
  }

  export type TenantUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutSubscriptionInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
  }

  export type TenantUpsertWithoutSubscriptionInput = {
    update: XOR<TenantUpdateWithoutSubscriptionInput, TenantUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutSubscriptionInput, TenantUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TenantUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutSettingsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutSettingsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutSettingsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutSettingsInput, TenantUncheckedCreateWithoutSettingsInput>
  }

  export type TenantUpsertWithoutSettingsInput = {
    update: XOR<TenantUpdateWithoutSettingsInput, TenantUncheckedUpdateWithoutSettingsInput>
    create: XOR<TenantCreateWithoutSettingsInput, TenantUncheckedCreateWithoutSettingsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutSettingsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutSettingsInput, TenantUncheckedUpdateWithoutSettingsInput>
  }

  export type TenantUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutUsageMetricsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsageMetricsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsageMetricsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsageMetricsInput, TenantUncheckedCreateWithoutUsageMetricsInput>
  }

  export type TenantUpsertWithoutUsageMetricsInput = {
    update: XOR<TenantUpdateWithoutUsageMetricsInput, TenantUncheckedUpdateWithoutUsageMetricsInput>
    create: XOR<TenantCreateWithoutUsageMetricsInput, TenantUncheckedCreateWithoutUsageMetricsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsageMetricsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsageMetricsInput, TenantUncheckedUpdateWithoutUsageMetricsInput>
  }

  export type TenantUpdateWithoutUsageMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsageMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutClientsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutClientsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
  }

  export type InvoiceCreateWithoutClientInput = {
    id?: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutClientInput = {
    id?: string
    tenantId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput>
  }

  export type InvoiceCreateManyClientInputEnvelope = {
    data: InvoiceCreateManyClientInput | InvoiceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutClientsInput = {
    update: XOR<TenantUpdateWithoutClientsInput, TenantUncheckedUpdateWithoutClientsInput>
    create: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutClientsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutClientsInput, TenantUncheckedUpdateWithoutClientsInput>
  }

  export type TenantUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutClientInput, InvoiceUncheckedUpdateWithoutClientInput>
    create: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutClientInput, InvoiceUncheckedUpdateWithoutClientInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutClientInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutClientInput>
  }

  export type TenantCreateWithoutInvoicesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutInvoicesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
  }

  export type ClientCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutInvoicesInput = {
    id?: string
    tenantId: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutInvoicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type ReminderLogCreateWithoutInvoiceInput = {
    id?: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReminderLogsInput
  }

  export type ReminderLogUncheckedCreateWithoutInvoiceInput = {
    id?: string
    tenantId: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
  }

  export type ReminderLogCreateOrConnectWithoutInvoiceInput = {
    where: ReminderLogWhereUniqueInput
    create: XOR<ReminderLogCreateWithoutInvoiceInput, ReminderLogUncheckedCreateWithoutInvoiceInput>
  }

  export type ReminderLogCreateManyInvoiceInputEnvelope = {
    data: ReminderLogCreateManyInvoiceInput | ReminderLogCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutInvoicesInput = {
    update: XOR<TenantUpdateWithoutInvoicesInput, TenantUncheckedUpdateWithoutInvoicesInput>
    create: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutInvoicesInput, TenantUncheckedUpdateWithoutInvoicesInput>
  }

  export type TenantUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ClientUpsertWithoutInvoicesInput = {
    update: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type ClientUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type ReminderLogUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: ReminderLogWhereUniqueInput
    update: XOR<ReminderLogUpdateWithoutInvoiceInput, ReminderLogUncheckedUpdateWithoutInvoiceInput>
    create: XOR<ReminderLogCreateWithoutInvoiceInput, ReminderLogUncheckedCreateWithoutInvoiceInput>
  }

  export type ReminderLogUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: ReminderLogWhereUniqueInput
    data: XOR<ReminderLogUpdateWithoutInvoiceInput, ReminderLogUncheckedUpdateWithoutInvoiceInput>
  }

  export type ReminderLogUpdateManyWithWhereWithoutInvoiceInput = {
    where: ReminderLogScalarWhereInput
    data: XOR<ReminderLogUpdateManyMutationInput, ReminderLogUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    client: ClientCreateNestedOneWithoutInvoicesInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type TenantCreateWithoutPaymentsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPaymentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type TenantUpsertWithoutPaymentsInput = {
    update: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type InvoiceCreateWithoutReminderLogsInput = {
    id?: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    client: ClientCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutReminderLogsInput = {
    id?: string
    tenantId: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutReminderLogsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutReminderLogsInput, InvoiceUncheckedCreateWithoutReminderLogsInput>
  }

  export type TenantCreateWithoutReminderLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutReminderLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    notificationLogs?: NotificationLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutReminderLogsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutReminderLogsInput, TenantUncheckedCreateWithoutReminderLogsInput>
  }

  export type InvoiceUpsertWithoutReminderLogsInput = {
    update: XOR<InvoiceUpdateWithoutReminderLogsInput, InvoiceUncheckedUpdateWithoutReminderLogsInput>
    create: XOR<InvoiceCreateWithoutReminderLogsInput, InvoiceUncheckedCreateWithoutReminderLogsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutReminderLogsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutReminderLogsInput, InvoiceUncheckedUpdateWithoutReminderLogsInput>
  }

  export type InvoiceUpdateWithoutReminderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutReminderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type TenantUpsertWithoutReminderLogsInput = {
    update: XOR<TenantUpdateWithoutReminderLogsInput, TenantUncheckedUpdateWithoutReminderLogsInput>
    create: XOR<TenantCreateWithoutReminderLogsInput, TenantUncheckedCreateWithoutReminderLogsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutReminderLogsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutReminderLogsInput, TenantUncheckedUpdateWithoutReminderLogsInput>
  }

  export type TenantUpdateWithoutReminderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutReminderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    notificationLogs?: NotificationLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutNotificationLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsCreateNestedManyWithoutTenantInput
    clients?: ClientCreateNestedManyWithoutTenantInput
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutNotificationLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.SubscriptionPlan
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
    settings?: TenantSettingsUncheckedCreateNestedOneWithoutTenantInput
    usageMetrics?: UsageMetricsUncheckedCreateNestedManyWithoutTenantInput
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    reminderLogs?: ReminderLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutNotificationLogsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutNotificationLogsInput, TenantUncheckedCreateWithoutNotificationLogsInput>
  }

  export type TenantUpsertWithoutNotificationLogsInput = {
    update: XOR<TenantUpdateWithoutNotificationLogsInput, TenantUncheckedUpdateWithoutNotificationLogsInput>
    create: XOR<TenantCreateWithoutNotificationLogsInput, TenantUncheckedCreateWithoutNotificationLogsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutNotificationLogsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutNotificationLogsInput, TenantUncheckedUpdateWithoutNotificationLogsInput>
  }

  export type TenantUpdateWithoutNotificationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUpdateManyWithoutTenantNestedInput
    clients?: ClientUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutNotificationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
    settings?: TenantSettingsUncheckedUpdateOneWithoutTenantNestedInput
    usageMetrics?: UsageMetricsUncheckedUpdateManyWithoutTenantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MembershipCreateManyTenantInput = {
    id?: string
    userId: string
    role?: $Enums.TenantRole
    invitedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMetricsCreateManyTenantInput = {
    id?: string
    invoicesCreated?: number
    remindersSent?: number
    clientsAdded?: number
    paymentsReceived?: number
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateManyTenantInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    gstin?: string | null
    pan?: string | null
    billingStreet?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingPostalCode?: string | null
    shippingStreet?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingPostalCode?: string | null
    notes?: string | null
    tags?: ClientCreatetagsInput | string[]
    paymentTerms?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyTenantInput = {
    id?: string
    clientId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyTenantInput = {
    id?: string
    invoiceId: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderLogCreateManyTenantInput = {
    id?: string
    invoiceId: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
  }

  export type NotificationLogCreateManyTenantInput = {
    id?: string
    type: string
    channel: string
    recipient: string
    subject?: string | null
    content?: string | null
    templateId?: string | null
    templateData?: string | null
    status?: string
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    errorMessage?: string | null
    providerResponse?: string | null
    createdAt?: Date | string
  }

  export type MembershipUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTenantRoleFieldUpdateOperationsInput | $Enums.TenantRole
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMetricsUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoicesCreated?: IntFieldUpdateOperationsInput | number
    remindersSent?: IntFieldUpdateOperationsInput | number
    clientsAdded?: IntFieldUpdateOperationsInput | number
    paymentsReceived?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    billingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ClientUpdatetagsInput | string[]
    paymentTerms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutReminderLogsNestedInput
  }

  export type ReminderLogUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyClientInput = {
    id?: string
    tenantId: string
    createdById: string
    invoiceNumber: string
    amount: number
    currency?: string
    dueDate: Date | string
    issuedDate?: Date | string
    status?: $Enums.InvoiceStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    paymentLink?: string | null
    paymentLinkExpiry?: Date | string | null
    pdfUrl?: string | null
    notes?: string | null
    termsAndConditions?: string | null
    lineItems?: string | null
    subtotal?: number | null
    taxAmount?: number | null
    discountAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
    reminderLogs?: ReminderLogUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
    reminderLogs?: ReminderLogUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    provider?: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerOrderId?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    paymentMethod?: string | null
    failureReason?: string | null
    metadata?: string | null
    refundAmount?: number | null
    refundedAt?: Date | string | null
    refundReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderLogCreateManyInvoiceInput = {
    id?: string
    tenantId: string
    type: string
    method: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    status?: string
    attempt?: number
    maxAttempts?: number
    errorMessage?: string | null
    providerResponse?: string | null
    recipient?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    refundAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReminderLogsNestedInput
  }

  export type ReminderLogUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderLogUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
     */
    export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MembershipDefaultArgs instead
     */
    export type MembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MembershipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantSettingsDefaultArgs instead
     */
    export type TenantSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsageMetricsDefaultArgs instead
     */
    export type UsageMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsageMetricsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderLogDefaultArgs instead
     */
    export type ReminderLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationLogDefaultArgs instead
     */
    export type NotificationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationLogDefaultArgs<ExtArgs>

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