'use strict';

/**
 * Crews.js controller
 *
 * @description: A set of functions called "actions" for managing `Crews`.
 */

module.exports = {

  /**
   * Retrieve crews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.crews.fetchAll(ctx.query);
  },

  /**
   * Retrieve a crews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.crews.fetch(ctx.params);
  },

  /**
   * Create a/an crews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.crews.add(ctx.request.body);
  },

  /**
   * Update a/an crews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.crews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an crews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.crews.remove(ctx.params);
  }
};
