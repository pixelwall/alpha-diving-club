import { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // path to file
  const filePath = unescape(req.query.filename as string)

  // filename only
  const fileName = filePath.substring(filePath.lastIndexOf('/') + 1)

  // set header
  res.setHeader('content-disposition', 'attachment; filename=' + fileName)

  // send request to the original file
  request
  .get(filePath) // download original image
  .on('error', () => {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>404 not found</h1>')
    res.end()
    return
  })
  .pipe(res) // pipe converted image to HTTP response
}
