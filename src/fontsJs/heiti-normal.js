﻿import { jsPDF } from 'jspdf'
var callAddFont = function () {
  this.addFileToVFS('heiti-normal.ttf', font)
  this.addFont('heiti-normal.ttf', 'heiti', 'normal')
}
jsPDF.API.events.push(['addFonts', callAddFont])