'use strict';

/**
 * Shifts.js controller
 *
 * @description: A set of functions called "actions" for managing `Shifts`.
 */

module.exports = {

  /**
   * Retrieve shifts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.shifts.fetchAll(ctx.query);
  },

  /**
   * Retrieve a shifts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.shifts.fetch(ctx.params);
  },

  /**
   * Create a/an shifts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shifts.add(ctx.request.body);
  },

  /**
   * Update a/an shifts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shifts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shifts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shifts.remove(ctx.params);
  }
};
