goog.provide('ol.MapEvent');
goog.provide('ol.MapEventType');

goog.require('goog.events.Event');


/**
 * @enum {string}
 */
ol.MapEventType = {
  /**
   * Triggered after a map frame is rendered.
   * @event ol.MapEvent#postrender
   * @todo api
   */
  POSTRENDER: 'postrender',
  /**
   * Triggered after the map is moved.
   * @event ol.MapEvent#moveend
   * @todo api
   */
  MOVEEND: 'moveend'
};



/**
 * @constructor
 * @extends {goog.events.Event}
 * @implements {oli.MapEvent}
 * @param {string} type Event type.
 * @param {ol.Map} map Map.
 * @param {?olx.FrameState=} opt_frameState Frame state.
 */
ol.MapEvent = function(type, map, opt_frameState) {

  goog.base(this, type);

  /**
   * The map where the event occurred.
   * @type {ol.Map}
   * @todo api
   */
  this.map = map;

  /**
   * @type {?olx.FrameState}
   */
  this.frameState = goog.isDef(opt_frameState) ? opt_frameState : null;

};
goog.inherits(ol.MapEvent, goog.events.Event);
