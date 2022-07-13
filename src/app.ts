import {ToolsUI} from './components/ToolsUI.js'
import {ToolsF} from './components/ToolsF.js'
import {BoardUI} from './components/BoardUI.js'
import {ContextUI} from './components/ContextUI.js'

const makeTool = new ToolsF()
const showTools = new ToolsUI('.tools')
const appBoard = new BoardUI('.canvas', 900, 600)
const appContext = new ContextUI('.context')

showTools.subscribe(selectedTool => {
    const tool = makeTool.getTool(selectedTool)
    appContext.updateContext(selectedTool)
    appBoard.changeTool(tool)
})


let white = document.getElementById("white")
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let black = document.getElementById("black")

let color = document.getElementById("color")
white.addEventListener("click",fun => {makeTool.colorChange(window.getComputedStyle(white).backgroundColor); color.style.backgroundColor = window.getComputedStyle(white).backgroundColor})
red.addEventListener("click",fun => {makeTool.colorChange(window.getComputedStyle(red).backgroundColor); color.style.backgroundColor = window.getComputedStyle(red).backgroundColor})
blue.addEventListener("click",fun => {makeTool.colorChange(window.getComputedStyle(blue).backgroundColor); color.style.backgroundColor = window.getComputedStyle(blue).backgroundColor})
green.addEventListener("click",fun => {makeTool.colorChange(window.getComputedStyle(green).backgroundColor); color.style.backgroundColor = window.getComputedStyle(green).backgroundColor})
black.addEventListener("click",fun => { makeTool.colorChange(window.getComputedStyle(black).backgroundColor); color.style.backgroundColor = window.getComputedStyle(black).backgroundColor})

white.addEventListener("mousedown",fun => { white.style.border="2px solid white"})
red.addEventListener("mousedown",fun => { red.style.border="2px solid white"})
blue.addEventListener("mousedown",fun => { blue.style.border="2px solid white"})
green.addEventListener("mousedown",fun => { green.style.border="2px solid white"})
black.addEventListener("mousedown",fun => {  black.style.border="2px solid white"})

white.addEventListener("mouseup",fun => { white.style.border="2px solid black"})
red.addEventListener("mouseup",fun => { red.style.border="2px solid black"})
blue.addEventListener("mouseup",fun => { blue.style.border="2px solid black"})
green.addEventListener("mouseup",fun => { green.style.border="2px solid black"})
black.addEventListener("mouseup",fun => {  black.style.border="2px solid black"})