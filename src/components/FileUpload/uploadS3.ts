export const uploadFileToS3 = async (file: File) => {
    const filename = encodeURIComponent(file.name)
    const fileType = encodeURIComponent(file.type)

    const res = await fetch(`/api/upload-url?file=${filename}&fileType=${fileType}`)
    const {
        post: { url, fields },
        fileUrl,
    } = await res.json()

    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string)
    })
    formData.append('file', file, file.name)

    const upload = await fetch(url, {
        method: 'POST',
        body: formData,
    })

    if (upload.ok) {
        return encodeURI(fileUrl)
    }
    throw new Error('Upload error')
}
