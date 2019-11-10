const HOST = `http://${window.location.hostname}:5000`;


export interface Product {
    articleType: string
    baseColour: string
    displayName: string
    gender: string
    id: string
    masterCategory: string
    season: string
    subCategory: string
    usage: string
}

export function getDiscoveryItems(): Promise<Array<Product>> {
    return fetch(`${HOST}/discover`).then(req => req.json())
}

export function getImage(id: string): string {
    return `${HOST}/static/images/${id}.jpg`
}

export function search(image: File) {
    const formData = new FormData()
    formData.append('file', image, image.name)

    return fetch(`${HOST}/search`, {
        method: 'POST',
        body: formData
    }).then(res => res.json())
}
