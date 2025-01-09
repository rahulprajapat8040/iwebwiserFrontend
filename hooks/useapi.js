import axios from 'axios'

/**
 * This function call apis via axios.
 *
 * @param {string} url  - base url apis.
 * @param {object} options - api options like method data and multipart .
 * @returns response of api
 */
export const callApi = async (url, options) => {
    // dispatch(setLoading(true));

    // const token = getToken()
    try {
        const res = await axios(url, {
            headers: {
                'Content-Type': options?.multipart === true ? 'multipart/form-data' : 'application/json'
            },
            ...(options?.multipart === true && { onUploadProgress: options.progressEvent }),
            method: options?.method || 'GET',
            data:
                options?.data && options?.multipart === true
                    ? options?.data
                    : options?.data
                        ? JSON.stringify(options?.data)
                        : undefined
        })
        if (!res.statusText && res.status != 200) throw new Error(res.data.message);
        return res.data
    } catch (error) {
        console.log('error', error)
        return error
    } finally {
        // dispatch(setLoading(false))
    }
}
