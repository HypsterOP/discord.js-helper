async function vaporwave(args) {
    const vaporwavefied = args.toString().split('').map(char => {
        const code = char.charCodeAt(0)
        return code >= 33 && code <= 126 ? args.fromCharCode((code - 33) + 65281) : char
      }).join('').replace(/，/g, '  ')
      return vaporwavefied;
}

module.exports = vaporwave
