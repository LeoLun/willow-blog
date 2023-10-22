// requestMF.js
const inProgress = {}
const webpackRequire = (url, done, key) => {
    if (inProgress[url]) {
        inProgress[url].push(done)
        return
    }
    let script
    let needAttach
    if (key !== undefined) {
        let scripts = document.getElementsByTagName('script')
        for (let i = 0; i < scripts.length; i++) {
            let s = scripts[i]
            if (s.getAttribute('src') === url) {
                script = s
                break
            }
        }
    }
    if (!script) {
        needAttach = true
        script = document.createElement('script')
        script.id = "ABC"
        script.charset = 'utf-8'
        script.timeout = 120
        script.src = url
        script.type = "text/javascript"
    }
    inProgress[url] = [done]
    let onScriptComplete = (prev, event) => {
        // avoid mem leaks in IE.
        script.onerror = script.onload = null
        clearTimeout(timeout)
        let doneFns = inProgress[url]
        delete inProgress[url]
        script.parentNode && script.parentNode.removeChild(script)
        doneFns && doneFns.forEach((fn) => fn(event))
        if (prev) return prev(event)
    }
    let timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000)
    script.onerror = onScriptComplete.bind(null, script.onerror)
    script.onload = onScriptComplete.bind(null, script.onload)
    if (needAttach){
        document.head.appendChild(script)
    }
}

export const getModule = (name, url) => {
    let error = new Error()
    return new Promise((resolve, reject) => {
        if (typeof window[name] !== 'undefined') return resolve()
        webpackRequire(url, (event) => {
            if (typeof window[name] !== 'undefined') return resolve()
            var errorType = event && (event.type === 'load' ? 'missing' : event.type)
            var realSrc = event && event.target && event.target.src
            error.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')'
            error.name = 'ScriptExternalLoadError'
            error.type = errorType
            error.request = realSrc
            reject(error)
        }, name)
    }).then(() => window[name])
  }