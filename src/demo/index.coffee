layout  = require './view'
create  = require 'virtual-dom/create-element'
virtual = require('html-to-vdom')
  VNode: require 'virtual-dom/vnode/vnode'
  VText: require 'virtual-dom/vnode/vtext'

root  = document.documentElement

stylesheet = new Blob([require './style'], type: 'text/css')

html = create virtual layout
  title: 'welcome'
  style: URL.createObjectURL stylesheet
  message: 'Stuff is running'

document.replaceChild html, root
