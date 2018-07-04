(function (template, ctx) {
  let out = ''
  ctx.loop(ctx.resolve('users'), function (user, index) {
    ctx.newFrame()
    ctx.setOnFrame('user', user)
    ctx.setOnFrame('index', index)
    out += '\n'
    out += '  - Hello '
    out += `${ctx.escape(ctx.resolve('user').username)}`
    out += '\n'
    ctx.removeFrame()
  })
  out += '\n'
  return out
})(template, ctx)