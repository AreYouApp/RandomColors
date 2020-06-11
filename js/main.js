'use strict';

// set color
const colors = ["red","yellow","green","blue"];

// select color
const color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];

// view color
const el_field = document.getElementById('field');
el_field.style.background = color;

// color name
const el_colorname = document.getElementById('colorname');
el_colorname.textContent = color;