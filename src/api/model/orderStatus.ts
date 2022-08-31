/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */

/**
 * Order Status
 */
export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrderStatus = {
  placed: 'placed',
  approved: 'approved',
  delivered: 'delivered',
} as const;
