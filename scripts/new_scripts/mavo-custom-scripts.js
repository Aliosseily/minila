var render_Div = document.getElementById('mavo-login-render') //get log (in/out) div
// var login_Button = document.getElementById('mavo-login') //get log (in/out) div
// var p_a_s_s_Button = document.getElementById('mavo-p-a-s-s') //get log (in/out) div
// var logout_Button = document.getElementById('mavo-logout') //get log (in/out) div
// var nowStatus = 'out' //this variable to test if user log-in or lon-out
// var testPassVar = '' // to save user pass now
var p_a_s_s = '13579' //p-a-s-s
loginDivRender('out')
setTimeout(function () { showHiddin('none') }, 100)
setTimeout(function () { showHiddin('none') }, 200)
setTimeout(function () { showHiddin('none') }, 300)
setTimeout(function () { showHiddin('none') }, 400)
setTimeout(function () { showHiddin('none'); runListeners() }, 500)

// listeners
function runListeners(){
    if (document.getElementById('mavo-login')) { document.getElementById('mavo-login').addEventListener('click', function () { loginDivRender('testPass');runListeners() }) }
    if (document.getElementById('mavo-logout')) { document.getElementById('mavo-logout').addEventListener('click', function () { loginDivRender('out');runListeners() }) }
    if (document.getElementById('mavo-p-a-s-s')) {
        document.getElementById('mavo-p-a-s-s').addEventListener('click', function () {
            var is_P = document.getElementById('passnow').value
            console.log(is_P)
            if (is_P == p_a_s_s) {
                loginDivRender('in')
            } else {
                render_Div.innerHTML = '<input id="passnow" placeholder="password" type="password"/><p> wrong password</p><a id="mavo-p-a-s-s">ok </a>'
            }
            runListeners()
        })
    }
}
//  function for put ID & what display you want in it and convert styling for all of them 
function runForAllID(id, display) {
    const allID = document.querySelectorAll(id)
    for (i = 0; i < allID.length; i++) {
        allID[i].style.display = display
    }
}

// this part to show (log-in / log-out)
function loginDivRender(nowStatus) {
    if (nowStatus === 'out') {
        render_Div.innerHTML = '<a id="mavo-login">log-in</a>'
        mainRunFunction('out')
    } else if (nowStatus === 'testPass') {
        render_Div.innerHTML = '<input id="passnow" placeholder="password" type="password"/><a id="mavo-p-a-s-s">ok</a>'
    } else if (nowStatus === 'in') {
        render_Div.innerHTML = '<a id="mavo-logout">log-out</a>'
        mainRunFunction('in')
    }
}

function mainRunFunction(nowStatus) {
    loginDivRender()
    if (nowStatus === 'out') {
        showHiddin('none')
    } else if (nowStatus === 'in') {
        showHiddin('')
    }
}

// the main function who run all scripts
function showHiddin(display) {
    if (document.getElementById('mavo-slider')) {
        document.getElementById('mavo-slider').style.display = display
    }
    if (document.getElementById('mavo-team')) {
        document.getElementById('mavo-team').style.display = display
    }
    runForAllID('#resources-URL', display)
    runForAllID('#team-mv-url', display)
    runForAllID('#interns-mv-url', display)
    $('.mv-bar').css('display', display);
}

// login_Div.addEventListener('click', function () {
//     if (nowStatus === 'out') {
//         nowStatus = 'testPass'
//     } else if (nowStatus === 'testPass') {        
//         nowStatus = 'in'
//     } else if (nowStatus === 'in') {
//         nowStatus = 'out'
//     }
//     loginDivRender()
// })
