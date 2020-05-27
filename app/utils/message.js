exports.success = (data) => {
  return {
    code: 200,
    body: JSON.stringify({
      code: 1,
      message: 'SUCCESS',
      data,
    }),
  }
}

exports.error = (code, message) => {
  return {
    code: 200,
    body: JSON.stringify({
      code,
      message: message || '服务器错误',
      data: null,
    }),
  }
}
