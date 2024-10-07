import S3 from 'aws-sdk/clients/s3'
import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const s3 = new S3({
        accessKeyId: process.env.S3_UPLOAD_KEY,
        secretAccessKey: process.env.S3_UPLOAD_SECRET,
        region: process.env.S3_UPLOAD_REGION,
    })
    const Key = `${randomUUID()}/${req.query.file}`

    const post = await s3.createPresignedPost({
        Bucket: process.env.S3_UPLOAD_BUCKET,
        Fields: {
            Key,
            'Content-Type': req.query.fileType,
        },
        Expires: 60, // seconds
    })

    res.status(200).json({
        post,
        fileUrl: `https://${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com/${Key}`,
    })
}
