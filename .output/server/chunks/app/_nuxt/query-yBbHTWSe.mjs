import { p as publicAssetsURL } from "../../handlers/renderer.mjs"
import {
    useSSRContext,
    readonly,
    defineComponent,
    ref,
    onUnmounted,
    mergeProps,
    unref,
    resolveComponent,
} from "vue"
import {
    j as getLinkQuery,
    g as getImageQuery,
    f as getContentQuery,
    h as useGetThePermalink,
} from "../server.mjs"
import {
    ssrRenderAttrs,
    ssrRenderAttr,
    ssrInterpolate,
    ssrRenderClass,
    ssrRenderList,
    ssrRenderStyle,
    ssrRenderComponent,
} from "vue/server-renderer"
import { gsap as gsap$1 } from "gsap"
import { _ as _imports_1$1 } from "./card-23--fourth-RzRwSgnH.mjs"
import { _ as __nuxt_component_0$3 } from "./sanity-content-YdaIDtrv.mjs"
import { _ as __nuxt_component_0$4 } from "./client-only-uYF1VBpJ.mjs"

/*!
 * ScrollTrigger 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

/* eslint-disable */
var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _raf,
    _request,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
    _startup = 1,
    _proxies = [],
    _scrollers = [],
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 1,
    _passThrough = function _passThrough(v) {
        return v
    },
    _getTarget = function _getTarget(t) {
        return _toArray(t)[0] || (_isString(t) ? console.warn("Element not found:", t) : null)
    },
    _round = function _round(value) {
        return Math.round(value * 100000) / 100000 || 0
    },
    _windowExists = function _windowExists() {
        return "undefined" !== "undefined"
    },
    _getGSAP = function _getGSAP() {
        return gsap || _windowExists()
    },
    _isViewport = function _isViewport(e) {
        return !!~_root.indexOf(e)
    },
    _getProxyProp = function _getProxyProp(element, property) {
        return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property]
    },
    _getScrollFunc = function _getScrollFunc(element, _ref) {
        var s = _ref.s,
            sc = _ref.sc

        // we store the scroller functions in a alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
        var i = _scrollers.indexOf(element),
            offset = sc === _vertical.sc ? 1 : 2

        !~i && (i = _scrollers.push(element) - 1)
        return (
            _scrollers[i + offset] ||
            (_scrollers[i + offset] =
                _getProxyProp(element, s) ||
                (_isViewport(element)
                    ? sc
                    : function (value) {
                          return arguments.length ? (element[s] = value) : element[s]
                      }))
        )
    },
    _getBoundsFunc = function _getBoundsFunc(element) {
        return (
            _getProxyProp(element, "getBoundingClientRect") ||
            (_isViewport(element)
                ? function () {
                      _winOffsets.width = _win.innerWidth
                      _winOffsets.height = _win.innerHeight
                      return _winOffsets
                  }
                : function () {
                      return _getBounds(element)
                  })
        )
    },
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
        var d = _ref2.d,
            d2 = _ref2.d2,
            a = _ref2.a
        return (a = _getProxyProp(scroller, "getBoundingClientRect"))
            ? function () {
                  return a()[d]
              }
            : function () {
                  return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0
              }
    },
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
        return !isViewport || ~_proxies.indexOf(element)
            ? _getBoundsFunc(element)
            : function () {
                  return _winOffsets
              }
    },
    _maxScroll = function _maxScroll(element, _ref3) {
        var s = _ref3.s,
            d2 = _ref3.d2,
            d = _ref3.d,
            a = _ref3.a
        return (s = "scroll" + d2) && (a = _getProxyProp(element, s))
            ? a() - _getBoundsFunc(element)()[d]
            : _isViewport(element)
            ? (_body[s] || _docEl[s]) -
              (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2])
            : element[s] - element["offset" + d2]
    },
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
        for (var i = 0; i < _autoRefresh.length; i += 3) {
            ;(!events || ~events.indexOf(_autoRefresh[i + 1])) &&
                func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2])
        }
    },
    _isString = function _isString(value) {
        return typeof value === "string"
    },
    _isFunction = function _isFunction(value) {
        return typeof value === "function"
    },
    _isNumber = function _isNumber(value) {
        return typeof value === "number"
    },
    _isObject = function _isObject(value) {
        return typeof value === "object"
    },
    _callIfFunc = function _callIfFunc(value) {
        return _isFunction(value) && value()
    },
    _combineFunc = function _combineFunc(f1, f2) {
        return function () {
            var result1 = _callIfFunc(f1),
                result2 = _callIfFunc(f2)

            return function () {
                _callIfFunc(result1)

                _callIfFunc(result2)
            }
        }
    },
    _endAnimation = function _endAnimation(animation, reversed, pause) {
        return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause()
    },
    _callback = function _callback(self, func) {
        var result = func(self)
        result && result.totalTime && (self.callbackAnimation = result)
    },
    _abs = Math.abs,
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _horizontal = {
        s: _scrollLeft,
        p: _left,
        p2: _Left,
        os: _right,
        os2: _Right,
        d: _width,
        d2: _Width,
        a: "x",
        sc: function sc(value) {
            return arguments.length
                ? _win.scrollTo(value, _vertical.sc())
                : _win.pageXOffset ||
                      _doc[_scrollLeft] ||
                      _docEl[_scrollLeft] ||
                      _body[_scrollLeft] ||
                      0
        },
    },
    _vertical = {
        s: _scrollTop,
        p: _top,
        p2: _Top,
        os: _bottom,
        os2: _Bottom,
        d: _height,
        d2: _Height,
        a: "y",
        op: _horizontal,
        sc: function sc(value) {
            return arguments.length
                ? _win.scrollTo(_horizontal.sc(), value)
                : _win.pageYOffset ||
                      _doc[_scrollTop] ||
                      _docEl[_scrollTop] ||
                      _body[_scrollTop] ||
                      0
        },
    },
    _getComputedStyle = function _getComputedStyle(element) {
        return _win.getComputedStyle(element)
    },
    _makePositionable = function _makePositionable(element) {
        // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
        var position = _getComputedStyle(element).position

        element.style.position =
            position === "absolute" || position === "fixed" ? position : "relative"
    },
    _setDefaults = function _setDefaults(obj, defaults) {
        for (var p in defaults) {
            p in obj || (obj[p] = defaults[p])
        }

        return obj
    },
    _getBounds = function _getBounds(element, withoutTransforms) {
        var tween =
                withoutTransforms &&
                _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" &&
                gsap
                    .to(element, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                    })
                    .progress(1),
            bounds = element.getBoundingClientRect()
        tween && tween.progress(0).kill()
        return bounds
    },
    _getSize = function _getSize(element, _ref4) {
        var d2 = _ref4.d2
        return element["offset" + d2] || element["client" + d2] || 0
    },
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
        var a = [],
            labels = timeline.labels,
            duration = timeline.duration(),
            p

        for (p in labels) {
            a.push(labels[p] / duration)
        }

        return a
    },
    _getClosestLabel = function _getClosestLabel(animation) {
        return function (value) {
            return gsap.utils.snap(_getLabelRatioArray(animation), value)
        }
    },
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
        var snap = gsap.utils.snap(snapIncrementOrArray),
            a =
                Array.isArray(snapIncrementOrArray) &&
                snapIncrementOrArray.slice(0).sort(function (a, b) {
                    return a - b
                })
        return a
            ? function (value, direction) {
                  var i

                  if (!direction) {
                      return snap(value)
                  }

                  if (direction > 0) {
                      value -= 1e-4 // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

                      for (i = 0; i < a.length; i++) {
                          if (a[i] >= value) {
                              return a[i]
                          }
                      }

                      return a[i - 1]
                  } else {
                      i = a.length
                      value += 1e-4

                      while (i--) {
                          if (a[i] <= value) {
                              return a[i]
                          }
                      }
                  }

                  return a[0]
              }
            : function (value, direction) {
                  var snapped = snap(value)
                  return !direction ||
                      Math.abs(snapped - value) < 0.001 ||
                      snapped - value < 0 === direction < 0
                      ? snapped
                      : snap(
                            direction < 0
                                ? value - snapIncrementOrArray
                                : value + snapIncrementOrArray
                        )
              }
    },
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
        return function (value, st) {
            return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction)
        }
    },
    _addListener = function _addListener(element, type, func) {
        return element.addEventListener(type, func, {
            passive: true,
        })
    },
    _removeListener = function _removeListener(element, type, func) {
        return element.removeEventListener(type, func)
    },
    _markerDefaults = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
    },
    _defaults = {
        toggleActions: "play",
        anticipatePin: 0,
    },
    _keywords = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1,
    },
    _offsetToPx = function _offsetToPx(value, size) {
        if (_isString(value)) {
            var eqIndex = value.indexOf("="),
                relative = ~eqIndex
                    ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1))
                    : 0

            if (~eqIndex) {
                value.indexOf("%") > eqIndex && (relative *= size / 100)
                value = value.substr(0, eqIndex - 1)
            }

            value =
                relative +
                (value in _keywords
                    ? _keywords[value] * size
                    : ~value.indexOf("%")
                    ? (parseFloat(value) * size) / 100
                    : parseFloat(value) || 0)
        }

        return value
    },
    _createMarker = function _createMarker(
        type,
        name,
        container,
        direction,
        _ref5,
        offset,
        matchWidthEl,
        containerAnimation
    ) {
        var startColor = _ref5.startColor,
            endColor = _ref5.endColor,
            fontSize = _ref5.fontSize,
            indent = _ref5.indent,
            fontWeight = _ref5.fontWeight

        var e = _doc.createElement("div"),
            useFixedPosition =
                _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
            isScroller = type.indexOf("scroller") !== -1,
            parent = useFixedPosition ? _body : container,
            isStart = type.indexOf("start") !== -1,
            color = isStart ? startColor : endColor,
            css =
                "border-color:" +
                color +
                ";font-size:" +
                fontSize +
                ";color:" +
                color +
                ";font-weight:" +
                fontWeight +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;"

        css +=
            "position:" +
            ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;")
        ;(isScroller || containerAnimation || !useFixedPosition) &&
            (css +=
                (direction === _vertical ? _right : _bottom) +
                ":" +
                (offset + parseFloat(indent)) +
                "px;")
        matchWidthEl &&
            (css +=
                "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;")
        e._isStart = isStart
        e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""))
        e.style.cssText = css
        e.innerText = name || name === 0 ? type + "-" + name : type
        parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e)
        e._offset = e["offset" + direction.op.d2]

        _positionMarker(e, 0, direction, isStart)

        return e
    },
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
        var vars = {
                display: "block",
            },
            side = direction[flipped ? "os2" : "p2"],
            oppositeSide = direction[flipped ? "p2" : "os2"]
        marker._isFlipped = flipped
        vars[direction.a + "Percent"] = flipped ? -100 : 0
        vars[direction.a] = flipped ? "1px" : 0
        vars["border" + side + _Width] = 1
        vars["border" + oppositeSide + _Width] = 0
        vars[direction.p] = start + "px"
        gsap.set(marker, vars)
    },
    _triggers = [],
    _ids = {},
    _sync = function _sync() {
        return _getTime() - _lastScrollTime > 20 && _updateAll()
    },
    _onScroll = function _onScroll() {
        var time = _getTime()

        if (_lastScrollTime !== time) {
            _updateAll()

            _lastScrollTime || _dispatch("scrollStart")
            _lastScrollTime = time
        } else if (!_request) {
            _request = _raf(_updateAll)
        }
    },
    _onResize = function _onResize() {
        return (
            !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true)
        )
    },
    // ignore resizes triggered by refresh()
    _listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
    _lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
        var tick = gsap.ticker.frame,
            matches = [],
            i = 0,
            index

        if (_lastMediaTick !== tick || _startup) {
            _revertAll()

            for (; i < _media.length; i += 4) {
                index = _win.matchMedia(_media[i]).matches

                if (index !== _media[i + 3]) {
                    // note: some browsers fire the matchMedia event multiple times, like when going full screen, so we shouldn't call the function multiple times. Check to see if it's already matched.
                    _media[i + 3] = index
                    index
                        ? matches.push(i)
                        : _revertAll(1, _media[i]) ||
                          (_isFunction(_media[i + 2]) && _media[i + 2]()) // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                }
            }

            _revertRecorded() // in case killing/reverting any of the animations actually added inline styles back.

            for (i = 0; i < matches.length; i++) {
                index = matches[i]
                _creatingMedia = _media[index]
                _media[index + 2] = _media[index + 1](e)
            }

            _creatingMedia = 0
            _lastMediaTick = tick

            _dispatch("matchMedia")
        }
    },
    _softRefresh = function _softRefresh() {
        return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true)
    },
    _dispatch = function _dispatch(type) {
        return (
            (_listeners[type] &&
                _listeners[type].map(function (f) {
                    return f()
                })) ||
            _emptyArray
        )
    },
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
    _revertRecorded = function _revertRecorded(media) {
        for (var i = 0; i < _savedStyles.length; i += 5) {
            if (!media || _savedStyles[i + 4] === media) {
                _savedStyles[i].style.cssText = _savedStyles[i + 1]
                _savedStyles[i].getBBox &&
                    _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "")
                _savedStyles[i + 3].uncache = 1
            }
        }
    },
    _revertAll = function _revertAll(kill, media) {
        var trigger

        for (_i = 0; _i < _triggers.length; _i++) {
            trigger = _triggers[_i]

            if (!media || trigger.media === media) {
                if (kill) {
                    trigger.kill(1)
                } else {
                    trigger.revert()
                }
            }
        }

        media && _revertRecorded(media)
        media || _dispatch("revert")
    },
    _clearScrollMemory = function _clearScrollMemory() {
        return _scrollers.forEach(function (obj) {
            return typeof obj === "function" && (obj.rec = 0)
        })
    },
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    _refreshingAll,
    _refreshAll = function _refreshAll(force, skipRevert) {
        if (_lastScrollTime && !force) {
            _addListener(ScrollTrigger, "scrollEnd", _softRefresh)

            return
        }

        _refreshingAll = true

        var refreshInits = _dispatch("refreshInit")

        _sort && ScrollTrigger.sort()
        skipRevert || _revertAll()

        _triggers.forEach(function (t) {
            return t.refresh()
        }) // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.

        refreshInits.forEach(function (result) {
            return result && result.render && result.render(-1)
        }) // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

        _clearScrollMemory()

        _resizeDelay.pause()

        _refreshingAll = false

        _dispatch("refresh")
    },
    _lastScroll = 0,
    _direction = 1,
    _updateAll = function _updateAll() {
        if (!_refreshingAll) {
            var l = _triggers.length,
                time = _getTime(),
                recordVelocity = time - _time1 >= 50,
                scroll = l && _triggers[0].scroll()

            _direction = _lastScroll > scroll ? -1 : 1
            _lastScroll = scroll

            if (recordVelocity) {
                if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                    _lastScrollTime = 0

                    _dispatch("scrollEnd")
                }

                _time2 = _time1
                _time1 = time
            }

            if (_direction < 0) {
                _i = l

                while (_i-- > 0) {
                    _triggers[_i] && _triggers[_i].update(0, recordVelocity)
                }

                _direction = 1
            } else {
                for (_i = 0; _i < l; _i++) {
                    _triggers[_i] && _triggers[_i].update(0, recordVelocity)
                }
            }

            _request = 0
        }
    },
    _propNamesToCopy = [
        _left,
        _top,
        _bottom,
        _right,
        _margin + _Bottom,
        _margin + _Right,
        _margin + _Top,
        _margin + _Left,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "grid-column-start",
        "grid-column-end",
        "grid-row-start",
        "grid-row-end",
        "grid-area",
        "justify-self",
        "align-self",
        "place-self",
    ],
    _stateProps = _propNamesToCopy.concat([
        _width,
        _height,
        "boxSizing",
        "max" + _Width,
        "max" + _Height,
        "position",
        _margin,
        _padding,
        _padding + _Top,
        _padding + _Right,
        _padding + _Bottom,
        _padding + _Left,
    ]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
        _setState(state)

        var cache = pin._gsap

        if (cache.spacerIsNative) {
            _setState(cache.spacerState)
        } else if (pin.parentNode === spacer) {
            var parent = spacer.parentNode

            if (parent) {
                parent.insertBefore(pin, spacer)
                parent.removeChild(spacer)
            }
        }
    },
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
        if (pin.parentNode !== spacer) {
            var i = _propNamesToCopy.length,
                spacerStyle = spacer.style,
                pinStyle = pin.style,
                p

            while (i--) {
                p = _propNamesToCopy[i]
                spacerStyle[p] = cs[p]
            }

            spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative"
            cs.display === "inline" && (spacerStyle.display = "inline-block")
            pinStyle[_bottom] = pinStyle[_right] = "auto"
            spacerStyle.overflow = "visible"
            spacerStyle.boxSizing = "border-box"
            spacerStyle[_width] = _getSize(pin, _horizontal) + _px
            spacerStyle[_height] = _getSize(pin, _vertical) + _px
            spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0"

            _setState(spacerState)

            pinStyle[_width] = pinStyle["max" + _Width] = cs[_width]
            pinStyle[_height] = pinStyle["max" + _Height] = cs[_height]
            pinStyle[_padding] = cs[_padding]
            pin.parentNode.insertBefore(spacer, pin)
            spacer.appendChild(pin)
        }
    },
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
        if (state) {
            var style = state.t.style,
                l = state.length,
                i = 0,
                p,
                value
            ;(state.t._gsap || gsap.core.getCache(state.t)).uncache = 1 // otherwise transforms may be off

            for (; i < l; i += 2) {
                value = state[i + 1]
                p = state[i]

                if (value) {
                    style[p] = value
                } else if (style[p]) {
                    style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase())
                }
            }
        }
    },
    _getState = function _getState(element) {
        // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
        var l = _stateProps.length,
            style = element.style,
            state = [],
            i = 0

        for (; i < l; i++) {
            state.push(_stateProps[i], style[_stateProps[i]])
        }

        state.t = element
        return state
    },
    _copyState = function _copyState(state, override, omitOffsets) {
        var result = [],
            l = state.length,
            i = omitOffsets ? 8 : 0,
            // skip top, left, right, bottom if omitOffsets is true
            p

        for (; i < l; i += 2) {
            p = state[i]
            result.push(p, p in override ? override[p] : state[i + 1])
        }

        result.t = state.t
        return result
    },
    _winOffsets = {
        left: 0,
        top: 0,
    },
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
    // _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
    // 	scroller = _getTarget(scroller || _win);
    // 	let direction = horizontal ? _horizontal : _vertical,
    // 		isViewport = _isViewport(scroller);
    // 	_getSizeFunc(scroller, isViewport, direction);
    // 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
    // },
    _parsePosition = function _parsePosition(
        value,
        trigger,
        scrollerSize,
        direction,
        scroll,
        marker,
        markerScroller,
        self,
        scrollerBounds,
        borderWidth,
        useFixedPosition,
        scrollerMax,
        containerAnimation
    ) {
        _isFunction(value) && (value = value(self))

        if (_isString(value) && value.substr(0, 3) === "max") {
            value =
                scrollerMax +
                (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0)
        }

        var time = containerAnimation ? containerAnimation.time() : 0,
            p1,
            p2,
            element
        containerAnimation && containerAnimation.seek(0)

        if (!_isNumber(value)) {
            _isFunction(trigger) && (trigger = trigger(self))
            var offsets = value.split(" "),
                bounds,
                localOffset,
                globalOffset,
                display
            element = _getTarget(trigger) || _body
            bounds = _getBounds(element) || {}

            if (
                (!bounds || (!bounds.left && !bounds.top)) &&
                _getComputedStyle(element).display === "none"
            ) {
                // if display is "none", it won't report getBoundingClientRect() properly
                display = element.style.display
                element.style.display = "block"
                bounds = _getBounds(element)
                display
                    ? (element.style.display = display)
                    : element.style.removeProperty("display")
            }

            localOffset = _offsetToPx(offsets[0], bounds[direction.d])
            globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize)
            value =
                bounds[direction.p] -
                scrollerBounds[direction.p] -
                borderWidth +
                localOffset +
                scroll -
                globalOffset
            markerScroller &&
                _positionMarker(
                    markerScroller,
                    globalOffset,
                    direction,
                    scrollerSize - globalOffset < 20 ||
                        (markerScroller._isStart && globalOffset > 20)
                )
            scrollerSize -= scrollerSize - globalOffset // adjust for the marker
        } else if (markerScroller) {
            _positionMarker(markerScroller, scrollerSize, direction, true)
        }

        if (marker) {
            var position = value + scrollerSize,
                isStart = marker._isStart
            p1 = "scroll" + direction.d2

            _positionMarker(
                marker,
                position,
                direction,
                (isStart && position > 20) ||
                    (!isStart &&
                        (useFixedPosition
                            ? Math.max(_body[p1], _docEl[p1])
                            : marker.parentNode[p1]) <=
                            position + 1)
            )

            if (useFixedPosition) {
                scrollerBounds = _getBounds(markerScroller)
                useFixedPosition &&
                    (marker.style[direction.op.p] =
                        scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px)
            }
        }

        if (containerAnimation && element) {
            p1 = _getBounds(element)
            containerAnimation.seek(scrollerMax)
            p2 = _getBounds(element)
            containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p]
            value = (value / containerAnimation._caScrollDist) * scrollerMax
        }

        containerAnimation && containerAnimation.seek(time)
        return containerAnimation ? value : Math.round(value)
    },
    _prefixExp = /(?:webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
        if (element.parentNode !== parent) {
            var style = element.style,
                p,
                cs

            if (parent === _body) {
                element._stOrig = style.cssText // record original inline styles so we can revert them later

                cs = _getComputedStyle(element)

                for (p in cs) {
                    // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
                    if (
                        !+p &&
                        !_prefixExp.test(p) &&
                        cs[p] &&
                        typeof style[p] === "string" &&
                        p !== "0"
                    ) {
                        style[p] = cs[p]
                    }
                }

                style.top = top
                style.left = left
            } else {
                style.cssText = element._stOrig
            }

            gsap.core.getCache(element).uncache = 1
            parent.appendChild(element)
        }
    },
    // _mergeAnimations = animations => {
    // 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
    // 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
    // 	tl.smoothChildTiming = false;
    // 	return tl;
    // },
    // returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
    _getTweenCreator = function _getTweenCreator(scroller, direction) {
        var getScroll = _getScrollFunc(scroller, direction),
            prop = "_scroll" + direction.p2,
            // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
            lastScroll1,
            lastScroll2,
            getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
                var tween = getTween.tween,
                    onComplete = vars.onComplete,
                    modifiers = {}
                tween && tween.kill()
                lastScroll1 = Math.round(initialValue)
                vars[prop] = scrollTo
                vars.modifiers = modifiers

                modifiers[prop] = function (value) {
                    value = _round(getScroll()) // round because in some [very uncommon] Windows environments, it can get reported with decimals even though it was set without.

                    if (
                        value !== lastScroll1 &&
                        value !== lastScroll2 &&
                        Math.abs(value - lastScroll1) > 2
                    ) {
                        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
                        tween.kill()
                        getTween.tween = 0
                    } else {
                        value =
                            initialValue +
                            change1 * tween.ratio +
                            change2 * tween.ratio * tween.ratio
                    }

                    lastScroll2 = lastScroll1
                    return (lastScroll1 = _round(value))
                }

                vars.onComplete = function () {
                    getTween.tween = 0
                    onComplete && onComplete.call(tween)
                }

                tween = getTween.tween = gsap.to(scroller, vars)
                return tween
            }

        scroller[prop] = getScroll
        scroller.addEventListener(
            "wheel",
            function () {
                return getTween.tween && getTween.tween.kill() && (getTween.tween = 0)
            },
            {
                passive: true,
            }
        ) // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.

        return getTween
    }

_horizontal.op = _vertical
var ScrollTrigger = /*#__PURE__*/ (function () {
    function ScrollTrigger(vars, animation) {
        ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)")
        this.init(vars, animation)
    }

    var _proto = ScrollTrigger.prototype

    _proto.init = function init(vars, animation) {
        this.progress = this.start = 0
        this.vars && this.kill(1) // in case it's being initted again

        if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough
            return
        }

        vars = _setDefaults(
            _isString(vars) || _isNumber(vars) || vars.nodeType
                ? {
                      trigger: vars,
                  }
                : vars,
            _defaults
        )

        var _vars = vars,
            onUpdate = _vars.onUpdate,
            toggleClass = _vars.toggleClass,
            id = _vars.id,
            onToggle = _vars.onToggle,
            onRefresh = _vars.onRefresh,
            scrub = _vars.scrub,
            trigger = _vars.trigger,
            pin = _vars.pin,
            pinSpacing = _vars.pinSpacing,
            invalidateOnRefresh = _vars.invalidateOnRefresh,
            anticipatePin = _vars.anticipatePin,
            onScrubComplete = _vars.onScrubComplete,
            onSnapComplete = _vars.onSnapComplete,
            once = _vars.once,
            snap = _vars.snap,
            pinReparent = _vars.pinReparent,
            pinSpacer = _vars.pinSpacer,
            containerAnimation = _vars.containerAnimation,
            fastScrollEnd = _vars.fastScrollEnd,
            preventOverlaps = _vars.preventOverlaps,
            direction =
                vars.horizontal || (vars.containerAnimation && vars.horizontal !== false)
                    ? _horizontal
                    : _vertical,
            isToggle = !scrub && scrub !== 0,
            scroller = _getTarget(vars.scroller || _win),
            scrollerCache = gsap.core.getCache(scroller),
            isViewport = _isViewport(scroller),
            useFixedPosition =
                ("pinType" in vars
                    ? vars.pinType
                    : _getProxyProp(scroller, "pinType") || (isViewport && "fixed")) === "fixed",
            callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
            toggleActions = isToggle && vars.toggleActions.split(" "),
            markers = "markers" in vars ? vars.markers : _defaults.markers,
            borderWidth = isViewport
                ? 0
                : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
            self = this,
            onRefreshInit =
                vars.onRefreshInit &&
                function () {
                    return vars.onRefreshInit(self)
                },
            getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
            getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
            lastSnap = 0,
            scrollFunc = _getScrollFunc(scroller, direction),
            tweenTo,
            pinCache,
            snapFunc,
            scroll1,
            scroll2,
            start,
            end,
            markerStart,
            markerEnd,
            markerStartTrigger,
            markerEndTrigger,
            markerVars,
            change,
            pinOriginalState,
            pinActiveState,
            pinState,
            spacer,
            offset,
            pinGetter,
            pinSetter,
            pinStart,
            pinChange,
            spacingStart,
            spacerState,
            markerStartSetter,
            markerEndSetter,
            cs,
            snap1,
            snap2,
            scrubTween,
            scrubSmooth,
            snapDurClamp,
            snapDelayedCall,
            prevProgress,
            prevScroll,
            prevAnimProgress,
            caMarkerSetter

        self.media = _creatingMedia
        anticipatePin *= 45
        self.scroller = scroller
        self.scroll = containerAnimation
            ? containerAnimation.time.bind(containerAnimation)
            : scrollFunc
        scroll1 = scrollFunc()
        self.vars = vars
        animation = animation || vars.animation
        "refreshPriority" in vars && (_sort = 1)
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, _vertical),
            left: _getTweenCreator(scroller, _horizontal),
        }
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p]

        if (animation) {
            animation.vars.lazy = false
            animation._initted ||
                (animation.vars.immediateRender !== false &&
                    vars.immediateRender !== false &&
                    animation.render(0, true, true))
            self.animation = animation.pause()
            animation.scrollTrigger = self
            scrubSmooth = _isNumber(scrub) && scrub
            scrubSmooth &&
                (scrubTween = gsap.to(animation, {
                    ease: "power3",
                    duration: scrubSmooth,
                    onComplete: function onComplete() {
                        return onScrubComplete && onScrubComplete(self)
                    },
                }))
            snap1 = 0
            id || (id = animation.vars.id)
        }

        _triggers.push(self)

        if (snap) {
            if (!_isObject(snap) || snap.push) {
                snap = {
                    snapTo: snap,
                }
            }

            "scrollBehavior" in _body.style &&
                gsap.set(isViewport ? [_body, _docEl] : scroller, {
                    scrollBehavior: "auto",
                }) // smooth scrolling doesn't work with snap.

            snapFunc = _isFunction(snap.snapTo)
                ? snap.snapTo
                : snap.snapTo === "labels"
                ? _getClosestLabel(animation)
                : snap.snapTo === "labelsDirectional"
                ? _getLabelAtDirection(animation)
                : snap.directional !== false
                ? function (value, st) {
                      return _snapDirectional(snap.snapTo)(value, st.direction)
                  }
                : gsap.utils.snap(snap.snapTo)
            snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2,
            }
            snapDurClamp = _isObject(snapDurClamp)
                ? _clamp(snapDurClamp.min, snapDurClamp.max)
                : _clamp(snapDurClamp, snapDurClamp)
            snapDelayedCall = gsap
                .delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
                    if (
                        Math.abs(self.getVelocity()) < 10 &&
                        !_pointerIsDown &&
                        lastSnap !== scrollFunc()
                    ) {
                        var totalProgress =
                                animation && !isToggle ? animation.totalProgress() : self.progress,
                            velocity =
                                ((totalProgress - snap2) / (_getTime() - _time2)) * 1000 || 0,
                            change1 = gsap.utils.clamp(
                                -self.progress,
                                1 - self.progress,
                                (_abs(velocity / 2) * velocity) / 0.185
                            ),
                            naturalEnd = self.progress + (snap.inertia === false ? 0 : change1),
                            endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
                            scroll = scrollFunc(),
                            endScroll = Math.round(start + endValue * change),
                            _snap = snap,
                            onStart = _snap.onStart,
                            _onInterrupt = _snap.onInterrupt,
                            _onComplete = _snap.onComplete,
                            tween = tweenTo.tween

                        if (scroll <= end && scroll >= start && endScroll !== scroll) {
                            if (
                                tween &&
                                !tween._initted &&
                                tween.data <= _abs(endScroll - scroll)
                            ) {
                                // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
                                return
                            }

                            if (snap.inertia === false) {
                                change1 = endValue - self.progress
                            }

                            tweenTo(
                                endScroll,
                                {
                                    duration: snapDurClamp(
                                        _abs(
                                            (Math.max(
                                                _abs(naturalEnd - totalProgress),
                                                _abs(endValue - totalProgress)
                                            ) *
                                                0.185) /
                                                velocity /
                                                0.05 || 0
                                        )
                                    ),
                                    ease: snap.ease || "power3",
                                    data: _abs(endScroll - scroll),
                                    // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                                    onInterrupt: function onInterrupt() {
                                        return (
                                            snapDelayedCall.restart(true) &&
                                            _onInterrupt &&
                                            _onInterrupt(self)
                                        )
                                    },
                                    onComplete: function onComplete() {
                                        lastSnap = scrollFunc()
                                        snap1 = snap2 =
                                            animation && !isToggle
                                                ? animation.totalProgress()
                                                : self.progress
                                        onSnapComplete && onSnapComplete(self)
                                        _onComplete && _onComplete(self)
                                    },
                                },
                                scroll,
                                change1 * change,
                                endScroll - scroll - change1 * change
                            )
                            onStart && onStart(self, tweenTo.tween)
                        }
                    } else if (self.isActive) {
                        snapDelayedCall.restart(true)
                    }
                })
                .pause()
        }

        id && (_ids[id] = self)
        trigger = self.trigger = _getTarget(trigger || pin)
        pin = pin === true ? trigger : _getTarget(pin)
        _isString(toggleClass) &&
            (toggleClass = {
                targets: trigger,
                className: toggleClass,
            })

        if (pin) {
            pinSpacing === false ||
                pinSpacing === _margin ||
                (pinSpacing =
                    !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex"
                        ? false
                        : _padding) // if the parent is display: flex, don't apply pinSpacing by default.

            self.pin = pin
            vars.force3D !== false &&
                gsap.set(pin, {
                    force3D: true,
                })
            pinCache = gsap.core.getCache(pin)

            if (!pinCache.spacer) {
                // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
                if (pinSpacer) {
                    pinSpacer = _getTarget(pinSpacer)
                    pinSpacer &&
                        !pinSpacer.nodeType &&
                        (pinSpacer = pinSpacer.current || pinSpacer.nativeElement) // for React & Angular

                    pinCache.spacerIsNative = !!pinSpacer
                    pinSpacer && (pinCache.spacerState = _getState(pinSpacer))
                }

                pinCache.spacer = spacer = pinSpacer || _doc.createElement("div")
                spacer.classList.add("pin-spacer")
                id && spacer.classList.add("pin-spacer-" + id)
                pinCache.pinState = pinOriginalState = _getState(pin)
            } else {
                pinOriginalState = pinCache.pinState
            }

            self.spacer = spacer = pinCache.spacer
            cs = _getComputedStyle(pin)
            spacingStart = cs[pinSpacing + direction.os2]
            pinGetter = gsap.getProperty(pin)
            pinSetter = gsap.quickSetter(pin, direction.a, _px) // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

            _swapPinIn(pin, spacer, cs)

            pinState = _getState(pin)
        }

        if (markers) {
            markerVars = _isObject(markers)
                ? _setDefaults(markers, _markerDefaults)
                : _markerDefaults
            markerStartTrigger = _createMarker(
                "scroller-start",
                id,
                scroller,
                direction,
                markerVars,
                0
            )
            markerEndTrigger = _createMarker(
                "scroller-end",
                id,
                scroller,
                direction,
                markerVars,
                0,
                markerStartTrigger
            )
            offset = markerStartTrigger["offset" + direction.op.d2]
            markerStart = _createMarker(
                "start",
                id,
                scroller,
                direction,
                markerVars,
                offset,
                0,
                containerAnimation
            )
            markerEnd = _createMarker(
                "end",
                id,
                scroller,
                direction,
                markerVars,
                offset,
                0,
                containerAnimation
            )
            containerAnimation &&
                (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px))

            if (
                !useFixedPosition &&
                !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)
            ) {
                _makePositionable(isViewport ? _body : scroller)

                gsap.set([markerStartTrigger, markerEndTrigger], {
                    force3D: true,
                })
                markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px)
                markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px)
            }
        }

        if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate,
                oldParams = containerAnimation.vars.onUpdateParams
            containerAnimation.eventCallback("onUpdate", function () {
                self.update(0, 0, 1)
                oldOnUpdate && oldOnUpdate.apply(oldParams || [])
            })
        }

        self.previous = function () {
            return _triggers[_triggers.indexOf(self) - 1]
        }

        self.next = function () {
            return _triggers[_triggers.indexOf(self) + 1]
        }

        self.revert = function (revert) {
            var r = revert !== false || !self.enabled,
                prevRefreshing = _refreshing

            if (r !== self.isReverted) {
                if (r) {
                    self.scroll.rec || (self.scroll.rec = scrollFunc())
                    prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0) // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

                    prevProgress = self.progress
                    prevAnimProgress = animation && animation.progress()
                }

                markerStart &&
                    [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(
                        function (m) {
                            return (m.style.display = r ? "none" : "block")
                        }
                    )
                r && (_refreshing = 1)
                self.update(r) // make sure the pin is back in its original position so that all the measurements are correct.

                _refreshing = prevRefreshing
                pin &&
                    (r
                        ? _swapPinOut(pin, spacer, pinOriginalState)
                        : (!pinReparent || !self.isActive) &&
                          _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState))
                self.isReverted = r
            }
        }

        self.refresh = function (soft, force) {
            if ((_refreshing || !self.enabled) && !force) {
                return
            }

            if (pin && soft && _lastScrollTime) {
                _addListener(ScrollTrigger, "scrollEnd", _softRefresh)

                return
            }

            _refreshing = 1
            scrubTween && scrubTween.pause()
            invalidateOnRefresh && animation && animation.progress(0).invalidate()
            self.isReverted || self.revert()

            var size = getScrollerSize(),
                scrollerBounds = getScrollerOffsets(),
                max = containerAnimation
                    ? containerAnimation.duration()
                    : _maxScroll(scroller, direction),
                offset = 0,
                otherPinOffset = 0,
                parsedEnd = vars.end,
                parsedEndTrigger = vars.endTrigger || trigger,
                parsedStart =
                    vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
                pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer),
                triggerIndex = (trigger && Math.max(0, _triggers.indexOf(self))) || 0,
                i = triggerIndex,
                cs,
                bounds,
                scroll,
                isVertical,
                override,
                curTrigger,
                curPin,
                oppositeScroll,
                initted,
                revertedPins

            while (i--) {
                // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
                curTrigger = _triggers[i]
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1) // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

                curPin = curTrigger.pin

                if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                    revertedPins || (revertedPins = [])
                    revertedPins.unshift(curTrigger) // we'll revert from first to last to make sure things reach their end state properly

                    curTrigger.revert()
                }
            }

            _isFunction(parsedStart) && (parsedStart = parsedStart(self))
            start =
                _parsePosition(
                    parsedStart,
                    trigger,
                    size,
                    direction,
                    scrollFunc(),
                    markerStart,
                    markerStartTrigger,
                    self,
                    scrollerBounds,
                    borderWidth,
                    useFixedPosition,
                    max,
                    containerAnimation
                ) || (pin ? -0.001 : 0)
            _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self))

            if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) {
                    parsedEnd =
                        (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd
                } else {
                    offset = _offsetToPx(parsedEnd.substr(2), size)
                    parsedEnd = _isString(parsedStart) ? parsedStart : start + offset // _parsePosition won't factor in the offset if the start is a number, so do it here.

                    parsedEndTrigger = trigger
                }
            }

            end =
                Math.max(
                    start,
                    _parsePosition(
                        parsedEnd || (parsedEndTrigger ? "100% 0" : max),
                        parsedEndTrigger,
                        size,
                        direction,
                        scrollFunc() + offset,
                        markerEnd,
                        markerEndTrigger,
                        self,
                        scrollerBounds,
                        borderWidth,
                        useFixedPosition,
                        max,
                        containerAnimation
                    )
                ) || -0.001
            change = end - start || ((start -= 0.01) && 0.001)
            offset = 0
            i = triggerIndex

            while (i--) {
                curTrigger = _triggers[i]
                curPin = curTrigger.pin

                if (
                    curPin &&
                    curTrigger.start - curTrigger._pinPush < start &&
                    !containerAnimation
                ) {
                    cs = curTrigger.end - curTrigger.start
                    ;(curPin === trigger || curPin === pinnedContainer) &&
                        !_isNumber(parsedStart) &&
                        (offset += cs) // numeric start values shouldn't be offset at all - treat them as absolute

                    curPin === pin && (otherPinOffset += cs)
                }
            }

            start += offset
            end += offset
            self._pinPush = otherPinOffset

            if (markerStart && offset) {
                // offset the markers if necessary
                cs = {}
                cs[direction.a] = "+=" + offset
                pinnedContainer && (cs[direction.p] = "-=" + scrollFunc())
                gsap.set([markerStart, markerEnd], cs)
            }

            if (pin) {
                cs = _getComputedStyle(pin)
                isVertical = direction === _vertical
                scroll = scrollFunc() // recalculate because the triggers can affect the scroll

                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset
                !max &&
                    end > 1 &&
                    ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll") // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/

                _swapPinIn(pin, spacer, cs)

                pinState = _getState(pin) // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

                bounds = _getBounds(pin, true)
                oppositeScroll =
                    useFixedPosition &&
                    _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)()

                if (pinSpacing) {
                    spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px]
                    spacerState.t = spacer
                    i =
                        pinSpacing === _padding
                            ? _getSize(pin, direction) + change + otherPinOffset
                            : 0
                    i && spacerState.push(direction.d, i + _px) // for box-sizing: border-box (must include padding).

                    _setState(spacerState)

                    useFixedPosition && scrollFunc(prevScroll)
                }

                if (useFixedPosition) {
                    override = {
                        top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                        left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                        boxSizing: "border-box",
                        position: "fixed",
                    }
                    override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px
                    override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px
                    override[_margin] =
                        override[_margin + _Top] =
                        override[_margin + _Right] =
                        override[_margin + _Bottom] =
                        override[_margin + _Left] =
                            "0"
                    override[_padding] = cs[_padding]
                    override[_padding + _Top] = cs[_padding + _Top]
                    override[_padding + _Right] = cs[_padding + _Right]
                    override[_padding + _Bottom] = cs[_padding + _Bottom]
                    override[_padding + _Left] = cs[_padding + _Left]
                    pinActiveState = _copyState(pinOriginalState, override, pinReparent)
                }

                if (animation) {
                    // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
                    initted = animation._initted // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

                    _suppressOverwrites(1)

                    animation.render(animation.duration(), true, true)
                    pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset
                    change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2) // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

                    animation.render(0, true, true)
                    initted || animation.invalidate()

                    _suppressOverwrites(0)
                } else {
                    pinChange = change
                }
            } else if (trigger && scrollFunc() && !containerAnimation) {
                // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
                bounds = trigger.parentNode

                while (bounds && bounds !== _body) {
                    if (bounds._pinOffset) {
                        start -= bounds._pinOffset
                        end -= bounds._pinOffset
                    }

                    bounds = bounds.parentNode
                }
            }

            revertedPins &&
                revertedPins.forEach(function (t) {
                    return t.revert(false)
                })
            self.start = start
            self.end = end
            scroll1 = scroll2 = scrollFunc() // reset velocity

            if (!containerAnimation) {
                scroll1 < prevScroll && scrollFunc(prevScroll)
                self.scroll.rec = 0
            }

            self.revert(false)
            _refreshing = 0
            animation &&
                isToggle &&
                animation._initted &&
                animation.progress() !== prevAnimProgress &&
                animation.progress(prevAnimProgress, true).render(animation.time(), true, true) // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

            if (prevProgress !== self.progress) {
                // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
                animation && !isToggle && animation.totalProgress(prevProgress, true) // to avoid issues where animation callbacks like onStart aren't triggered.

                self.progress = prevProgress
                self.update(0, 0, 1)
            }

            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange))
            onRefresh && onRefresh(self)
        }

        self.getVelocity = function () {
            return ((scrollFunc() - scroll2) / (_getTime() - _time2)) * 1000 || 0
        }

        self.endAnimation = function () {
            _endAnimation(self.callbackAnimation)

            if (animation) {
                scrubTween
                    ? scrubTween.progress(1)
                    : !animation.paused()
                    ? _endAnimation(animation, animation.reversed())
                    : isToggle || _endAnimation(animation, self.direction < 0, 1)
            }
        }

        self.getTrailing = function (name) {
            var i = _triggers.indexOf(self),
                a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1)

            return _isString(name)
                ? a.filter(function (t) {
                      return t.vars.preventOverlaps === name
                  })
                : a
        }

        self.update = function (reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) {
                return
            }

            var scroll = self.scroll(),
                p = reset ? 0 : (scroll - start) / change,
                clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
                prevProgress = self.progress,
                isActive,
                wasActive,
                toggleState,
                action,
                stateChanged,
                toggled,
                isAtMax,
                isTakingAction

            if (recordVelocity) {
                scroll2 = scroll1
                scroll1 = containerAnimation ? scrollFunc() : scroll

                if (snap) {
                    snap2 = snap1
                    snap1 = animation && !isToggle ? animation.totalProgress() : clipped
                }
            } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).

            anticipatePin &&
                !clipped &&
                pin &&
                !_refreshing &&
                !_startup &&
                _lastScrollTime &&
                start < scroll + ((scroll - scroll2) / (_getTime() - _time2)) * anticipatePin &&
                (clipped = 0.0001)

            if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1
                wasActive = !!prevProgress && prevProgress < 1
                toggled = isActive !== wasActive
                stateChanged = toggled || !!clipped !== !!prevProgress // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

                self.direction = clipped > prevProgress ? 1 : -1
                self.progress = clipped

                if (stateChanged && !_refreshing) {
                    toggleState =
                        clipped && !prevProgress
                            ? 0
                            : clipped === 1
                            ? 1
                            : prevProgress === 1
                            ? 2
                            : 3 // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

                    if (isToggle) {
                        action =
                            (!toggled &&
                                toggleActions[toggleState + 1] !== "none" &&
                                toggleActions[toggleState + 1]) ||
                            toggleActions[toggleState] // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

                        isTakingAction =
                            animation &&
                            (action === "complete" || action === "reset" || action in animation)
                    }
                }

                preventOverlaps &&
                    toggled &&
                    (isTakingAction || scrub || !animation) &&
                    (_isFunction(preventOverlaps)
                        ? preventOverlaps(self)
                        : self.getTrailing(preventOverlaps).forEach(function (t) {
                              return t.endAnimation()
                          }))

                if (!isToggle) {
                    if (scrubTween && !_refreshing && !_startup) {
                        scrubTween.vars.totalProgress = clipped
                        scrubTween.invalidate().restart()
                    } else if (animation) {
                        animation.totalProgress(clipped, !!_refreshing)
                    }
                }

                if (pin) {
                    reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart)

                    if (!useFixedPosition) {
                        pinSetter(pinStart + pinChange * clipped)
                    } else if (stateChanged) {
                        isAtMax =
                            !reset &&
                            clipped > prevProgress &&
                            end + 1 > scroll &&
                            scroll + 1 >= _maxScroll(scroller, direction) // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

                        if (pinReparent) {
                            if (!reset && (isActive || isAtMax)) {
                                var bounds = _getBounds(pin, true),
                                    _offset = scroll - start

                                _reparent(
                                    pin,
                                    _body,
                                    bounds.top + (direction === _vertical ? _offset : 0) + _px,
                                    bounds.left + (direction === _vertical ? 0 : _offset) + _px
                                )
                            } else {
                                _reparent(pin, spacer)
                            }
                        }

                        _setState(isActive || isAtMax ? pinActiveState : pinState)

                        ;(pinChange !== change && clipped < 1 && isActive) ||
                            pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0))
                    }
                }

                snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true)
                toggleClass &&
                    (toggled || (once && clipped && (clipped < 1 || !_limitCallbacks))) &&
                    _toArray(toggleClass.targets).forEach(function (el) {
                        return el.classList[isActive || once ? "add" : "remove"](
                            toggleClass.className
                        )
                    }) // classes could affect positioning, so do it even if reset or refreshing is true.

                onUpdate && !isToggle && !reset && onUpdate(self)

                if (stateChanged && !_refreshing) {
                    if (isToggle) {
                        if (isTakingAction) {
                            if (action === "complete") {
                                animation.pause().totalProgress(1)
                            } else if (action === "reset") {
                                animation.restart(true).pause()
                            } else if (action === "restart") {
                                animation.restart(true)
                            } else {
                                animation[action]()
                            }
                        }

                        onUpdate && onUpdate(self)
                    }

                    if (toggled || !_limitCallbacks) {
                        // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
                        onToggle && toggled && _callback(self, onToggle)
                        callbacks[toggleState] && _callback(self, callbacks[toggleState])
                        once && (clipped === 1 ? self.kill(false, 1) : (callbacks[toggleState] = 0)) // a callback shouldn't be called again if once is true.

                        if (!toggled) {
                            // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
                            toggleState = clipped === 1 ? 1 : 3
                            callbacks[toggleState] && _callback(self, callbacks[toggleState])
                        }
                    }

                    if (
                        fastScrollEnd &&
                        !isActive &&
                        Math.abs(self.getVelocity()) >
                            (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)
                    ) {
                        _endAnimation(self.callbackAnimation)

                        scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1)
                    }
                } else if (isToggle && onUpdate && !_refreshing) {
                    onUpdate(self)
                }
            } // update absolutely-positioned markers (only if the scroller isn't the viewport)

            if (markerEndSetter) {
                var n = containerAnimation
                    ? (scroll / containerAnimation.duration()) *
                      (containerAnimation._caScrollDist || 0)
                    : scroll
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0))
                markerEndSetter(n)
            }

            caMarkerSetter &&
                caMarkerSetter(
                    (-scroll / containerAnimation.duration()) *
                        (containerAnimation._caScrollDist || 0)
                )
        }

        self.enable = function (reset, refresh) {
            if (!self.enabled) {
                self.enabled = true

                _addListener(scroller, "resize", _onResize)

                _addListener(scroller, "scroll", _onScroll)

                onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit)

                if (reset !== false) {
                    self.progress = prevProgress = 0
                    scroll1 = scroll2 = lastSnap = scrollFunc()
                }

                refresh !== false && self.refresh()
            }
        }

        self.getTween = function (snap) {
            return snap && tweenTo ? tweenTo.tween : scrubTween
        }

        self.disable = function (reset, allowAnimation) {
            if (self.enabled) {
                reset !== false && self.revert()
                self.enabled = self.isActive = false
                allowAnimation || (scrubTween && scrubTween.pause())
                prevScroll = 0
                pinCache && (pinCache.uncache = 1)
                onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit)

                if (snapDelayedCall) {
                    snapDelayedCall.pause()
                    tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0)
                }

                if (!isViewport) {
                    var i = _triggers.length

                    while (i--) {
                        if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                            return //don't remove the listeners if there are still other triggers referencing it.
                        }
                    }

                    _removeListener(scroller, "resize", _onResize)

                    _removeListener(scroller, "scroll", _onScroll)
                }
            }
        }

        self.kill = function (revert, allowAnimation) {
            self.disable(revert, allowAnimation)
            scrubTween && scrubTween.kill()
            id && delete _ids[id]

            var i = _triggers.indexOf(self)

            _triggers.splice(i, 1)

            i === _i && _direction > 0 && _i-- // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
            // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

            i = 0

            _triggers.forEach(function (t) {
                return t.scroller === self.scroller && (i = 1)
            })

            i || (self.scroll.rec = 0)

            if (animation) {
                animation.scrollTrigger = null
                revert && animation.render(-1)
                allowAnimation || animation.kill()
            }

            markerStart &&
                [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (
                    m
                ) {
                    return m.parentNode && m.parentNode.removeChild(m)
                })

            if (pin) {
                pinCache && (pinCache.uncache = 1)
                i = 0

                _triggers.forEach(function (t) {
                    return t.pin === pin && i++
                })

                i || (pinCache.spacer = 0) // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
            }
        }

        self.enable(false, false)
        !animation || !animation.add || change
            ? self.refresh()
            : gsap.delayedCall(0.01, function () {
                  return start || end || self.refresh()
              }) &&
              (change = 0.01) &&
              (start = end = 0) // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
    }

    ScrollTrigger.register = function register(core) {
        {
            gsap = core || _getGSAP()

            if (gsap) {
                _toArray = gsap.utils.toArray
                _clamp = gsap.utils.clamp
                _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough
                gsap.core.globals("ScrollTrigger", ScrollTrigger) // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
            }
        }

        return _coreInitted
    }

    ScrollTrigger.defaults = function defaults(config) {
        for (var p in config) {
            _defaults[p] = config[p]
        }
    }

    ScrollTrigger.kill = function kill() {
        _enabled = 0

        _triggers.slice(0).forEach(function (trigger) {
            return trigger.kill(1)
        })
    }

    ScrollTrigger.config = function config(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks)
        var ms = vars.syncInterval
        ;(ms && clearInterval(_syncInterval)) || ((_syncInterval = ms) && setInterval(_sync, ms))

        if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener) ||
                _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none")
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1
        }
    }

    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = _getTarget(target),
            i = _scrollers.indexOf(t),
            isViewport = _isViewport(t)

        if (~i) {
            _scrollers.splice(i, isViewport ? 6 : 2)
        }

        isViewport
            ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars)
            : _proxies.unshift(t, vars)
    }

    ScrollTrigger.matchMedia = function matchMedia(vars) {
        // _media is populated in the following order: mediaQueryString, onMatch, onUnmatch, isMatched. So if there are two media queries, the Array would have a length of 8
        var mq, p, i, func, result

        for (p in vars) {
            i = _media.indexOf(p)
            func = vars[p]
            _creatingMedia = p

            if (p === "all") {
                func()
            } else {
                mq = _win.matchMedia(p)

                if (mq) {
                    mq.matches && (result = func())

                    if (~i) {
                        _media[i + 1] = _combineFunc(_media[i + 1], func)
                        _media[i + 2] = _combineFunc(_media[i + 2], result)
                    } else {
                        i = _media.length

                        _media.push(p, func, result)

                        mq.addListener
                            ? mq.addListener(_onMediaChange)
                            : mq.addEventListener("change", _onMediaChange)
                    }

                    _media[i + 3] = mq.matches
                }
            }

            _creatingMedia = 0
        }

        return _media
    }

    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        query || (_media.length = 0)
        query = _media.indexOf(query)
        query >= 0 && _media.splice(query, 4)
    }

    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
            offset = bounds[horizontal ? _width : _height] * ratio || 0
        return horizontal
            ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth
            : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight
    }

    ScrollTrigger.positionInViewport = function positionInViewport(
        element,
        referencePoint,
        horizontal
    ) {
        _isString(element) && (element = _getTarget(element))
        var bounds = element.getBoundingClientRect(),
            size = bounds[horizontal ? _width : _height],
            offset =
                referencePoint == null
                    ? size / 2
                    : referencePoint in _keywords
                    ? _keywords[referencePoint] * size
                    : ~referencePoint.indexOf("%")
                    ? (parseFloat(referencePoint) * size) / 100
                    : parseFloat(referencePoint) || 0
        return horizontal
            ? (bounds.left + offset) / _win.innerWidth
            : (bounds.top + offset) / _win.innerHeight
    }

    return ScrollTrigger
})()
ScrollTrigger.version = "3.8.0"

ScrollTrigger.saveStyles = function (targets) {
    return targets
        ? _toArray(targets).forEach(function (target) {
              // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
              if (target && target.style) {
                  var i = _savedStyles.indexOf(target)

                  i >= 0 && _savedStyles.splice(i, 5)

                  _savedStyles.push(
                      target,
                      target.style.cssText,
                      target.getBBox && target.getAttribute("transform"),
                      gsap.core.getCache(target),
                      _creatingMedia
                  )
              }
          })
        : _savedStyles
}

ScrollTrigger.revert = function (soft, media) {
    return _revertAll(!soft, media)
}

ScrollTrigger.create = function (vars, animation) {
    return new ScrollTrigger(vars, animation)
}

ScrollTrigger.refresh = function (safe) {
    return safe ? _onResize() : ScrollTrigger.register() && _refreshAll(true)
}

ScrollTrigger.update = _updateAll
ScrollTrigger.clearScrollMemory = _clearScrollMemory

ScrollTrigger.maxScroll = function (element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical)
}

ScrollTrigger.getScrollFunc = function (element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical)
}

ScrollTrigger.getById = function (id) {
    return _ids[id]
}

ScrollTrigger.getAll = function () {
    return _triggers.slice(0)
}

ScrollTrigger.isScrolling = function () {
    return !!_lastScrollTime
}

ScrollTrigger.snapDirectional = _snapDirectional

ScrollTrigger.addEventListener = function (type, callback) {
    var a = _listeners[type] || (_listeners[type] = [])
    ~a.indexOf(callback) || a.push(callback)
}

ScrollTrigger.removeEventListener = function (type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback)
    i >= 0 && a.splice(i, 1)
}

ScrollTrigger.batch = function (targets, vars) {
    var result = [],
        varsCopy = {},
        interval = vars.interval || 0.016,
        batchMax = vars.batchMax || 1e9,
        proxyCallback = function proxyCallback(type, callback) {
            var elements = [],
                triggers = [],
                delay = gsap
                    .delayedCall(interval, function () {
                        callback(elements, triggers)
                        elements = []
                        triggers = []
                    })
                    .pause()
            return function (self) {
                elements.length || delay.restart(true)
                elements.push(self.trigger)
                triggers.push(self)
                batchMax <= elements.length && delay.progress(1)
            }
        },
        p

    for (p in vars) {
        varsCopy[p] =
            p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit"
                ? proxyCallback(p, vars[p])
                : vars[p]
    }

    if (_isFunction(batchMax)) {
        batchMax = batchMax()

        _addListener(ScrollTrigger, "refresh", function () {
            return (batchMax = vars.batchMax())
        })
    }

    _toArray(targets).forEach(function (target) {
        var config = {}

        for (p in varsCopy) {
            config[p] = varsCopy[p]
        }

        config.trigger = target
        result.push(ScrollTrigger.create(config))
    })

    return result
}

ScrollTrigger.sort = function (func) {
    return _triggers.sort(
        func ||
            function (a, b) {
                return (
                    (a.vars.refreshPriority || 0) * -1e6 +
                    a.start -
                    (b.start + (b.vars.refreshPriority || 0) * -1e6)
                )
            }
    )
}

_getGSAP() && gsap.registerPlugin(ScrollTrigger)

const _sfc_main$i = {
    __name: "Hero05",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "g--hero-05" }, _attrs)
                )}><div class="g--hero-05__bg-items g--lazy-01"${ssrRenderAttr(
                    "data-src",
                    __props.info.bg_image.url
                )}></div><div class="g--hero-05__ft-items"><div class="g--hero-05__ft-items__wrapper"><div class="g--hero-05__ft-items__wrapper__content"><h1 class="g--hero-05__ft-items__wrapper__content__item-primary">${ssrInterpolate(
                    __props.info.title
                )}</h1><h2 class="g--hero-05__ft-items__wrapper__content__item-secondary">${ssrInterpolate(
                    __props.info.description
                )}</h2><div class="g--hero-05__ft-items__wrapper__content__list-group"><a${ssrRenderAttr(
                    "href",
                    __props.info.button.external_page
                        ? __props.info.button.url_external
                        : ("useGetThePermalink" in _ctx
                              ? _ctx.useGetThePermalink
                              : unref(useGetThePermalink))(
                              __props.info.button.url_internal,
                              __props.info.button.has_query,
                              __props.info.button.text_query
                          )
                )} class="g--hero-05__ft-items__wrapper__content__list-group__item"${ssrRenderAttr(
                    "target",
                    __props.info.button.external_page ? "_blank" : "_self"
                )}>${ssrInterpolate(
                    __props.info.button.label
                )}</a></div></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$i = _sfc_main$i.setup
_sfc_main$i.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/hero/Hero05.vue"
    )
    return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0
}
const Hero05 = _sfc_main$i
const _sfc_main$h = {
    __name: "Hero03",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "g--hero-03" }, _attrs)
                )}><div class="g--hero-03__bg-items g--lazy-01"${ssrRenderAttr(
                    "data-src",
                    __props.info.bg_image.url
                )}></div><div class="g--hero-03__ft-items"><div class="g--hero-03__ft-items__wrapper"><div class="g--hero-03__ft-items__wrapper__content"><h1 class="g--hero-03__ft-items__wrapper__content__item-primary">${ssrInterpolate(
                    __props.info.title
                )}</h1></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$h = _sfc_main$h.setup
_sfc_main$h.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/hero/Hero03.vue"
    )
    return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0
}
const Hero03 = _sfc_main$h
const getSpaceCustom = (space) => {
    var mycustomclass = ""
    if (space) {
        if (space.selected == "top") {
            if (space.top == "small") {
                mycustomclass = "f--pt-7 f--pt-tablets-5"
            } else if (space.top == "medium") {
                mycustomclass = "f--pt-10 f--pt-tablets-7"
            } else if (space.top == "large") {
                mycustomclass = "f--pt-15 f--pt-tablets-10"
            }
        }
        if (space.selected == "bottom") {
            if (space.bottom == "small") {
                mycustomclass = "f--pb-7 f--pb-tablets-5"
            } else if (space.bottom == "medium") {
                mycustomclass = "f--pb-10 f--pb-tablets-7"
            } else if (space.bottom == "large") {
                mycustomclass = "f--pb-15 f--pb-tablets-10"
            }
        }
        if (space.selected == "topbottom") {
            if (space.top == "small") {
                mycustomclass = "f--pt-7 f--pt-tablets-5"
            } else if (space.top == "medium") {
                mycustomclass = "f--pt-10 f--pt-tablets-7"
            } else if (space.top == "large") {
                mycustomclass = "f--pt-15 f--pt-tablets-10"
            }
            if (space.bottom == "small") {
                mycustomclass += " f--pb-7 f--pb-tablets-5"
            } else if (space.bottom == "medium") {
                mycustomclass += " f--pb-10 f--pb-tablets-7"
            } else if (space.bottom == "large") {
                mycustomclass += " f--pb-15 f--pb-tablets-10"
            }
        }
    }
    return mycustomclass
}
gsap$1.registerPlugin(ScrollTrigger)
const _sfc_main$g = /* @__PURE__ */ defineComponent({
    __name: "MediaA",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        ref(null)
        const zoomInstance = ref(null)
        onUnmounted(() => {
            if (zoomInstance.value) {
                zoomInstance.value.destroy()
            }
        })
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: ["c--media-a", unref(getSpaceCustom)(__props.info.spacing)],
                        },
                        _attrs
                    )
                )}>`
            )
            if (__props.info.content_type == "video") {
                _push(
                    `<video class="c--media-a__media c--media-a__media--second" autoplay muted loop playsInline width="1920" height="1080" preload="auto"><source${ssrRenderAttr(
                        "src",
                        __props.info.video.url
                    )} type="video/mp4"></video>`
                )
            } else {
                _push(
                    `<img${ssrRenderAttr("data-src", __props.info.image.url)}${ssrRenderAttr(
                        "alt",
                        __props.info.image.file_name
                            ? __props.info.image.file_name
                            : "expanding media image"
                    )} class="c--media-a__media g--lazy-01">`
                )
            }
            _push(`</div>`)
        }
    },
})
const _sfc_setup$g = _sfc_main$g.setup
_sfc_main$g.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/media/MediaA.vue"
    )
    return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0
}
const _sfc_main$f = {
    __name: "Heading",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: [
                                { "f--background-a": __props.info.bg_color === "black" },
                                { "f--background-b": __props.info.bg_color === "white" },
                                { "f--background-c": __props.info.bg_color === "grey" },
                                unref(getSpaceCustom)(props.info.spacing),
                            ],
                        },
                        _attrs
                    )
                )}><div class="f--container"><div class="${ssrRenderClass([
                    {
                        "u--justify-content-center u--text-center":
                            __props.info.alignment === "center",
                    },
                    "f--row",
                ])}"><div class="f--col-8 f--col-tablets-12"><h2 class="${ssrRenderClass([
                    [
                        __props.info.bg_color == "black" ? " f--color-b" : "f--color-a",
                        __props.info.size == "small" ? " f--font-c" : "f--font-b",
                    ],
                    "u--font-bold",
                ])}">${ssrInterpolate(__props.info.text)}</h2></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$f = _sfc_main$f.setup
_sfc_main$f.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/Heading.vue"
    )
    return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0
}
const Heading = _sfc_main$f
const _sfc_main$e = {
    __name: "CenteredAsset",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "c--arrow-a" }, _attrs)
                )}><div class="f--container"><div class="f--row"><div class="f--col-12"><img${ssrRenderAttr(
                    "src",
                    __props.info.image.url
                )}${ssrRenderAttr(
                    "alt",
                    __props.info.image.file_name
                )} class="c--arrow-a__media"></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$e = _sfc_main$e.setup
_sfc_main$e.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/CenteredAsset.vue"
    )
    return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0
}
const CenteredAsset = _sfc_main$e
const _sfc_main$d = {
    __name: "TextAssetMarquee",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        ref(null)
        const marqueeInstance = ref(null)
        onUnmounted(() => {
            if (marqueeInstance.value) {
                marqueeInstance.value.destroy()
            }
        })
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: ["c--marquee-a", unref(getSpaceCustom)(props.info.spacing)],
                        },
                        _attrs
                    )
                )}><img${ssrRenderAttr("src", props.info.image.url)}${ssrRenderAttr(
                    "alt",
                    props.info.image.file_name
                )} class="c--marquee-a__artwork"><div class="c--marquee-a__item"><!--[-->`
            )
            ssrRenderList(4, (index) => {
                _push(`<p class="c--marquee-a__item__title">${ssrInterpolate(props.info.text)}</p>`)
            })
            _push(`<!--]--></div></div>`)
        }
    },
}
const _sfc_setup$d = _sfc_main$d.setup
_sfc_main$d.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/TextAssetMarquee.vue"
    )
    return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0
}
const TextAssetMarquee = _sfc_main$d
const _imports_0$1 = "" + publicAssetsURL("assets/img/card-23/card-23--second.webp")
const _imports_1 = "" + publicAssetsURL("assets/img/card-23/card-23--third.webp")
const _imports_3 = "" + publicAssetsURL("assets/img/card-23/card-23--fifth.webp")
const _imports_4 = "" + publicAssetsURL("assets/img/card-23/card-23--sixth.webp")
const _imports_5 = "" + publicAssetsURL("assets/img/card-23/card-23--seventh.webp")
const _imports_6 = "" + publicAssetsURL("assets/img/card-23/card-23--ninth.webp")
const _imports_7 = "" + publicAssetsURL("assets/img/card-23/card-23--tenth.webp")
const _sfc_main$c = {
    __name: "ElementsMArquee",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        ref(null)
        const marqueeInstance = ref(null)
        onUnmounted(() => {
            if (marqueeInstance.value) {
                marqueeInstance.value.destroy()
            }
        })
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: [
                                { "f--background-a": __props.info.bg_color === "black" },
                                { "f--background-b": __props.info.bg_color === "white" },
                                unref(getSpaceCustom)(props.info.spacing),
                            ],
                        },
                        _attrs
                    )
                )}><div class="c--marquee-b"><div class="f--container f--container--fluid"><div class="f--row"><div class="f--col-12"><div class="c--marquee-b__wrapper" data-speed="0.7"${ssrRenderAttr(
                    "data-reversed",
                    __props.info.direction
                )}><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle({
                    width: "calc(390px + 80px)",
                })}"><div class="g--card-23"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> Online banking </p><p class="g--card-23__wrapper__item-secondary"> Access your accounts and cards whenever you want on your computer or the Santander App on your cell phone. </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Learn More <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.13517 1.03101L10.7051 5.60092L6.13516 10.1708M10.0704 5.60092L0.8036 5.60092" stroke="#3D24D6" stroke-width="0.825123" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></div><figure class="g--card-23__media-wrapper"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(500px + 80px)" }
                )}"><div class="g--card-23 g--card-23--second"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> Get more from your data </p><p class="g--card-23__wrapper__item-secondary"> Your team can be up and running in 30 min or less. </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Book a Demo <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.25195 3.97528L0.538899 6.97651L0.538899 0.974057L4.25195 3.97528Z" fill="#0F0F0F"></path></svg></a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_0$1
                )} data-src="/assets/img/card-23/card-23--second.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(470px + 80px)" }
                )}"><div class="g--card-23 g--card-23--third"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> 10 steps to help you become a better illustrator </p><p class="g--card-23__wrapper__item-secondary"> By Olivia Waller </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Read More </a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_1
                )} data-src="/assets/img/card-23/card-23--third.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(485px + 80px)" }
                )}"><div class="g--card-23 g--card-23--fourth"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary">DISCOVER</p><p class="g--card-23__wrapper__item-secondary"> Chill with the Season: Cozy Tunes for Your Winter Playlists! </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Check it out <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg></a><a href="#" class="g--card-23__wrapper__list-group__item">Learn more </a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_1$1
                )} data-src="/assets/img/card-23/card-23--fourth.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(280px + 80px)" }
                )}"><div class="g--card-23 g--card-23--fifth"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> Take Your Meds! </p><p class="g--card-23__wrapper__item-secondary"> Taking your medication as prescribed is a crucial step toward maintaining your health and well-being. </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Set Reminder </a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_3
                )} data-src="/assets/img/card-23/card-23--fifth.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(500px + 80px)" }
                )}"><div class="g--card-23 g--card-23--sixth"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> Graphic Design Trends 2023 </p><p class="g--card-23__wrapper__item-secondary"> How to create amazing patterns in a few seconds </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Read More <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.48285 0.591198L6.43359 5.54194L1.48285 10.4927L0.601004 9.6263L4.57707 5.54194L0.601003 1.45758L1.48285 0.591198Z" fill="#95064B"></path></svg></a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_4
                )} data-src="/assets/img/card-23/card-23--sixth.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(550px + 80px)" }
                )}"><div class="g--card-23 g--card-23--seventh"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> Episode 32: The humor in frankness - Q&amp;A Podcast </p><p class="g--card-23__wrapper__item-secondary"> Quentin Dust &amp; Amelie Roberts, with special guest Andy Sanderson </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Listen Now! </a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_5
                )} data-src="/assets/img/card-23/card-23--seventh.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(460px + 80px)" }
                )}"><div class="g--card-23 g--card-23--eigth"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary">3 min read</p><p class="g--card-23__wrapper__item-secondary"> Nasa\u2019s new space telescope to unlock the mysteries of the Big Bang </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">News </a></div></div><figure class="g--card-23__media-wrapper"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(450px + 80px)" }
                )}"><div class="g--card-23 g--card-23--ninth"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> 12 morning routines for success </p><p class="g--card-23__wrapper__item-secondary"> By Stephen Altrogge </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Read Now </a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_6
                )} data-src="/assets/img/card-23/card-23--ninth.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div><div class="c--marquee-b__wrapper__item" style="${ssrRenderStyle(
                    { width: "calc(520px + 80px)" }
                )}"><div class="g--card-23 g--card-23--tenth"><div class="g--card-23__wrapper"><p class="g--card-23__wrapper__item-primary"> HOW TRADITION BLENDS WITH INNOVATION </p><p class="g--card-23__wrapper__item-secondary"> Mid-Century Modern takes over. </p><div class="g--card-23__wrapper__list-group"><a href="#" class="g--card-23__wrapper__list-group__item">Interior Design </a><a href="#" class="g--card-23__wrapper__list-group__item">Furniture </a></div></div><figure class="g--card-23__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_7
                )} data-src="/assets/img/card-23/card-23--tenth.webp" alt="alt text" class="g--card-23__media-wrapper__media g--lazy-01"></figure></div></div></div></div></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$c = _sfc_main$c.setup
_sfc_main$c.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/ElementsMArquee.vue"
    )
    return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0
}
const ElementsMArquee = _sfc_main$c
const _sfc_main$b = {
    __name: "PhotoMarquee",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        ref(null)
        const marqueeInstance = ref(null)
        onUnmounted(() => {
            if (marqueeInstance.value) {
                marqueeInstance.value.destroy()
            }
        })
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: [
                                { "f--background-a": __props.info.bg_color === "black" },
                                { "f--background-b": __props.info.bg_color === "white" },
                                unref(getSpaceCustom)(props.info.spacing),
                            ],
                        },
                        _attrs
                    )
                )}><div class="c--marquee-b"><div class="f--container f--container--fluid"><div class="f--row"><div class="f--col-12"><div class="c--marquee-b__wrapper" data-speed=".7"${ssrRenderAttr(
                    "data-reversed",
                    __props.info.direction
                )}><!--[-->`
            )
            ssrRenderList(__props.info.photos, (item) => {
                _push(
                    `<div class="c--marquee-b__wrapper__item"><img${ssrRenderAttr(
                        "data-src",
                        item.photo.url
                    )}${ssrRenderAttr(
                        "alt",
                        item.photo.file_name
                    )} class="c--marquee-b__wrapper__item__media g--lazy-01"></div>`
                )
            })
            _push(`<!--]--></div></div></div></div></div></section>`)
        }
    },
}
const _sfc_setup$b = _sfc_main$b.setup
_sfc_main$b.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/PhotoMarquee.vue"
    )
    return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0
}
const PhotoMarquee = _sfc_main$b
const _sfc_main$a = {
    __name: "TerraformsText",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        return (_ctx, _push, _parent, _attrs) => {
            if (__props.info.layout == "text_forms") {
                _push(
                    `<section${ssrRenderAttrs(
                        mergeProps(
                            {
                                class: unref(getSpaceCustom)(props.info.spacing),
                            },
                            _attrs
                        )
                    )}><div class="f--container"><div class="f--row f--gap-b"><div class="f--col-4 f--col-tabletm-5 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0"><img class="f--ar" width="446" height="135"${ssrRenderAttr(
                        "src",
                        __props.info.image.url
                    )} alt=""></div><div class="f--col-7 f--offset-1 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0"><h2 class="f--font-b f--color-a u--font-bold f--sp-c">${ssrInterpolate(
                        __props.info.title
                    )}</h2><div class="c--content-a c--content-a--second"><p>${ssrInterpolate(
                        __props.info.subtitle
                    )}</p></div></div></div></div></section>`
                )
            } else {
                _push(
                    `<section${ssrRenderAttrs(
                        mergeProps(
                            {
                                class: unref(getSpaceCustom)(props.info.spacing),
                            },
                            _attrs
                        )
                    )}><div class="f--container"><div class="f--row f--gap-b"><div class="f--col-7 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0"><h2 class="f--font-b f--color-a u--font-bold f--sp-c">${ssrInterpolate(
                        __props.info.title
                    )}</h2><div class="c--content-a c--content-a--second"><p>${ssrInterpolate(
                        __props.info.subtitle
                    )}</p></div></div><div class="f--col-4 f--offset-1 f--col-tabletm-5 f--col-tablets-10 f--col-mobile-12 f--offset-mobile-0"><img class="f--ar" width="446" height="135"${ssrRenderAttr(
                        "src",
                        __props.info.image.url
                    )} alt=""></div></div></div></section>`
                )
            }
        }
    },
}
const _sfc_setup$a = _sfc_main$a.setup
_sfc_main$a.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/TerraformsText.vue"
    )
    return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0
}
const TerraformsText = _sfc_main$a
const _sfc_main$9 = {
    __name: "LayoutA",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0$3
            const _component_client_only = __nuxt_component_0$4
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "c--layout-a" }, _attrs)
                )}><div class="f--container"><div class="f--row"><div class="f--col-5 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-a__wrapper"><h2 class="c--layout-a__wrapper__title">${ssrInterpolate(
                    __props.info.title
                )}</h2><div class="c--layout-a__wrapper__subtitle c--content-a c--content-a--second">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        class: "test",
                        blocks: __props.info.content,
                    },
                    null,
                    _parent
                )
            )
            _push(
                `</div><div class="c--layout-a__wrapper__ft"><a${ssrRenderAttr(
                    "href",
                    __props.info.button.external_page
                        ? __props.info.button.url_external
                        : ("useGetThePermalink" in _ctx
                              ? _ctx.useGetThePermalink
                              : unref(useGetThePermalink))(
                              __props.info.button.url_internal,
                              __props.info.button.has_query,
                              __props.info.button.text_query
                          )
                )} class="c--layout-a__wrapper__ft__btn"${ssrRenderAttr(
                    "target",
                    __props.info.button.external_page ? "_blank" : "_self"
                )}>${ssrInterpolate(
                    __props.info.button.label
                )}</a></div></div></div><div class="f--col-5 f--offset-1 f--col-tabletl-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-a__media-wrapper">`
            )
            if (__props.info.content_type == "image") {
                _push(
                    `<img${ssrRenderAttr("data-src", __props.info.image.url)}${ssrRenderAttr(
                        "alt",
                        __props.info.image.file_name
                    )} class="c--layout-a__media-wrapper__media g--lazy-01" width="500" height="580">`
                )
            } else {
                _push(`<!---->`)
            }
            _push(ssrRenderComponent(_component_client_only, null, {}, _parent))
            if (__props.info.content_type == "video") {
                _push(
                    `<video class="c--layout-a__media-wrapper__media" autoplay muted loop playsInline width="500" height="580" preload="auto"><source${ssrRenderAttr(
                        "src",
                        __props.info.video.url
                    )} type="video/mp4"></video>`
                )
            } else {
                _push(`<!---->`)
            }
            _push(`</div></div></div></div></section>`)
        }
    },
}
const _sfc_setup$9 = _sfc_main$9.setup
_sfc_main$9.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/layout/LayoutA.vue"
    )
    return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0
}
const __nuxt_component_0$2 = _sfc_main$9
const _sfc_main$8 = {
    __name: "LayoutASecond",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            const _component_client_only = __nuxt_component_0$4
            const _component_SanityContent = __nuxt_component_0$3
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "c--layout-a c--layout-a--second" }, _attrs)
                )}><div class="f--container"><div class="f--row"><div class="f--col-5 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-a__media-wrapper">`
            )
            if (__props.info.content_type == "image") {
                _push(
                    `<img${ssrRenderAttr("data-src", __props.info.image.url)}${ssrRenderAttr(
                        "alt",
                        __props.info.image.file_name
                    )} class="c--layout-a__media-wrapper__media g--lazy-01" width="500" height="580">`
                )
            } else {
                _push(`<!---->`)
            }
            _push(ssrRenderComponent(_component_client_only, null, {}, _parent))
            if (__props.info.content_type == "video") {
                _push(
                    `<video class="c--layout-a__media-wrapper__media" autoplay muted loop playsInline width="500" height="580" preload="auto"><source${ssrRenderAttr(
                        "src",
                        __props.info.video.url
                    )} type="video/mp4"></video>`
                )
            } else {
                _push(`<!---->`)
            }
            _push(
                `</div></div><div class="f--col-5 f--offset-1 f--col-tabletl-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-a__wrapper"><h2 class="c--layout-a__wrapper__title">${ssrInterpolate(
                    __props.info.title
                )}</h2><div class="c--layout-a__wrapper__subtitle c--content-a c--content-a--second">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        class: "test",
                        blocks: __props.info.content,
                    },
                    null,
                    _parent
                )
            )
            _push(
                `</div><div class="c--layout-a__wrapper__ft"><a${ssrRenderAttr(
                    "href",
                    __props.info.button.external_page
                        ? __props.info.button.url_external
                        : ("useGetThePermalink" in _ctx
                              ? _ctx.useGetThePermalink
                              : unref(useGetThePermalink))(
                              __props.info.button.url_internal,
                              __props.info.button.has_query,
                              __props.info.button.text_query
                          )
                )} class="c--layout-a__wrapper__ft__btn"${ssrRenderAttr(
                    "target",
                    __props.info.button.external_page ? "_blank" : "_self"
                )}>${ssrInterpolate(
                    __props.info.button.label
                )}</a></div></div></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$8 = _sfc_main$8.setup
_sfc_main$8.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/layout/LayoutASecond.vue"
    )
    return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0
}
const __nuxt_component_1$1 = _sfc_main$8
const _sfc_main$7 = {
    __name: "TextButtonInteractivity",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        return (_ctx, _push, _parent, _attrs) => {
            const _component_LayoutA = __nuxt_component_0$2
            const _component_LayoutASecond = __nuxt_component_1$1
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: unref(getSpaceCustom)(props.info.spacing),
                        },
                        _attrs
                    )
                )}>`
            )
            if (__props.info.layout == "text_button_interactivity") {
                _push(ssrRenderComponent(_component_LayoutA, { info: __props.info }, null, _parent))
            } else {
                _push(
                    ssrRenderComponent(
                        _component_LayoutASecond,
                        { info: __props.info },
                        null,
                        _parent
                    )
                )
            }
            _push(`</section>`)
        }
    },
}
const _sfc_setup$7 = _sfc_main$7.setup
_sfc_main$7.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/TextButtonInteractivity.vue"
    )
    return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0
}
const TextButtonInteractivity = _sfc_main$7
const _imports_0 = "" + publicAssetsURL("assets/img/card-10.webp")
const _sfc_main$6 = {
    __name: "LayoutB",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        ref(null)
        const modalInstance = ref(null)
        onUnmounted(() => {
            if (modalInstance.value) {
                modalInstance.value.destroy()
            }
        })
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0$3
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "c--layout-b" }, _attrs)
                )}><div class="c--layout-b__bg-items"><div class="c--layout-b__bg-items__item"><svg width="53" height="56" viewBox="0 0 53 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.0685 0.000244141L0 9.29624L3.97608 43.7642L26.0685 56.0002L48.161 43.7642L52.1371 9.29624L26.0685 0.000244141Z" fill="#FEFEFE"></path><path d="M26.0694 0.000244141V6.21624V6.18824V34.5522V56.0002L48.1618 43.7642L52.1379 9.29624L26.0694 0.000244141Z" fill="#FEFEFE"></path><path d="M26.0688 6.18677L9.77246 42.7268H15.8486L19.1247 34.5508H32.9569L36.233 42.7268H42.3091L26.0688 6.18677ZM30.8289 29.5108H21.3087L26.0688 18.0588L30.8289 29.5108Z" fill="#429ED6"></path></svg></div><div class="c--layout-b__bg-items__item"><svg width="40" height="57" viewBox="0 0 40 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.9217 1.82039C28.3791 2.38822 28.6123 3.15442 29.0788 4.68682L39.2698 38.1636C35.502 36.209 31.4057 34.7993 27.086 34.0387L20.4506 11.6163C20.3421 11.2494 20.0051 10.9978 19.6225 10.9978C19.2389 10.9978 18.9013 11.2508 18.7936 11.6189L12.2386 34.0274C7.89877 34.7846 3.78401 36.1968 0 38.1585L10.2409 4.67906C10.7089 3.14929 10.9429 2.38441 11.4003 1.81763C11.8041 1.31726 12.3294 0.928667 12.926 0.688863C13.6018 0.417236 14.4016 0.417236 16.0014 0.417236H23.316C24.9178 0.417236 25.7188 0.417236 26.3952 0.689433C26.9923 0.931213 27.5179 1.31911 27.9217 1.82039Z" fill="#FEFEFE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.1418 39.7566C27.4618 41.1931 24.1086 42.1728 20.2461 42.1728C15.5055 42.1728 11.5321 40.697 10.4777 38.7122C10.1008 39.8497 10.0162 41.1516 10.0162 41.9833C10.0162 41.9833 9.7679 46.0673 12.6083 48.9074C12.6083 47.4325 13.804 46.2372 15.2788 46.2372C17.8068 46.2372 17.8039 48.4424 17.8016 50.2317C17.8016 50.2854 17.8015 50.3385 17.8015 50.3912C17.8015 53.1071 19.4614 55.4352 21.8221 56.4169C21.4695 55.6917 21.2717 54.8771 21.2717 54.0168C21.2717 51.4266 22.7924 50.4618 24.5598 49.3408C25.966 48.449 27.5284 47.4584 28.6052 45.4705C29.167 44.4333 29.4861 43.2456 29.4861 41.9833C29.4861 41.207 29.3654 40.4588 29.1418 39.7566Z" fill="#FEFEFE"></path></svg></div><div class="c--layout-b__bg-items__item"><svg width="63" height="57" viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4706 39.9111C48.0957 39.9111 61.573 34.7652 61.573 28.4175C61.573 22.0697 48.0957 16.9238 31.4706 16.9238C14.8455 16.9238 1.36816 22.0697 1.36816 28.4175C1.36816 34.7652 14.8455 39.9111 31.4706 39.9111Z" stroke="#FEFEFE" stroke-width="2.73658"></path><path d="M21.5179 34.1627C29.8304 48.5605 41.0256 57.6592 46.5229 54.4853C52.0202 51.3114 49.738 37.0668 41.4255 22.6691C33.1129 8.2713 21.9178 -0.827451 16.4205 2.34643C10.9231 5.52031 13.2053 19.7649 21.5179 34.1627Z" stroke="#FEFEFE" stroke-width="2.73658"></path><path d="M21.5179 22.6696C13.2053 37.0673 10.9231 51.3119 16.4205 54.4858C21.9178 57.6597 33.1129 48.561 41.4255 34.1632C49.738 19.7654 52.0202 5.52081 46.5229 2.34693C41.0256 -0.826955 29.8304 8.27179 21.5179 22.6696Z" stroke="#FEFEFE" stroke-width="2.73658"></path></svg></div><div class="c--layout-b__bg-items__item"><svg width="57" height="50" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.8665 0.41774L28.3332 11.7336L21.8 0.41774H0.0432129L28.3332 49.4172L56.6233 0.41774H34.8665Z" fill="#FEFEFE"></path><path d="M33.2738 -0.501143L33.8042 -1.4198H34.865H45.3057H48.4881L46.8969 1.33621L29.9228 30.7353L28.3317 33.4912L26.7405 30.7353L9.7665 1.33621L8.17528 -1.4198H11.3577H21.7984H22.8592L23.3896 -0.501143L28.3317 8.05874L33.2738 -0.501143Z" fill="#FEFEFE" stroke="#2D9F66" stroke-width="3.67465"></path></svg></div></div><div class="c--layout-b__ft-items"><div class="f--container"><div class="f--row"><div class="f--col-5 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-b__ft-items__left-items"><h2 class="c--layout-b__ft-items__left-items__title">${ssrInterpolate(
                    __props.info.title
                )}</h2><div class="c--layout-b__ft-items__left-items__subtitle c--content-a c--content-a--second">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        class: "test",
                        blocks: __props.info.content,
                    },
                    null,
                    _parent
                )
            )
            _push(
                `</div></div></div><div class="f--col-5 f--offset-1 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-b__ft-items__right-items"><div class="c--layout-b__ft-items__right-items__wrapper"><div class="g--card-03 c--layout-b__ft-items__right-items__wrapper__item"><div class="g--card-03__bg-items g--lazy-01" data-src="/img/bg.jpeg"></div><div class="g--card-03__ft-items"><h3 class="g--card-03__ft-items__item-primary"> There are even more great ideas where this came from. </h3><div class="g--card-03__ft-items__list-group"><a href="#" target="_blank" rel="noopener noreferrer" class="g--card-03__ft-items__list-group__item">Let\u2019s Talk!</a></div><figure class="g--card-03__ft-items__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    _imports_0
                )} data-src="/assets/img/card-10.webp" alt="alt text" class="g--card-03__ft-items__media-wrapper__media g--lazy-01"></figure></div></div></div><p class="c--layout-b__ft-items__right-items__content">${ssrInterpolate(
                    __props.info.legend
                )}</p><div class="c--layout-b__ft-items__right-items__list-group"><div class="u--position-relative"><!--[-->`
            )
            ssrRenderList(__props.info.buttons.slice(0, 1), (button, index) => {
                _push(
                    `<button class="c--layout-b__ft-items__right-items__list-group__list-item" tf-ds-modal-target="modal-1">`
                )
                if (button.type == "text") {
                    _push(`<span>${ssrInterpolate(button.text)}</span>`)
                } else {
                    _push(`<img${ssrRenderAttr("src", button.image.url)} alt="Image">`)
                }
                _push(`</button>`)
            })
            _push(`<!--]--><div class="c--modal-a" id="modal-1" role="dialog"><div class="c--modal-a__wrapper"><div class="c--code-a"><pre class="c--code-a__wrapper">                                                    <label class="c--code-a__wrapper__label">html</label>
                                                    <code class="c--code-a__wrapper__content">
        &lt;  div class=&quot;g--card-03&quot; &gt;
            &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
                &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
                &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
                    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
                &lt;  /div &gt;
                &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
                    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
                &lt;  /figure &gt;
            &lt;  /div &gt;
        &lt;  /div &gt;
                                                    </code>

                                                
                                                </pre></div></div><button class="c--modal-a__btn" tf-ds-modal-close="modal-1" aria-label="Close"><svg class="c--modal-a__btn__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="white"></path></svg></button></div></div><!--[-->`)
            ssrRenderList(__props.info.buttons.slice(1), (button, index) => {
                _push(
                    `<a${ssrRenderAttr(
                        "href",
                        button.anchor
                    )} class="c--layout-b__ft-items__right-items__list-group__list-item">`
                )
                if (button.type == "text") {
                    _push(`<span>${ssrInterpolate(button.text)}</span>`)
                } else {
                    _push(`<img${ssrRenderAttr("src", button.image.url)} alt="Image">`)
                }
                _push(`</a>`)
            })
            _push(`<!--]--></div></div></div></div></div></div></section>`)
        }
    },
}
const _sfc_setup$6 = _sfc_main$6.setup
_sfc_main$6.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/layout/LayoutB.vue"
    )
    return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0
}
const __nuxt_component_0$1 = _sfc_main$6
const _sfc_main$5 = {
    __name: "LayoutBSecond",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            const _component_lottie_player = resolveComponent("lottie-player")
            const _component_SanityContent = __nuxt_component_0$3
            _push(`<section${ssrRenderAttrs(mergeProps({ class: "c--layout-b" }, _attrs))}>`)
            if (__props.info.background == "image") {
                _push(
                    `<img class="c--layout-b__bg-items"${ssrRenderAttr(
                        "src",
                        __props.info.bg_image.url
                    )}>`
                )
            } else {
                _push(
                    `<div class="c--layout-b__bg-items">${ssrInterpolate(
                        __props.info.bg_lottie
                    )}</div>`
                )
            }
            _push(
                `<div class="c--layout-b__ft-items"><div class="f--container"><div class="f--row"><div class="f--col-4 f--offset-1 f--col-tabletl-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-b__ft-items__right-items"><div class="c--layout-b__ft-items__right-items__media-wrapper">`
            )
            if (__props.info.content_type == "image") {
                _push(
                    `<img${ssrRenderAttr("data-src", __props.info.image.url)}${ssrRenderAttr(
                        "alt",
                        __props.info.image.file_name
                    )} class="c--layout-b__ft-items__right-items__media-wrapper__media g--lazy-01" width="351" height="343">`
                )
            } else {
                _push(`<!---->`)
            }
            if (__props.info.content_type == "lottie") {
                _push(
                    ssrRenderComponent(
                        _component_lottie_player,
                        {
                            autoplay: "",
                            loop: "",
                            mode: "normal",
                            src: __props.info.lottie.url,
                            class: "c--layout-b__ft-items__right-items__media-wrapper__media",
                            width: "500",
                            height: "580",
                        },
                        null,
                        _parent
                    )
                )
            } else {
                _push(`<!---->`)
            }
            if (__props.info.content_type == "video") {
                _push(
                    `<video class="c--layout-b__ft-items__right-items__media-wrapper__media" autoplay muted loop playsInline width="500" height="580" preload="auto"><source${ssrRenderAttr(
                        "src",
                        __props.info.video.url
                    )} type="video/mp4"></video>`
                )
            } else {
                _push(`<!---->`)
            }
            _push(
                `</div><p class="c--layout-b__ft-items__right-items__content">Lorem Ipsum</p><div class="c--layout-b__ft-items__right-items__list-group"><button class="c--layout-b__ft-items__right-items__list-group__list-item"> HTML </button><button class="c--layout-b__ft-items__right-items__list-group__list-item"><svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_335_1739)"><path d="M14.2338 15.3139C15.6169 15.3139 16.7382 14.1926 16.7382 12.8094C16.7382 11.4262 15.6169 10.3049 14.2338 10.3049C12.8506 10.3049 11.7294 11.4262 11.7294 12.8094C11.7294 14.1926 12.8506 15.3139 14.2338 15.3139Z" fill="#FEFEFE"></path><path d="M14.2341 17.9411C21.6559 17.9411 27.6724 15.6439 27.6724 12.81C27.6724 9.97622 21.6559 7.67896 14.2341 7.67896C6.81232 7.67896 0.795776 9.97622 0.795776 12.81C0.795776 15.6439 6.81232 17.9411 14.2341 17.9411Z" stroke="#FEFEFE" stroke-width="0.781873"></path><path d="M9.791 15.375C13.5019 21.8025 18.4996 25.8645 20.9537 24.4476C23.4079 23.0306 22.389 16.6714 18.6781 10.2439C14.9673 3.81629 9.96953 -0.245653 7.51541 1.17126C5.0613 2.58817 6.08011 8.94738 9.791 15.375Z" stroke="#FEFEFE" stroke-width="0.781873"></path><path d="M9.79104 10.2436C6.08015 16.6712 5.06133 23.0304 7.51545 24.4473C9.96956 25.8642 14.9673 21.8023 18.6782 15.3747C22.3891 8.94715 23.4079 2.58794 20.9538 1.17103C18.4997 -0.245886 13.5019 3.81606 9.79104 10.2436Z" stroke="#FEFEFE" stroke-width="0.781873"></path></g><defs><clipPath id="clip0_335_1739"><rect width="28.0983" height="25" fill="white" transform="translate(0.185425 0.309814)"></rect></clipPath></defs></svg></button><button class="c--layout-b__ft-items__right-items__list-group__list-item"><svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7485 0.936222C12.9527 1.18972 13.0568 1.53177 13.265 2.21588L17.8145 17.1609C16.1325 16.2883 14.3038 15.6589 12.3754 15.3194L9.41326 5.30941C9.36479 5.14562 9.21436 5.03326 9.04356 5.03326C8.87231 5.03326 8.72159 5.14621 8.67352 5.31056L5.74726 15.3144C3.80986 15.6524 1.97295 16.2828 0.283691 17.1586L4.85545 2.21241C5.06435 1.52948 5.16881 1.18802 5.37299 0.934989C5.55328 0.711613 5.78776 0.538132 6.0541 0.431076C6.35579 0.309814 6.71287 0.309814 7.42704 0.309814H10.6924C11.4075 0.309814 11.7651 0.309814 12.067 0.431331C12.3336 0.539268 12.5682 0.712438 12.7485 0.936222Z" fill="#FEFEFE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2935 17.872C12.5435 18.5133 11.0466 18.9507 9.32227 18.9507C7.20595 18.9507 5.43214 18.2919 4.96144 17.4058C4.79318 17.9136 4.75545 18.4948 4.75545 18.8661C4.75545 18.8661 4.64458 20.6893 5.9126 21.9572C5.9126 21.2988 6.44636 20.7651 7.10477 20.7651C8.23331 20.7651 8.23203 21.7496 8.231 22.5484C8.23098 22.5724 8.23094 22.5961 8.23094 22.6196C8.23094 23.8321 8.97196 24.8714 10.0258 25.3097C9.86841 24.9859 9.7801 24.6223 9.7801 24.2382C9.7801 23.0818 10.459 22.6512 11.248 22.1507C11.8757 21.7526 12.5732 21.3103 13.0539 20.4229C13.3047 19.9599 13.4472 19.4296 13.4472 18.8661C13.4472 18.5195 13.3933 18.1855 13.2935 17.872Z" fill="#FEFEFE"></path></svg></button><button class="c--layout-b__ft-items__right-items__list-group__list-item"><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_335_1750)"><path d="M18.1952 0.310072L14.8619 6.08345L11.5287 0.310072H0.428528L14.8619 25.3098L29.2953 0.310072H18.1952Z" fill="#FEFEFE"></path><path d="M17.6747 0.00931931L17.8479 -0.290651H18.1943H23.5211H24.5602L24.0406 0.609256L15.3806 15.6088L14.861 16.5087L14.3415 15.6088L5.68143 0.609256L5.16186 -0.290651H6.20099H11.5278H11.8742L12.0474 0.00931931L14.861 4.88279L17.6747 0.00931931Z" fill="#FEFEFE" stroke="#0F0F0F" stroke-width="1.19987"></path></g><defs><clipPath id="clip0_335_1750"><rect width="28.8675" height="25" fill="white" transform="translate(0.428528 0.309814)"></rect></clipPath></defs></svg></button><button class="c--layout-b__ft-items__right-items__list-group__list-item"><svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9335 0.309814L0.296021 4.45981L2.07102 19.8473L11.9335 25.3098L21.796 19.8473L23.571 4.45981L11.9335 0.309814Z" fill="#FEFEFE"></path><path d="M11.9339 0.309814V3.08481V3.07231V15.7348V25.3098L21.7964 19.8473L23.5714 4.45981L11.9339 0.309814Z" fill="#FEFEFE"></path><path d="M11.9335 3.07178L4.65851 19.3843H7.37101L8.83351 15.7343H15.0085L16.471 19.3843H19.1835L11.9335 3.07178ZM14.0585 13.4843H9.80851L11.9335 8.37178L14.0585 13.4843Z" fill="#0F0F0F"></path></svg></button></div></div></div><div class="f--col-5 f--offset-2 f--col-tabletm-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 u--display-flex"><div class="c--layout-b__ft-items__left-items"><h2 class="c--layout-b__ft-items__left-items__title">${ssrInterpolate(
                    __props.info.title
                )}</h2><div class="c--layout-b__ft-items__left-items__subtitle c--content-a c--content-a--second">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        class: "test",
                        blocks: __props.info.content,
                    },
                    null,
                    _parent
                )
            )
            _push(`</div></div></div></div></div></div></section>`)
        }
    },
}
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/layout/LayoutBSecond.vue"
    )
    return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const __nuxt_component_1 = _sfc_main$5
const _sfc_main$4 = {
    __name: "TextInteractivity",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        return (_ctx, _push, _parent, _attrs) => {
            const _component_LayoutB = __nuxt_component_0$1
            const _component_LayoutBSecond = __nuxt_component_1
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: unref(getSpaceCustom)(props.info.spacing),
                        },
                        _attrs
                    )
                )}>`
            )
            if (__props.info.layout == "text_interactivity") {
                _push(ssrRenderComponent(_component_LayoutB, { info: __props.info }, null, _parent))
            } else {
                _push(`<!---->`)
            }
            if (__props.info.layout != "text_interactivity") {
                _push(
                    ssrRenderComponent(
                        _component_LayoutBSecond,
                        { info: __props.info },
                        null,
                        _parent
                    )
                )
            } else {
                _push(`<!---->`)
            }
            _push(`</section>`)
        }
    },
}
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/TextInteractivity.vue"
    )
    return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const TextInteractivity = _sfc_main$4
const _sfc_main$3 = {
    __name: "CardA",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--card-a" }, _attrs)
                )}><div class="c--card-a__bg-items">`
            )
            if (__props.info.bg_image) {
                _push(
                    `<img${ssrRenderAttr(
                        "src",
                        __props.info.bg_image.url
                    )} alt="background" class="c--card-a__bg-items__media">`
                )
            } else {
                _push(`<!---->`)
            }
            _push(
                `</div><div class="c--card-a__ft-items"><div class="c--card-a__ft-items__left-item"><p class="c--card-a__ft-items__left-item__meta">${ssrInterpolate(
                    __props.info.title
                )}</p><p class="c--card-a__ft-items__left-item__title">${ssrInterpolate(
                    __props.info.subtitle
                )}</p></div><div class="c--card-a__ft-items__right-item"><img${ssrRenderAttr(
                    "src",
                    __props.info.image.url
                )}${ssrRenderAttr(
                    "alt",
                    __props.info.image.file_name
                )} class="c--card-a__ft-items__right-item__media"></div></div></div>`
            )
        }
    },
}
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/card/CardA.vue"
    )
    return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const __nuxt_component_0 = _sfc_main$3
const _sfc_main$2 = {
    __name: "CardSlider",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        ref(null)
        ref(null)
        return (_ctx, _push, _parent, _attrs) => {
            const _component_CardA = __nuxt_component_0
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: unref(getSpaceCustom)(props.info.spacing),
                        },
                        _attrs
                    )
                )}><div class="c--slider-a"><div class="f--container"><div class="f--row u--justify-content-center"><div class="f--col-8 f--col-tabletm-10 f--col-mobile-12"><div class="c--slider-a__wrapper"><!--[-->`
            )
            ssrRenderList(__props.info.cards, (item, index) => {
                _push(`<div class="c--slider-a__wrapper__item">`)
                _push(ssrRenderComponent(_component_CardA, { info: item }, null, _parent))
                _push(`</div>`)
            })
            _push(`<!--]--></div></div></div></div></div></section>`)
        }
    },
}
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/CardSlider.vue"
    )
    return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const CardSlider = _sfc_main$2
const _sfc_main$1 = {
    __name: "TwoImagesSlotWrapper",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps(
                        {
                            id: __props.info.ID,
                            class: ["c--wrapper-a", unref(getSpaceCustom)(props.info.spacing)],
                        },
                        _attrs
                    )
                )}><div class="c--wrapper-a__bg-items"><img class="c--wrapper-a__bg-items__media g--lazy-01"${ssrRenderAttr(
                    "data-src",
                    __props.info.left_image.url
                )}${ssrRenderAttr(
                    "src",
                    __props.info.left_image.url
                )} alt="terraforms-left"><img class="c--wrapper-a__bg-items__media"${ssrRenderAttr(
                    "data-src",
                    __props.info.right_image.url
                )}${ssrRenderAttr(
                    "src",
                    __props.info.right_image.url
                )} alt="terraforms-right"></div><div class="c--wrapper-a__ft-items"><h2 class="f--font-b f--color-b u--font-bold f--sp-b">${ssrInterpolate(
                    __props.info.wrapper_title
                )}</h2><a${ssrRenderAttr(
                    "href",
                    __props.info.button.external_page
                        ? __props.info.button.url_external
                        : ("useGetThePermalink" in _ctx
                              ? _ctx.useGetThePermalink
                              : unref(useGetThePermalink))(
                              __props.info.button.url_internal,
                              __props.info.button.has_query,
                              __props.info.button.text_query
                          )
                )} class="g--btn-01"${ssrRenderAttr(
                    "target",
                    __props.info.button.external_page ? "_blank" : "_self"
                )}>${ssrInterpolate(__props.info.button.label)}</a></div></div>`
            )
        }
    },
}
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/TwoImagesSlotWrapper.vue"
    )
    return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const TwoImagesSlotWrapper = _sfc_main$1
const _sfc_main = {
    __name: "Button",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        const props = __props
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: [
                                { "f--background-a": __props.info.bg_color === "black" },
                                { "f--background-b": __props.info.bg_color === "white" },
                                unref(getSpaceCustom)(props.info.spacing),
                            ],
                        },
                        _attrs
                    )
                )}><div class="f--container"><div class="f--row u--justify-content-center"><div class="f--col-12 u--text-center"><a${ssrRenderAttr(
                    "href",
                    __props.info.link.external_page
                        ? __props.info.link.url_external
                        : ("useGetThePermalink" in _ctx
                              ? _ctx.useGetThePermalink
                              : unref(useGetThePermalink))(
                              __props.info.link.url_internal,
                              __props.info.link.has_query,
                              __props.info.link.text_query
                          )
                )} class="${ssrRenderClass([
                    __props.info.bg_color == "black" ? "g--btn-01" : "g--btn-01 g--btn-01--second",
                ])}"${ssrRenderAttr(
                    "target",
                    __props.info.link.external_page ? "_blank" : "_self"
                )}>${ssrInterpolate(__props.info.link.label)}</a></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/Button.vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const Button = _sfc_main
const useGetComponentName = (module) => {
    switch (module.type) {
        case "imagebg_button_hero":
            return readonly(Hero05)
        case "imagebg_hero":
            return readonly(Hero03)
        case "heading":
            return readonly(Heading)
        case "expanding_media":
            return readonly(_sfc_main$g)
        case "centered_asset":
            return readonly(CenteredAsset)
        case "text_asset_marquee":
            return readonly(TextAssetMarquee)
        case "elements_marquee":
            return readonly(ElementsMArquee)
        case "photo_marquee":
            return readonly(PhotoMarquee)
        case "terraforms_text":
            return readonly(TerraformsText)
        case "text_button_interactivity_module":
            return readonly(TextButtonInteractivity)
        case "text_interactivity_module":
            return readonly(TextInteractivity)
        case "card_slider":
            return readonly(CardSlider)
        case "two_image_slot_wrapper":
            return readonly(TwoImagesSlotWrapper)
        case "button":
            return readonly(Button)
    }
}
const linkQuery = getLinkQuery()
const imageQuery = getImageQuery()
const contentQuery = getContentQuery()
const modulesQuery = `{
    "modules" : layout_default.modulecustom[]{
        "type": _type,
		_type == "imagebg_button_hero" => {
			"title": hero_title,
			"description": hero_description,
			"button": contentLink${linkQuery}, 
			"bg_image": hero_bg_image${imageQuery},
		},
        _type == "imagebg_hero" => {
			"title": hero_title,
			"bg_image": hero_bg_image${imageQuery},
		},
        _type == "heading" => {
			"size": size,
			"bg_color": bg_option,
			"alignment": alignment,
            "text": title,
            "spacing": custom_spacing,
		},
        _type == "button" => {
			"bg_color": bg_color,
			"link": contentLink${linkQuery}, 
            "spacing": custom_spacing,
		},
        _type == "expanding_media" => {
			"content_type": type, 
			"image": image${imageQuery}, 
			"video": video${imageQuery}, 
            "spacing": custom_spacing,
		},
        _type == "centered_asset" => {
			"image": asset_image${imageQuery}, 
            "spacing": custom_spacing,
		},
        _type == "text_asset_marquee" => {
            "text": marquee_text,
			"image": asset_image${imageQuery}, 
            "spacing": custom_spacing,
		},
        _type == "elements_marquee" => {
            "bg_color": bg_color,
			"direction": marquee_direction, 
            "spacing": custom_spacing,
		},
        _type == "photo_marquee" => {
            "bg_color": bg_color,
			"direction": marquee_direction, 
            "photos" : photos[]{'photo': ${imageQuery}},
            "spacing": custom_spacing,
		},
        _type == "terraforms_text" => {
            "layout": layout_option,
			"title": title, 
            "subtitle" : subtitle,
            "image" : image${imageQuery},
            "spacing": custom_spacing,
		},
        _type == "text_button_interactivity_module" => {
            "layout": layout_option,
			"title": title, 
            "content": content[]${contentQuery},
            "button": contentLink${linkQuery}, 
            "content_type": interactivity_type,
            "image": image${imageQuery}, 
			"video": video${imageQuery}, 
            "lottie": lottie${imageQuery}, 
            "spacing": custom_spacing,
		},
        _type == "text_interactivity_module" => {
            "layout": layout_option,
            "background": bg_option,
            "bg_image": bg_image${imageQuery}, 
            "bg_lottie": bg_lottie${imageQuery}, 
			"title": title, 
            "content": content[]${contentQuery},
            "content_type": interactivity_type,
            "image": image${imageQuery}, 
			"video": video${imageQuery}, 
            "lottie": lottie${imageQuery}, 
            "legend" : legend_title,
            "buttons" : button_list[]{
                'type': button_item_type,
                'text': button_item_text,
                'image': button_item_image${imageQuery},
                'anchor': button_item_image_link, 
            },
            "spacing": custom_spacing,
		},
        _type == "card_slider" => {
            "cards" : card_list[]{
                'title': card_slider_title,
                'subtitle': card_slider_subtitle,
                'image': card_slider_image${imageQuery},
                'bg_image': card_slider_image_bg${imageQuery},
            },
            "spacing": custom_spacing,
		},
        _type == "two_image_slot_wrapper" => {
            "ID": wrapper_id,
            "left_image": left_image${imageQuery},
            "right_image": right_image${imageQuery},
            "wrapper_title": wrapper_title, 
            "button": contentLink${linkQuery}, 
            "spacing": custom_spacing,
		},
        _type == "faqs_collapse" => {
            "cards": faq_list,
            "spacing": custom_spacing,
		},
        
    }
}`

export { modulesQuery as m, useGetComponentName as u }
//# sourceMappingURL=query-yBbHTWSe.mjs.map
